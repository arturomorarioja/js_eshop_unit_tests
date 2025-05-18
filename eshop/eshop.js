// The e-shop receives a positive amount of purchases in kroner with an accuracy of 1 øre. 
// Based on this value, a discount is calculated according to the following rules:
//   Amount	                    Discount
//   --------------------------- --------
//   Up to 300 kr	                 0%
//   Over 300 kr, up to 800 kr	     5%
//   Over 800 kr	                10%

export const calculateDiscount = (amount) => {
    amount = parseFloat(amount);
    if (isNaN(amount)) {
        throw new Error('Incorrect data type.');
    }

    if (amount <= 300) {
        return 0;
    }
    if (amount <= 800) {
        return 0.05;
    }
    return 0.1;
};