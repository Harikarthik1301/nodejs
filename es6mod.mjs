import { readFile } from 'node:fs';

readFile('./files/start.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});