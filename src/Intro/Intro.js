import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from './css/Intro.module.css';
import Recommend_Allpicture from './Recommend_Allpicture';
import Recommend_button from './Recommend_button';
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Lora:wght@600&family=Noto+Sans+KR:wght@300&display=swap" rel="stylesheet"></link>


const Intro = () => {
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@600&display=swap');
    </style>


    return (
        <Fragment>

            <div style={{ height: "95vh" }}>
                {/* 인트로 영상 */}

                <video className={styled.IntroVideo} src="https://video.wixstatic.com/video/375882_9f1a8e8b364946f38b7eb05436e76503/1080p/mp4/file.mp4" autoPlay muted loop></video>


                {/* 올해 추천 여행지 박스 */}
                <div className={styled.recoomend}>
                    <div className={styled.recommendBox}>
                        <div style={{ margin: '5px', padding: '0 20px' }}>
                            <h3 style={{ fontFamily: 'Lora, serif', paddingLeft: '10px', marginBottom: '6px', fontSize: '23px'}}>2023 Recommended travel destinations</h3><br />{/* 박스 제목 */}
                            <div style={{ paddingLeft: '10px', float: 'left' }}>{/* 박스 사진 */}
                                <img style={{ margin: '0 0 0 10px', width: '280px', height: '220px', filter: 'grayscale(25%)' }} src='img_yoo/img1.jpg' alt='img1' />
                            </div>
                            {/* 컨텐츠 박스 */}
                            <Link to='/netherland' className={styled.contentAtag}>
                                <div className={styled.contentsBox} >
                                    <span style={{color:"white"}}>{/* 박스 컨텐츠 */}
                                        <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '23px' }}>Netherland Tulip Festival</h3><br /> {/* 박스 컨텐츠의 제목 */}
                                        If you visit the Netherlands in the spring, you should not miss <br />
                                        the Quickenhoff. The tulip festival keukenhof, which marks <br />
                                        the beginning of the Dutch spring, is also called the European Garden.  <br />
                                        From the end of March to May, more than 7 million bulbs <br />
                                        will welcome visitors. The 2023 Cukenhof is from March 23rd to May 14th,  <br />
                                        so I hope you don't miss this opportunity.  <br />
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
           

        </Fragment>



    )
}
export default Intro;