import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Wishlist {
    public lines: WishLine[] = [];    
    
    addLine(product: Product) {
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined) {
            alert("Product is already in Wishlist")
        } 
        else {
            this.lines.push(new WishLine(product));
        }  
    }    
        
    
    removeLine(id: number) {
        let index = this.lines.findIndex(line => line.product.id == id);
        this.lines.splice(index, 1);  
    }
        
    
}

export class WishLine {
    constructor(public product: Product) {}
    
}