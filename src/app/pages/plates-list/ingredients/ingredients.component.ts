import { Plates } from './../../../core/services/plates/plates.models';
import { Router } from '@angular/router';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent {
  
  
  @Input() public plates?: Plates;
  @Output() public onRemove: EventEmitter<void> = new EventEmitter<void>();


  constructor(private router: Router){}

  public removePlates() {
    this.onRemove.emit();
  }
  // 1
  public editPlates() {
    this.router.navigate(['create-plates'], { queryParams: {
      id: this.plates?._id
    }});
  }

  public navigateToDetail() {
    if(this.plates) {
      this.router.navigate(['detail', this.plates._id]);
    }
  }

  

}
