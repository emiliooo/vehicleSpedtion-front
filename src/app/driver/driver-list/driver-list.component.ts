import { Component } from '@angular/core';

export interface Driver {
  driverId: number;
  fullName: string;
  licenseNumber: string;
  licenseCategory: string;
  contactPhone: string;
  incidentHistory: string;
}

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrl: './driver-list.component.scss'
})
export class DriverListComponent {
  displayedColumns: string[] = ['driverId', 'fullName', 'licenseNumber', 'licenseCategory', 'contactPhone', 'incidentHistory'];
  dataSource: Driver[] = [
    {
      driverId: 1,
      fullName: "Jan Kowalski",
      licenseNumber: "KRK123456",
      licenseCategory: "B",
      contactPhone: "+48 123 456 789",
      incidentHistory: "Brak incydentów"
    },
    {
      driverId: 2,
      fullName: "Anna Nowak",
      licenseNumber: "WA789012",
      licenseCategory: "B,C",
      contactPhone: "+48 987 654 321",
      incidentHistory: "Drobna kolizja w 2022"
    },
    {
      driverId: 3,
      fullName: "Piotr Wiśniewski",
      licenseNumber: "GD345678",
      licenseCategory: "B,C,D",
      contactPhone: "+48 246 813 579",
      incidentHistory: "Mandat za przekroczenie prędkości w 2023"
    },
    {
      driverId: 4,
      fullName: "Katarzyna Dąbrowska",
      licenseNumber: "PO901234",
      licenseCategory: "B",
      contactPhone: "+48 369 258 147",
      incidentHistory: "Czysta historia"
    },
    {
      driverId: 5,
      fullName: "Michał Lewandowski",
      licenseNumber: "ŁD567890",
      licenseCategory: "A,B",
      contactPhone: "+48 147 258 369",
      incidentHistory: "Dwa mandaty za złe parkowanie w 2021"
    }
  ];
}
