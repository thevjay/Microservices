/

    - src/
        index.js // server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
        respository
    - test/ [Later]
    - static/
    - temp/

/ 
    - flights
        / models
        / controller
    - search
        / models
        / controller

# ENV
 - # environment variables
   - dynamic-named value that can affect the way running processs will behave on a computer 
- # console.log(process -> global object inside we use another env parameters) :
    - node global
    - big object
    - env:{

    }

# sequelize  : is an easy-to-use and promise-based Node.js ORM tool for pgsql,mysql,mariaDB
- It features solid transaction support, relations, eager and lazy loading, read replication and more

 - npm i sequelize
 - npx sequelize init   ---it create(config,migrations,models,seeders)
 

# sequelize/cli
 - CLI 
  - npm i sequelize-cli

# MySQL 2:
 - MySQL client for Node.js with focus on performance. support prepared statements, non-utf8 encodings, binary log protocol, compression , ssl 
 - npm i mysql2

# - npx sequelize db:create
 - It will create the database in mysql
 - # Database Flights_Search_DB_DEV created.



 ##  Welcome to Flights Service

 # Project Setup
  - clone the project on your local
  - Execute `npm install` on the same path as of your root directory of the downloaded project
   - `PORT=3000`
 
 - Inside the `config` folder create a new file `config.json` and then add the following piece of json


 ```
    "development": {
    "username": "***8",
    "password": "***",
    "database": "Flights_Search_DB_DEV",
    "host": "***",
    "dialect": "mysql"
  },
 ```

 - Once you've added your db config as listed above, go to the src folder from
 your terminal and execute `npx sequelize db:create`

 # git commeand revert back the comment
  - git commit --amend

# seeders:
 - that in case add seede file
  - some default set of data in table
   - 

## DB Design:
  - Airplane Table
  - Flight
  - Airport
  - City

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport


  (whimsical)

  ![alt text](image.png)

  ![alt text](image-1.png)

  ![alt text](image-2.png)

  1:N onw to many

  ![alt text](image-3.png)


 sequeline cli

 - # npx sequelize model:generate --name City --attributes name:String
 - in models it will creates by default 


 ![alt text](image-4.png)

 - \\

 - -- 1. Select a database first
USE your_database_name;

-- 2. Then list tables
SHOW TABLES;

SHOW DATABASES;

USE test;  -- or whichever database you want
SHOW TABLES;


# - models (city.js,index.js)

#  migrations :  similar kind of github
  - Migrations are a version control system for your database schema.
  - They allow you to:

  - Create, modify, and track changes to your database structure over time

  - Apply or rollback schema changes in a consistent, repeatable, and automated way

# npx sequelize db:migrate

# npx sequelize db:migrate:undo
 - it revert back the old migration

 # ORM Model Querying - Basics
  - INSERT queries
    - const jane = await User.create({ firstName:"Jane",lastName:"Doe"});


# Raw Queries:
  - const [results, metadata] = await sequelize.query("UPDATE users SET y = 42 WHERE x = 12") 
  ![alt text](image-5.png)


  ![alt text](image-6.png)

  
# Repository :
 - is responsible for layer communicate with db source any db or fetch the data

# Implememting First CRUD API :-

  ## - Service - is business logic 
 

 ![alt text](image-7.png)

 ![alt text](image-8.png)

  ![alt text](image-9.png)


# routing :
 - ![alt text](image-10.png)

 # express Router :
  ![alt text](image-11.png)

  ![alt text](image-12.png)

  /birds
  /birds/about                                                    - app.get('/birds',()=>{})
  /birds/help


  app.get('/birds',(req,res)=>())                                 - app.get('/',(req,res)=>())                                   
  app.get('/birds/about',(req,res)=>())                           - app.get('/about',(req,res)=>())
  app.get('/birds/help',(req,res)=>())                            - app.get('/help',(req,res)=>())

  ![alt text](image-13.png)

  ![alt text](image-14.png)

  ![alt text](image-15.png)

  ![alt text](image-16.png)

  ![alt text](image-17.png)

  ![alt text](image-18.png)

  ![alt text](image-19.png)

  ![alt text](image-20.png)

  ![alt text](image-21.png)

  ![alt text](image-22.png)

  ![alt text](image-23.png)

 # -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
  # Associations API models :

  ## Tables
   
  ### City -> id, name, created_at,updated_at
  ### Airport -> id,name,address,city_id,created_at,updated_at
  
  # Relationship -> City has many airports and Airport belongs to a city (one  to  many);

  # Building the Relationship between the tables


