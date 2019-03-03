import { required, validEmail } from "../validation";

test("empty field", () => {
  expect(required("")).toBe("Required");
});

test("non empty field", () => {
  expect(required("some text")).toBe(undefined);
});
