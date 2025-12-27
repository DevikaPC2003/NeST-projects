import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservices } from '../apiservices';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleviewlist',
  imports: [],
  templateUrl: './singleviewlist.html',
  styleUrl: './singleviewlist.css',
})
export class Singleviewlist {
  //decclare an array
  singleproduct:any;
  //create constructor and initialse object
  //we are appling routerlink parameter and inistialise apiservices
  constructor(private route:ActivatedRoute, private apiservices:Apiservices, private cdr:ChangeDetectorRef) {}               
      ngOnInit() {
        const productid=this.route.snapshot.paramMap.get('titleid');
        if(productid){
          this.apiservices.getsingleproduct(productid).subscribe(data => {        //this is for insitialising
      this.singleproduct = data;
      this.cdr.detectChanges()


        });

    };
  
}

}
