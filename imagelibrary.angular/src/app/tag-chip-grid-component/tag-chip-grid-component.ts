import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  Component,
  computed,
  EventEmitter,
  inject,
  model,
  Output,
  output,
  signal,
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
import { Console } from 'console';

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
  readonly allTags = signal<string[]>([]);
  startingTags = model<string[]>();
  @Output() outputTags = new EventEmitter<string[]>();

  newTags = <string[]>[];
  readonly filteredTags = computed(() => {
    const currentTag = this.currentTag().toLowerCase();
    const allTags = this.allTags();
    return currentTag
      ? allTags.filter((tag) => tag.toLowerCase().includes(currentTag))
      : allTags.slice();
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

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (this.tags().includes(value)) {
      return;
    }

    if (!this.startingTags()!.includes(value)) {
      this.tags.update((tags) => [...tags, value]);
      this.newTags.push(value);
      this.outputTags.emit(this.newTags);

      event.chipInput.clear();
      this.currentTag.set('');
      return;
    }

    if (value) {
      this.tags.update((tags) => [...tags, value]);

      this.allTags.update((tag) => {
        const filteredItems = tag.filter((x) => x != value);
        return filteredItems;
      });

      console.log('Removed from list');
    }
    event.chipInput.clear();
    this.currentTag.set('');
  }

  remove(tag: string): void {
    this.tags.update((tags) => {
      const index = tags.indexOf(tag);
      if (index < 0) {
        return tags;
      }

      tags.splice(index, 1);
      this.announcer.announce(`Removed ${tag}`);

      if (this.startingTags()!.includes(tag)) this.allTags.update((tags) => [...tags, tag]);

      return [...tags];
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.update((tags) => [...tags, event.option.viewValue]);

    this.allTags.update((tag) => {
      const filteredItems = tag.filter((x) => x != event.option.viewValue);
      return filteredItems;
    });

    this.currentTag.set('');
    event.option.deselect();
  }
}
