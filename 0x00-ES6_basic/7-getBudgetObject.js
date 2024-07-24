export default function getBudgetObject(income, gdp, capita) {
    const budget = {
      ['income']: income,
      ['gdp']: gdp,
      ['capital']: capita,
    };
  
    return budget;
  }