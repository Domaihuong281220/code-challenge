// sum_to_n.js
'use strict';

var sum_to_n_a = function (n) {
    // formula: n * (n + 1) / 2
    return n * (n + 1) / 2;
};

var sum_to_n_b = function (n) {
    // iterative loop
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

var sum_to_n_c = function (n) {
    // recursive (simple)
    if (n <= 1) return n;
    return n + sum_to_n_c(n - 1);
};

// If this file is run directly, accept CLI arg and print results:
if (require.main === module) {
    var raw = process.argv[2];
    var n = raw === undefined ? 5 : Number(raw); // default 5 if no arg
    if (!Number.isInteger(n)) {
        console.error('Usage: node sum_to_n.js <integer>');
        process.exit(1);
    }
    console.log('n =', n);
    console.log('sum_to_n_a:', sum_to_n_a(n));
    console.log('sum_to_n_b:', sum_to_n_b(n));
    console.log('sum_to_n_c:', sum_to_n_c(n));
}

module.exports = { sum_to_n_a, sum_to_n_b, sum_to_n_c };
