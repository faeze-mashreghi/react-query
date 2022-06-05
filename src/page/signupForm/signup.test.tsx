import { changeToSelectType } from "../../utils";

test("test convert to select Type with value", () => {
  let options = [
    { name: "faeze", id: 1 },
    { name: "ali", id: 2 },
    { name: "farina", id: 3 },
  ];
  const value = changeToSelectType(options, "id", "name");
  expect(value).toEqual([
    { value: 1, label: "faeze" },
    { value: 2, label: "ali" },
    { value: 3, label: "farina" },
  ]);
});
test("test convert to select Type with wrong value", () => {
  let options = [
    { name: "faeze" },
    { name: "ali", id: 2 },
    { name: "farina", id: 3 },
  ];
  const value = changeToSelectType(options, "id", "name");
  expect(value).toEqual([
    { value: 1, label: "faeze" },
    { value: 2, label: "ali" },
    { value: 3, label: "farina" },
  ]);
});
