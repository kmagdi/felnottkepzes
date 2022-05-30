const mysql=require('mysql')
const configDb=require('../configDb')
const db=mysql.createConnection(configDb)

const setConfirmationCode=(id,token) => {
    let sql="update users set confirmationcode=? where id=?"
   db.query(sql,[token,id], (error, result)=> {
        if (error) 
            console.log("setConfirmationCode:",error)
        else{
            console.log("setConfirmationCode:",result)
        }
       
      });
     
}
module.exports=setConfirmationCode
