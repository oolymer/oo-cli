import { analyze } from ".."
import { toMatchImageSnapshot } from "jest-image-snapshot"
import * as fs from "fs"

expect.extend({ toMatchImageSnapshot })

describe("oo", () => {

  it("should analyze fixtures", async () => {
    expect(await analyze("test/__fixtures__")).toMatchSnapshot()
  })

  it("should match images", () => {
    const image = fs.readFileSync("test/__fixtures__/4a.png")
    expect(image).toMatchImageSnapshot()
  })

})
