import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router){
  }

  canLoad(){
    if(this.authService.isLoggedIn()){
      return true;
    }
    else{
      console.log("Unauthorised user, redirecting to login page...");
      this.router.navigate(['/login']);
      return false;
    }
  }

  


}
