import { Component } from '@angular/core';
import { EquipmentDataService } from 'src/app/core/services/equipment-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  equipments$ = this.eventService.getData();
  constructor(private eventService: EquipmentDataService) { }
}
