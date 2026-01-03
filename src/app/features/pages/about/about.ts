import { Component } from '@angular/core';

import { Aboutus } from '@shared/components/ui/about-us/about-us';
import { Banner } from '@shared/components/ui/banner/banner';

@Component({
  selector: 'app-about',
  imports: [Aboutus, Banner],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
