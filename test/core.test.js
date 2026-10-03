import { test } from 'node:test';
import assert from 'node:assert/strict';

import { recommendPacking as pack } from '../public/core.js';
test('thresholds are below 10, below 25, then warm', () => {
  assert.equal(pack(9.99, 'dry').band, 'cold'); assert.equal(pack(10, 'dry').band, 'mild');
  assert.equal(pack(24.99, 'dry').band, 'mild'); assert.equal(pack(25, 'dry').band, 'warm');
});
test('weather adds exactly its own extra', () => {
  assert.deepEqual(pack(10, 'rain').items, ['water bottle', 'light layer', 'raincoat']);
  assert.deepEqual(pack(25, 'wind').items, ['water bottle', 'sun hat', 'windbreaker']);
});
test('invalid or missing weather is rejected', () => { for (const w of [undefined,'','snow',null]) assert.throws(() => pack(10,w)); });
test('coercible strings and nonfinite temperatures are rejected', () => { for (const t of ['10',null,NaN,Infinity,undefined]) assert.throws(() => pack(t,'dry')); });
test('negative and zero temperatures have defined behavior', () => { assert.equal(pack(-5,'dry').band,'cold'); assert.equal(pack(0,'dry').band,'cold'); });
test('results do not share their items array', () => { const one=pack(10,'dry'); one.items.push('leaked'); assert.equal(pack(10,'dry').items.includes('leaked'),false); });
