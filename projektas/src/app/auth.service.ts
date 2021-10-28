import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth:AngularFireAuth){ }
    // private router: Router 

    login(email:string,password:string){
      this.afAuth.signInWithEmailAndPassword(email,password)
      }
      // .then(value=>{
      //   console.log('Veikia');
      //   this.router.navigateByUrl('/pargindinis');
      // })
      // .catch(err=>{
      //   console.log('Nepavyksta',err.message);
      // });
    

    emailSignup(email:string,password:string){
      this.afAuth.signInWithEmailAndPassword(email,password)
      }
      // .then(value=>{
      //   console.log('Prisiregistrtuota',value);
      //   this.router.navigateByUrl('/pagrindinis');
      // })
      // .catch(error=>{
      //   console.log('Nepavyksta',error);
      // });   
    

    logout(){
      this.afAuth.signOut()
      }
      // .then(()=>{
      //   this.router.navigate(['/']);
      // });
    
    
}
