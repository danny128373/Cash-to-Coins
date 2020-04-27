const dollarAmount = 20.99;

const piggyBank = {};

const numberOfCoins = (amount) => {
  const amountInCents = amount * 100;

  const quarters = Math.floor(amountInCents / 25);
  piggyBank.quarters = quarters
  const dimes = Math.floor(amountInCents % 25 / 10);
  piggyBank.dimes = dimes;
  const nickels = Math.floor(amountInCents % 25 % 10 / 5);
  piggyBank.nickels = nickels;
  const pennies = Math.floor(amountInCents % 25 % 10 % 5);
  piggyBank.pennies = pennies;

  console.log(`I have ${piggyBank.quarters} quarters, ${piggyBank.dimes} dimes, ${piggyBank.nickels} nickels, and ${piggyBank.pennies} pennies.
This brings me to a total of $${dollarAmount}.`);

}
numberOfCoins(dollarAmount);