// login.js
import { chromium } from '@playwright/test';

export async function login() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    httpCredentials: {
      username: 'guest',
      password: 'welcome2qauto',
    },
  });

  const page = await context.newPage();

  await page.goto('https://qauto.forstudy.space/');
  await page.click('.btn.btn-outline-white.header_signin');
  await page.fill('#signinEmail', 'jamestest@gmail.com');
  await page.fill('#signinPassword', 'Qwerty123');
  await page.click('button.btn.btn-primary[type="button"]');
  await page.waitForURL('**/panel/garage');

  await page.context().storageState({ path: 'storage/user.json' });

  return { browser, context, page };
}
