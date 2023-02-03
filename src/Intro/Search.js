import { Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Intro from "./Intro";
import Recommend_Allpicture from "./Recommend_Allpicture";
import Recommend_button from "./Recommend_button";
import Traveler from "./Traveler";

const Search = () => {
    return(
        <Fragment>
            <Header/>
            <Intro/>
            <Recommend_button/>
            <Recommend_Allpicture/>
            <Traveler/>
            <Footer/>
        </Fragment>
        
    )
}
export default Search;