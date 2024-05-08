import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  serverElements = [{type: "server", name: "Test Server", content:"This is just a test server!" }];



}
