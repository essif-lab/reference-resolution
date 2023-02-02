# TRRT

A tool for [Term Reference Resolution](https://essif-lab.github.io/framework/docs/tev2/spec-tools/trrt)

## Deployment

Install dependencies
`npm install`

Build .js files from .ts files:
`npm run build`

Make TRRT globally available:
`npm install -g .`

Run test demonstration:
`trrt -o docs/tev2/tests_converted -s docs/tev2/saf.yaml -d docs/tev2/tests`
