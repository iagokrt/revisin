import labelTemplate from './template.html'

export default {
  ViewModel: function (params) {
    this.value = params.value
  },
  template: labelTemplate
}
