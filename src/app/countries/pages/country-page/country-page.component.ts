import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit{

  constructor( private activatedRoute: ActivatedRoute ){  }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe( ({ id }) => {
      console.log({params : id })
    })
  }



}