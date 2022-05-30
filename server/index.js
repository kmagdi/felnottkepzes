const express=require('express')
const cors=require('cors')

const app = express();

const auth=require('./routes/auth')
const routerIntezmenyek=require('./routes/intezmenyek')
const routerAgazatok=require('./routes/agazatok')
const routerTanfolyamok=require('./routes/tanfolyamok')
const routerJelentkezes=require('./routes/jelentkezes')
const confirmation=require('./routes/confirm')

app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(cors());

app.use('/api/auth',auth)
app.use('/api/intezmenyek',routerIntezmenyek)
app.use('/api/agazatok',routerAgazatok)
app.use('/api/tanfolyamok',routerTanfolyamok)
app.use('/api/jelentkezes',routerJelentkezes) 
app.use('/confirm',confirmation)

//app.use('api/szakmak',szakmak)
port=process.env.PORT || 5000
app.listen(port,()=>console.log(`server listening on port ${port}...`))