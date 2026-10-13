import { Page,Locator } from "playwright";
import { ElementUtil } from "../utils/ElementUtil";



export class ProductListPage{

    private eleutil:ElementUtil;
    private selectProduct:Locator;

constructor(private page:Page){
     this.eleutil= new ElementUtil(page);
     this.selectProduct= this.page.getByText("Black heels");
 
}

async selectItem(){
  await this.eleutil.clickElement(this.selectProduct);
}



}