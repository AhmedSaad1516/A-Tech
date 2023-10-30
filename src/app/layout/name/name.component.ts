import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { SetReservation } from 'src/app/store/main.actions';
@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
})
export class NameComponent implements OnInit {
  // this url image is for imag view before choosing an image
  url: string = 'assets/imgPlaceholder.webp';

  // this form group is for inputs validation
  reactiveForm = this.fb.group({
    name: new FormControl(null, [Validators.required]),
    reservasion: new FormControl("throughDayes", [Validators.required]),
  });
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.reactiveForm.valueChanges.subscribe((res: any) => {
      this.store.dispatch(new SetReservation(res));
    });
  }

  selectImg(event: any) {
    const fileType = event.target.files[0].type;
    if (fileType.match(/image\/*/)) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    } else {
      alert(`Please Choose Correct Image!!`);
    }
  }
}
