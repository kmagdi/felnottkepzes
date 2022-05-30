const mysql=require('mysql')
const configDb=require('../configDb')
const db=mysql.createConnection(configDb)
const sendConfirmationEmail= require('./sendConfirmationEmail')
const setConfirmationCode=require('./setConfirmationCode')

const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const login=(req,res) => {
    console.log('post...',req.body)
    const {email,password}=req.body
    db.query('SELECT password  from users where email=? or username=? ',[email,email],
     (error, result)=> {
        if (error) 
            res.send({"error": error})
        if(result.length==1){
            bcrypt.compare(password,result[0].password,
                (error, resultCompare)=>{
                    if(resultCompare)
                        res.send({"message":"sikeres bejelentkezés"})
                    else
                        res.send({"message":"hibás email/jelszó páros"})
                });
        }
    })}
const register=(req,res)=>{
    console.log('post...',req.body)
    const {username,email,password}=req.body
bcrypt.hash(password,saltRounds,(err,hash)=>{
    if(err) console.error(err)
    const regDate=new Date()
    db.query('insert into users (username,email,password,registered) values (?,?,?,?)',
        [username,email,hash,regDate.toLocaleDateString()],
        (err,result)=>{    //this is a callback function :what we want to do after insert
            if(err){
                console.log(`Error-insert failed:${err}`)
                res.send({message:`Error-insert failed:${err}`})
            }
            if(result){
                console.log('Sikeres insert!',result.insertId)
                const id=result.insertId
                const token=jwt.sign({id},"jwtSecret",{expiresIn:300})
                setConfirmationCode(id,token)
                sendConfirmationEmail(username,email,token)
                res.send({message:"Kattintson az email címére érkezett aktiváló linkre a regisztráció validálásáért!"})  
            }
    })     
  }) 
}

const checkUserName=(req,res)=>{
    console.log('post...',req.body)
    const {username}=req.body
    db.query('SELECT count(*) nr from users where username=?',[username], (error, results)=> {
    res.send(results)
    });
}

const checkUserEmail=(req,res)=>{
    console.log('post...',req.body)
    const {email}=req.body
    db.query('SELECT count(*) nr from users where email=?',[email], (error, results)=> {
    res.send(results)
    });
}

module.exports={login,
                register,
                checkUserName,
                checkUserEmail}