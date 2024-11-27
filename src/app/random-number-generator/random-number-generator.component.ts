import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import randomNumberComponentsImports from './random-number-generator.component.imports';
import { RandomNumberService } from '../random-number-service/random-number.service';

@Component({
  selector: 'app-random-number-generator',
  templateUrl: './random-number-generator.component.html',
  styleUrls: ['./random-number-generator.component.css'],
  standalone: true,
  imports: [randomNumberComponentsImports],
})
export class RandomNumberGeneratorComponent implements OnInit, OnDestroy {
  _numberForm!: FormGroup;
  _numbers: number[] = [...Array(10).keys()];
  _generatedNumber: string = '';

  constructor(
    private fb: FormBuilder,
    private randomNumberService: RandomNumberService
  ) {}

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
    this._generatedNumber = this.randomNumberService.generateNumber(
      favoriteNumber,
      numberLength
    );

    this.startAutoUpdate(favoriteNumber, numberLength);
  }
  startAutoUpdate(favoriteNumber: number, numberLength: number): void {
    this.randomNumberService.startAutoUpdateSafe(
      favoriteNumber,
      numberLength,
      (generatedNumber: string) => {
        this._generatedNumber = generatedNumber;
      }
    );
  }

  ngOnDestroy(): void {
    this.randomNumberService.stopAutoUpdating();
  }
}
