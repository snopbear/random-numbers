import { Component, OnDestroy, OnInit } from '@angular/core';
import randomNumberComponentsRxjsImports from './random-number-generator-rxjs.component.imports';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-random-numbers-generator-rxjs',
  templateUrl: './random-numbers-generator-rxjs.component.html',
  styleUrls: ['./random-numbers-generator-rxjs.component.css'],
  standalone: true,
  imports: [randomNumberComponentsRxjsImports],
})
export class RandomNumbersGeneratorRxjsComponent implements OnInit ,OnDestroy {

  _numberForm!: FormGroup;
  _numbers: number[] = [...Array(10).keys()];
  _generatedNumber: string = '';
  private destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this._numberForm = this.fb.group({
      favoriteNumber: [null, Validators.required],
      numberLength: [
        null,
        [Validators.required, Validators.min(1), Validators.max(200)],
      ],
    });
  }

  generateNumber(): void {
    const { favoriteNumber, numberLength } = this._numberForm.value;
    if (!this._numberForm.valid) {
      alert('Please fill all fields correctly!');
      return;
    }
    this.updateRandomNumber(favoriteNumber, numberLength);
    interval(5000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.updateRandomNumber(favoriteNumber, numberLength));
  }

  updateRandomNumber(favoriteNumber: number, numberLength: number): void {
    let randomPrefix = '';
    for (let i = 0; i < numberLength - 1; i++) {
      randomPrefix += Math.floor(Math.random() * 10);
    }
    this._generatedNumber = `${randomPrefix}${favoriteNumber}`;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}


