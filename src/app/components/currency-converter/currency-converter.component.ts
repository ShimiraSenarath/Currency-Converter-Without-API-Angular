import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent {

  amount: number = 1.00;
  baseCurrency: string = 'EUR';
  targetCurrency: string = 'USD';
  currencies: any[] = [
    { code: 'EUR', name: 'Europe', value: 450, flag: '../../assets/images/european-union.png' },
    { code: 'USD', name: 'USA', value: 320, flag: '../../assets/images/united-states.png' },
    { code: 'SEK', name: 'Sweden', value: 60, flag: '../../assets/images/sweden.png' },
    { code: 'LKR', name: 'Sri Lanka', value: 1, flag: '../../assets/images/sri-lanka.png' },
    // Add more currencies as needed
  ];
  convertedValue: number | null = null;

  convert() {
    if (this.baseCurrency === this.targetCurrency) {
      this.convertedValue = this.amount;
      return;
    }

    const baseCurrencyValue = this.getCurrencyValue(this.baseCurrency);
    const targetCurrencyValue = this.getCurrencyValue(this.targetCurrency);

    if (baseCurrencyValue !== null && targetCurrencyValue !== null) {
      const conversionRate = targetCurrencyValue / baseCurrencyValue;
      this.convertedValue = this.amount * conversionRate;
    } else {
      console.error('Invalid currency code');
    }
  }

  private getCurrencyValue(currencyCode: string): number | null {
    const currency = this.currencies.find(c => c.code === currencyCode);
    return currency ? currency.value : null;
  }

}
