import ko from 'knockout'

import LabelUI from './components/LabelUI'
import InputUI from './components/InputUI'

ko.components.register('labelui', LabelUI)
ko.components.register('inputui', InputUI)

ko.applyBindings({})
