const mysql=require('mysql')
const configDb=require('../configDb')
const db=mysql.createConnection(configDb)

const getTanfolyamok=(req,res) => {
    console.log('ok')
    db.query('SELECT a.id,b.megnevezes,a.idotartam,a.idotartam_mertekegyseg,a.start_date_planned,c.name,a.foto,d.icon,b.szam,b.leiras,d.id as agazat_id,b.ikk_url FROM tanfolyamok a,szakmak b,intezmenyek c,agazatok d where a.szakma_id=b.id and a.intezmeny_id=C.id and d.id=b.agazat',
     (error, results)=> {
        if (error) 
            console.log(error)
        else
            res.status(200).send(results)
      });
}

const createTanfolyam=(req,res)=>{
    console.log('post...')
    const {name,webpage_url,adress,email,tel}=req.body
    db.query('insert into agazatok (name,webpage_url,adress,email,tel) values (?,?,?,?,?)',
        [name,webpage_url,adress,email,tel],
        (err,res)=>{    //this is a callback function :what we want to do after insert
            if(err)
                console.log(`Error-insert failed:${err}`)
            else
                console.log('Sikeres insert!')
        })
    res.end()//az adatbázis erőforrást lezkell zárni    
}                           

const updateTanfolyam=(req,res)=>{
    console.log('put...')
    const id=req.params.id
    const {name,webpage_url,adress,email,tel}=req.body
    db.query('update Agazatok set name=?,webpage_url=?,adress=?,email=?,tel=? where id=?',
        [name,webpage_url,adress,email,tel,id],
        (err,res)=>{    //this is a callback function :what we want to do after insert
            if(err)
                console.log(`Error-update failed:${err}`)
            else
                console.log('Sikeres update!')
        })
    res.end()//az adatbázis erőforrás le kell zárni
    
}                           

const deleteTanfolyam=(req,res)=>{
    console.log('delete...')
    const id=req.params.id
    db.query('delete from agazatok  where id=?',
        [id],
        (err,res)=>{    //this is a callback function :what we want to do after insert
            if(err)
                console.log(`Error-delete failed:${err}`)
            else
                console.log('Sikeres delete!')
        })
    res.end()
    
}                           
module.exports={getTanfolyamok,
                createTanfolyam,
                updateTanfolyam,
                deleteTanfolyam}

