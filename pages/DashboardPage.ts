import { Page,Locator } from "playwright";
import { ElementUtil } from "../utils/ElementUtil";
export class DashboardPage{

    private selectCatalouge:Locator;
    private eleutil:ElementUtil;

constructor(private page:Page){
     this.eleutil= new ElementUtil(page);
     this.selectCatalouge= this.page.getByText("Catalog");
}



async navigateCatalog(){
    await this.eleutil.clickElement(this.selectCatalouge);
}







}