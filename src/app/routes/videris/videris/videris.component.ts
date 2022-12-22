import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { G2MiniBarData } from '@delon/chart/mini-bar';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-videris',
  templateUrl: './videris.component.html',
  styleUrls: ['./videris.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViderisComponent implements OnInit {
  data: G2MiniBarData[] = [];
  smallData: G2MiniBarData[] = [];

  constructor(public msg: NzMessageService, private http: _HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.http.get('/chart/visit').subscribe((res: G2MiniBarData[]) => {
      this.data = res;
      this.smallData = res.slice(0, 6);
      this.cdr.detectChanges();
    });
  }
}
