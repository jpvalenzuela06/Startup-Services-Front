import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSesion } from 'src/app/models/user_sesion.model';
import { LoginService } from 'src/app/services/login.service';
import { app_routing } from 'src/app/app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  
  public formLogin!: FormGroup;
  userSesion! :UserSesion;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group(
      {
        username:['', [Validators.required]],
        password: ['', Validators.required]
      }
    );
  }

  login()
  {
    this.loginService.login(this.formLogin.value).subscribe(result => {
      this.userSesion = result;
      console.log(this.userSesion);
      if(this.userSesion.id != null)
      {
        if(this.userSesion.type == "Customer")
        {
          console.log("Customer");
          this.router.navigate(['request_service']);
          
        }
        if(this.userSesion.type == "Provider")
        {
          this.router.navigate(['registerAbilities']);
        }
      }
    })
  }

}
