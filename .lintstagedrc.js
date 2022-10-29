const path = require('path')

const lint = (filenames) => {
  const filepaths = filenames.map((f) => path.relative(process.cwd(), f))
  const files = filepaths.map((path) => `--file ${path}`).join(' ')
  return `next lint --fix ${files}`
}

module.exports = {
  '**/*.{ts,tsx}': [
    //
    () => 'tsc',
    lint,
    'prettier --write',
  ],
}
