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
  equipments$ = this.eventService.getData();
    equipments: Array<Equipment> = [] as any;
    subscriptions: Array<Subscription> = [] as any;
    constructor(private eventService: EquipmentDataService) { }
  
    ngOnInit(): void {
      this.subscriptions.push(
        this.eventService.getData().subscribe(data => {
        this.equipments = data;
        console.log(data)
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
