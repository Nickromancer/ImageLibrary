import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupSheetComponent } from './popup-sheet.component';

describe('PopupSheetComponent', () => {
  let component: PopupSheetComponent;
  let fixture: ComponentFixture<PopupSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupSheetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PopupSheetComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
