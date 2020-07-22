import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Wishlist } from "./wishlist.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource } from './rest.datasource';
import { AuthService } from "./auth.service";
import { from } from 'rxjs';

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, Cart, Wishlist, Order, OrderRepository,
    {provide: StaticDataSource, useClass: RestDataSource}, RestDataSource, AuthService]
})

export class ModelModule { }