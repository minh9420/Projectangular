import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
      query(':leave', [
        stagger(100, [
          animate('0.5s', style({ opacity: 0 }))
        ])
      ]),
      query(':enter', [
        style({ opacity: 0 }),
        stagger(100, [
          animate('0.5s', style({ opacity: 1 }))
        ])
      ])
    ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  showSpinners = true;
  showSeconds = true;
  touchUi = false;
  enableMeridian = false;
  stepHour = 1;
  stepMinute = 1;
  stepSecond = 1;
  color: ThemePalette = 'primary';
  constructor(private fb: FormBuilder) {
    this.calTotal()
   }

  ngOnInit(): void {
    console.log(this.fb)
  }

  formGroup = this.fb.group({
    firstName: ['', Validators.required] ,
    lastName: ['', Validators.required],
    choice: [''],
    dateday: [''],
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });
  public onSubmit() {
    console.log(this.formGroup.value)
  }
  get aliases() {
    return this.formGroup.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
    console.log(this.aliases)
  }
  public buggers = 0;
  public pizzas = 0;
  public totalItems: number
  buggerChanged(count: number) {
    this.buggers = count
    this.calTotal()

}
  pizzaChanged(count) {
    this.pizzas = count
    this.calTotal()

} 
calTotal() {
  this.totalItems = this.buggers + this.pizzas
  console.log(this.totalItems)
}
}