- # Generating the sequelize table
 - # inside src folder
   ``` 
      npx sequelize model:generate --name Airport --attributes 
      name:string,address:string,cityId:integer
    ```

  - ![alt text](image-26.png)


  ![alt text](image-27.png)

  - City model
   - static associate(models) {
      // define association here
      this.hasMany(models.Airport,{
        foreignKey:'cityId'
      });
    }


  - Airport model 
   - static associate(models) {
      // define association here
      this.belongsTo(models.City,{
        foreignKey:'cityId',
       ## onDelete:'CASCADE'  // at movement delete the city correspondnig airport deleted
      })
    }


    - Migration file
- cityId: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model:'Cities',
          key:'id',
          as:'cityId'
        },
        allowNull:false 
# #     WE WILL NEVER ALLOW WITHOUT A CITYID
- }

  -  we will change in airport model also
  - Airport.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    address: DataTypes.STRING,
    cityId: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  },


  # THE CHANGE HAPPENS THE MODELS AND MIGRATION FILE 

  -  THOSE FILE ARE SYNC TO DATABASE
   
   ![alt text](image-28.png)

   MUL = in table key mysql 
    - MUL means that the key allows multiple rows to have that the same value.

   UNI: For UNIQUE
  
   ![alt text](image-29.png)

  # npx sequelize db:migrate 

## Seeders:

- Seeders: Can actually seed some data  put some start value inside the database
- # inside src
 - # npx sequelize seed:generate --name add-airports
   - 

   # 'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


    await queryInterface.bulkInsert('Airports',[
      {
        name:'Kempegowda International Airport',
        cityId:13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Mangaluru International Airport',
        cityId:13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Mysure International Airport',
        cityId:13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Rajiv Gandhi International Airport',
        cityId:11,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */


    // delete the seede file u can configare
  }
};


 # To sync the seeders to database

  # npx sequelize db:seed:all

  ![alt text](image-30.png)

  ![alt text](image-31.png)


  ![alt text](image-32.png)

  # Model synchronization:

   ![alt text](image-33.png)

   ![alt text](image-34.png)

   ![alt text](image-35.png)



   # one to many

   # many to many
    ex: student have many courses and course have many 
    - Dealing with Many-to-Many Associations on Sequelize



# H/W:
  -  Expose an api that can multiple cities in one go (maybe pass an array in request body. no loops at all);
  - Write a crud for airports
    ![alt text](image-36.png)

    the address is null fill these thing on home work
  - 

  - Add an api in the City resource for getting all the airports of a city


  - 



# Implementing the Other Services Part 1:

  ![alt text](image-37.png)

  ![alt text](image-38.png)

# ------ Airplanes-----------------:

# Creting Model
 - npx sequelize model:generate --name Airplane --attributes  modelNumber:string,capacity:integer

- # Change happens the modele and migrate file:

- # run this command : npx sequelize db:migrate

- For creating the seeders
- # npx sequelize seed:generate --name add-airplanes


- Sync the db to seeders
- # npx sequelize db:seed:all

- Creating model:
 # npx sequelize model:generate --name Flights --attributes flightNumber:string,airplaneId:integer,departureAirportId:integer,arrivalAirportId:integer,arrivalTime:date,departureTime:date,price:integer,boardingGate:string,totalSeats:integer


- Change the constraints 
 - flightNumber: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    airplaneId: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
- 

- change in the migration file 
 - departureAirportId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      arrivalAirportId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      boardingGate: {
        type: Sequelize.STRING
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }

# - npx sequelize db:migrate 

# creating the reposistory





# Middlewares:
 - filter out the any request that is not avoiding 