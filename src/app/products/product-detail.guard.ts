import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

// service = need injector
@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const id = +next.url[1].path;
      // If url param is not a number or less than one, alert alert!
      if (isNaN(id) || id < 1) {
        alert('invalid product id');
        this.router.navigate(['/products']);
        return false;
      }
    return true;
  }
}
