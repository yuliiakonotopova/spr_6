class CurrencyExchangeService {
 fetchExchangeRate() {
  console.log("Fetching exchange rate from the currency exchange service.");
  return 1.2;
 }
}

class FinancialDataConsumer {
 processFinancialData(data) {
  console.log("Processing financial data:", data);
 }
}

class DataFormatAdapter {
 constructor(currencyExchangeService) {
  this.currencyExchangeService = currencyExchangeService;
 }

 fetchDataInNewFormat() {
  const oldData = this.fetchDataInOldFormat();
  console.log("Adapting financial data from old format to new format.");

  const exchangeRate = this.currencyExchangeService.fetchExchangeRate();
  const newData = { currency: "EUR", amount: oldData.amount * exchangeRate };

  return newData;
 }

 fetchDataInOldFormat() {
  console.log("Fetching financial data from the legacy system in old format.");
  return { currency: "USD", amount: 100 };
 }
}

function main() {
 const currencyExchangeService = new CurrencyExchangeService();
 const dataAdapter = new DataFormatAdapter(currencyExchangeService);
 const financialDataConsumer = new FinancialDataConsumer();
 const newData = dataAdapter.fetchDataInNewFormat();

 financialDataConsumer.processFinancialData(newData);
}

main();
