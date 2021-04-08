import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  appPages = [
    { title: 'Profile', url: '/folder/Inbox', icon: 'person' },
    { title: 'History', url: '/folder/Outbox', icon: 'archive' },
    { title: 'Logout', url: '/folder/Favorites', icon: 'log-out' }
  ];
}
