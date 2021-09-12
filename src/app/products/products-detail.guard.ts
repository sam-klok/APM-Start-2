import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsDetailGuard implements CanActivate {
  constructor(private router: Router){
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id = Number(route.paramMap.get('id'));

      if (isNaN(id) || id < 1){
        alert(`invalid product id ${id}`);
        console.log(`invalid product id ${id}`);
        this.router.navigate(['/products']);
        return false;
      }
      
    return true;
  }
  
}
