import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngxs/store';
import { ServiceTime } from 'src/app/models/main.models';
import { SetServiceTimeAvailable } from 'src/app/store/main.actions';
@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements OnInit {
  isShow: boolean = false;
  isShow2: boolean = false;
  numMinutes: number = 0;
  numDate: number = 0;

  // this form group is for inputs validation
  reactiveForm = this.fb.group({
    available: new FormControl('', [Validators.required]),
    option: new FormControl('day', [Validators.required]),
    numMinutes: new FormControl(0, [Validators.required]),
    numDate: new FormControl(0, [Validators.required]),
    reverseUser: new FormControl('reverseUser', [Validators.required]),
    serviceTime: new FormControl('inTime', [Validators.required]),
  });

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.reactiveForm.valueChanges.subscribe((res: any) => {
      this.store.dispatch(new SetServiceTimeAvailable(res));
    });
  }

  increase() {
    this.numMinutes++;
    this.reactiveForm.get('numMinutes')?.patchValue(this.numMinutes);
  }
  decrease() {
    if (this.numMinutes > 0) {
      this.numMinutes--;
    }
    this.reactiveForm.get('numMinutes')?.patchValue(this.numMinutes);
  }
  increase2() {
    this.numDate++;
    this.reactiveForm.get('numDate')?.patchValue(this.numDate);
  }
  decrease2() {
    if (this.numDate > 0) {
      this.numDate--;
    }
    this.reactiveForm.get('numDate')?.patchValue(this.numDate);
  }
  checkRadio() {
    this.isShow = !this.isShow;
  }
  checkRadio2() {
    this.isShow2 = !this.isShow2;
  }
}
