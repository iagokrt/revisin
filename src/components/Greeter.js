const greeterTemplate = require('./Greeter.html')

module.exports = {
  ViewModel: function (params) {
    this.message = params.message
  },
  template: greeterTemplate
}
