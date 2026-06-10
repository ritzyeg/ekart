import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductCard } from '../../product-card/product-card';
import { Api } from '../../api';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})

/*export class Products {
  cardData: any[]=[
   {
    id:1,
    title:"Floral Print Summer Top",
    description:"Trendy tops starting from ₹399 onwards. Explore floral prints, crop tops, oversized fits, and casual everyday styles. Limited-time discounts available."
    ,image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHmswTBuNmJz5_grTaKRPDOlxaQyoJJ9x75E5h1gzcmx8cs19IupnBcT2R9HH9eNInXqZpadM6lCtPtXSnpkmACxyvdAWz4CoyRCp3g6pDU_MA3-Y8h1hQ"},
    {id:2,
    title:"Women's Cotton Kurti",
    description:"Elegant cotton kurti featuring a modern design and breathable fabric. Suitable for work and casual wear. Price: ₹699",
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbZGQwEtpn89uRFmzBNGgwgbtyvIAP3iLj0pabQcttgCS53Gw8Qmx6WJjKnz2ByU_TVPZcmgyvjpv9EdgiNLykbD9gt4GmW59608a7_HJAbJojswF3tiPxwQ"
   },
   {
    id:3,
    title:"White Casual Sneakers",
    description:"Comfortable and stylish sneakers designed for daily use. Easy to pair with jeans, dresses, and more. Price: ₹999"
    ,image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQoj2h9wu_R9swmX0FVLG1DF6Gj7muJVsI0syv7xNsnabA76h7k5sUDX5ZSgnj6TGuLbJxDFa0j1fE-chKYUqDgT74rMaA0TturMETJy2X0x3B7LN6JYqREvuQ"
  },
   {
    id:3,
    title:"Classic Tote Handbag",
    description:"Spacious handbag with a timeless design. Ideal for shopping, travel, and everyday essentials. Price: ₹799",
    image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSkhje5fZxB3ZDkP7MIQ5N1evjFsJIfjJzqNx1cv3QnoWvOc3HmhNzKkmnyb4NQH1WCQg0Kknw9y8Bc3ylti9Fd2Gzfh1GIhlFyTqGxu_aWTPMwwFlckRkW5y0"},
    {
    id:3,
    title:"Denim Jacket",
    description:"A stylish denim jacket crafted for all seasons. Features a comfortable fit and classic design, making it a perfect addition to any casual outfit. Price: ₹1,299",
    image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRnNtmRC5b2KQtBsalPszCVbHa-JkY9iE2hqmjzUtRanEzcnRVZojJ_cGtvsn_QrJ0BrIoQx06cECOowWOtevl0SxYc-6Ed"}

  ]
//}*/
export class Products {
  products:any; //data declare cheyan variable
  constructor(private api:Api,private cdr:ChangeDetectorRef){}  //file ine access cheyan constructor visiblity mode alias name
//products file ill angular inbuilt fn ngonit ill ninn content kittan runtime ill thanne api call cheyan just like enter
   ngOnInit(){   
     this.api.getAllProducts().subscribe((res:any)=>{
       this.products=res;
       this.cdr.detectChanges()//then storing content in products variable
     })              //api.ts then products.ts then products.html ill loop cheyanam
                     //changedetectoref to detect change(response kitti kayiyumbo odane change detect cheyan pattum)
   }
  }
