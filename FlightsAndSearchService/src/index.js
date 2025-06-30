const express = require('express')
const bodyParser = require('body-parser')

const {PORT} = require('./config/serverConfig')
//const {City} = require('./models/index')

//const CityRepository = require('./repository/city-repository')

const ApiRoutes = require('./routes/index');

const {Airport,City} = require('./models/index');

const db = require('./models/index');

const setupAndStartServer = async () => {

    // create the express  object
    const app = express();

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    

    app.use('/api',ApiRoutes)

    app.listen(PORT,async()=>{
        console.log(`Server started at ${PORT}`)

        if(process.env.SYNC_DB){
            db.sequelize.sync({ alter: true })
        }

        // await City.create({
        //     name:"New Delhi"
        // })

        // const repo = new CityRepository();
        // repo.createCity({name:"New Yark"})

        // const repo = new CityRepository();
        // repoo.deleteCity(1);  


        // const airports = await Airport.findAll({
             // 1.include:City
             // 2.include:[
             //     {
             //         model:city
             //     }
            // ]
        // });
        // console.log(airports)

        // City.findByPk(9) --- ?
        // const result = await City.findOne({
        //     where:{
        //         id:9
        //     }
        // });

        // const airport = await City.findAll({
        //     where:{
        //         id:11
        //     },
        //     include:[
        //         {
        //             model: Airport
        //         }
        //     ]
        // })

        // db.sequelize.sync({after: true})

        // const city = await City.findOne({
        //     where:{
        //         id:13
        //     }
        // })

        // const airports = await city.getAirports()
        
        // const newAirport = await Airport.findOne({
        //     where:{
        //         id:11
        //     }
        // })
        
        // const newAirport = await Airport.create({
        //     name:'Jindal Vijaynagar Airport',
        //     cityId:3
        // })

        // await city.addAirport({
        //     name:'Jindal Vijaynagar Airport'
        // })
        // console.log(city,airports)

        //const airports = await City.getAirports();
    })
}

setupAndStartServer();