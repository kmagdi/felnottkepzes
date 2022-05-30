const mysql=require('mysql')
const configDb=require('../configDb')
const db=mysql.createConnection(configDb)

const confirmation=(req,res) => {
    console.log('confirmation-ok',req.query.token)
    //meg kell nézni a statust, mert lehet, hogy már aktiválva van, ebben az esetben egy megfefelelő üzenetet kell visszaküldeni
    db.query('SELECT count(*) nr  FROM jelentkezok WHERE token=?',[req.query.token], (error, results)=> {
        if (error) 
            console.log(error)
        else{
            //itt kell a jelentkező statusát módosítani!!!
            console.log(results.data)
            res.status(200).send(results)
        }
      });
}

module.exports={confirmation}