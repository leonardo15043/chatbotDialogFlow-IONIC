import { Component, OnInit , Input } from '@angular/core';
import { Message } from '../models/message';
import { DialogflowService } from '../services/dialogflow.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss'],
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  private message : Message;

  @Input('messages')
  private messages : Message[];

  constructor(
    private dialogFlowService: DialogflowService
  ) { }

  ngOnInit() {}

  public sendMessage(): void {

    if(this.message.content != '') {

      this.message.timestamp = new Date();
      this.messages.push(this.message);
  
      this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
          this.messages.push(
            new Message(res.result.fulfillment.speech, 'assets/images/bot.png', res.timestamp)
          ); 
        });

     this.dialogFlowService.getResponse(this.message.content);

     this.message = new Message('', 'assets/images/user.png');

  }

  }

}
