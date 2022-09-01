import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()
const connection = knex({  // Estabelece conexão com o banco
   client: "mysql",
   //Nosso cliente é o mysql
   connection: {
       host: process.env.DB_HOST,
       port: 3306,
       user: process.env.DB_USER,
       // Nosso nome de usuário no banco de dados.
       password: process.env.DB_PASSWORD,
       // É a senha que foi enviado para nos.
       database: process.env.DB_SCHEMA,
       // Data-base que foi enviado para mim, mesmo nome do user.
       multipleStatements: true
   }
   // Nossa informação de host é aquela que recebemos do banco de dados.
})

export default connection