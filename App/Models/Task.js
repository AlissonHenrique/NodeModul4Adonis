'use strict'

// eslint-disable-next-line no-undef
const Model = use('Model')

class Task extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', 'TaskHook.sendNewTaskMail')
  }
  project () {
    return this.belongsTo('App/Models/Project')
  }
  user () {
    return this.belongsTo('App/Models/Project')
  }
  file () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Task
