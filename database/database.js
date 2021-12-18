const knex = require('knex')({
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: '',
        database: "Trivia_summary"
    }
})

knex.schema.createTable('details', (table) => {
    table.string('Name').notNullable()
    table.string('Password').notNullable()
    table.string('Email').notNullable()
    table.string('Phone').notNullable()
    table.string('Date').notNullable()
}).then((data) => {
    console.log("Table has been created suceesfully...")

}).catch((err) => {
    console.log("Table has been already created")
})
module.exports = knex