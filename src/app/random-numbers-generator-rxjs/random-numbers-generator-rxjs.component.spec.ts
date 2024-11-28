/* tslint:disable:no-unused-variable */
import {  ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RandomNumbersGeneratorRxjsComponent } from './random-numbers-generator-rxjs.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let _component: RandomNumbersGeneratorRxjsComponent;
  let _fixture: ComponentFixture<RandomNumbersGeneratorRxjsComponent>;
  let _el: DebugElement;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [FormBuilder],
    })
      .compileComponents()
      .then(() => {
        _fixture = TestBed.createComponent(RandomNumbersGeneratorRxjsComponent);
        _component = _fixture.componentInstance;
        _el = _fixture.debugElement;
        _component.ngOnInit();
      });
    const fb = TestBed.inject(FormBuilder);
    _fixture = TestBed.createComponent(RandomNumbersGeneratorRxjsComponent);
    _component = _fixture.componentInstance;
  }));

  it('should create', () => {
    expect(_component).toBeTruthy();
  });

  it('should invalidate form if required fields are missing', () => {
    const _form = _component._numberForm;
    _form.controls['favoriteNumber'].setValue(null);
    _form.controls['numberLength'].setValue(null);
    expect(_form.invalid).toBeTruthy();

    _form.controls['favoriteNumber'].setValue(1);
    _form.controls['numberLength'].setValue(10);
    expect(_form.valid).toBeTruthy();
  });

  it('should render the form correctly', () => {
    const formElement = _el.query(By.css('form'));
    expect(formElement).toBeTruthy();

    const dropdown = _el.query(By.css('select'));
    const input = _el.query(By.css('input[type="number"]'));
    const button = _el.query(By.css('button'));

    expect(input).toBeTruthy('Input box for number length is missing');
    expect(button).toBeTruthy('Generate button is missing');
    expect(button.nativeElement.textContent).toBe('Generate');
  });

  it('should initialize the form with default values', () => {
    expect(_component._numberForm).toBeDefined();
    expect(_component._numberForm.controls['favoriteNumber']).toBeTruthy();
    expect(_component._numberForm.controls['numberLength']).toBeTruthy();
  });

 

      it('should unsubscribe from the interval when component is destroyed', () => {
        const _destroySpy = spyOn(_component['destroy$'], 'next');
        const _completeSpy = spyOn(_component['destroy$'], 'complete');

        _component.ngOnDestroy();

        expect(_destroySpy).toHaveBeenCalled();
        expect(_completeSpy).toHaveBeenCalled();
      });

      it('should generate a random number with a correct prefix and favorite number', () => {
        const favoriteNumber = 5;
        const numberLength = 8;
        _component.updateRandomNumber(favoriteNumber, numberLength);

        expect(_component._generatedNumber).toMatch(/^\d{7}5$/); 
      });
});
