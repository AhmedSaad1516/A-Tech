import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor(private translateService: TranslateService,) {}
  changeLangage(lang: string) {
  this.translateService.setDefaultLang(lang);
  this.translateService.use(lang);
  let htmlTag = document.getElementsByTagName("html")[0] as HTMLHtmlElement;
  htmlTag.dir = lang == "ar" ? 'rtl' : 'ltr'
}
}
