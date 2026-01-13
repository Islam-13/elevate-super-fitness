import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Banner } from "../banner/banner";

@Component({
  selector: 'app-footer',
  imports: [TranslateModule, Banner],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
