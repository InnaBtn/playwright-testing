import { test as base, expect } from '@playwright/test';
import { login } from '../setup/login'; 

export const test = base.extend({
  userGaragePage: async ({}, use) => {
    const { browser, page } = await login(); 
    await use(page);
    await browser.close();
  },
});

export { expect };
