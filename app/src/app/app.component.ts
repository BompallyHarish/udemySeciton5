import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  serverElements: [{ type: String, name: String, content: String }] = [{ type: "server", name: "Test Server", content: "This is just a test server!" }];

  onServerAdded(serverData: { serverName: String, serverContent: String }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBlueprintAdded(bluePrintData: { serverName: String, serverContent: String }) {
    this.serverElements.push({
      type: "blueprint",
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    })
  }
}
