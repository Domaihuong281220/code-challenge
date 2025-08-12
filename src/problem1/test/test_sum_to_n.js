// test_sum_to_n.js
const assert = require('assert');
const { sum_to_n_a, sum_to_n_b, sum_to_n_c } = require('../sum_to_n');

const cases = [
    [5, 15],
    [1, 1],
    [0, 0],
    [10, 55]
];

cases.forEach(([n, expected]) => {
    assert.strictEqual(sum_to_n_a(n), expected, `a failed for ${n}`);
    assert.strictEqual(sum_to_n_b(n), expected, `b failed for ${n}`);
    assert.strictEqual(sum_to_n_c(n), expected, `c failed for ${n}`);
});

console.log('All tests passed ✅');
