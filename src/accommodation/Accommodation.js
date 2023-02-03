import { Fragment, useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Map from "./Map";
import PopUp from "./PopUp";
import Promotion from "./Promotion";
import SelectCity from "./SelectCity";
import TopBanner from "./TopBanner";

const Accommodation = () => {

    const[popup, setPopup] = useState(false)

    useEffect(()=>{

        // window.open("PopUp.js","팝업", "width=1200px","height=700px", "left=100px", "top=100px")

        //쿠키 중 popup 키의 값이 false 가 아니면 팝업창 띄우도록 하기.
        let popUp_State = '';
        if(document.cookie !== ''){
            popUp_State = JSON.parse(document.cookie).popup;
        }
        if(popUp_State !== 'false'){
            setPopup(true);
        }

    },[]);

    return (
        <Fragment>
            {popup && <PopUp/>}
            <Header/>
            <TopBanner/>
            <SelectCity/>
            <Map/>
            <Promotion/>
            <Footer/>
        </Fragment>
    )

}

export default Accommodation;