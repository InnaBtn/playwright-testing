// fixtures.js

import { test as base } from '@playwright/test';

export const test = base.extend({
    context: async ({ browser }, use) => {
        const context = await browser.newContext({
            httpCredentials: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        });
        await use(context);
        await context.close();
    },
    page: async ({ context }, use) => {
        const page = await context.newPage();
        await use(page);
        await page.close();
    },
});

export { expect } from '@playwright/test';
