// @flow
const yargs = require('yargs');

const argv = yargs
  .command(
    ' ',
    'Scaffolds a new component via user prompt unless cli args are specified. See --help for more details.'
  )
  .option({
    config: {
      alias: 'c',
      describe: 'Path to a config file'
    }
  })
  .option({
    name: {
      alias: 'n',
      describe: 'Name of the component'
    }
  })
  .option({
    path: {
      alias: 'p',
      describe: 'Path to create the component at'
    }
  })
  .help().argv;

module.exports = {
  configPath: argv.config || argv.c,
  componentName: argv.name || argv.n,
  componentPath: argv.path || argv.p
};
