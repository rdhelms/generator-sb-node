'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the sweet ${chalk.red('generator-sb-node')} generator!`)
    );
  }

  writing() {
    this.fs.copy(
      this.templatePath(),
      this.destinationPath(),
      { globOptions: { dot: true } }
    );
  }

  install() {
    this.npmInstall();
  }
};
