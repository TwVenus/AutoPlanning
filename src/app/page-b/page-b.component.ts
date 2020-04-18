import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.css']
})
export class PageBComponent implements OnInit {
  container: any;
  constructor() { }

  ngOnInit(): void {
    this.container = new Chart(<any>{
        chart: {
            backgroundColor: 'white',
            events: {
                load: function () {
    
                    // Draw the flow chart
                    var ren = this.renderer,
                        colors = Highcharts.getOptions().colors,
                        rightArrow = ['M', 0, 0, 'L', 100, 0, 'L', 95, 5, 'M', 100, 0, 'L', 95, -5],
                        leftArrow = ['M', 100, 0, 'L', 0, 0, 'L', 5, 5, 'M', 0, 0, 'L', 5, -5];
    
    
                    // BP label
                    ren.label('BP', 60, 232)
                        .attr({
                            fill: colors[0],
                            stroke: 'white',
                            'stroke-width': 2,
                            padding: 5,
                            r: 5,
                            width: 20,
                        })
                        .css({
                            color: 'white'
                        })
                        .add()
                        .shadow(true);
    
                    // Arrow from BP to Tool List Web
                    ren.path(rightArrow)
                        .attr({
                            'stroke-width': 2,
                            stroke: colors[3],
                        })
                        .translate(95, 245)
                        .add();
    
                    ren.label('Projection', 95, 225)
                        .css({
                            fontSize: '10px',
                            color: colors[3]
                        })
                        .add();
                    // Tool List Web label
                    ren.label('Tool List Web', 210, 232)
                        .attr({
                            r: 5,
                            width: 90,
                            fill: colors[0],
                            stroke: 'white',
                            'stroke-width': 2,
                            padding: 5,
                        })
                        .css({
                            color: 'white',
                            fontWeight: 'bold'
                        })
                        .add();
    
                    // Arrow from Tool List Web to TUMS
                    ren
                        .path([
                            'M', 360, 240,
                            'L', 360, 210,
                            'C', 360, 145, 360, 145, 380, 145,
                            'L', 475, 145,
                            'L', 470, 140,
                            'M', 475, 145,
                            'L', 470, 150
                        ])
                        .attr({
                            'stroke-width': 2,
                            stroke: colors[0]
                        })
                        .add();
    
                    // Move In Summary Web label
                    ren.label('Move In Summary Web', 450, 232)
                        .attr({
                            fill: colors[5],
                            stroke: 'white',
                            'stroke-width': 2,
                            width: 130,
                            padding: 5,
                            r: 5
                        })
                        .css({
                            color: 'white',
                            width: '150px'
                        })
                        .add()
                        .shadow(true);
                  
                    // Arrow from Tool List Web to Move In Summary Web
                    ren.path(rightArrow)
                        .attr({
                            'stroke-width': 2,
                            stroke: colors[0]
                        })
                        .translate(330, 240)
                        .add();
    
                    ren.label('Tool List', 335, 220)
                        .css({
                            color: colors[0],
                            fontSize: '10px'
                        })
                        .add();
    
                    // Arrow from Move In Summary Web to Tool List Web
                    ren.path(leftArrow)
                        .attr({
                            'stroke-width': 2,
                            stroke: colors[5]
                        })
                        .translate(330, 250)
                        .add();
    
                    ren.label('Tool ID', 380, 250)
                        .css({
                            color: colors[5],
                            fontSize: '10px'
                        })
                        .add();
    
                    // TIQ label
                    ren.label('TIQ', 710, 232)
                        .attr({
                            fill: colors[1],
                            stroke: 'white',
                            'stroke-width': 2,
                            width: 30,
                            padding: 5,
                            r: 5
                        })
                        .css({
                            color: 'white',
                            width: '150px'
                        })
                        .add()
                        .shadow(true);
                    // Arrow from Move In Summary Web to TIQ
                    ren.path(rightArrow)
                        .attr({
                            'stroke-width': 2,
                            stroke: colors[5]
                        })
                        .translate(600, 245)
                        .add();
    
                    ren.label('Tool List<br/>MiCAP ODD<br/>RISD', 600, 220)
                        .css({
                            color: colors[5],
                            fontSize: '10px'
                        })
                        .add();
    
                    // Arrow from TIQ to Move In Summary Web
                    ren.path(leftArrow)
                        .attr({
                            'stroke-width': 2,
                            stroke: colors[5]
                        })
                        .translate(600, 245)
                        .add();
                  
                    // TUMS label
                    ren.label('TUMS', 490, 132)
                        .attr({
                            r: 5,
                            width: 50,
                            fill: colors[2],
                            stroke: 'white',
                            'stroke-width': 2,
                            padding: 5,
                        })
                        .css({
                            color: 'white',
                            fontWeight: 'bold'
                        })
                        .add();
                    // Arrow from Move In Summary Web to TUMS
                    ren.path(['M', 520, 230, 'L', 520, 160, 'L', 515, 165, 'M', 520, 160, 'L', 525, 165])
                        .attr({
                            'stroke-width': 2,
                            stroke: colors[5]
                        })
                        .add();
    
                    ren.label('Tool ID<br/>MiCAP ODD', 500, 170)
                        .css({
                            color: colors[5],
                            fontSize: '10px'
                        })
                        .add();
                  
                    // MiCAP In-Service Web label
                    ren.label('MiCAP In-Service Web', 650, 32)
                        .attr({
                            r: 5,
                            width: 140,
                            fill: colors[3],
                            stroke: 'white',
                            'stroke-width': 2,
                            padding: 5,
                        })
                        .css({
                            color: 'white',
                            fontWeight: 'bold'
                        })
                        .add();
                  
                    // Arrow from TIQ to MiCAP In-Service Web
                    ren.path(['M', 730, 230, 'L', 730, 60, 'L', 725, 65, 'M', 730, 60, 'L', 735, 65])
                        .attr({
                            'stroke-width': 2,
                            stroke: colors[1]
                        })
                        .add();
    
                    ren.label('TIQ Complete Tool', 680, 130)
                        .css({
                            color: colors[1],
                            fontSize: '10px'
                        })
                        .add();
                  
                    // MiCAP Report label
                    ren.label('MiCAP Report', 210, 32)
                        .attr({
                            r: 45,
                            width: 95,
                            fill: colors[3],
                            stroke: 'white',
                            'stroke-width': 2,
                            padding: 5,
                        })
                        .css({
                            color: 'white',
                            fontWeight: 'bold'
                        })
                        .add();
                    
                    // Arrow from MiCAP Report to Tool List Web
                    ren.path(['M', 260, 60, 'L', 260, 230, 'L', 255, 225, 'M', 260, 230, 'L', 265, 225])
                        .attr({
                            'stroke-width': 2,
                            stroke: colors[3]
                        })
                        .add();
    
                    ren.label('Tool Status', 235, 130)
                        .css({
                            color: colors[3],
                            fontSize: '10px'
                        })
                        .add();
                  
                    // Arrow from MiCAP Report to MiCAP In-Service Web
                    ren.path(['M', 0, 0, 'L', 300, 0, 'L', 295, 5, 'M', 300, 0, 'L', 295, -5])
                        .attr({
                            'stroke-width': 2,
                            stroke: colors[3]
                        })
                        .translate(330, 45)
                        .add();
    
                    ren.label('MiCAP Detail Data', 430, 25)
                        .css({
                            color: colors[3],
                            fontSize: '10px'
                        })
                        .add();
                  
                    // MiCAP System label
                    ren.label('MiCAP System', 40, 32)
                        .attr({
                            fill: colors[1],
                            stroke: 'white',
                            'stroke-width': 2,
                            padding: 5,
                            r: 5
                        })
                        .css({
                            color: 'white'
                        })
                        .add()
                        .shadow(true);
    
                    // Arrow from MiCAP System to MiCAP Report
                    ren.path(['M', 0, 0, 'L', 60, 0, 'L', 55, 5, 'M', 60, 0, 'L', 55, -5])
                        .attr({
                            'stroke-width': 2,
                            stroke: colors[1],
                        })
                        .translate(140, 45)
                        .add();
    
                    ren.label('MiCAP<br/>Detail<br/>Data', 140, 25)
                        .css({
                            fontSize: '10px',
                            color: colors[1]
                        })
                        .add();
                  
                    // Static Capacity Web label
                    ren.label('Static Capacity Web', 450, 332)
                        .attr({
                            fill: colors[0],
                            stroke: 'white',
                            'stroke-width': 2,
                            width: 115,
                            padding: 5,
                            r: 5
                        })
                        .css({
                            color: 'white',
                            width: '150px'
                        })
                        .add()
                        .shadow(true);
                  
                    // Arrow from Tool List Web to Static Capacity Web
                    ren
                        .path([
                            'M', 360, 250,
                            'L', 360, 240,
                            'C', 360, 345, 360, 345, 380, 345,
                            'L', 445, 345,
                            'L', 440, 340,
                            'M', 445, 345,
                            'L', 440, 350
                        ])
                        .attr({
                            'stroke-width': 2,
                            stroke: colors[0]
                        })
                        .add();
                  
                    // ECN/CL label
                    ren.label('ECN/CL', 450, 382)
                        .attr({
                            fill: colors[0],
                            stroke: 'white',
                            'stroke-width': 2,
                            width: 80,
                            padding: 5,
                            r: 5
                        })
                        .css({
                            color: 'white',
                            width: '150px'
                        })
                        .add()
                        .shadow(true);
                    
                    // Arrow from Tool List Web to ECN/CL
                    ren
                        .path([
                            'M', 360, 250,
                            'L', 360, 240,
                            'C', 360, 395, 360, 395, 380, 395,
                            'L', 445, 395,
                            'L', 440, 390,
                            'M', 445, 395,
                            'L', 440, 400
                        ])
                        .attr({
                            'stroke-width': 2,
                            stroke: colors[0]
                        })
                        .add();
                    
                    // FCST Web label
                    ren.label('FCST Web', 450, 432)
                        .attr({
                            fill: colors[4],
                            stroke: 'white',
                            'stroke-width': 2,
                            width: 80,
                            padding: 5,
                            r: 5
                        })
                        .css({
                            color: 'white',
                            width: '150px'
                        })
                        .add()
                        .shadow(true);
                    
                    // Arrow from Tool List Web to FCST Web
                    ren
                        .path([
                            'M', 360, 250,
                            'L', 360, 240,
                            'C', 360, 445, 360, 445, 380, 445,
                            'L', 445, 445,
                            'L', 440, 440,
                            'M', 445, 445,
                            'L', 440, 450
                        ])
                        .attr({
                            'stroke-width': 2,
                            stroke: colors[0]
                        })
                        .add();
                  
                    // Arrow from Move In Summary Web to FCST Web
                    ren
                        .path([
                            'M', 580, 290,
                            'L', 580, 260,
                            'C', 580, 440, 580, 440, 570, 440,
                            'L', 550, 440,
                            'L', 555, 435,
                            'M', 550, 440,
                            'L', 555, 445
                        ])
                        .attr({
                            'stroke-width': 2,
                            stroke: colors[5]
                        })
                        .add();
                    
                    ren.label('Location', 585, 350)
                        .css({
                            color: colors[5],
                            fontSize: '10px'
                        })
                        .add();
                    
                    // BOM Table label
                    ren.label('BOM Table', 650, 432)
                        .attr({
                            r: 45,
                            width: 85,
                            fill: colors[4],
                            stroke: 'white',
                            'stroke-width': 2,
                            padding: 5,
                        })
                        .css({
                            color: 'white',
                            fontWeight: 'bold'
                        })
                        .add();
                    
                    // Arrow from BOM Table to FCST Web
                    ren.path(['M', 310, 400, 'L', 220, 400, 'L', 225, 405, 'M', 220, 400, 'L', 225, 395])
                        .attr({
                            'stroke-width': 2,
                            stroke: colors[4]
                        })
                        .translate(330, 45)
                        .add();
    
                    ren.label('BOM', 580, 445)
                        .css({
                            color: colors[4],
                            fontSize: '10px'
                        })
                        .add();
                    
                    // Budget Web label
                    ren.label('Budget Web', 655, 382)
                        .attr({
                            fill: colors[4],
                            stroke: 'white',
                            'stroke-width': 2,
                            width: 80,
                            padding: 5,
                            r: 5
                        })
                        .css({
                            color: 'white',
                            width: '150px'
                        })
                        .add()
                        .shadow(true);
                  
                    // Arrow from BOM Table to Budget Web
                    ren.path(['M', 700, 430, 'L', 700, 410, 'L', 695, 415, 'M', 700, 410, 'L', 705, 415])
                        .attr({
                            'stroke-width': 2,
                            stroke: colors[4]
                        })
                        .add();
    
                    ren.label('BOM', 700, 410)
                        .css({
                            color: colors[4],
                            fontSize: '10px'
                        })
                        .add();
    
                }
            }
        },
        title: {
            text: '',
            style: {
                color: 'black'
            }
        },
        accessibility: {
            typeDescription: 'Flowchart'
        }
    

    })
  }

  
}
