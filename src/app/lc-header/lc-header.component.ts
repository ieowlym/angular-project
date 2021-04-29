import { Component } from "@angular/core";

@Component({
    selector: 'lc-header',
    templateUrl: './lc-header.component.html',
    styleUrls: ['../app.component.css'],
})
export class HeaderComponent {
    showForm: boolean = false;

    openForm(): void {
        this.showForm = !this.showForm;
    }
    closeForm(message: boolean): void{
        this.showForm = message;
    }
}