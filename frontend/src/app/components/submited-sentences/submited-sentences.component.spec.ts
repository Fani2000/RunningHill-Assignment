import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitedSentencesComponent } from './submited-sentences.component';

describe('SubmitedSentencesComponent', () => {
  let component: SubmitedSentencesComponent;
  let fixture: ComponentFixture<SubmitedSentencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitedSentencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitedSentencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
