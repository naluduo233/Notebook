const CoffeeMaker = require("./demo03");
describe("Name of the group", () => {
  it("should ", () => {
    const mk = new CoffeeMaker();
    expect(mk.changeState("latte")).toBe("我只吐黑咖啡加点奶");
  });
});
