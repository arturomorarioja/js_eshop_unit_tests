import { calculateDiscount } from '../eshop/eshop.js';

describe('E-shop tests', () => {

    /**
     * Positive testing
     */

    const eshopPassesProvider = [
        {'amount': 0.0, 'discount': 0.0},         // Partition 0-300: lower boundary value
        {'amount': 0.01, 'discount': 0.0},
        {'amount': 150.00, 'discount': 0.0},
        {'amount': 299.99, 'discount': 0.0},
        {'amount': 300.00, 'discount': 0.0},      // Partition 0-300: upper boundary value
        {'amount': 300.01, 'discount': 0.05},     // Partition 300.01-800: lower boundary value
        {'amount': 300.02, 'discount': 0.05},
        {'amount': 550.00, 'discount': 0.05},
        {'amount': 799.99, 'discount': 0.05},
        {'amount': 800.00, 'discount': 0.05},     // Partition 300.01-800: upper boundary value
        {'amount': 800.01, 'discount': 0.1},      // Partition 800-MAX DOUBLE: lower boundary value
        {'amount': 800.02, 'discount': 0.1},
        {'amount': 900.00, 'discount': 0.1},
    ];
    describe.each(eshopPassesProvider)('E-shop passes', (params) => {
        it(`${params.amount} kr passes`, () => {
            expect(calculateDiscount(params.amount)).toBeCloseTo(params.discount);
        });
    });
    
    /**
     * Negative testing
     */
    const eshopFailsProvider = [
        {'amount': "900", 'discount': 0.1},       // Edge case: implies string to float conversion
        {'amount': "900.01", 'discount': 0.1}     // Edge case: implies string to float conversion with decimals
    ];
    describe.each(eshopFailsProvider)('E-shop fails because of wrong data type', (params) => {
        it(`${params.amount} kr passes`, () => {
            expect(calculateDiscount(params.amount)).toBeCloseTo(params.discount);
        });
    });

    it('Wrong data type fails', () => {
        expect(() => calculateDiscount('Hello')).toThrow('Incorrect data type.');
    });
});