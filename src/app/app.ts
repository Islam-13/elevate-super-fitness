import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from "./shared/components/ui/navbar/navbar";
import { AppLayout } from "./layouts/app-layout/appLayout";
import { PrimaryBtn } from "./shared/components/ui/primary-btn/primaryBtn";

import { CommonModule } from '@angular/common';
import { Chatbot } from "./features/chatbot/chatbot";

@Component({
  imports: [
    CommonModule,
    RouterModule,
    Navbar,
    AppLayout,
    PrimaryBtn,
    Chatbot
],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Super Fitness';
  isChatOpen = false;

toggleChat() {
  this.isChatOpen = !this.isChatOpen;
}

}
