import { TestBed } from '@angular/core/testing';
import { RandomNumberService } from './random-number.service';

describe('Service: RandomNumber', () => {
  let _service: RandomNumberService;
  let _updateCallbackSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    _service = TestBed.inject(RandomNumberService);
    _updateCallbackSpy = jasmine.createSpy('updateCallback');
  });

  it('should be created', () => {
    expect(_service).toBeTruthy();
  });
  it('should generate a random prefix of specified length', () => {
    const _numberLength = 5;
    const _prefix = _service.generateRandomPrefixing(_numberLength);
    expect(_prefix.length).toBe(_numberLength - 1);
    expect(/^\d+$/.test(_prefix)).toBeTrue();
  });
  it('should generate a number of the correct length with the favorite number appended', () => {
    const _testCases = [
      { favoriteNumber: 2, numberLength: 5 },
      { favoriteNumber: 7, numberLength: 5 },
      { favoriteNumber: 0, numberLength: 5 },
      { favoriteNumber: 7, numberLength: 1 },
    ];

    _testCases.forEach(({ favoriteNumber, numberLength }) => {
      const _generatedNumber = _service.generateNumber(
        favoriteNumber,
        numberLength
      );

      expect(_generatedNumber.length).toBe(numberLength);
      expect(_generatedNumber.endsWith(favoriteNumber.toString())).toBeTrue();

      if (numberLength === 1) {
        // Special case: length of 1 should only return the favorite number
        expect(_generatedNumber).toBe(favoriteNumber.toString());
      }
    });
  });

  it('should return a valid interval ID', () => {
    const _favoriteNumber = 7;
    const _numberLength = 5;

    const _intervalId = _service.startAutoUpdate(
      _favoriteNumber,
      _numberLength,
      _updateCallbackSpy
    );

    expect(_intervalId).toBeDefined();
    expect(typeof _intervalId).toBe('number');
  });

  it('should ensure only one interval is running at any time', () => {
    const _favoriteNumber = 5;
    const _numberLength = 10;

    // Start the first interval
    const firstIntervalId = _service.startAutoUpdate(
      _favoriteNumber,
      _numberLength,
      _updateCallbackSpy
    );

    // Start a second interval
    const secondIntervalId = _service.startAutoUpdate(
      _favoriteNumber,
      _numberLength,
      _updateCallbackSpy
    );
    expect(firstIntervalId).not.toEqual(secondIntervalId);
    // Cleanup
    _service.stopAutoUpdating();
  });

  it('should call the update callback with the correct generated number', () => {
    const _favoriteNumber = 9;
    const _numberLength = 5;

    spyOn(_service, 'generateRandomPrefixing').and.returnValue('11111'); // Mock prefix
    jasmine.clock().install();

    _service.startAutoUpdate(_favoriteNumber, _numberLength, _updateCallbackSpy);
    jasmine.clock().tick(5000);

    expect(_updateCallbackSpy).toHaveBeenCalledWith('111119');
    expect(_updateCallbackSpy).toHaveBeenCalledTimes(1);

    jasmine.clock().uninstall();
  });

  it('should correctly track auto-update running state', () => {
    const _favoriteNumber = 7;
    const _numberLength = 5;

    expect(_service.isAutoUpdateRunning()).toBeFalse();

    _service.startAutoUpdate(_favoriteNumber, _numberLength, _updateCallbackSpy);
    expect(_service.isAutoUpdateRunning()).toBeTrue();

    _service.stopAutoUpdating();
    expect(_service.isAutoUpdateRunning()).toBeFalse();
  });
});
