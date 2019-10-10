import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-number-to-roman',
  templateUrl: './number-to-roman.component.html'
})
export class NumberToRomanComponent {

  // inputs
  @Input() value: any;
  maxNumber = 9999;
  convertType = 'roman';
  outputResult: any;
  // format ==> upto 9999
  format = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  // btn click event
  convert() {
    this.outputResult = this.numberToRoman(this.value);
  }
  // Method for Convert Number to roman
  numberToRoman = (InputValue) => {
    let roman = '';
    if (!InputValue) {
      return 'Value field cannot be empty';
    }
    // non integer regx
    if (!/^-?\d+$/.test(InputValue)) {

      return 'Value must be integer';
    }
    // positive value
    if (InputValue < 0) {
      return 'Value must be greater then 0';
    }
    if (InputValue > 0 && InputValue > this.maxNumber) {
      return 'Value must be less then 10000';
    }
    for (const key in this.format) {

      while (InputValue >= this.format[key]) {

        InputValue -= this.format[key];
        roman += key;
      }
    }

    return roman;
  }

}
