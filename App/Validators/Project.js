'use strict'

// eslint-disable-next-line no-undef
const Antl = use('Antl')

class Project {
  get validadeAll () {
    return true
  }
  get rules () {
    return {
      title: 'required ',
      description: 'required '
    }
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Project
