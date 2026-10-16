import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  input,
  model,
  Output,
  signal,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  type MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { type MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { TagService } from '../services/tag.service';

/**
 * @title Chips Autocomplete
 */

@Component({
  selector: 'tag-chip-grid-component',
  templateUrl: 'tag-chip-grid-component.html',
  // Make sure to import `MatAutocompleteModule` before `MatChipsModule` to prevent adding typed
  // text when autocomplete option is selected via keyboard).
  imports: [MatFormFieldModule, MatAutocompleteModule, MatChipsModule, MatIconModule, FormsModule],
})
export class ChipsAutocomplete {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly currentTag = model('');
  readonly tags = signal<string[]>([]);
  @Input() editId: string = '';
  readonly allTags = signal<string[]>([]);
  startingTags = model<string[]>();
  @Output() outputNewTags = new EventEmitter<string[]>();
  @Output() outputChosenTags = new EventEmitter<string[]>();

  newTags = <string[]>[];
  readonly filteredTags = computed(() => {
    const current = this.currentTag().toLowerCase();
    const selected = new Set(this.tags());
    return this.allTags().filter(
      (tag) => !selected.has(tag) && (!current || tag.toLowerCase().includes(current)),
    );
  });

  readonly announcer = inject(LiveAnnouncer);

  constructor(public tagService: TagService) {}

  ngOnInit(): void {
    this.tagService.getAll().subscribe({
      next: (data) => {
        this.allTags.set(data.map((tag) => tag.name));
        console.log(this.tags);
      },
      error: () => {
        console.log('Failed to load images.');
      },
      complete: () => {
        this.startingTags.set(this.allTags());
      },
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editId'] && this.editId) {
      this.tagService.getAllTagsFromImage(this.editId).subscribe({
        next: (tags) => this.tags.set(tags),
      });
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    event.chipInput.clear();
    this.currentTag.set('');

    if (!value || this.tags().includes(value)) return;

    this.tags.update((tags) => [...tags, value]);

    if (!this.startingTags()?.includes(value) && !this.newTags.includes(value)) {
      this.newTags = [...this.newTags, value];
    }

    this.outputChosenTags.emit(this.tags());
    this.outputNewTags.emit(this.newTags);
  }

  remove(tag: string): void {
    if (!this.tags().includes(tag)) return;

    this.tags.update((tags) => tags.filter((t) => t !== tag));
    this.newTags = this.newTags.filter((t) => t !== tag);
    this.announcer.announce(`Removed ${tag}`);

    this.outputChosenTags.emit(this.tags());
    this.outputNewTags.emit(this.newTags);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.viewValue;
    this.currentTag.set('');
    event.option.deselect();

    if (this.tags().includes(value)) return;

    this.tags.update((tags) => [...tags, value]);
    this.outputChosenTags.emit(this.tags());
  }
}
