/* eslint-disable no-undef */
const assert = require('assert');
const supertest = require('supertest');

const app = require('../app');

describe('Roll Dice', () => {
  it('roll dice', async () => {
    const { body } = await supertest(app)
      .get('/rolldice')
      .expect('Content-Type', /json/)
      .expect(200);

    console.log(body);
    assert.deepEqual(body.status, 'ok');
  });
});
