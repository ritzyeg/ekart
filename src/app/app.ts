import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./ui/navbar/navbar";
import { Footer } from "./ui/footer/footer";
import { Carousel } from './ui/carousel/carousel';
import { Home } from './pages/home/home';
import { Card } from "./ui/card/card";
import { About } from "./pages/about/about";

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ekart');
}
