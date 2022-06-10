import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() name: string;
  @Input() val: number;
  @Output() changed = new EventEmitter<number>()

  inc() {
    // this.changed.emit(this.val + 1)
    console.log(this.val)
    // this.val += 1
    this.changed.emit(this.val + 1)
  }
  dec() {
    // this.val -= 1
    this.changed.emit(this.val - 1 < 0? 0: this.val - 1 )

  }
}
