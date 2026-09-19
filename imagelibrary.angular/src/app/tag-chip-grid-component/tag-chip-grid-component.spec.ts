import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagChipGridComponenet } from './tag-chip-grid-component';

describe('TagChipGridComponenet', () => {
  let component: TagChipGridComponenet;
  let fixture: ComponentFixture<TagChipGridComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagChipGridComponenet],
    }).compileComponents();

    fixture = TestBed.createComponent(TagChipGridComponenet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
