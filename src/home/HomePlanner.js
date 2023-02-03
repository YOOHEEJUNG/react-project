import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import styled from "./HomePlanner.module.css";

const HomePlanner = () => {

    const category = [
        {name: "최신", info: [<img src="https://map.iselsoft.co.kr/map/400/400/41.895,12.482,4%7C43.769,11.257,1%7C45.434,12.339,1"/>, <img src="https://map.iselsoft.co.kr/map/400/400/41.895,12.482,4%7C43.769,11.257,1%7C45.434,12.339,1"/>, "최신추천 이미지 준비중", "최신추천 이미지 준비중"]},
        {name: "아이들과", info: [<img src="https://map.iselsoft.co.kr/map/400/400/48.861,2.342,4%7C43.769,11.257,3%7C41.895,12.482,3"/>, "아이추천 이미지 준비중", "아이추천 이미지 준비중", "아이추천 이미지 준비중"]},
        {name: "커플/신혼", info: ["커플추천 이미지 준비중", "신혼추천 이미지 준비중", "커플추천 이미지 준비중", <img src="https://www.stubbyplanner.com/img_v9/img_pfnull.jpg"/>]},
        {name: "부모님과", info: ["부모님 추천 이미지 준비중", "부모님 추천 이미지 준비중", "부모님 추천 이미지 준비중", "부모님 추천 이미지 준비중"]},
        {name: "남자혼자", info: ["남자추천 이미지 준비중", "남자추천 이미지 준비중", "남자추천 이미지 준비중", "남자추천 이미지 준비중"]},
        {name: "여자혼자", info: [<img src="https://map.iselsoft.co.kr/map/400/400/51.5,-0.126,3%7C48.861,2.342,4%7C51.5,-0.126,1"/>, "여자추천 이미지 준비중", "여자추천 이미지 준비중", "여자추천 이미지 준비중"]},
        {name: "여자끼리", info: ["여자끼리추천 이미지 준비중", "여자끼리추천 이미지 준비중", "여자끼리추천 이미지 준비중", "여자끼리추천 이미지 준비중"]},
        {name: "남자끼리", info: ["남자끼리추천 이미지 준비중", "남자끼리추천 이미지 준비중", <img src="https://www.stubbyplanner.com/img_v9/img_pfnull.jpg"/>, "남자끼리추천 이미지 준비중"]},
        {name: "남녀함께", info: [<img src="https://map.iselsoft.co.kr/map/400/400/48.861,2.342,4%7C51.5,-0.126,4"/>, "남녀추천 이미지 준비중", "남녀추천 이미지 준비중", "남녀추천 이미지 준비중"]}
    ]

    const [data, setData] = useState(category[0].info); 

    const handleClick = (e) => {

        if(e.target.tagName !== 'A')return;
        
        const newArr = category.filter(item=> item.name === e.target.innerHTML);

        setData(newArr[0].info);
    }

    return (
        <>
            <div className={styled.plannerBox}>
                <strong>준비중인 여행자들의 플래너</strong>
                <ul>
                    {
                        category.map((item, index) =>
                            <li key={index} onClick={handleClick}>
                                <NavLink to="#" id={item.info}>{item.name}</NavLink>
                            </li>
                        )
                    }

                </ul>
                { 
                    <div className={styled.plannerInfo}>
                        <p>{data[0]}</p>
                        <p>{data[1]}</p>
                        <p>{data[2]}</p>
                        <p>{data[3]}</p>
                    </div>
                }
            </div>

            <div className={styled.lastBanner}>
                <p>셀프 유럽여행, 시간/비용 줄여주는</p>
                <h1>스투비 셀프팩</h1>
                <img src="https://cdn-icons-png.flaticon.com/512/2885/2885386.png"/>
            </div>
        </>
    )

}

export default HomePlanner;