import { ElementUtil } from "../utils/ElementUtil";
import { Page } from "playwright";

export class LoginPage{

private userNameTxt:string;
private userPassTxt:string;
private loginBtn:string;
private eleutil:ElementUtil;

constructor(private page:Page){
    this.eleutil= new ElementUtil(page);
    this.userNameTxt= "(//input[@type='email'])[1]";
    this.userPassTxt= "(//input[@type='password'])[1]";
    this.loginBtn= "(//input[@type='submit'])[1]";
    
}


async enterUserName(username:any){
    await this.eleutil.fillTextBox(this.userNameTxt,username);

}

async enterPassword(password:any){
 await this.eleutil.fillTextBox(this.userPassTxt, password);
}
async clickLogin(){
 await this.eleutil.clickElement(this.loginBtn);
}
}