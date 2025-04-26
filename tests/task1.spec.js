import { test } from './userGaragePageFixture.js';
import { expect } from '@playwright/test';

test('mock user profile response', async ({ userGaragePage }) => {
    await userGaragePage.route('**/api/users/profile', async route => {
        let response = await route.fetch();
        let json = await response.json();
        json.status = 200;
        json.data = {
            userId: 202849,
            photoFilename: "default-user.png",
            name: "Inna",
            lastName: "Test"
        };

        await route.fulfill({ response, json });
    });

    await userGaragePage.goto('https://qauto.forstudy.space/panel/profile');

    await expect(userGaragePage.getByText('Inna Test', { exact: true })).toBeVisible();
});
