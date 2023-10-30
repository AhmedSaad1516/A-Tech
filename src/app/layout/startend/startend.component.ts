import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngxs/store';
import { SetAppointmentsTime } from 'src/app/store/main.actions';
@Component({
  selector: 'app-startend',
  templateUrl: './startend.component.html',
  styleUrls: ['./startend.component.scss'],
})
export class StartendComponent implements OnInit {
  @Input() day!: string;
  @Output() timeData = new EventEmitter<string>();
  
  isChecked: boolean = false;
  reactiveForm!: FormGroup;

  constructor(private fb: FormBuilder, private store:Store) {}
  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      day: new FormControl(this.day, [Validators.required]),
      Times: new FormArray([]),
    });
      /* this.reactiveForm.valueChanges.subscribe((res: any) => {
        this.store.dispatch(new SetAppointmentsTime(res));
      }); */
    
  }

  setTimeData(){
    this.timeData.emit()
  } 

  get Times() {
    return this.reactiveForm.get('Times') as FormArray;
  }
  addNew() {
    const timeForm = this.fb.group({
      startTime: ['09:00 AM', Validators.required],
      endTime: ['', Validators.required],
    });
    this.Times.push(timeForm);
  }
  deleteRow(timeIndex: number) {
    this.Times.removeAt(timeIndex);
  }
  checked() {
    this.isChecked = !this.isChecked;
  }
}
