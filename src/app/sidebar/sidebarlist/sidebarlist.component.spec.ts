import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarlistComponent } from './sidebarlist.component';

describe('SidebarlistComponent', () => {
  let component: SidebarlistComponent;
  let fixture: ComponentFixture<SidebarlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
