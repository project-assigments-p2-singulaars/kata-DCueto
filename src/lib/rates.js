/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor((budget / ratePerHour) / 8);
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project lasts
 * @param {number} discount: 21% written as 0.21
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {

  const months = Math.floor(numDays / 22);
  const hoursOnDiscount = (months * 22) * 8;
  const discountValue = ((hoursOnDiscount * ratePerHour) * discount);
  const totalDiscounted = ((hoursOnDiscount * ratePerHour) - discountValue);
  
  const notDiscountedHours = (numDays * 8) - hoursOnDiscount;
  const totalNotDiscounted = (notDiscountedHours * ratePerHour);

  

  
  if(discount && numDays >= 22){
    return Math.ceil(totalDiscounted + totalNotDiscounted);
  } else {
    return Math.floor((numDays * 8) * ratePerHour);
  }
}

