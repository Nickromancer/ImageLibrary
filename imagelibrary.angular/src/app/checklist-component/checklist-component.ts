import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { MatCheckboxModule } from '@angular/material/checkbox';

/** @title Checkboxes with signal forms */
@Component({
  selector: 'app-checklist-component',
  templateUrl: 'checklist-component.html',
  imports: [FormField, MatCheckboxModule],
})
export class ChecklistComponent {
  readonly formModel = signal({
    private: false,
    nsfw: false,
  });

  readonly form = form(this.formModel);
}
