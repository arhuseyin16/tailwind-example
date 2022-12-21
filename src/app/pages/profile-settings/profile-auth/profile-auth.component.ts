import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../../service/modal-service/modal.service";

@Component({
  selector: 'app-profile-auth',
  templateUrl: './profile-auth.component.html',
  styleUrls: ['./profile-auth.component.scss']
})
export class ProfileAuthComponent implements OnInit {
  head1 = true;
  head2 = false;
  head3 = false;
  head4 = false;
  head5 = false;

  data = [
    {
      id: 1,
      main: 'Nakit Durumu',
      child: [
        {id: 1, name: 'Nakit Akışı Genel Rapor', status: true},
        {id: 2, name: 'Nakit Akışı ', status: true},
        {id: 3, name: 'Varlık Akışı Genel Rapor', status: false},
        {id: 4, name: 'Varlık Akışı Detay Rapor', status: true},
      ]
    },
    {
      id: 2,
      main: 'Hesap Hareketleri Sistemi',
      child: [
        {id: 1, name: 'Nakit Akışı Genel Rapor', status: false},
        {id: 2, name: 'Nakit Akışı Detay Rapor', status: true},
        {id: 3, name: 'Varlık Akışı Genel Rapor', status: false},
        {id: 4, name: 'Varlık Akışı Detay Rapor', status: true},
      ]
    },
    {
      id: 1,
      main: 'Nakit Durumu',
      child: [
        {id: 1, name: 'Nakit Akışı Genel Rapor', status: true},
        {id: 2, name: 'Nakit Akışı ', status: true},
        {id: 3, name: 'Varlık Akışı Genel Rapor', status: false},
        {id: 4, name: 'Varlık Akışı Detay Rapor', status: true},
      ]
    }
  ]

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  stepClick(active: string) {
    if (active === '1') {
      this.head1 = true;
      this.head2 = false;
      this.head3 = false;
      this.head4 = false;
      this.head5 = false;
    } else if (active === '2') {
      this.head2 = true;
      this.head1 = false;
      this.head3 = false;
      this.head4 = false;
      this.head5 = false;
    } else if (active === '3') {
      this.head3 = true;
      this.head1 = false;
      this.head2 = false;
      this.head4 = false;
      this.head5 = false;
    } else if (active === '4') {
      this.head4 = true;
      this.head1 = false;
      this.head3 = false;
      this.head2 = false;
      this.head5 = false;
    } else if (active === '5') {
      this.head5 = true;
      this.head4 = false;
      this.head1 = false;
      this.head3 = false;
      this.head2 = false;
    }
  }

  editModal() {
    this.modalService.bankAuthEditModal().afterClose.subscribe((res: any) => {
      console.log(res);
    });
  }
}
