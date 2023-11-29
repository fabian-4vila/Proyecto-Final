const request = require('supertest')
const app = require('../app')

let id;
let token;



test('POST /users', async () => {
    const body= {
        firtsName: "Luis",
        lastName: "Avila",
        email: "luis@gmail.com",
        password: "123456",
        phone: "3105557777"
    }
    const res = await request(app)
    .post('/users')
    .send(body);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.firtsName).toBe(body.firtsName);
    expect(res.body.id).toBeDefined();
});

test('POST /users/login', async () => {
    const body = {
        email: "luis@gmail.com",
        password: "123456"
    }
    const res = await request(app)
    .post('/users/login')
    .send(body);
    token = res.body.token;
    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
});
test('POST /users/login debe restornar credenciales incorrectas', async () => {
    const body = {
        email: "incorrecto@gmail.com",
        password: "78910"
    }
    const res = await request(app).post('/users/login')
    .send(body);
    expect(res.status).toBe(401);
}),
test('GET /users', async () => { 
    const res = await request(app)
    .get('/users')
    .set('Authorization',`Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});
test('PUT /users/:id',async () => {
    const body = { firtsName: 'Fabian updated' }
    const res = await request(app)
    .put(`/users/${id}`)
    .send(body)
    .set('Authorization',`Bearer ${token}`);;
    expect (res.status).toBe(200);
    expect (res.body.firtsName).toBe(body.firtsName);
});
test('DELETE /users/:id', async () => {
    const res = await request(app)
    .delete(`/users/${id}`)
    .set('Authorization',`Bearer ${token}`);
    expect(res.status).toBe(204);
});

