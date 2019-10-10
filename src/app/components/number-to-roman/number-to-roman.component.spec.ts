import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NumberToRomanComponent } from './number-to-roman.component';

describe('NumberToRomanComponent', () => {
  let component: NumberToRomanComponent;
  let fixture: ComponentFixture<NumberToRomanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [NumberToRomanComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberToRomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create NumberToRomanComponent', () => {
    expect(component).toBeTruthy();
  });
  it('should render title in a h3 tag "Number to roman conversion"', () => {
    fixture = TestBed.createComponent(NumberToRomanComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Number to roman conversion');
  });
  it('should be return the Roman numeral representation for all integers 1 to 10000', () => {
    component.value = '5555';
    const button = fixture.debugElement.nativeElement.querySelector('.btn-convert');
    button.click();
    expect(component.outputResult).toEqual('MMMMMDLV');
  });
  it('should be return "Value must be less then 10000" when given an integer outside the range 1 to 10000', () => {
    component.value = '22222222';
    const button = fixture.debugElement.nativeElement.querySelector('.btn-convert');
    button.click();
    expect(component.outputResult).toEqual('Value must be less then 10000');
  });
  it('should be return "Value must be integer" when given a non-integer value like test2345', () => {
    component.value = 'test2345';
    const button = fixture.debugElement.nativeElement.querySelector('.btn-convert');
    button.click();
    expect(component.outputResult).toEqual('Value must be integer');
  });
  it('should be return "Value must be greater then 0" when given a negative integer value like -1234', () => {
    component.value = '-1234';
    const button = fixture.debugElement.nativeElement.querySelector('.btn-convert');
    button.click();
    expect(component.outputResult).toEqual('Value must be greater then 0');
  });
  it('should be always return uppercase Roman numerals', () => {
    component.value = '5555';
    const button = fixture.debugElement.nativeElement.querySelector('.btn-convert');
    button.click();
    expect(component.outputResult).toEqual('MMMMMDLV'.toUpperCase());
  });
  it('should be return "Value field cannot be empty" when input field is empty', () => {
    component.value = '';
    const button = fixture.debugElement.nativeElement.querySelector('.btn-convert');
    button.click();
    expect(component.outputResult).toEqual('Value field cannot be empty');
  });
});
