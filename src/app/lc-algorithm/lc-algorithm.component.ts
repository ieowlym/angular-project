import { Component } from "@angular/core";
import { Observable } from "rxjs";

@Component({
    selector: 'lc-algorithm',
    templateUrl: './lc-algorithm.component.html',
    styleUrls: ['../app.component.css', 'lc-algorithm.component.css']
})
export class AlgorithmComponent {

    saved: boolean = false;
    save(){
        this.saved = true;
    }
     
    canDeactivate() : boolean | Observable<boolean>{
     
        if(!this.saved){
            return confirm("Are you sure you want to leave?");
        }
        else{
            return true;
        }
    }

    
}