const express = require('express')
const bodyParser = require('body-parser')

const {PORT} = require('./config/serverConfig')

//const { sendBasicEmail} = require('./services/email-service')

// const cron = require('node-cron');
const jobs = require('./utils/job');
const m = require('./models/notificationticket')
const { SubscriberMessage,createChannel} = require('./utils/messageQueue');
const { REMINDER_BINDING_KEY} = require('./config/serverConfig')

const TicketController = require('./controllers/ticket-controller')
const EmailService = require('./services/email-service');

const setupAndStartServer =async () =>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    //const channel = await createChannel(); 

    app.post('/api/v1/tickets',TicketController.create);

    const channel = await createChannel();
    SubscriberMessage(channel,EmailService.subscribeEvents,REMINDER_BINDING_KEY)

    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`)
        
        // jobs();
        //console.log(m())
        // sendBasicEmail(
        //     'Support <support@admin.com>',
        //     'jammulavijay01@gmail.com',
        //     'This is a testing email',
        //     'Hey, how are you, I hope you like the support'
        // )

        // cron.schedule('*/1 * * * *', () => {
        //     console.log('running a task every minute');
        // });
    })
}

setupAndStartServer();

/**
 *  Queues
 * 
 * [Service 1 (100qps) Publisher]       ---------> message queue [msg1, msg2, ... msg 100]  ----------> [Service 2 (20qps) Subscriber]
 * 
 * [Service 2 (Publisher)]        --------> message queue [msgs]    -----> [Service 1 (Subcriber)]
 * 
 */

/**
 * [input text 1]   -> [output text]
 * submit   -> [submssion text]
 */

