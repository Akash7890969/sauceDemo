import { Page,Locator,expect } from "playwright/test";
import { ElementUtil } from "../utils/ElementUtil";
import { LoadFnOutput } from "node:module";

export class CheckOutPage{


private eleutil:ElementUtil;
private myCartLnk:string;
private checkoutBtn:string;
private productTxt:Locator;

    constructor(private page:Page){
     this.eleutil= new ElementUtil(page);
     this.myCartLnk= "(//a[text()='My Cart '])[1]";
     this.checkoutBtn="(//input[@value='Check Out'])[1]";
     this.productTxt= this.page.getByText("Black heels - S / Red");
 
}

async navigateToCheckout(){
    await this.eleutil.clickElement(this.myCartLnk);
     await this.eleutil.clickElement(this.checkoutBtn);
    await this.page.waitForTimeout(5000);
}

async productText():Promise<Locator>{
await this.page.waitForLoadState('domcontentloaded');
    return this.productTxt;


}

async productGit():Promise<Locator>{
await this.page.waitForLoadState('domcontentloaded');
    return this.productTxt;


}

}