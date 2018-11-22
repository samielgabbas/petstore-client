import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDetailComponent } from './pet-detail.component';
import { AppModule } from "src/app/app.module";

describe('Component: PetDetailComponent', () => {
  let component: PetDetailComponent;
  let fixture: ComponentFixture<PetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
