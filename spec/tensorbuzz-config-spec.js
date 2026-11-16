import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"

const config = readFileSync(fileURLToPath(new URL("../tensorbuzz.yml", import.meta.url)), "utf8")

describe("TensorBuzz path filter configuration", () => {
  it("keeps the package build broad while excluding documentation-only changes", () => {
    const paths = config
      .split("paths:\n")[1]
      .split("before_script:")[0]
      .match(/^\s+- .+$/gm)
      .map((line) => line.trim().slice(2))

    expect(paths).toEqual(["\"**\"", "\"!**/*.md\"", "\"!LICENSE\""])
    expect(paths[0].startsWith("!")).toBeFalse()
    expect(paths.slice(1).every((path) => path.startsWith("\"!"))).toBeTrue()
  })

  it("runs the repository's existing validation gates", () => {
    expect(config).toContain("- npm install")
    expect(config).toContain("- npm run lint")
    expect(config).toContain("- npm run typecheck")
    expect(config).toContain("- npm test")
  })
})
