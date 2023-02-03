import { Fragment, useState } from "react";
import { Link, Route, Router, Routes, useNavigate } from "react-router-dom";
import styled3 from './css/Recommend_Allpicture.module.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Oxford_Info from "./Oxford_Info";

import Recommend_Croatia from "./Recommend_Croatia";
import Recommend_France from "./Recommend_France";
import Recommend_Ger from "./Recommend_Ger";
import Recommend_Italy from "./Recommend_Italy";
import Recommend_Sw from "./Recommend_Sw";
import Recommend_UK from "./Recommend_UK";
import Traveler from "./Traveler";


const Recommend_Allpicture = () => {
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@600&display=swap');
    </style>
    const photo = [
        { id: 1, src: '/img_yoo/France1.jpg', info: '# France Paris' },
        { id: 2, src: '/img_yoo/UK1.jpg', info: '# United Kingdom Oxford' },
        { id: 3, src: '/img_yoo/Italy1.jpg', info: '# Italy Roma' },
        { id: 4, src: '/img_yoo/Croatia1.jpg', info: '# Croatia Zagreb' },
        { id: 5, src: '/img_yoo/Sw1.jpg', info: '# Swiss Interlaken' },
        { id: 6, src: '/img_yoo/France2.jpg', info: '# France Strassburg' },
        { id: 7, src: '/img_yoo/Croatia2.jpg', info: '# Croatia Belgrade' },
        { id: 8, src: '/img_yoo/Germany1.jpg', info: '# Germany Munich' },
        { id: 9, src: '/img_yoo/Sw2.jpg', info: '# Swiss Grindewald' },
        { id: 10, src: '/img_yoo/UK2.jpg', info: '# United Kingdom Edinburgh' },
        { id: 11, src: '/img_yoo/Germany2.jpg', info: '# Germany Berlin' },
        { id: 12, src: '/img_yoo/Italy2.jpg', info: '# Italy CinqueTerre' },


    ]

    const [picture, setPicture] = useState(photo);



    const newPicture = picture.map(item =>
        <li className={styled3.pictureList} key={item.id} >

            <Link to={'/oxford'}>
            <img style={{ height: '180px', width: '280px' }} src={item.src} />
            <div className={styled3.pictureInfo}>
                <span style={{ fontSize: '16px', fontWeight: '650', fontStyle: 'italic', textShadow: '2px 2px 5px black' }} >{item.info}</span>
            </div>
        </Link>
        </li>
    )


    return (
        <Fragment>
    

           

            <div style={{ marginTop: '45px', display: 'flex', justifyContent: 'center' }}>
                <ul className={styled3.pictureBox}>
                    {newPicture}
                </ul>
            </div>

            {/* <Recommend_France/>
          <Recommend_Croatia/>
          <Recommend_Ger/>
          <Recommend_Italy/>
          <Recommend_Sw/>
          <Recommend_UK/> */}
     

    
        </Fragment>

    )
}

export default Recommend_Allpicture;