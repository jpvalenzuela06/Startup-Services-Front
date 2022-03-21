import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { UserSesion } from 'src/app/models/user_sesion.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-register-abilities',
  templateUrl: './register-abilities.component.html',
  styleUrls: ['./register-abilities.component.css']
})
export class RegisterAbilitiesComponent implements OnInit {

  @Input() userSesion!: UserSesion;
  public listCategories: Category[] = [];
  public seleccionado!: Category;
  public formRegisterAbility!: FormGroup;
  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formRegisterAbility = this.formBuilder.group(
      {
        category:['', [Validators.required]],
        servicePrice: ['', Validators.required],
        distanceCoverage:['', Validators.required]
      }
    );
    this.categoryService.getCategories().subscribe(result => {
      this.listCategories = result;
      this.seleccionado = this.listCategories[0];
    })
  }

  send()
  {

  }

}
