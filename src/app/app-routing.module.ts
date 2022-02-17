import { PagesComponent } from './pages/pages.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { BorrowComponent } from './borrow/borrow.component';
import { SearchBookComponent } from './borrow/search-book/search-book.component';
import { DataTablesComponent } from './borrow/data-tables/data-tables.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LbryButtonComponent } from '../components/button/lbryButton.component';
import { LbryInputComponent } from '../components/input/lbryInput.component';
import { LbryDropdownComponent } from '../components/dropdown/lbryDropdown.component';
import { LbryTooltipComponent } from '../components/tooltip/LbryTooltip.component';
import { LbryTableComponent } from '../components/table/lbryTable.component';
import { ColComponent } from '../components/col/col.component';
import { LbryAccordionComponent } from '../components/accordion/lbryAccordion.component';
import { LbryFilterComponent } from '../components/filter/lbryFilter.component';
import { LbryFilterColComponent } from '../components/filterCol/lbryFilterCol.component';
import { LbryModalComponent } from '../components/modal/lbryModal.component';
import { LbryLoaderComponent } from '../components/loader/lbryLoader.component';
import { LbrySectionComponent } from '../components/section/lbrySection.component';
import { LbryRadioComponent } from '../components/radio/lbryRadio.component';
import { LbryInputSearchComponent } from '../components/inputSearch/lbryInputSearch.component';
import { SectionBookComponent } from './borrow/search-book/section-book/section-book.component';
import { LbryCalendarComponent } from './../components/calendar/lbryCalendar.component';

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
export const routingComponents = [HomeComponent, BorrowComponent, ParentComponentComponent, SearchBookComponent,DataTablesComponent]
export const components = [LbryButtonComponent, 
                          LbryInputComponent, 
                          LbryDropdownComponent, 
                          LbryTooltipComponent, 
                          LbryTableComponent,
                          ColComponent,
                          LbryAccordionComponent,
                          LbryFilterComponent,
                          LbryFilterColComponent,
                          LbryModalComponent,
                          LbryLoaderComponent,
                          LbrySectionComponent,
                          LbryRadioComponent,
                          LbryInputSearchComponent,
                          SectionBookComponent,
                          LbryCalendarComponent]
