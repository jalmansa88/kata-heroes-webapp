import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe( params => {
      console.log(params['id'] );
    });
   }

}
