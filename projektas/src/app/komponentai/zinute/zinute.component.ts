import { Component, OnInit } from '@angular/core';
//import { ApiService } from 'src/app/servisai/api.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-zinute',
  templateUrl: './zinute.component.html',
  styleUrls: ['./zinute.component.css']
})
export class ZinuteComponent implements OnInit {
  MessageForm: FormGroup = new FormGroup(
    {
      //user: new FormControl(this.userId, []),
      body: new FormControl('', [Validators.required])
    });

    constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) { }

  ngOnInit() { 
    
  }

  async addMessages(e: any){
    //let user = await this.auth.currentUser
    let formData = new FormData(e.target)
    let zintutesTekstas = formData.get('body')?.toString();
    console.log(zintutesTekstas)
    let objektas = {
      body: zintutesTekstas,
      date: new Date().toISOString()
      //user: user?.displayName


    }
    this.firestore.collection('messages').add(objektas);
    return false;
  }
/*
  addMessages(){
    let naujaZinute = {
     body : "Proginam kaip seiniau tik naujai",
     date : "2021-10-28", 
     id : "0",
     user : "Egidijus"
    }
    this.firestore.collection('messages').add(naujaZinute);
  }
  */
  /*
  get userId(){
    return this.firestore.user.id
  }
  
  postMessage(body: any, f: any) {
    this.api.postMessage(0, body).subscribe(data => {
      console.log(data)
      f.reset()
      this.getMessages()
    }, error => console.log(error));
  }

  getMessages() {
    this.api.getMessages().subscribe(data => this.api.messages = data, error => console.log(error));
  }

*/
/*
  onSubmit(e: any) {
    let formData = new FormData(e.target);
    formData.set('user',this.api.user.id)
    this.postMessage(formData, e.target)
    return false
  }
  */
}
