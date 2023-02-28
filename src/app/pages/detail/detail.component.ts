import { ingredients } from './../../core/services/ingredients/ingredients.data';
import { Ingredients } from './../../core/services/ingredients/ingredients.models';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plates } from 'src/app/core/services/plates/plates.models';
import { PlatesService } from 'src/app/core/services/plates/plates.service';
import { IngredientsService } from 'src/app/core/services/ingredients/ingredients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public plates?: Plates ;
  public ingredients: Ingredients [] = [];
  public ingredient: object [] = [];
  
 
   

  constructor(
    private activateRoute: ActivatedRoute,
    private platesService: PlatesService,
    private ingredientsService: IngredientsService,
    private router: Router
  ) {
    this.activateRoute.queryParams.subscribe((queryParams) => {
      console.log(queryParams);  
    })
    // Esta parte la tenemos que tener activa si no tenemos RESOLVER.
    // this.activateRoute.params.subscribe((params) => {
    //   const plateId = params['id'];
    //   this.platesService.getPlateDetail(plateId).subscribe((plates) => {
    //     this.plates = plates;    
    //     const ingredientes = [...plates.ingredients.name]
    //     for(const ingrediente of ingredientes) {
    //       console.log(ingrediente);
                    
    //     }
        
    //   })
    // })
    // para utilizar la informcion de el resolver (Ultimos pasos)
    this.activateRoute.data.subscribe((data) => {
      // Si encuantra el producto o no lo encuentra.
      if(data[0]){
        // Si encuatra el producto en la posicion 0 es data (la posicon es por que es la posicion donde se encuatra el prodcuto.)
        this.plates = data[0] 
        // Si no llega no hacemos nada por que si no exito ya mandamos un mensaje. 
      }
    })
  }

  public ngOnInit(): void {
    // this.plates$ = this.platesService.getPlates();
    this.ingredientsService.getPlates().subscribe((ingredientsFromApi) => {
      this.ingredients = ingredientsFromApi; 
    })
  }

  public navigateToAtras() {
    if(this.plates) {
      this.router.navigate(['plates']);
    }
  }

  
}
