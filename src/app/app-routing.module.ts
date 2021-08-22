import { ParentComponentComponent } from './parent-component/parent-component.component';
import { BorrowComponent } from './borrow/borrow.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LbryButtonComponent } from '../components/button/lbryButton.component';
import { LbryInputComponent } from '../components/input/lbryInput.component';
import { LbryDropdownComponent } from '../components/dropdown/lbryDropdown.component';
import { LbryTooltipComponent } from 'src/components/tooltip/LbryTooltip.component';
import { TableComponent } from 'src/components/table/table.component';
import { ColComponent } from 'src/components/col/col.component';
import { LbryAccordionComponent } from 'src/components/accordion/lbryAccordion.component';
import { LbryFilterComponent } from 'src/components/filter/lbryFilter.component';
import { LbryFilterColComponent } from 'src/components/filterCol/lbryFilterCol.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'borrow', component: BorrowComponent},
  {path: 'parent', component: ParentComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, BorrowComponent, ParentComponentComponent]
export const components = [LbryButtonComponent, 
                          LbryInputComponent, 
                          LbryDropdownComponent, 
                          LbryTooltipComponent, 
                          TableComponent,
                          ColComponent,
                          LbryAccordionComponent,
                          LbryFilterComponent,
                          LbryFilterColComponent]
