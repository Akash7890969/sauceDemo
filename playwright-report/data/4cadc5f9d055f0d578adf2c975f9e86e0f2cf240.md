# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> Sauce Login
- Location: tests\example.spec.ts:12:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('xpath=(//input[@value=\'Check Out\'])[1]')

```

# Page snapshot

```yaml
- generic [ref=f8e1]:
  - paragraph [ref=f8e4]
  - banner [ref=f8e5]:
    - generic [ref=f8e6]:
      - generic [ref=f8e8]:
        - search:
          - button "Submit" [ref=f8e9] [cursor=pointer]
          - textbox "Search" [ref=f8e10]
      - navigation [ref=f8e12]:
        - link "Search" [ref=f8e13] [cursor=pointer]:
          - /url: /search
        - link "About Us" [ref=f8e14] [cursor=pointer]:
          - /url: /pages/about-us
        - link "Log In" [ref=f8e15] [cursor=pointer]:
          - /url: /account/login
        - link "Sign up" [ref=f8e16] [cursor=pointer]:
          - /url: /account/register
      - generic [ref=f8e18]:
        - link "My Cart (1)" [active] [ref=f8e19] [cursor=pointer]:
          - /url: "#"
          - text: My Cart
          - generic [ref=f8e20]: (1)
        - link "Check Out" [ref=f8e21] [cursor=pointer]:
          - /url: /cart
    - generic [ref=f8e24]:
      - heading [level=1] [ref=f8e26]:
        - link [ref=f8e27] [cursor=pointer]:
          - /url: /
          - img "Sauce Demo" [ref=f8e28]
      - heading "Just a demo site showing off what Sauce can do." [level=3] [ref=f8e31]
  - generic [ref=f8e32]:
    - navigation [ref=f8e34]:
      - list [ref=f8e35]:
        - listitem [ref=f8e36]:
          - link "Home" [ref=f8e37] [cursor=pointer]:
            - /url: /
        - listitem [ref=f8e38]:
          - link "Catalog" [ref=f8e39] [cursor=pointer]:
            - /url: /collections/all
        - listitem [ref=f8e40]:
          - link "Blog" [ref=f8e41] [cursor=pointer]:
            - /url: /blogs/news
        - listitem [ref=f8e42]:
          - link "About Us" [ref=f8e43] [cursor=pointer]:
            - /url: /pages/about-us
        - listitem [ref=f8e44]:
          - link "Wish list" [ref=f8e45] [cursor=pointer]:
            - /url: "#sauce-show-wish-list"
        - listitem [ref=f8e46]:
          - link "Refer a friend" [ref=f8e47] [cursor=pointer]:
            - /url: "#sauce-show-refer-friend"
      - generic [ref=f8e48]:
        - link [ref=f8e49] [cursor=pointer]:
          - /url: http://www.facebook.com/shopify
        - link [ref=f8e50] [cursor=pointer]:
          - /url: http://www.twitter.com/sauce_io
        - link [ref=f8e51] [cursor=pointer]:
          - /url: http://www.instagram.com/shopify
        - link [ref=f8e52] [cursor=pointer]:
          - /url: http://www.pinterest.com/chrisjhoughton/awesome-facebook-integration/
        - link [ref=f8e53] [cursor=pointer]:
          - /url: /blogs/news.atom
    - generic [ref=f8e55]:
      - generic [ref=f8e56]:
        - link "Home" [ref=f8e58] [cursor=pointer]:
          - /url: /
        - text: —
        - link "Black heels" [ref=f8e60] [cursor=pointer]:
          - /url: /products/flower-print-jeans
      - generic [ref=f8e61]:
        - img "Product Image" [ref=f8e63]
        - generic [ref=f8e65]:
          - heading "Black heels" [level=1] [ref=f8e66]
          - heading "£45.00" [level=2] [ref=f8e67]
          - generic [ref=f8e68]:
            - generic [ref=f8e69]:
              - generic [ref=f8e70]: Size
              - combobox "Size" [ref=f8e71]:
                - option "S" [selected]
                - option "M"
                - option "L"
            - generic [ref=f8e72]:
              - generic [ref=f8e73]: Color
              - combobox "Color" [ref=f8e74]:
                - option "Red" [selected]
          - button "Add to Cart" [ref=f8e75] [cursor=pointer]
        - generic [ref=f8e77]:
          - text: This area is populated by the product description. If you ever run out of things to say about what you're selling then take a look at
          - link "9 ways to write compelling product descriptions" [ref=f8e78] [cursor=pointer]:
            - /url: http://www.shopify.ca/blog/8211159-9-simple-ways-to-write-product-descriptions-that-sell
          - text: . In Theme Settings you can also change render the product description to the write of the product images.
    - contentinfo [ref=f8e79]:
      - generic [ref=f8e80]:
        - navigation [ref=f8e82]:
          - heading "Footer" [level=2] [ref=f8e83]
          - link "Search" [ref=f8e84] [cursor=pointer]:
            - /url: /search
          - link "About Us" [ref=f8e85] [cursor=pointer]:
            - /url: /pages/about-us
        - generic [ref=f8e87]:
          - heading "About Us" [level=2] [ref=f8e88]
          - paragraph [ref=f8e90]:
            - strong [ref=f8e91]:
              - text: This is a demo site created for
              - link "Sauce" [ref=f8e92] [cursor=pointer]:
                - /url: http://sauceapp.io
            - text: ", an awesome new way to make your Shopify site social. Sauce allows you to let customers to share what they purchase to their friends, and see what their friends have purchased or \"wanted\" on your store."
        - generic [ref=f8e94]:
          - img "We accept Amex" [ref=f8e95]
          - img "We accept Visa" [ref=f8e96]
          - img "We accept Mastercard" [ref=f8e97]
      - generic [ref=f8e98]:
        - generic [ref=f8e100]:
          - text: Copyright © 2026 Sauce Demo.
          - link "Shopping Cart by Shopify" [ref=f8e101] [cursor=pointer]:
            - /url: https://www.shopify.co.uk/tour/shopping-cart?utm_campaign=poweredby&utm_medium=shopify&utm_source=onlinestore
          - text: .
        - navigation [ref=f8e103]:
          - link "Search" [ref=f8e104] [cursor=pointer]:
            - /url: /search
          - link "About Us" [ref=f8e105] [cursor=pointer]:
            - /url: /pages/about-us
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class ElementUtil {
  4  | 
  5  | constructor(private page: Page) {
  6  |     
  7  | }
  8  | 
  9  | // Normal locator: CSS, XPath, ID, attributes
  10 | async fillTextBox(locator: string | Locator, value: string): Promise<void> {
  11 |     const element = typeof locator === 'string'
  12 |         ? this.page.locator(locator)
  13 |         : locator;
  14 | 
  15 |     await element.fill(value);
  16 | }
  17 | 
  18 | async clickElement(locator: string | Locator): Promise<void> {
  19 |     const element = typeof locator === 'string'
  20 |         ? this.page.locator(locator)
  21 |         : locator;
  22 | 
> 23 |     await element.click();
     |                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  24 | }
  25 | 
  26 | async getElementText(locator: string | Locator): Promise<string> {
  27 |     const element = typeof locator === 'string'
  28 |         ? this.page.locator(locator)
  29 |         : locator;
  30 | 
  31 |     return await element.innerText();
  32 | }
  33 | 
  34 | async isElementVisible(locator: string | Locator): Promise<boolean> {
  35 |     const element = typeof locator === 'string'
  36 |         ? this.page.locator(locator)
  37 |         : locator;
  38 | 
  39 |     return await element.isVisible();
  40 | }
  41 | 
  42 | 
  43 | }
  44 | 
```