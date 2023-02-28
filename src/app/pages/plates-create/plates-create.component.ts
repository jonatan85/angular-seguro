import { ingredients } from './../../core/services/ingredients/ingredients.data';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, of, switchMap } from 'rxjs';
import { MessageService } from 'src/app/core/services/message/message.service';
import { Plates } from 'src/app/core/services/plates/plates.models';
import { PlatesIngredients } from 'src/app/core/services/plates/api/api-plates.models';
import { Ingredients } from 'src/app/core/services/ingredients/ingredients.models';
import { IngredientsService } from 'src/app/core/services/ingredients/ingredients.service';
import { PlatesService } from 'src/app/core/services/plates/plates.service';
import { isNotBadIngredients } from './validators/material.validator';

@Component({
  selector: 'app-plates-create',
  templateUrl: './plates-create.component.html',
  styleUrls: ['./plates-create.component.scss']
})
export class PlatesCreateComponent {
  public platesForm?: FormGroup;
  public materialsEl: PlatesIngredients[] = ingredients;
  public urlImg: string = '';
  public canEdit: boolean = false;
  public platesId?: string;
  // Para la guardia canDeactivate, la vamos a poner a true cuando se cree el nuevo producto.
  public isPlatesCreate: boolean = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    // Para reutilizar el formulario.
    private activatedRoute: ActivatedRoute,
    private platesService: PlatesService,
    private router: Router
  ) {
    this.activatedRoute.queryParams.pipe(
      map((queryParams) => queryParams['id']),
      switchMap((id: string) => {
        if (!id) {
          // Si no hay id en el formulario devolvemos un observable con undefined.
          return of(undefined);
        } else {
          this.platesId = id;
          // Llamamos a product service con la llamada a la api con el id.
          return this.platesService.getPlateDetail(id);
        }
      }),
    ).subscribe((plates?: Plates) => {
                  // Esto devulve un objeto undifined a trudi o falsy
      this.canEdit = !!plates;
      // Si llega vacio pasamos a crear un plato y si no viene relleno para cambiarlo.
      this.createNewForm(plates);
    });
  }

  public ngOnInit() {
    this.platesForm?.get('image')?.valueChanges.subscribe((value) => {
      if (!value) { return; }
      this.urlImg = value;
      this.messageService.setMessage(value);
    });

    this.platesForm?.get('image')?.statusChanges.subscribe((status) => {
      console.log(status);
    });
  }
// Esta funcion la sacamos de if de swicth map para editar el formulario, va a inicializar el formulario.. 
  public createNewForm(plates?: Plates) {
    this.platesForm = this.fb.group({
      name: new FormControl(plates?.name || '', [Validators.required]),
      price: new FormControl(plates?.price ||'', [Validators.required, Validators.maxLength(6)]),
      description: new FormControl(plates?.description ||'', [Validators.required]),
      image: new FormControl(plates?.img || '', [Validators.required]),              // Lo ejcutamos por que lo recibe como si fuera un ValidatorFn.
      ingredients: new FormControl(plates?.ingredients || '', [Validators.required, isNotBadIngredients()]),
    });
  }

  public createNewPlates() {
    if (!this.platesForm?.valid) { return; }
    const platesRequest = this.canEdit && this.platesId
      ? this.platesService.editPlates(this.platesId, this.platesForm?.value)
      : this.platesService.createPlates(this.platesForm?.value);
    platesRequest.subscribe(() => {
      // La vamos a poner a true cuando se cree un nuevo producto.
                            // No interesa que se ponga a true por la guardia.
      this.isPlatesCreate = true;
      this.platesForm?.reset();
      this.router.navigate(['plates-list']);
    });
  }

}

