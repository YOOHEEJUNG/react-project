import { Fragment } from "react"
import { Route, Routes } from "react-router-dom";
import styled4 from './css/Oxford_Info.module.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";


const Oxford_Info = () => {
    <style>
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
    </style>

    return (
        <Fragment>
            <Header/>

            <div className={styled4.contentWrap}>
                <div className={styled4.contentBox}>

                    <div style={{ margin: '40px' }}>
                        <img src='/img_yoo/UK1.jpg' />
                    </div>
                    <div className={styled4.contentText}>
                        <h2 style={{ fontStyle: 'italic', fontSize: '40px', marginBottom: '30px' }}>Oxford</h2>
                        <div className={styled4.contentTitle}>
                            <span >"Harry Potter" filming locations, University of Oxford </span><br />
                        </div>
                        <div className={styled4.contentInfo}>
                            <span>
                                38개의 컬리지가 도시 곳곳에 분포하고 있어, 옥스퍼드 자체가 대학교라고 할 수 있다.
                                스티븐 호킹, 휴 그랜트 등 47명의 노벨상 수상자를 배출한 세계 명문 대학교로 운영되고 있는 박물관과 미술관만 여러 개에
                                그 수준까지 높다고 한다. 이 뿐 아니라 해리포터가 신입생 오티를 하고 퀴디치를 하던 곳으로 이상한 나라의 앨리스의 배경이 되기도
                                한 이 곳!
                            </span>

                        </div>
                    </div>
                </div>
            </div>

            {/* 추천 관광지 */}
            <div>
                <h1 style={{ paddingLeft: '130px', fontStyle: 'italic' }}>Highly Recommended</h1>
            </div>

            <div className={styled4.highlyWrap}>
                <div className={styled4.highlyBox}>
                    <div className={styled4.highlyBox1}>
                        <div>
                            <img src='https://d3b39vpyptsv01.cloudfront.net/photo/1/2/c72b21857e3c62aacd7eacba5bd21d36_l.jpg' />
                        </div>
                        <div className={styled4.highlyContent1}>
                            <h3>Wanna be Harry Potter?</h3>
                            <div>
                                <span>
                                    호그와트 식당의 배경이 된 크라이스트 처치 컬리지, 퀴디치 수업을 하던 잔디밭까지!
                                    크라이스트 처치에서 성가대 공연이 있다는 것도 알고 있나요? (토요일 제외 18시!)
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styled4.highlyBox1}>
                        <div>
                            <img src='https://d3b39vpyptsv01.cloudfront.net/photo/1/2/231e0d71bae5d6ddfc674be3eda34c4d_l.jpg' />
                        </div>
                        <div className={styled4.highlyContent1}>
                            <h3>Do u like libraries?</h3>
                            <div>
                                <span>
                                    약 500만 권 책 보유, 영국에서 발간되는 모든 책을 보관하도록 하고 있어 "저작권 도서관"으로 알려져 있다.
                                    투어로만 견학 가능하다는 사실은 반드시 알고 있도록!
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className={styled4.highlyBox1}>
                        <div>
                            <img src='https://d3b39vpyptsv01.cloudfront.net/photo/1/2/f8e07cc65aeb71b98f123d0e9c99ce6a_l.jpg' />
                        </div>
                        <div className={styled4.highlyContent1}>
                            <h3>Why don't you become a graduate after a long time?</h3>
                            <div>
                                <span>
                                    학업으로 이 다리만 지나면 탄식이 나온다는 "탄식의 다리"! 졸업식 때 꼭 이곳에서 사진 찍는다고 하니
                                    오랜만에 졸업생 흉내내보세요!
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* 런던 */}
        <div style={{ backgroundColor: 'rgba(211, 162, 97, 0.407',  paddingTop:'10px', marginTop: '50px', paddingBottom:'40px'}}>

            <div>
                <h1 style={{ marginTop:'30px', paddingLeft: '130px', fontStyle: 'italic' }}>London & Suburbs</h1>
            </div>

            <div className={styled4.highlyWrap1}>
                <div className={styled4.highlyBox3}>
                    <div className={styled4.highlyBox2}>
                        <div>
                            <img src='https://d3b39vpyptsv01.cloudfront.net/photo/1/2/eaf7c553960a6040d3ad29b83c7acfa6_m.jpg' />
                        </div>
                        <div className={styled4.highlyContent2}>
                            <h3>Cotswold</h3>
                            <div>
                                <span>
                                    "오만과 편견"도 인정한 중세마을
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styled4.highlyBox2}>
                        <div>
                            <img src='https://d3b39vpyptsv01.cloudfront.net/photo/1/2/c83f7c71d3259e5c5b3177d2da7e79ac_m.jpg' />
                        </div>
                        <div className={styled4.highlyContent2}>
                            <h3>Seven Sisters</h3>
                            <div>
                                <span>
                                    새하얀 7개의 절벽
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className={styled4.highlyBox2}>
                        <div>
                            <img src='	https://d3b39vpyptsv01.cloudfront.net/photo/1/2/8870d273a3d9b276384c67f9f430c043_m.jpg' />
                        </div>
                        <div className={styled4.highlyContent2}>
                            <h3>
                                Windsor</h3>
                            <div>
                                <span>
                                    영국여왕의 휴식처
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className={styled4.highlyBox2}>
                        <div>
                            <img src='https://d3b39vpyptsv01.cloudfront.net/photo/1/2/eefb515ab8be349731a566260438e95f_l.jpg' />
                        </div>
                        <div className={styled4.highlyContent2}>
                            <h3>
                                London Suburbs</h3>
                            <div>
                                <span>
                                   경관이고요..장관이고요..
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>


        <Footer/>
        </Fragment>
    )
}

export default Oxford_Info;