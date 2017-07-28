import {normalize, schema} from 'normalizr';
import path from 'path';
import fs from 'fs';

const data = require('../frontend/mocks/data.json');
const user = new schema.Entity('users');
const answers = new schema.Entity('answers', {createdBy: user});
const poll = new schema.Entity('polls', {createdBy: user, answers: [answers]});

const normalized = normalize(data.data, [poll]);

const output = JSON.stringify(normalized, null, 2);
fs.writeFileSync(path.resolve(__dirname, '..frontend/mocks/output.json'), output);
