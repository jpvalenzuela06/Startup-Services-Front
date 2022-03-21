import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/models/provider.model';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-list-providers',
  templateUrl: './list-providers.component.html',
  styleUrls: ['./list-providers.component.css']
})
export class ListProvidersComponent implements OnInit {

  listProviders: Provider[] = []
  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.providerService.getproviders().subscribe(result => {
      this.listProviders= result;
    })
  }

}
