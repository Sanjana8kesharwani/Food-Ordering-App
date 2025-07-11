import { sum } from "../sum";

test("sum function should calculate the sum correctly", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
