import { Component , OnInit, OnDestroy} from '@angular/core';
import { StompService } from '@stomp/ng2-stompjs';
import {Message} from '@stomp/stompjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';
  private websocketURL: String = 'http://localhost:8080/socket';
  private topicSubscription;
  public customWSMessage;

  constructor(private stompService: StompService) { }

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

  ngOnInit() {

     this.topicSubscription = this.stompService.subscribe('/chat')
     .subscribe((message: Message) => {
       if (message.body) {
         if (message.body.endsWith('message')){
           console.log('Websocket Msg --->', message.body);
           return;
         }
         this.customWSMessage = JSON.parse(message.body);
          console.log('Parsed Websocket Msg --->', this.customWSMessage);

       }
    });
  }

  onDestroy() {
    this.topicSubscription.unsubscribe();
  }

  onSendMessage() {
    const message = 'simple message';
    this.stompService.publish({destination: '/app/message', body: message});
  }

}
