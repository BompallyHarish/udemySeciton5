import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit {
  public newServerName: String = ""
  public newServerContent: String = ""
  
  constructor() {

  }
  ngOnInit(): void {

  }
  onAddServer() {
    // this.serverElements.push({
    //   type: "server",
    //   name: this.newServerName,
    //   content: this.newServerContent
    // })
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
}