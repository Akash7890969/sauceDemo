import { Page, Locator } from '@playwright/test';

export class ElementUtil {

constructor(private page: Page) {
    
}

// Normal locator: CSS, XPath, ID, attributes
async fillTextBox(locator: string | Locator, value: string): Promise<void> {
    const element = typeof locator === 'string'
        ? this.page.locator(locator)
        : locator;

    await element.fill(value);
}

async clickElement(locator: string | Locator): Promise<void> {
    const element = typeof locator === 'string'
        ? this.page.locator(locator)
        : locator;

    await element.click();
}

async getElementText(locator: string | Locator): Promise<string> {
    const element = typeof locator === 'string'
        ? this.page.locator(locator)
        : locator;

    return await element.innerText();
}

async isElementVisible(locator: string | Locator): Promise<boolean> {
    const element = typeof locator === 'string'
        ? this.page.locator(locator)
        : locator;

    return await element.isVisible();
}


}
