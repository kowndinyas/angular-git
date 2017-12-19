import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { ProductsComponent } from './products.component';

const routes: Routes = Route.withShell([
    { path: 'product', component: ProductsComponent, data: { title: ('Product') } },
    { path: '', redirectTo: '/product', pathMatch: 'full' }  
]);

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ProductRoutingModule { }