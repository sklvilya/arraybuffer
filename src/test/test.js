/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import ArrayBufferConverter from '../ArrayBufferConverter';

test('Check class ArrayBufferConverter', () => {
  const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const buffer = new ArrayBufferConverter();
  buffer.load();
  expect(buffer.toString()).toBe(result);
});
