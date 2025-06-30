const express = require('express');
const bodyParser = require('body-parser')

const { PORT } = require('./config/serverConfig')
const apiRoutes = require('./routes/index')

const app = express();

const db = require('./models/index')
// const {User, Role} = require('./models/index')

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',apiRoutes)

    app.listen(PORT,async()=>{
        console.log(`Server Started on Port: ${PORT}`);
        
        if(process.env.DB_SYNC){
            db.sequelize.sync({alert: true})
        }

        // const u1 = await User.findByPk(1);
        // const r1 = await Role.findByPk(1);
        // u1.addRole(r1)

        // const response = await u1.hasRole(r1)
        // console.log(response)
        // const service = new UserService();
        // const newToken = service.createToken({email:"sanket@gmail.com",id:1})
        // console.log("New token is",newToken)
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmtldEBnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNzQ5NTQ3NDc1LCJleHAiOjE3NDk1NTEwNzV9.knHtDfY2eG1hVew6pLXjChIbxhlOhdm5RyoNBFQ8BFc'
        // const response = service.verifyToken(token)
        // console.log(response)

    })  
}

prepareAndStartServer();