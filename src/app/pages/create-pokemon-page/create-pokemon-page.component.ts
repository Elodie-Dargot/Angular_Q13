import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { PokedexService } from 'src/app/shared/pokedex.service';

@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
  styleUrls: ['./create-pokemon-page.component.scss']
})
export class CreatePokemonPageComponent implements OnInit {
  myForm!: FormGroup
  click!: boolean
  showErrorMessage!: boolean

  constructor(private formBuilder: FormBuilder,
    private pokedexService: PokedexService,
    private routeur: Router){}

  ngOnInit(): void {

    this.showErrorMessage = false
    this.myForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      image: [null, [Validators.required]],
      description: [null],
    })
  }

  onSubmit(){
    if (this.myForm.valid){
      this.pokedexService.addPokemon(this.myForm.value)
      this.click = true
      setTimeout(() =>{
        this.routeur.navigateByUrl('')
      }, 2000)
    } else {
      this.showErrorMessage = !this.showErrorMessage
    }
  }

}
