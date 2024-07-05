import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-data-manager',
  templateUrl: './file-data-manager.component.html',
  styleUrls: ['./file-data-manager.component.css']
})
export class FileDataManagerComponent implements OnInit {
currentUser: string = "Charles Agada"

  constructor() { }

  ngOnInit(): void {
  }

}
