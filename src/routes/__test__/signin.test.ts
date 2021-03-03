import request from 'supertest'
import { app } from '../../app'

it('Fails when a email that does not exits is supplies', async() => {
    await request(app).post('/api/users/signin').send({
        email: 'test@test.com',
        password: 'password'
    }).expect(400)
})

it('fails when a incorrect password is supplied', async() => {
    await request(app).post('/api/users/signup').send({
        email: 'test@test.com',
        password: 'password'
    }).expect(201)
    await request(app).post('/api/users/signin').send({
        email: 'test@test.com',
        password: 'aaaaa'
    }).expect(400)
})

it('responds with a valid cookie when given valid credentials', async() => {
    await request(app).post('/api/users/signup').send({
        email: 'test@test.com',
        password: 'password'
    }).expect(201)
    const response = await request(app).post('/api/users/signin').send({
        email: 'test@test.com',
        password: 'password'
    }).expect(200)
    expect(response.get('Set-Cookie')).toBeDefined()
})