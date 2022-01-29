import { Component, Input, OnInit, Output, EventEmitter, TemplateRef, ContentChild, ChangeDetectorRef, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() arrayTable: any;
  @Input() idTable: string;
  @Input() headerTemplate: TemplateRef<any>;
  @Input() numberItems: number;
  @Output() nbpClick = new EventEmitter();

  rows: any;
  table: any;
  dataTable: any
  showPagination: boolean = false; //booleano che mostra la paginazione
  // numPag: number; // numero di pagine
  array: any; // array che copia l'arrayTable che viene utilizzato nell html
  remainder: number; // numero di elementi nell'ultima pagina
  numPaginations: any; // array che raccoglie il range del numero di pagine
  indexChosen: number; // indice della pagina in cui ci si trova
  numPagShow: number; // numero di pagine da mostrare per volta
  remainderPagShow: number;
  numPaginationsShow: any;
  indexPagShow: number; // indice della pagina in cui ci si trova

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataTable = [];    
    this.array = Object.assign([], this.arrayTable);
    if (this.numberItems < this.arrayTable.length) {
      // mostra la paginazione
      this.showPagination = true;
      // numero di pagine
      let numPag = Math.floor(this.arrayTable.length/this.numberItems);
		  this.remainder = this.arrayTable.length % this.numberItems;
      if (this.remainder > 0) {
        numPag++;
      }
      this.numPaginations = Array.from({ length: numPag }, (_, i) => i + 1 )
      this.clickNumberPag(1);
      this.indexChosen = 1;

      //non mostriamo tutti gli indici ma solo
      //un numero massimo di 5. 
      if (numPag > 5) {
        this.numPagShow = Math.floor(numPag/5)
        this.remainderPagShow = numPag % 5;
        if (this.remainderPagShow > 0) {
          this.numPagShow++;
        }
        this.numPaginationsShow = Array.from({ length: 5 }, (_, i) => i + 1 )
        this.indexPagShow = 1;
      } else {
        this.numPaginationsShow = this.numPaginations; 
        this.numPagShow = 1
        this.indexPagShow = 1;
      }
      
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    // console.log(this.arrayTable);
    this.array = Object.assign([], this.arrayTable);
    // this.cdref.detectChanges();
  }

  clickNumberGroupPageNext() {
    if (this.indexPagShow === this.numPagShow - 1 && this.remainder > 0) {
      this.numPaginationsShow = Array.from({ length: this.remainderPagShow }, (_, i) => i + this.indexPagShow * 5 + 1 )
    } else {
      this.numPaginationsShow = Array.from({ length: 5 }, (_, i) => i + this.indexPagShow * 5 + 1 )
    }
    this.clickNumberPag(this.indexPagShow * 5 + 1);
    this.indexPagShow++;
  }

  clickNumberGroupPageBack() {
    if (this.indexPagShow ===  2) {
      this.indexPagShow--;
      this.numPaginationsShow = Array.from({ length: 5 }, (_, i) => i + 1 ) 
    } else {
      this.indexPagShow--;
      this.numPaginationsShow = Array.from({ length: 5 }, (_, i) => i + (this.indexPagShow - 1) * 5 + 1 )
    }
    this.clickNumberPag((this.indexPagShow - 1) * 5 + 1);
  }

  clickNumberPag(page: number) {
    this.indexChosen = page;
    if (page === this.numPaginations.length) {
      this.array = this.arrayTable.slice(this.numberItems * (page-1), this.numberItems * (page-1) + this.remainder);
    } else {
      this.array = this.arrayTable.slice(this.numberItems * (page-1), this.numberItems * page-1);
    }

  }

  clickFirstPage() {
    this.indexChosen = 1;
    this.indexPagShow = 1
    this.array = this.arrayTable.slice(this.numberItems * (this.indexChosen-1), this.numberItems * this.indexChosen-1);
    if (this.numPagShow > 1) {
      this.numPaginationsShow = Array.from({ length: 5 }, (_, i) => i + 1 )
    } else {
      this.numPaginationsShow = this.numPaginations;
    }
    
  }

  clickLastPage() {
    this.indexChosen = this.numPaginations.length;
    this.indexPagShow = this.numPagShow;
    this.array = this.arrayTable.slice(this.numberItems * (this.indexChosen-1), this.numberItems * this.indexChosen-1);
    if (this.numPagShow > 1) {
      this.numPaginationsShow = Array.from({ length: this.remainderPagShow }, (_, i) => i + (this.indexPagShow - 1) * 5 + 1 );
    } else {
      this.numPaginationsShow = this.numPaginations;
    }
    
  }

  ngAfterViewInit() {
    this.table = document.getElementById(this.idTable);
  }

  sortTable(event, dir) {
    var switching, n  = 0;
    switching = true;
    //Set the sorting direction to ascending:
    // dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    for(let t = 0; t < this.table.getElementsByTagName("th").length-1; t++) {
      if (this.table.getElementsByTagName("th")[t].getElementsByTagName("span")[0].id === event.currentTarget.id ) {
        n = t;
        break;
      }
    }
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      this.rows = this.table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      var x0 = this.rows[1].getElementsByTagName("TD")[n].getElementsByTagName("span")[0];
      var isNumber = !isNaN(x0.innerHTML.toLowerCase());
      if (dir == "asc") {
        if (isNumber) {
          this.array.sort((value1,value2)=>value1[event.currentTarget.id] - value2[event.currentTarget.id])
        } else {
          this.array.sort((value1, value2) => {
            if (value1[event.currentTarget.id] > value2[event.currentTarget.id]) {
              return 1;
            }
            if (value1[event.currentTarget.id] < value2[event.currentTarget.id]) {
              return -1;
            }
            return 0;
          });
        }
      } else if (dir == "desc") {
          if (isNumber) {
            this.array.sort((value1,value2)=>value2[event.currentTarget.id] - value1[event.currentTarget.id])
          } else {
            this.array.sort((value1, value2) => {
              if (value1[event.currentTarget.id] < value2[event.currentTarget.id]) {
                return 1;
              }
              if (value1[event.currentTarget.id] > value2[event.currentTarget.id]) {
                return -1;
              }
              return 0;
            });
          }
      }
      // for (i = 1; i < (this.rows.length - 1); i++) {
      //   //start by saying there should be no switching:
      //   shouldSwitch = false;
      //   /*Get the two elements you want to compare,
      //   one from current row and one from the next:*/
      //   x = this.rows[i].getElementsByTagName("TD")[n].getElementsByTagName("span")[0];
      //   y = this.rows[i + 1].getElementsByTagName("TD")[n].getElementsByTagName("span")[0];

      //   value1 = x.innerHTML.toLowerCase();
      //   value2 = y.innerHTML.toLowerCase();
        
      //   /*check if the two rows should switch place,
      //   based on the direction, asc or desc:*/
      //   if (dir == "asc") {
      //     if (isNumber) {
      //       if (Number(value1) > Number(value2)) {
      //         //if so, mark as a switch and break the loop:
      //         shouldSwitch= true;
      //         break;
      //       } 
      //     } else if (value1 > value2) {
      //         shouldSwitch = true;
      //         break;
      //       }
      //   } else if (dir == "desc") {
      //     if (isNumber) {
      //       if (Number(value1) < Number(value2)) {
      //         //if so, mark as a switch and break the loop:
      //         shouldSwitch = true;
      //         break;
      //       }
      //     } else if (value1 < value2) {
      //       shouldSwitch = true;
      //       break;
      //     } 
      //   }
      // }
      // if (shouldSwitch) {
      //   /*If a switch has been marked, make the switch
      //   and mark that a switch has been done:*/
      //   this.rows[i].parentNode.insertBefore(this.rows[i + 1], this.rows[i]);
      //   switching = true;
      //   //Each time a switch is done, increase this count by 1:
      //   switchcount ++;      
      // } else {
      //   /*If no switching has been done AND the direction is "asc",
      //   set the direction to "desc" and run the while loop again.*/
      //   if (switchcount == 0 && dir == "asc") {
      //     dir = "desc";
      //     switching = true;
      //   }
      // }
    }
  }

  getItem(element: any) {
    this.dataTable.push(element);
  }


  tableButtonClick(value: any) {
    this.nbpClick.emit(value)
  }
}
