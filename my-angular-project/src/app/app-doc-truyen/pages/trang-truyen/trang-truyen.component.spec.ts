import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangTruyenComponent } from './trang-truyen.component';

describe('TrangTruyenComponent', () => {
  let component: TrangTruyenComponent;
  let fixture: ComponentFixture<TrangTruyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrangTruyenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrangTruyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
