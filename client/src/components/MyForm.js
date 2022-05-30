import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import './MyForm.css'
import axios from 'axios';


export const MyForm=(props)=> {
  const {id,megnevezes,idotartam,mertekegyseg,szam}=props.tanfolyam
  const {register,handleSubmit,formState: { errors }} = useForm();
  const [message,setMessage]=useState(null)
  const url='http://localhost:5000/api/jelentkezes'
  const urlCheck='http://localhost:5000/api/jelentkezes/check'

//ugyanarra  tanfolyamra h többször ne lehessen jelentkezni:
 const checkEmail=(mail)=>{
  console.log("trigger onBlur:",mail)
  setMessage(null)
  axios.get(`${urlCheck}?email=${mail}&id=${id}`).then(res =>{
    console.log("client:",res.data[0].nr)
    res.data[0].nr===0 ? setMessage(null):setMessage(1)
  })
 
 }

  const onSubmit = (data) =>{
      //console.log(data);
      console.log("tanfolyam id:",id)
       data.tanfolyam_id=id
      if(!message){
        setMessage(null)
        axios.post(url,data)
          .then(res => {
            console.log("a klienshez érkezett response:",res.data);
            setMessage(res.data.message);
          })
          .catch(err => {
            setMessage(err.message);
          })
      }
  }
  //console.log(props)
  //console.log(props.tanfolyam.id,props.tanfolyam.megnevezes)
  return (
    <div className="row myform">
      <h1 className="text-center">Jelentkezési űrlap</h1>
      <h3>{megnevezes} </h3>
      <p>A szakképesítés azonosító száma:<b>{szam}</b></p>
      <p>Tanfolyam időtartalma:<b>{idotartam} {mertekegyseg}</b></p>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
     
        <div>
          <span>
            <input {...register('vnev',{ required: true })} placeholder="vezetéknév"/>
            <div className="kotelezo">*</div>
           
          </span>
          <span>
            <input {...register('knev', { required: true })} placeholder="keresztnév"/>
            <div className="kotelezo">*</div>
         
          </span>
        </div>

        <div>
          <span>
            <input {...register('szul_datum',{ required: true })} type="date" placeholder="születési dátum"/>
            <div className="kotelezo">*</div>
            
          </span>
          <span>
            <input {...register('szul_hely', { required: true })} placeholder="születési hely"/>
            <div className="kotelezo">*</div>
            
          </span>
        </div>

        
        <div>
          <span>
            <input {...register('sznev',{ required: true })} type="text" placeholder="születési név"/>
            <div className="kotelezo"></div>
         
          </span>
          <span>
            <input {...register('anya_szul_nev', { required: true })} placeholder="anya születési neve"/>
            <div className="kotelezo">*</div>
           
          </span>
        </div>

        <div>Állampolgárság:
          <select {...register("allampolgarsag")}>
            <option value="magyar" >magyar</option>
            <option value="egyeb">egyéb</option>
          </select>
          <span>
            <input className="lakcim" {...register('lakcim', { required: true })} placeholder="lakcim"/>
            <div className="kotelezo">*</div>
          
          </span>
        </div>

        
        <div>
          <span>
            <input {...register('email',{ required: true })} placeholder="email cím" type="email" onBlur={(e)=>checkEmail(e.target.value)}/>
            <div className="kotelezo">*</div>
           
          </span>
          <span>
            <input {...register('tel', { required: true })}  pattern="[0-9]{2}-[0-9]{2}-[0-9]{3}-[0-9]{4}" placeholder="telefonszám: 06-30-111-1236"/>
            <div className="kotelezo">*</div>
         
          </span>
        </div>
        <div>
          <input {...register('oktatasi_azon', { pattern: /\d+/ })} placeholder="oktatási azonosítószám" />
        </div>
        <div>
          <textarea {...register('keres_egyeb')} placeholder="Megjegyzés" cols="45" rows="4"></textarea>
        </div>
        
  
        <div className="mySubmit">
           <input className="btn btn-primary" placeholder=""type="submit" value="küldés" />
        </div>
      </form>
      {(errors.tel || errors.nev) && <p className="msg">Az adatok kitöltése kötelező.</p>}
      {message && <div className="msg">{message===1?'Már regisztrált ez az email cím ehhez a tanfolyamhoz!': message}</div>}
    </div>
    
  );
} 