import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';
import { Provider } from 'src/app/models/provider.model';
import { CustomerService } from 'src/app/services/customer.service';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  provider!: Provider;
  customer!: Customer;
  public formSingUp!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private providerService: ProviderService,
    private customerService: CustomerService
    ) { }

  ngOnInit(): void {
    this.formSingUp = this.formBuilder.group({
      username:['', [Validators.required]],
      password: ['', Validators.required],
      contact:['', Validators.required],
      rol:['', Validators.required]
    });
  }

  send(): any {

    console.log(this.formSingUp.value.rol == 'Customer')
    if(this.formSingUp.value.rol == 'Provider')
    {
      this.providerService.postProvider(this.formSingUp.value).subscribe(result => {
        this.provider = result;
        console.log(this.provider)
      });
    }else{
      this.customerService.postCustomer(this.formSingUp.value).subscribe(result => {
        this.customer = result;
        console.log(this.customer)
      })
    }
    
  }

}
