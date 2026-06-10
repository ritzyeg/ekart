import { Component } from '@angular/core';
import { Carousel } from "../../ui/carousel/carousel";
import { Card } from '../../ui/card/card';
import { Navbar } from '../../ui/navbar/navbar';
import { Footer } from '../../ui/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Carousel,Card],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
cardData: any[]=[
   {
    id:1,
    title:"Summer Tops Collection",
    description:"Trendy tops starting from ₹399 onwards. Explore floral prints, crop tops, oversized fits, and casual everyday styles. Limited-time discounts available."
    ,image:"https://img.freepik.com/free-photo/three-young-beautiful-smiling-hipster-girls-trendy-summer-clothes-sexy-carefree-women-posing-near-pink-wall-positive-models-going-crazy-having-fun-sunglasses_158538-6515.jpg?semt=ais_hybrid&w=740&q=80"},
    {id:2,
    title:"Women's Ethnic Wear",
    description:"Stylish kurtis and ethnic sets from ₹599 onwards. Perfect for office wear, festive occasions, and everyday elegance with exciting offers.",
    image:"https://img0.junaroad.com/uiproducts/21338619/pri_175_p-1719425966.jpg"
   },
   {
    id:3,
    title:"Fashion Footwear Sale",
    description:"Grab fashionable heels, sneakers, and sandals from ₹499 onwards. Step into comfort and style with up to 50% off on selected brands."
    ,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjiaXGe9PECQ1KsCNGHEZPgVXZFBiFouJEOedAuQYz4OLjjmUL4oqnlCA&s"
  },
   {
    id:3,
    title:"Handbags & Accessories",
    description:"Complete your look with premium handbags, wallets, and accessories starting at ₹299 onwards. New arrivals added every week.",
    image:"https://i.redd.it/lv-bag-accessories-which-ones-worth-it-v0-jwrdmyzn61ec1.jpg?width=3024&format=pjpg&auto=webp&s=17c642c4a920f99531fdf6decefc39293e0a87e7"
  }
  ]
}
