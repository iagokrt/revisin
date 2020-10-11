import inputTemplate from './template.html'

export default {
  ViewModel: function (params) {
    this.value = params.value
  },
  template: inputTemplate
}
