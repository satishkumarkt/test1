import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { transition, trigger, style, animate } from '@angular/animations';
import * as c3 from 'c3';

@Component({
  selector: 'app-employee-vendor-pie-chart',
  templateUrl: './employee-vendor-pie-chart.component.html',
  styleUrls: [
    './employee-vendor-pie-chart.component.scss',
    '../../../../../node_modules/c3/c3.min.css',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('400ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class EmployeeVendorPieChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      const chart2 = c3.generate({
        bindto: '#chart2',

        data: {
          // iris data from R
          columns: [
            ['Failed', 36],
            ['Passed', 52]

          ],
          type: 'donut',
          onclick: function (d, i) {
            console.log('onclick', d, i);
          },
          onmouseover: function (d, i) {
            console.log('onmouseover', d, i);
          },
          onmouseout: function (d, i) {
            console.log('onmouseout', d, i);
          }
        },
        color: {
          pattern: ['#6BD600', '#349622']
        },
        donut: {
          // tooltip: {
          //   format: {
          //     value: function (value, ratio, id) {
          //       return value;
          //     }
          //   }
          // },
          label: {
            format: function (value) {
              return value;
            }
          },
          title: 'Total 88',
          width: 90
        }
      });

      const chart3 = c3.generate({
        bindto: '#chart3',
        data: {
          // iris data from R
          columns: [
            ['Active', 31],
            ['Deactive', 69]

          ],
          type: 'donut',
          onclick: function (d, i) {
            console.log('onclick', d, i);
          },
          onmouseover: function (d, i) {
            console.log('onmouseover', d, i);
          },
          onmouseout: function (d, i) {
            console.log('onmouseout', d, i);
          }
        },
        color: {
          pattern: ['#6BD600', '#349622']
        },
        donut: {
          label: {
            format: function (value) {
              return value;
            }
          },
          title: 'Total 100',
          width: 90
        }
      });

      const vendorsFirst = c3.generate({
        bindto: '#vendorsFirst',
        data: {
          // iris data from R
          columns: [
            ['Active', 22],
            ['Deactive', 103]

          ],
          type: 'donut',
          onclick: function (d, i) {
            console.log('onclick', d, i);
          },
          onmouseover: function (d, i) {
            console.log('onmouseover', d, i);
          },
          onmouseout: function (d, i) {
            console.log('onmouseout', d, i);
          }
        },
        color: {
          pattern: ['#006580', '#00ADBB']
        },
        donut: {
          label: {
            format: function (value) {
              return value;
            }
          },
          title: 'Total 125',
          width: 90
        }
      });


      const vendorsSecond = c3.generate({
        bindto: '#vendorsSecond',
        data: {
          // iris data from R
          columns: [
            ['Active', 111],
            ['Deactive', 132]

          ],
          type: 'donut',
          onclick: function (d, i) {
            console.log('onclick', d, i);
          },
          onmouseover: function (d, i) {
            console.log('onmouseover', d, i);
          },
          onmouseout: function (d, i) {
            console.log('onmouseout', d, i);
          }
        },
        color: {
          pattern: ['#006580', '#00ADBB']
        },
        donut: {
          label: {
            format: function (value) {
              return value;
            }
          },
          title: 'Total 243',
          width: 90
        }
      });


    }, 1);
  }

}
