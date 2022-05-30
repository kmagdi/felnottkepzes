const mysql=require('mysql')
const configDb=require('../configDb')
const db=mysql.createConnection(configDb)
const jwt=require('jsonwebtoken')
const sendConfirmationEmail = require('./sendConfirmationEmail')

const checkEmail=(req,res) => {
    let sql="SELECT count(a.id) nr FROM jelentkezok a,jelentkezesek b WHERE a.id=b.jelentkezo_id AND a.email=? and b.tanfolyam_id=?"
   db.query(sql,[req.query.email,req.query.id], (error, result)=> {
        if (error) 
            console.log(error)
        else{
            console.log(result)
        }
        res.send(result)
      });
     
}

const createJelentkezes=(req,res)=>{
    console.log('post...')
    let msg
    let newId
    const {vnev,knev,sznev,szul_datum,szul_hely,anya_szul_nev,allampolgarsag,lakcim,oktatasi_azon,email,tel,tanfolyam_id,keres_egyeb}=req.body
    console.log('tanfolyam_id=',tanfolyam_id)
    const token=jwt.sign({tanfolyam_id},"jwtSecret",{expiresIn:300})
   db.query('insert into jelentkezok (vnev,knev,sznev,szul_hely,szul_datum,anya_szul_nev,allampolgarsag,lakcim,oktatasi_azon,email,tel,token) values (?,?,?,?,?,?,?,?,?,?,?,?)',
        [vnev,knev,sznev,szul_hely,szul_datum,anya_szul_nev,allampolgarsag,lakcim,oktatasi_azon,email,tel,token],
        (err,result)=>{    //this is a callback function :what we want to do after insert
            console.log('result=',result);
            newId=result.insertId
            console.log('newId=",newId')
            if(err){
                console.log(`Error-insert :${err}`)
                msg=err
            }else{
                db.query('insert into jelentkezesek (jelentkezo_id,tanfolyam_id,keres_egyeb) values (?,?,?)',[newId,tanfolyam_id,keres_egyeb],
                    (err,result)=>{
                        if(err){
                            console.log(`Error-insert :${err}`)
                            msg=err
                        }else{
                            console.log('Sikeres insert!',result.insertId)
                            //const token=jwt.sign({newId},"jwtSecret",{expiresIn:300})
                            sendConfirmationEmail(knev,email,token)
                            msg=`Sikeres adatrögzítés. A megadott email címre megerősítő link érkezett. A véglegesítéshez szükséges a linkre kattintva az aktiválás.`
                    }
                   res.json({"message":msg})
                })
            }
        })
    //res.end()//az adatbázis erőforrást lezkell zárni    
}                           



module.exports={checkEmail,createJelentkezes}

