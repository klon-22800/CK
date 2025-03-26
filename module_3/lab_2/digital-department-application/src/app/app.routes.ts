import { Routes } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

export const routes: Routes = [
    {path:"", component: GreetingComponent},
    {path:"page1", component: Page1Component},
    {path:"page2", component: Page2Component},
    {path:"page3", component: Page3Component}
];