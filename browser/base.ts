import{test} from "@playwright/test";


test.beforeEach("Page Navigation",async({page})=>{
    await page.goto('/account/login');
})



export{test}