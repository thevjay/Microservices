const express = require('express')
const morgan = require('morgan')
const { createProxyMiddleware } = require('http-proxy-middleware');
const { rateLimit } = require('express-rate-limit')
const axios = require('axios');

const app = express();

const PORT = 3005;

const limiter = rateLimit({
	windowMs: 2 * 60 * 1000, // 15 minutes
    max: 5,
	// limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	// standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	// legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

app.use(morgan('combined'))
app.use(limiter)
app.use('/bookingService',async(req,res,next)=>{
    console.log(req.headers['x-access-token'])
    try{
    const response = await axios.get('http://localhost:3001/api/v1/isAuthenticated',{
        headers: {
            'x-access-token': req.headers['x-access-token']
        }
    })
    console.log(response.data);
    console.log('Hi');
    if(response.data.success){
        next();
    } else {
        return res.status(401).json({
            message: 'Unauthorised'
        })
    }
    }catch(err){
        return res.status(401).json({
            err: err,
            message:"Something went wrong in APIGateway"
        })
    }
})
app.use('/bookingService',createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
app.get('/home',(req,res)=>{
    return res.json({
        message: 'OK'
    })
})

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`)
})