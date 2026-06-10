import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Api } from '../api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-page',
  imports: [],
  templateUrl: './single-page.html',
  styleUrl: './single-page.css',
})
export class SinglePage {
  singleData:any;
  productId:any;
  constructor(private api:Api,private cdr:ChangeDetectorRef,private ar:ActivatedRoute){}//ithrem nalum localhost4200/product,about etc aa varar ipo single-page/id vann
  ngOnInit(){                                                                            //id hold cheyan variable venam ath productId:any ipo ettekunne
     this.productId=this.ar.snapshot.params['id']
     this.api.getSingleProduct(this.productId).subscribe((res:any)=>{
      this.singleData=res;
      this.cdr.detectChanges()    //app.routes.ts ill enth kodukunno athann id ivde params ill pass cheythekunne
  })
}
}
