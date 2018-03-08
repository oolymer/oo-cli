import { Analyzer, generateAnalysis } from "polymer-analyzer"

if (require.main === module) {
  main().catch(error => {
    console.error(error.stack || error.message || error)
    process.exit(1)
  })
}

export async function main() {
  const analyzer = Analyzer.createForDirectory("test/")
  const input = await analyzer.analyzePackage()
  const result = generateAnalysis(input, analyzer.urlResolver)

  console.log(result.elements!.map(it => [
    it.name, it.path, it.summary, it.description, it.superclass,
    it.attributes!.map(it => it.name), it.properties!.map(it => it.name), it.methods!.map(it => it.name)
  ]))
  console.log(result.mixins!.map(it => [
    it.name, it.path, it.summary, it.description, it.superclass,
    it.attributes!.map(it => it.name), it.properties!.map(it => it.name), it.methods!.map(it => it.name)
  ]))
  // console.log(JSON.stringify(result, null, 2))
}
