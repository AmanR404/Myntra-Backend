const request = require('supertest')
const app = require('./routes/products')

describe("Express Routes Tests", ()=>{
    test('GET /products should return status ok', async ()=> {
        const res = await request(app).get('/products');
        expect(res.status).toBe(200)
    });
    test('GET /search should return status ok', async ()=> {
        const res = await request(app).get('/search');
        expect(res.status).toBe(200)
    });
})
