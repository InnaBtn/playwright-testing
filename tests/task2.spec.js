import { test, expect } from './apiContextFixture.js';

test('Positive test should create a car', async ({ apiContext }) => {
    const newCar = await apiContext.post('/api/cars', {
        data:
        {
            carBrandId: 1,
            carModelId: 1,
            mileage: 122
        }
    });
    expect(newCar.ok()).toBeTruthy();


    const newCarJson = await newCar.json(); // Extract created car ID
    const createdCarId = newCarJson.data.id;

    const cars = await apiContext.get('/api/cars');
    expect(cars.ok()).toBeTruthy();
    const carsJson = await cars.json();

    const createdCar = carsJson.data.find(car => car.id === createdCarId);
    expect(createdCar).toBeDefined();
    expect(createdCar).toMatchObject({
        carBrandId: 1,
        carModelId: 1,
        mileage: 122,
        brand: "Audi",
        model: "TT"
    });
});

test('Negative test:should return 400 when brandId is missing', async ({ apiContext }) => {
    const newCar = await apiContext.post('/api/cars', {
        data:
        {
            carModelId: 1,
            mileage: 122
        }
    });
    const body = await newCar.json();
    expect(newCar.status()).toBe(400);
    expect(body.message || body.error).toBe('Car brand id is required');

});

test('Negative test: should return 400 when invalid mileage value is used', async ({ apiContext }) => {
    const newCar = await apiContext.post('/api/cars', {
        data:
        {
            carBrandId: 1,
            carModelId: 1,
            mileage: 'one hyndred'
        }
    });
    expect(newCar.status()).toBe(400);
    const body = await newCar.json();
    expect(body.message || body.error).toBe('Invalid mileage type');

});
