import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  favourites: any [] = [];
  data: any[] = [
    {
      'id' : 10,
      'name' : 'Data22',
      'content' : 'jhjhfkhdkjfhdjfdkjfhkdj',
      'isFav' : false
    },
    {
      'id' : 11,
      'name' : 'Data33',
      'content' : 'poppobjhghgjgjhgjgjhgjjgj',
      'isFav' : false
    },
    {
      'id' : 12,
      'name' : 'Data44',
      'content' : 'kjhjhjhjhghhjhjghjgjhjh',
      'isFav' : false
    }
];

  addToFav(item){
  const index = this.data.indexOf(item);
  this.data[index].isFav = true;
  this.favourites.push(item);
  console.log(this.favourites);
  }

  removeFromFav(item){
  const index = this.data.indexOf(item);
  this.data[index].isFav = false;
  this.favourites.splice(index, 1);
  console.log(this.favourites);

  }

}
