import { Component } from "@angular/core";
import { DataService } from '../../data/data.service';

@Component({
    selector: 's-profile',
    templateUrl: './s-profile.component.html',
    styleUrls: ['s-profile.component.css']
})
export class ProfileComponent {

    clients = this.clientService.getClients();

    constructor(public clientService: DataService) { }
}