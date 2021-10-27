import { Injectable } from '@angular/core';
import{AngularFireAuth}from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth:AngularFireAuth,
    private router: Router) { }

    login(email:string,pasword:string){
      this.afAuth.signInWithEmailAndPassword(email,pasword)
    }
    emailSignup(email:string,pasword:string){
      this.afAuth.signInWithEmailAndPassword(email,pasword)
    }
    logout(){
      this.afAuth.signOut().then(()=>{
        this.router.navigate(['/']);
      });
    }
    
}
