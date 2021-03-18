import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'docs-left',
  templateUrl: './docs-left.component.html',
  styleUrls: ['./docs-left.component.css']
})
export class DocsLeftComponent implements OnInit {
  leftlinks: any[] = [
    {
      "href": "'/docs'",
      "title": "Introduction"
    },
    {
      "href": "'/'",
      "title": "Getting started"
    },
    {
      "href": "'/'",
      "title": "What is Angular?"
    },
    {
      "href": "'/'",
      "title": "Setup"
    },
    {
      "href": "'/'",
      "title": "Intro to Basic Concepts"
    }
  ];

  //navItems: any[] = {'Introduction', 'What is Angular?'};
  constructor() { }

  ngOnInit(): void {
  }

}
