import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, Input, OnInit,} from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-multi-row-carousel',
  imports: [ CarouselModule ],
  templateUrl: './multi-row-carousel.html',
  styleUrl: './multi-row-carousel.scss',
})
export class MultiRowCarousel implements OnInit  {
    @Input() options: OwlOptions = {
    items: 6,
    dots: true,
    nav: true,
    navText: ['', ''],
    margin: 10,
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
  };

  public logos = [
    { name: 'Apple' },
    { name: 'Samsung' },
    { name: 'Huawei' },
  ];

  public partnerLogosCarousel = [];
  
  ngOnInit() {
    this.loadPartnerLogos();
  }

  loadPartnerLogos() {
    this.logos.sort(function () {
      return 0.5 - Math.random();
    });
    this.getLogoGroups();
  }

  getLogoGroups() {
    const groups = [];
    for (let i = 0; i < this.logos.length; i += 3) {
      groups.push(this.logos.slice(i, i + 3));
    }
    this.partnerLogosCarousel = groups;
  }
}