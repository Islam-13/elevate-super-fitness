import { Component } from '@angular/core';
import { Navbar } from "../../shared/components/ui/navbar/navbar";
import { RouterModule } from "@angular/router";
import { Chatbot } from "src/app/features/chatbot/chatbot";

@Component({
  selector: 'app-app-layout',
  imports: [RouterModule, Navbar, Chatbot],
  templateUrl: './appLayout.html',
  styleUrl: './appLayout.scss',
})
export class AppLayout {}
