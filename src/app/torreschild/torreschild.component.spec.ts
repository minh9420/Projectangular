import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorreschildComponent } from './torreschild.component';

describe('TorreschildComponent', () => {
  let component: TorreschildComponent;
  let fixture: ComponentFixture<TorreschildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorreschildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TorreschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
