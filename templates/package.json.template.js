const defaultDependencies = {
  react: '^16.2.0',
  classnames: '^2.2.5'
};

module.exports = (componentName, dependencies, devDependencies) => {
  const dep = JSON.stringify(
    { ...defaultDependencies, ...dependencies },
    null,
    4
  );

  const devDep = JSON.stringify(
    { ...defaultDependencies, ...dependencies },
    null,
    4
  );

  return `\
{
  "name": "${componentName} Component",
  "description": "Presentational",
  "version": "0.0.0",
  "main": "./${componentName}.jsx",
  "files": [
    "./__themes__/${componentName}.scss"
  ],
  "dependencies": {
${dep.slice(2, dep.length - 2)}
  },
  "devDependencies": {
${devDep.slice(2, dep.length - 2)}
  }
}
  `;
};
