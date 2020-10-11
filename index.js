const ko = require('knockout')
const greeter = require('./Components/Greeter')

ko.components.register('greeter', greeter)
ko.applyBindings({})
