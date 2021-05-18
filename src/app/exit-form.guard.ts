import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExitFormGuard implements CanDeactivate<ComponentCanDeactivate>{
 
  canDeactivate(component: ComponentCanDeactivate) : Observable<boolean> | boolean{
       
      return component.canDeactivate ? component.canDeactivate() : true;
  }
}
//CanDeactivate<unknown> {
//   canDeactivate(
//     component: unknown,
//     currentRoute: ActivatedRouteSnapshot,
//     currentState: RouterStateSnapshot,
//     nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
  
// }

export interface ComponentCanDeactivate{
  canDeactivate: () => boolean | Observable<boolean>;
}