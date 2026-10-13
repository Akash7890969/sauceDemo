import { Page,Locator } from "playwright";
import { ElementUtil } from "../utils/ElementUtil";

export class ProductDetailsPage{


private eleutil:ElementUtil;
private addCartBtn:string;

    constructor(private page:Page){
     this.eleutil= new ElementUtil(page);
     this.addCartBtn= "//input[@value='Add to Cart']";
 
}


async addProductToCart(){
    await this.eleutil.clickElement(this.addCartBtn);
}




}