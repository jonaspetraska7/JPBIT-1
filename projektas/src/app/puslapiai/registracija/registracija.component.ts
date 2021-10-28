import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ApiService } from 'src/app/servisai/api.service';


@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})

export class RegistracijaComponent implements OnInit {


  arTuscia: number = 0;
  UserForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      emailAtkurimas: new FormControl('')
    })

    RestoreForm: FormGroup = new FormGroup(
      {
        email: new FormControl('', [Validators.required])
      });

  constructor(private api: ApiService) { }

  ngOnInit() {
  }
  

  postUser(body: any) {
    this.api.postUser(0, body).subscribe(data => {
      console.log(data)
      this.UserForm.reset()
    }, error => console.log(error));
    


    /*
    let duomenys = {
      name: this.UserForm.value.name,
      email: this.UserForm.value.email,
      password: this.UserForm.value.password
    }
    console.log(duomenys)
    this.api.postUser(0, duomenys).subscribe(data => {
      console.log(data)
      if ('error' in data) alert(data.error)
      else{
        this.UserForm.reset()
        window.location.href=('/pagrindinis');
      }
    }, error => console.log(error)); */
  }
  newUser(e: any): boolean {
    let formData = new FormData(e.target);
    this.postUser(formData);
    return true
  }

atkurti=false;
  slaptazodzioAtkurimas(){
    this.atkurti=true;
  }
  siustiAtkurimui(){
this.UserForm.value.emailAtkurimas;
console.log(this.UserForm.value.emailAtkurimas);
this.atkurti=false;
this.UserForm.reset();
  }
}







