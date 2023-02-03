import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Netherland from "./Intro/Netherland";
import Oxford_Info from "./Intro/Oxford_Info";
import Recommend_Allpicture from "./Intro/Recommend_Allpicture";
import Recommend_Croatia from "./Intro/Recommend_Croatia";
import Recommend_France from "./Intro/Recommend_France";
import Recommend_Ger from "./Intro/Recommend_Ger";
import Recommend_Italy from "./Intro/Recommend_Italy";
import Recommend_Sw from "./Intro/Recommend_Sw";
import Recommend_UK from "./Intro/Recommend_UK";
import Search from "./Intro/Search";

import Home from "./home/Home";
import KakaoLogin from "./header/Login/KakaoLogin";
import FlightMain from "./flight/FlightMain";
import Accommodation from "./accommodation/Accommodation";



function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/oxford" element={<Oxford_Info />} />
        <Route path="/all" element={<Recommend_Allpicture />} />
        <Route path="/france" element={<Recommend_France />} />
        <Route path="/croatia" element={<Recommend_Croatia />} />
        <Route path="/germany" element={<Recommend_Ger />} />
        <Route path="/swiss" element={<Recommend_Sw />} />
        <Route path="/italy" element={<Recommend_Italy />} />
        <Route path="/uk" element={<Recommend_UK />} />
        <Route path="/netherland" element={<Netherland />} />

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<KakaoLogin />} />
        <Route path="/flight" element={<FlightMain />} />
        <Route path="/accommodation" element={<Accommodation />} />
   
      </Routes>

    </Fragment>
  )
}

export default App;
