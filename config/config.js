module.exports={
    "development": {
      "username": "root",
      "password": process.env.PASSWORD,
      "database": "fullstack",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": process.env.PASSWORD,
      "database": "fullstack_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production":{
      "username": process.env.USERNAME,
      "password": process.env.PASSWORD,
      "database": process.env.DATABASE,
      "host": process.env.HOST,
      "dialect": "mysql"
    }
  }