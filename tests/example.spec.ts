import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ProductListPage } from '../pages/ProductListPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { CheckOutPage } from '../pages/CheckOutPage';
import{test} from'../browser/base';
import 'dotenv/config';


  
test('Sauce Login', async ({ page }) => {
  
  const login=new LoginPage(page);
  await login.enterUserName(process.env.App_username);
  await login.enterPassword(process.env.App_password);  
  await login.clickLogin();
  
  const dash= new DashboardPage(page);
  await dash.navigateCatalog();

  const pl= new ProductListPage(page);
  await pl.selectItem();

  const pd= new ProductDetailsPage(page);
  await pd.addProductToCart();

  const check= new CheckOutPage(page);
  await check.navigateToCheckout();
  // const textval= await check.productText()
  // await expect(textval).toBeVisible();
   
});


