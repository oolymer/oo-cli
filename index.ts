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
  console.log(JSON.stringify(result, null, 2))
}
