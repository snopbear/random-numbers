/* tslint:disable:no-unused-variable */
import {  ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RandomNumbersGeneratorRxjsComponent } from './random-numbers-generator-rxjs.component';

describe('RandomNumbersGeneratorRxjsComponent', () => {
  let _component: RandomNumbersGeneratorRxjsComponent;
  let _fixture: ComponentFixture<RandomNumbersGeneratorRxjsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RandomNumbersGeneratorRxjsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    _fixture = TestBed.createComponent(RandomNumbersGeneratorRxjsComponent);
    _component = _fixture.componentInstance;
    _fixture.detectChanges();
  });

 
  it('should create the component', () => {
    expect(_component).toBeTruthy();
  });

  
  it('should initialize form with correct default values', () => {
    expect(_component._numberForm).toBeDefined();
    expect(_component._numberForm.controls['favoriteNumber'].value).toBeNull();
    expect(_component._numberForm.controls['numberLength'].value).toBeNull();
  });


  it('should invalidate form if required fields are missing', () => {
    const form = _component._numberForm;
    form.controls['favoriteNumber'].setValue(null);
    form.controls['numberLength'].setValue(null);
    expect(form.invalid).toBeTruthy();

    form.controls['favoriteNumber'].setValue(1);
    form.controls['numberLength'].setValue(10);
    expect(form.valid).toBeTruthy();
  });

  it('should call updateRandomNumber with correct values when form is valid', () => {
    const favoriteNumber = 1;
    const numberLength = 10;
    const updateRandomNumberSpy = spyOn(_component, 'updateRandomNumber');

    _component._numberForm.controls['favoriteNumber'].setValue(favoriteNumber);
    _component._numberForm.controls['numberLength'].setValue(numberLength);

    _component.generateNumber();

    expect(updateRandomNumberSpy).toHaveBeenCalledWith(
      favoriteNumber,
      numberLength
    );
  });

  it('should display an alert when form is invalid', () => {
    spyOn(window, 'alert');
    _component.generateNumber();
    expect(window.alert).toHaveBeenCalledWith(
      'Please fill all fields correctly!'
    );
  });

  it('should update the generated number every 5 seconds', (done) => {
    const favoriteNumber = 1;
    const numberLength = 10;
    _component._numberForm.controls['favoriteNumber'].setValue(favoriteNumber);
    _component._numberForm.controls['numberLength'].setValue(numberLength);

    spyOn(_component, 'updateRandomNumber').and.callThrough();

    _component.generateNumber();

    setTimeout(() => {
      expect(_component.updateRandomNumber).toHaveBeenCalledTimes(2);
      done();
    }, 10000); 
  });

  it('should unsubscribe from the interval when component is destroyed', () => {
    const destroySpy = spyOn(_component['destroy$'], 'next');
    const completeSpy = spyOn(_component['destroy$'], 'complete');

    _component.ngOnDestroy();

    expect(destroySpy).toHaveBeenCalled();
    expect(completeSpy).toHaveBeenCalled();
  });

  it('should generate a random number with a correct prefix and favorite number', () => {
    const favoriteNumber = 5;
    const numberLength = 8;
    _component.updateRandomNumber(favoriteNumber, numberLength);

    expect(_component._generatedNumber).toMatch(/^\d{7}5$/); 
  });
});