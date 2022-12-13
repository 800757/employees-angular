import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Equipment } from 'src/app/core/models/equipment';
import { EquipmentDataService } from 'src/app/core/services/equipment-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    equipments: Array<Equipment> = [] as any;
    subscriptions: Array<Subscription> = [] as any;
    
	constructor(private readonly equipmentService: EquipmentDataService) { }
  
    ngOnInit(): void {
      
      this.subscriptions.push(
        this.equipmentService.getData().subscribe(eq => {
        this.equipments = eq.data;
		console.log(this.equipments)
      },
          )
      );
    }
  
     ngOnDestroy(): void {
      this.subscriptions.forEach(s => {
        s.unsubscribe();
      });
    }
  }
