import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-builtins',
  templateUrl: './pipe-builtins.component.html',
  styleUrls: ['./pipe-builtins.component.css']
})
export class PipeBuiltinsComponent implements OnInit {
  private dateVal: Date = new Date();
  private jsonVal: Object = {moo: 'foo', goo: {too: 'new'}};

  constructor() { }

  ngOnInit() {
  }

}
