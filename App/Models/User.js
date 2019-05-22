"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
// eslint-disable-next-line no-undef
const Model = use("Model");

/** @type {import('@adonisjs/framework/src/Hash')} */
// eslint-disable-next-line no-undef
const Hash = use("Hash");

class User extends Model {
  static boot() {
    super.boot();

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook("beforeSave", async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  tokens() {
    return this.hasMany("app/Models/Token");
  }
  projects() {
    return this.hasMany("app/Models/Project");
  }
  task() {
    return this.hasMany("app/Models/Task");
  }
}

module.exports = User;
