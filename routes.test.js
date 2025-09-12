const request = require('supertest');
const express = require('express');
const productsRouter = require('./routes/products');

const app = express();
app.use('/', productsRouter);

describe("Express Routes Tests", () => {
  test('GET /products should return status ok', async () => {
    const res = await request(app).get('/products');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
  test('GET /search should return status ok', async () => {
    const res = await request(app).get('/search');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
  test('GET /test should return status ok', async () => {
    const res = await request(app).get('/test');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});

