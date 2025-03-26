import { Routes } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { confirmInGuard } from './core/guards/confirm-in.guard';
import { confirmOutGuard } from './core/guards/confirm-out.guard';

export const routes: Routes = [
    {path:"", component: GreetingComponent},
    {path:"page1/:id", component: Page1Component, canActivate: [confirmInGuard]},
    {path:"page2", component: Page2Component, canDeactivate: [confirmOutGuard]},
    {path:"page3", component: Page3Component}
];