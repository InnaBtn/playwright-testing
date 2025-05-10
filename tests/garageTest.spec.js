import { test } from './userGaragePageFixture.js';
import { expect } from '@playwright/test';

test('user sees Garage page after login', async ({ userGaragePage }) => {
    await expect(userGaragePage.locator('#userNavDropdown')).toBeVisible();
});
