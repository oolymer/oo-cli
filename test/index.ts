import { analyze } from ".."

describe("oo", () => {

  it("should analyze fixtures", async () => {
    expect(await analyze("test/__fixtures__")).toMatchSnapshot()
  })

})
