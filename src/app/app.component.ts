import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = 'Ahmed'
  imgURL ='https://picsum.photos/id/237/500/500'

  getname(){
    return this.name
  }
  changeImage (e:KeyboardEvent){
    this.imgURL=(e.target as HTMLInputElement).value
  }
}
