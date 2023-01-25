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