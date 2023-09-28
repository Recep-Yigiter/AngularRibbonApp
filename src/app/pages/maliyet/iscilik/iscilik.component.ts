import { Component, OnInit } from '@angular/core';
import { IscilikService } from 'src/app/core/services/iscilik/iscilik.service';

@Component({
  selector: 'app-iscilik',
  templateUrl: './iscilik.component.html',
  styleUrls: ['./iscilik.component.scss']
})
export class IscilikComponent implements OnInit {

  constructor(private isclikService:IscilikService) { }

  async ngOnInit() {
    const test=await this.isclikService.GetList();

  }

}
