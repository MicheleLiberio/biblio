import { PagesComponent } from './pages/pages.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { BorrowComponent } from './borrow/borrow.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LbryButtonComponent } from '../components/button/lbryButton.component';
import { LbryInputComponent } from '../components/input/lbryInput.component';
import { LbryDropdownComponent } from '../components/dropdown/lbryDropdown.component';
import { LbryTooltipComponent } from '../components/tooltip/LbryTooltip.component';
import { TableComponent } from '../components/table/table.component';
import { ColComponent } from '../components/col/col.component';
import { LbryAccordionComponent } from '../components/accordion/lbryAccordion.component';
import { LbryFilterComponent } from '../components/filter/lbryFilter.component';
import { LbryFilterColComponent } from '../components/filterCol/lbryFilterCol.component';
import { LbryModalComponent } from '../components/modal/lbryModal.component';
import { LbryLoaderComponent } from '../components/loader/lbryLoader.component';
import { LbrySectionComponent } from '../components/section/lbrySection.component';
import { LbryRadioComponent } from '../components/radio/lbryRadio.component';
import { LbryInputSearchComponent } from '../components/inputSearch/lbryInputSearch.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'borrow', component: BorrowComponent},
  {path: 'parent', component: ParentComponentComponent},
  {path: 'pages', component: PagesComponent}
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
                          LbryFilterColComponent,
                          LbryModalComponent,
                          LbryLoaderComponent,
                          LbrySectionComponent,
                          LbryRadioComponent,
                          LbryInputSearchComponent]
