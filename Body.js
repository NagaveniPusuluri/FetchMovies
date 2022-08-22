import React, { useState } from "react";
import './body.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Img1 from './Images/img1.jpeg';
import Img2 from './Images/img2.jpeg';
import Img3 from './Images/img3.jpeg';
import Img4 from './Images/img4.jpeg';
import Img5 from './Images/img5.jpeg';
import Img6 from './Images/img6.jpeg';
import Img7 from './Images/img7.jpeg';
import Img8 from './Images/img8.jpeg';
const Body =()=>{
    let data=[
    {
        id : 1,
        imgSrc:Img1,
    },
    {
        id : 2,
        imgSrc:Img2,
    },
    {
        id : 3,
        imgSrc:Img3,
    },
    {
        id : 4,
        imgSrc:Img4,
    },
    {
        id : 5,
        imgSrc:Img5,
    },
    {
        id : 6,
        imgSrc:Img6,
    },
    {
        id : 7,
        imgSrc:Img7,
    },
    {
        id : 8,
        imgSrc:Img8,
    }
]
const [model,setModel]=useState(false);
const [tempimgSrc,setTempImgSrc]=useState('');
const getImg=(imgSrc)=>{
    setTempImgSrc(imgSrc);
    setModel(true);
}
    return(
        <>
        <div className={model?"model open":"model"}>
            <img src={tempimgSrc} alt="Selected"/>
        <HighlightOffIcon onClick={()=>setModel(false)}/>
        </div>
        <div className="body"> 
            {data.map((items,index)=>{
                return(
                    <div className="pics" key={index} onClick={()=>getImg(items.imgSrc)}> 
                        <img src={items.imgSrc} style={{width:'100%'}} alt="Marrige"/>
                    </div>
                )
            })}
        </div>
        </>    
    )
} 
export default Body;