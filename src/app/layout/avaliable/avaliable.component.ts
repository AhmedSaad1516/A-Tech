import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { SetAppointmentsTime } from 'src/app/store/main.actions';

@Component({
  selector: 'app-avaliable',
  templateUrl: './avaliable.component.html',
  styleUrls: ['./avaliable.component.scss']
})
export class AvaliableComponent implements OnInit{
  isChecked: boolean = false;
  reactiveForm  = this.fb.group({
    Times: this.fb.array([])
  })

  dayes:string[] = [
    'السبت',
    'الاحد',
    'الاثنين',
    'الثلاثاء',
    'الاربعاء',
    'الخميس',
    'الجمعة',
  ]

  constructor(private fb:FormBuilder,private store:Store){}
  ngOnInit(): void {
      
    this.getTimeDate(event)
  }

  getTimeDate(event:any){
    this.reactiveForm.valueChanges.subscribe((res: any) => {
      this.store.dispatch(new SetAppointmentsTime(res));
    });
  }

  get Times(){
    return this.reactiveForm.controls.Times as FormArray;
  }
  addNew(){
    const timeForm = this.fb.group({
      startTime: ['09:00 AM', Validators.required],
      endTime: ['اختر وقت الانتهاء', Validators.required],
    })
    this.Times.push(timeForm);
  }
  deleteRow(timeIndex: number){
    this.Times.removeAt(timeIndex)
  }
  checked(){
    this.isChecked = !this.isChecked
  }

}
