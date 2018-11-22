import * as request from 'supertest';
import server from '../app';

afterAll(() => {
  server.close();
});

describe('POST /gen', () => {
  it('Should return docx file', async () => {
    const data = {
      name: 'Pavel',
      age: 123456
    };

    const result = await request(server).post('/gen/template').send(data);
    expect(result.status).toEqual(200);
    expect(result.type).toEqual('application/octet-stream');

    const content = (result.body as Buffer).toString();
    expect(content.includes(data.name)).toBeTruthy();
    expect(content.includes(data.age + '')).toBeTruthy();
  });
});
