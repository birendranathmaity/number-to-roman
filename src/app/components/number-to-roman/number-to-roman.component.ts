import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'number-to-roman',
  templateUrl: './number-to-roman.component.html',
  styleUrls: ['./number-to-roman.component.scss']
})
export class NumberToRomanComponent implements OnInit {

  //inputs 
  @Input() value: any;
  maxNumber: number = 9999;
  convertType: string = 'roman';
  outputResult: any;
  // format ==> 9999
  format = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  constructor() { }
  convert() {
    this.outputResult = this.NumberToRoman(this.value);
  }
  NumberToRoman(number) {
    let roman = "";
    // max 9999 Roman characters //
    if(!number){
      return 'Value field cannot be empty';
    }
    if (!/^-?\d+$/.test(number)) {

      return 'Value must be integer';
    }

    if (number < 0) {
      return "Value must be greater then 0";
    }
    if (number > 0 && number > this.maxNumber) {
      return "Value must be less then 10000";
    }
    for (let key in this.format) {

      while (number >= this.format[key]) {

        number -= this.format[key];
        roman += key;
      }
    }

    return roman;
  }
  ngOnInit() {

  }
}
