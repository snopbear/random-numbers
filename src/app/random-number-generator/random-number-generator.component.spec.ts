/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RandomNumberGeneratorComponent } from './random-number-generator.component';
import { By } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RandomNumberService } from '../random-number-service/random-number.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let _component: RandomNumberGeneratorComponent;
  let _fixture: ComponentFixture<RandomNumberGeneratorComponent>;
  let _randomNumberServiceSpy: jasmine.SpyObj<RandomNumberService>;
  let _el: DebugElement;
  beforeEach(waitForAsync(() => {
    const _spy = jasmine.createSpyObj('RandomNumberService', [
      'generateNumber',
      'startAutoUpdateSafe',
      'stopAutoUpdating',
    ]);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [FormBuilder, { provide: RandomNumberService, useValue: _spy }],
    })
      .compileComponents()
      .then(() => {
        _fixture = TestBed.createComponent(RandomNumberGeneratorComponent);
        _component = _fixture.componentInstance;
        _el = _fixture.debugElement;
        _component.ngOnInit();
      });
    const fb = TestBed.inject(FormBuilder);
    _fixture = TestBed.createComponent(RandomNumberGeneratorComponent);
    _component = _fixture.componentInstance;
    _randomNumberServiceSpy = TestBed.inject(
      RandomNumberService
    ) as jasmine.SpyObj<RandomNumberService>;
  }));

  it('should create', () => {
    expect(_component).toBeTruthy();
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

  it('should call generateNumber on the service with correct parameters', () => {
    const favoriteNumber = 7;
    const numberLength = 5;
    _randomNumberServiceSpy.generateNumber.and.returnValue('77777');

    _component._numberForm.setValue({ favoriteNumber, numberLength });
    _component.generateNumber();

    expect(_randomNumberServiceSpy.generateNumber).toHaveBeenCalledWith(
      favoriteNumber,
      numberLength
    );
    expect(_component._generatedNumber).toBe('77777');
  });

  it('should start auto-update after generating the number', () => {
    const favoriteNumber = 7;
    const numberLength = 5;
    _randomNumberServiceSpy.generateNumber.and.returnValue('77777');
    _randomNumberServiceSpy.startAutoUpdateSafe.and.callFake(
      (fav, len, callback) => {
        callback('updatedNumber');
      }
    );

    _component._numberForm.setValue({ favoriteNumber, numberLength });
    _component.generateNumber();

    expect(_randomNumberServiceSpy.startAutoUpdateSafe).toHaveBeenCalledWith(
      favoriteNumber,
      numberLength,
      jasmine.any(Function)
    );
    expect(_component._generatedNumber).toBe('updatedNumber');
  });

  it('should be invalid if favoriteNumber is not provided', () => {
    _component._numberForm.setValue({
      favoriteNumber: null,
      numberLength: 5,
    });
    expect(_component._numberForm.valid).toBeFalse();
  });

  it('should be invalid if numberLength is out of range', () => {
    _component._numberForm.setValue({
      favoriteNumber: 5,
      numberLength: 0,
    });
    expect(_component._numberForm.valid).toBeFalse();

    _component._numberForm.setValue({
      favoriteNumber: 5,
      numberLength: 501,
    });
    expect(_component._numberForm.valid).toBeFalse();
  });

  it('should be valid with correct inputs', () => {
    _component._numberForm.setValue({
      favoriteNumber: 5,
      numberLength: 10,
    });
    expect(_component._numberForm.valid).toBeTrue();
  });

  it('should have correct H2 content', () => {
    let hElement = _el.queryAll(By.css('h2'));
    expect(hElement[0].nativeElement.textContent).toBe('Random Number');
  });
  it('should have correct button content', () => {
    let buttonElement = _el.queryAll(By.css('button'));
    expect(buttonElement[0].nativeElement.textContent).toBe('Generate');
  });

  it('should stop auto-update when the component is destroyed', () => {
    _component.ngOnDestroy();
    expect(_randomNumberServiceSpy.stopAutoUpdating).toHaveBeenCalled();
  });
});
