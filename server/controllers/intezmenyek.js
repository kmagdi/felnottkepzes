const mysql=require('mysql')
const configDb=require('../configDb')
const db=mysql.createConnection(configDb)

const getIntezmenyek=(req,res) => {
    console.log('ok')
    db.query('SELECT * from intezmenyek', (error, results)=> {
        if (error) 
            console.log(error)
        else
            res.status(200).send(results)
      });
}

const createIntezmeny=(req,res)=>{
    console.log('post...')
    const {name,webpage_url,adress,email,tel}=req.body
    db.query('insert into intezmenyek(name,webpage_url,adress,email,tel) values (?,?,?,?,?)',
        [name,webpage_url,adress,email,tel],
        (err,res)=>{    //this is a callback function :what we want to do after insert
            if(err)
                console.log(`Error-insert failed:${err}`)
            else
                console.log('Sikeres insert!')
        })
    res.end()//az adatbázis erőforrást lezkell zárni    
}                           

const updateIntezmeny=(req,res)=>{
    console.log('put...')
    const id=req.params.id
    const {name,webpage_url,adress,email,tel}=req.body
    db.query('update intezmenyek set name=?,webpage_url=?,adress=?,email=?,tel=? where id=?',
        [name,webpage_url,adress,email,tel,id],
        (err,res)=>{    //this is a callback function :what we want to do after insert
            if(err)
                console.log(`Error-update failed:${err}`)
            else
                console.log('Sikeres update!')
        })
    res.end()//az adatbázis erőforrás le kell zárni
    
}                           

const deleteIntezmeny=(req,res)=>{
    console.log('delete...')
    const id=req.params.id
    db.query('delete from intezmenyek  where id=?',
        [id],
        (err,res)=>{    //this is a callback function :what we want to do after insert
            if(err)
                console.log(`Error-delete failed:${err}`)
            else
                console.log('Sikeres delete!')
        })
    res.end()
    
}                           
module.exports={getIntezmenyek,
                createIntezmeny,
                updateIntezmeny,
                deleteIntezmeny}

