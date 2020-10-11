const ko = require('knockout')
const greeter = require('./components/Greeter')

ko.components.register('greeter', greeter)
ko.applyBindings({})
