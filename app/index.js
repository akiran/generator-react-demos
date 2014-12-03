var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var ReactDemosGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the luminous ReactDemos generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.mkdir('src');
      this.mkdir('src/components');
      this.mkdir('src/scss');
      this.src.copy('app.jsx', 'src/app.jsx');
      this.src.copy('index.html', 'src/index.html');
      this.src.copy('webpack.config.js', 'webpack.config.js');
      this.src.copy('gulpfile.js', 'gulpfile.js');
      this.src.copy('_package.json', 'package.json');
      this.src.copy('_bower.json', 'bower.json');
    },

    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = ReactDemosGenerator;
