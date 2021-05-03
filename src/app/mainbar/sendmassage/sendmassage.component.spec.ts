import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmassageComponent } from './sendmassage.component';

describe('SendmassageComponent', () => {
  let component: SendmassageComponent;
  let fixture: ComponentFixture<SendmassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendmassageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendmassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
