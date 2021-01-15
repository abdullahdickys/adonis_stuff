'use strict'

/*
|--------------------------------------------------------------------------
| UserTableSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserTableSeeder {
  async run () {
  await User.createMany([
      {
        email: 'superadmin@adonisjs.com',
        password: 'supersecret',
      },
      {
        email: 'admin@adonisjs.com',
        password: 'secret'
      }
    ])
  }
}

module.exports = UserTableSeeder

