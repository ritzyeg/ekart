import { Component } from '@angular/core';
import { Accordion } from "../../ui/accordion/accordion";

@Component({
  selector: 'app-about',
  imports: [Accordion],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  cardData: any[]=[
   {
    id:1,
    title:"hehe",
    description:"Trendy tops starting from ₹399 onwards. Explore floral prints, crop tops, oversized fits, and casual everyday styles. Limited-time discounts available."
   },
    {id:2,
    title:"Women's Ethnic Wear",
    description:"Stylish kurtis and ethnic sets from ₹599 onwards. Perfect for office wear, festive occasions, and everyday elegance with exciting offers.",
   },
   {
    id:3,
    title:"Fashion Footwear Sale",
    description:"Grab fashionable heels, sneakers, and sandals from ₹499 onwards. Step into comfort and style with up to 50% off on selected brands."
  },
   {
    id:3,
    title:"Handbags & Accessories",
    description:"Complete your look with premium handbags, wallets, and accessories starting at ₹299 onwards. New arrivals added every week.",
   }
  ]
}
