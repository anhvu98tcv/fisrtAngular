import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';

export interface MyCanComponentDeactive {
  myCandeactive: () => Observable<boolean> | Promise<boolean> | boolean;

}

@Injectable({
  providedIn: 'root'
})
export class CanDeactiveGuardService implements CanDeactivate<MyCanComponentDeactive> {


  canDeactivate(component: MyCanComponentDeactive,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.myCandeactive();
  }
}
