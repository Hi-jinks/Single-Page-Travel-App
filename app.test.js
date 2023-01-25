/* eslint-disable no-undef */

'use strict';

const request = require('supertest');
const app = require('./app');

describe('Test the get and post requests for comments', () => {
    test('GET /comments/Table Mountain succeeds', () => {
        return request(app)
	    .get('/comments/Table Mountain')
	    .expect(200);
    });

    test('GET /comments/Table Mountain returns JSON', () => {
        return request(app)
	    .get('/comments/Table Mountain')
	    .expect('Content-type', /json/);
    });

    test('GET /comments/Table Mountain includes Catherine Doo as a commenter', () => {
        return request(app)
	    .get('/comments/Table Mountain')
	    .expect(/Catherine Doo/);
    });

    test('POST /addComment', () => {
        const params = { key: 'Sugarloaf Mountain', content: 'Malaika: Hike was fun, but the cable car back took us over magnificent views'};
        return request(app)
        .post('/addComment')
        .send(params)
	    .expect(200);
    });
});

describe('Test the requests for cities', () => {
    test('GET /country/Asia/Japan succeeds', () => {
        return request(app)
	    .get('/country/Asia/Japan')
	    .expect(200);
    });

    test('GET /country/Asia/Japan returns JSON', () => {
        return request(app)
	    .get('/country/Asia/Japan')
	    .expect('Content-type', /json/);
    });

    test('GET /country/Asia/Japan includes Tokyo', () => {
        return request(app)
	    .get('/country/Asia/Japan')
	    .expect(/Tokyo/);
    });
});

describe('Test the requests for sites', () => {
    test('GET /sites/Cairo succeeds', () => {
        return request(app)
	    .get('/sites/Cairo')
	    .expect(200);
    });

    test('GET /sites/Cairo returns JSON', () => {
        return request(app)
	    .get('/sites/Cairo')
	    .expect('Content-type', /json/);
    });

    test('GET /sites/Cairo includes the Giza Pyramids', () => {
        return request(app)
	    .get('/sites/Cairo')
	    .expect(/Giza Pyramids/);
    });
});