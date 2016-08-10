'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the mathematical ' + chalk.red('generator-ng-2-ts') + ' generator!'
    ));

    var prompts = [
      {
        type: 'list',
        name: 'languageAnswer',
        message: 'Какой язык вы хотите использовать?',
        choices: [{name: 'English', value: "english"}, {name: 'Русский', value: "russian"}],
        default: 1
      },
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Вы точно хотите использовать мой генератор?',
        default: true
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {

    this.fs.copy(
      // this.templatePath('dummyfile.txt'),
      // this.destinationPath('dummyfile1.txt')
      this.templatePath(''),
      this.destinationPath('')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
