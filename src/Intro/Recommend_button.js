import { Fragment, useReducer, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled2 from './css/Recommend_button.module.css';

import Recommend_Allpicture from "./Recommend_Allpicture";
import Recommend_France from "./Recommend_France";


const Recommend_button = () => {
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@600&display=swap');
    </style>

    const arr = [
        { id: 1, value: "All", src:['/search'] },
        { id: 2, value: "France", src:['/france'] },
        { id: 3, value: "United Kingdom", src: ['/uk'] },
        { id: 4, value: "Switzerland", src: ['/swiss'] },
        { id: 5, value: "Italy", src: ['/italy'] },
        { id: 6, value: "Germany", src: ['/germany'] },
        { id: 7, value: "Croatia", src:['/croatia'] },
    ]

    const [keyword, setKeyword] = useState(arr);


    const [show, setShow] = useState();


    // const showContent = (e) => {
    //     if(e.target.tagName !== 'A')return;

    //     const newShow = arr.filter(item=> item.value === e.target.innerHTML);
    //     setShow(newShow.src[0]);
       
    // }



    const newTag = keyword.map(item =>

        <li className={styled2.destinationTag} key={item.id} >
             <Link to={item.src[0]}>
           {item.value}
            </Link>
        </li>

    )

      
    console.log(newTag);

    return (
        <Fragment>
 
            <div className={styled2.destinationContainer}>
                <h3 style={{ fontFamily: 'Lora, serif', fontSize: '30px', textAlign: 'center' }}> Recommended Europe destinations</h3>
                <br />
                <div>
                    <ul className={styled2.destinationBox}>
                        {newTag}
                    </ul>
                </div>
            </div>

          
            {/* <Recommend_France/>
            {/* <Recommend_UK/>
            <Recommend_Sw/>
            <Recommend_Italy/>
            <Recommend_Ger/>
            <Recommend_Croatia/> */} 

        </Fragment>

    )
}

export default Recommend_button;