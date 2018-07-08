/**
 * Current only bumps minor patch version but could be tweaked
 */

const fs = require('fs');
const { getModuleRootDir } = require('../src/lib/utils/pathing.js');
const chalk = require('chalk');

const moduleRootDir = getModuleRootDir();
const packageJsonPath = `${moduleRootDir}/package.json`;

const packageJson = require(`${moduleRootDir}/package.json`);
const versionEntry = packageJson.version;

// gets last 2 digits
// "version": "1.0.4-alpha-0.19"
// in this case: 19
const currentVersionPatchNumber = Number(
  versionEntry.slice(versionEntry.length - 2, versionEntry.length)
);

const currentVersionPrefix = versionEntry.slice(0, versionEntry.length - 2);

const bumpedAlphaPatchVersion = () => {
  if (currentVersionPatchNumber === 99) {
    throw Error('You cannot increment higher than version #99');
  } else {
    return `${currentVersionPrefix}${currentVersionPatchNumber + 1}`;
  }
};

const bumpedVersionPackageJson = {
  ...packageJson,
  ...{ version: bumpedAlphaPatchVersion() }
};

fs.writeFileSync(
  packageJsonPath,
  JSON.stringify(bumpedVersionPackageJson, null, 2)
);

console.log(
  chalk.green(
    `Version successfully bumped from ${currentVersionPatchNumber} to ${currentVersionPatchNumber +
      1}`
  )
);
