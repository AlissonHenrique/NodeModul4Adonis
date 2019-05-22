'use strict'
// eslint-disable-next-line no-undef
const Model = use('Model')
// eslint-disable-next-line no-undef
const Env = use('Env')

class File extends Model {
  static get computed () {
    return ['url']
  }

  getUrl ({ id }) {
    return `${Env.get('App_URL')}/files/${id}`
  }
}

module.exports = File
