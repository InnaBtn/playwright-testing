import { test as base, request, expect } from '@playwright/test';

export const test = base.extend({
    apiContext: async ({ }, use) => {
        const context = await request.newContext({
            baseURL: 'https://qauto.forstudy.space',
            storageState: 'storage/user.json',
        });
        await use(context);
    },
});

export { expect };
