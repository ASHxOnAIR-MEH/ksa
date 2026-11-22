const test = require("node:test");
const assert = require("node:assert/strict");
const membershipCosts = require("./planner.js");

test("joining fee is charged once across all months and visits", () => {
  assert.deepEqual(membershipCosts(1100, 100, 12, 10), [1200, 100, 10]);
});

test("a free trial has zero cost per visit", () => {
  assert.deepEqual(membershipCosts(0, 0, 1, 4), [0, 0, 0]);
});

test("fractional membership and joining fees contribute to the total", () => {
  assert.deepEqual(membershipCosts(99.75, 0.75, 2, 3), [100.5, 50.25, 16.75]);
});
