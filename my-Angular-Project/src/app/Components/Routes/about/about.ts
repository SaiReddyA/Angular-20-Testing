import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  
  username!:string
  UserEmail!:string

  Submit(){
      if(this.username != undefined  && this.username != ''&& this.UserEmail !=undefined)
     {
       console.log('submit called')
      console.log('submit called', this.username, this.UserEmail)
    }else{
      alert('not valid form')
    }

  }
}
