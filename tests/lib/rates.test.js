
import { dayRate, daysInBudget, priceWithMonthlyDiscount } from "../../src/lib/rates";

const DIFFERENCE_IN_DIGITS = 6;

describe('dayRate tests', () => {
  test('#1 dayRate at 16/hour', () => {
    const result = dayRate( 16 );
    expect( result ).toBe( 120 );
  });

  test('#2 dayRate at 25/hour', () => {
    const result = dayRate( 25 );
    expect( result ).toBe( 200 );
  });

  test('#3 dayRate at 31.40/hour', () => {
    const result = dayRate( 31.4 );
    expect( result ).toBeCloseTo( 251.2, DIFFERENCE_IN_DIGITS );
  });

  test('#4 dayRate at 89.89/hour', () => {
    const result = dayRate( 89.89 );
    expect( result ).toBeCloseTo( 719.12, DIFFERENCE_IN_DIGITS );
  });

  test('#5 dayRate at 97.654321/hour', () => {
    const result = dayRate( 97.654321 );
    expect( result ).toBeCloseTo( 781.234568, DIFFERENCE_IN_DIGITS );
  });
});

describe('daysInBudget tests', () => {
  describe('with a budget of 1280', () => {

    test('at 16/hour', () => {
      const result = daysInBudget( 1280, 16 );
      expect( result ).toBeCloseTo( 10, DIFFERENCE_IN_DIGITS );
    });

    test('at 25/hour', () => {
      const result = daysInBudget( 1280, 25 );
      expect( result ).toBeCloseTo( 6, DIFFERENCE_IN_DIGITS );
    });

  });

  describe('with a budget of 835', () => {
    
    test('at 12/hour', () => {
      const result = daysInBudget( 835, 12 );
      expect( result ).toBeCloseTo( 8, DIFFERENCE_IN_DIGITS );
    });

  });
});

describe('cost with monthly discount', () => {
  describe('at 16/hour', () => {
    test('for 70 days', () => {
      const result = priceWithMonthlyDiscount( 16, 70, 0 );
      const expected = 8960;
      expect( result ).toBeCloseTo( expected, DIFFERENCE_PRECISION_IN_DIGITS );
    });

    test('for 130 days with 15% discount', () => {
      const result = priceWithMonthlyDiscount( 16, 130, 0.15 );
      const expected = 14528;
      expect( result ).toBeCloseTo( expected, DIFFERENCE_PRECISION_IN_DIGITS );
    });
  });

  describe('at 29.654321/hour', () => {
    test('for 220 days with 11.2%', () => {
      const result = priceWithMonthlyDiscount( 29.654321, 220, 0.112 );
      const expected = 46347;
      expect( result ).toBeCloseTo( expected, DIFFERENCE_PRECISION_IN_DIGITS );
    });

    test('for 155 days with 25.47% discount', () => {
      const result = priceWithMonthlyDiscount( 29.654321, 155, 0.2547 );
      const expected = 27467;
      expect( result ).toBeCloseTo( expected, DIFFERENCE_PRECISION_IN_DIGITS );
    });
  });
});
