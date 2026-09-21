import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChipsAutocompleteExample } from './tag-chip-grid-component';

describe('TagChipGridComponenet', () => {
  let component: ChipsAutocompleteExample;
  let fixture: ComponentFixture<ChipsAutocompleteExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipsAutocompleteExample],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipsAutocompleteExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
