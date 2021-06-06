import { MatFabMenu } from '@angular-material-extensions/fab-menu';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  deviceDetectorInfo = null;
  isDesktop: boolean;

  fabButtonsRandom: MatFabMenu[] = [
    {
      id: 1,
      icon: 'perm_phone_msg',
      tooltip: 'Contact Us',
      tooltipPosition: "left"
    },
    {
      id: 2,
      icon: 'groups',
      tooltip: 'About Us',
      tooltipPosition: "left"
    },
    {
      id: 3,
      icon: 'miscellaneous_services',
      tooltip: 'Services',
      tooltipPosition: "left"
    },
    {
      id: 4,
      icon: 'home',
      tooltip: 'Home',
      tooltipPosition: "left"
    },
  ];

  @ViewChild('matFabMenu', { static: false }) matFabMenu: MatFabMenu;

  constructor(private deviceDetectorService: DeviceDetectorService,
            private router: Router) { }

  ngOnInit(): void {
    this.isDesktop = this.deviceDetector();
  }

  deviceDetector() {
    this.deviceDetectorInfo = this.deviceDetectorService.getDeviceInfo();
    const isDesktop = this.deviceDetectorService.isDesktop();
    return isDesktop;
  }

  selectedAction(event: any) {
    console.log(event)
    switch (event) {
      case 4: this.router.navigateByUrl('/home');
        break;
      case 3: this.router.navigateByUrl('/services');
        break;
      case 2: this.router.navigateByUrl('/aboutUs');
        break;
      case 1: this.router.navigateByUrl('/contact');
      break;
    }
  }

}
