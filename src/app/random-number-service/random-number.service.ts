import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomNumberService {
  private _intervalId: any = null;

  constructor() {}

  /* Generate a random prefix primarily based  on the specified variety length
  using for loop  is elegant for large arrays and larger numberLength */
  generateRandomPrefixing(_numberLength: number): string {
    let _prefix = '';
    for (let i = 0; i < _numberLength - 1; i++) {
      _prefix += Math.floor(Math.random() * 10);
    }
    return _prefix;
  }

  /*Generate a number combining random prefix and  your favorite number*/
  generateNumber(_favoriteNumber: number, _numberLength: number): string {
    const _random = this.generateRandomPrefixing(_numberLength);
    return `${_random}${_favoriteNumber}`;
  }

  /*Start auto updating the generated number every 5 seconds*/
  startAutoUpdate(
    _favoriteNum: number,
    _numberLen: number,
    updateCallbackFunc: (generatedNumber: string) => void
  ): any {
    this._intervalId = setInterval(() => {
      const _random = this.generateRandomPrefixing(_numberLen);
      const _generatedNum = `${_random}${_favoriteNum}`;
      updateCallbackFunc(_generatedNum);
    }, 5000);
    return this._intervalId;
  }

  /*Stops the currently running interval*/
  stopAutoUpdating(): void {
    if (this._intervalId) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
  }

  isAutoUpdateRunning(): boolean {
    return !!this._intervalId;
  }

  startAutoUpdateSafe(
    _favoriteNumber: number,
    _numberLength: number,
    updateCallbackFunc: (_generatedNumber: string) => void
  ): void {
    if (this.isAutoUpdateRunning()) {
      this.stopAutoUpdating();
    }
    this.startAutoUpdate(_favoriteNumber, _numberLength, updateCallbackFunc);
  }
}
