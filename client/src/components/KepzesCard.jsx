import React,{useState} from 'react';
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import {Typography,Box,Link} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import './KepzesCard.css'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { MyForm } from './MyForm';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const KepzesCard=(props)=>{
  console.log("tanfolyamok:",props)
  const [expandedId, setExpandedId] = useState(-1);
  const [open, setOpen] = useState(false);
  const [openedTanfolyam, setOpenedTanfolyam] = useState({});

  const onOpenModal = (obj) => {
    setOpen(true);
    setOpenedTanfolyam(obj)
  }
  const onCloseModal = () => setOpen(false);

  const handleExpandClick = (i) => {
    console.log(i)
    setExpandedId(expandedId === i ? -1 : i);
  };
console.log(props.data,props.filter)
  return (
      <Box sx={{p:'1rem',backgroundColor:'#f2f6f5', width:'100%',display: 'flex',flexWrap: 'wrap',justifyContent: 'center'}}>
         { props.data? props.data.map((obj,i)=>(
           (obj.agazat_id===props.filter && props.filter!==0) || props.filter===0 ?
             <div key={obj.id} className="col-md-4 col-sm-6 col-12 ">
    <Card className="myCard " sx={{ maxWidth: 300,m:'1rem' }}>
      <div className="myCardHeader">
      <CardHeader titleTypographyProps={{fontSize: 18}}  subheaderTypographyProps={{fontSize: 18,fontWeight: "bold" }}
        avatar={
          <Avatar sx={{width:'4rem',height:'4rem', bgcolor:'#1976d2' }} aria-label="recipe">
            <span className="material-icons">{obj.icon}</span>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={()=>onOpenModal(
            {"id":obj.id,
            "megnevezes":obj.megnevezes,
            "idotartam":obj.idotartam,
            "mertekegyseg":obj.idotartam_mertekegyseg,
            "szam":obj.szam }
          )}
          title="jelentkezés a tanfolyamra"
          >
            <MoreVertIcon sx={{fontSize:30,color:'#1976d2',fontWeight:"bold"}} />
          </IconButton>
        }
        title={obj.megnevezes}
        subheader={obj.idotartam+" "+obj.idotartam_mertekegyseg}
      />
      </div>
      <CardMedia component="img"  height="194"  image={"img/tanfolyam/"+obj.foto}   alt={obj.megnevezes}  />
      <CardContent>
        <Typography  variant="body2" color="text.secondary">
        A szakképesítés azonosító száma: <b>{obj.szam}</b>, a képzés részletes leírása <Link target="_blank" rel="noopener" sx={{fontWeight:'bold'}} href={obj.ikk_url}>itt</Link> olvasható.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expandedId === i}
          onClick={()=>handleExpandClick(i)}
          aria-expanded={expandedId === i}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{fontSize:20,color:"red",fontWeight:"bold"}} />
        </ExpandMore>
      </CardActions>
      <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography >A szakma rövid leírása:</Typography>
          <Typography  paragraph>{obj.leiras}</Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
       :""  )) : ''}

      <div>
        <Modal open={open} onClose={onCloseModal} center>
              <MyForm tanfolyam={openedTanfolyam}/>
            </Modal>
      </div>
    
    </Box>
  );
}
