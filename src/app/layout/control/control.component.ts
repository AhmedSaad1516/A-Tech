import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MainState } from 'src/app/store/main.state';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit {
  @Select(MainState.getAllData) collectedData$?: Observable<any>;

  isChecked: boolean = true;
  collectedData: any;

  ngOnInit(): void {

  }
  checked() {
    this.isChecked = !this.isChecked;
  }
}
