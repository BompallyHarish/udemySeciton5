import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit {
  public newServerName: String = ""
  public newServerContent: String = ""
  @Output() serverAdded = new EventEmitter<{ serverName: String, serverContent: String }>()
  @Output() bluePrintAdded = new EventEmitter<{ serverName: String, serverContent: String }>()
  constructor() {

  }
  ngOnInit(): void {

  }
  onAddServer() {
    this.serverAdded.emit({ serverName: this.newServerName, serverContent: this.newServerContent })
    // this.serverElements.push({
    //   type: "server",
    //   name: this.newServerName,
    //   content: this.newServerContent
    // })
  }

  onAddBlueprint() {
    this.bluePrintAdded.emit({ serverName: this.newServerName, serverContent: this.newServerContent })
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
}
