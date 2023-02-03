import { Fragment, useState } from "react";
import styled5 from './css/Traveler.module.css';
import { HiUserCircle } from "react-icons/hi2";


const Traveler = () => {
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
    </style>

        // const [modalOpen, setModalOpen] = useState(false);

        // const modalClick = () => {
        //     setModalOpen(true);
        // }


    return (


        <Fragment>

            <div style={{ backgroundColor: 'rgba(211, 162, 97, 0.407', paddingTop: '10px', marginTop: '50px' }}>


                <div>
                    <h3 style={{ fontFamily: 'Lora, serif', marginTop: '40px', paddingLeft: '190px', fontSize: '23px', fontWeight: 'bolder', color: 'white', textShadow: ' 2px 2px 3px rgba(128, 128, 128, 0.396)' }}>Traveler's Recommended Destinations</h3>
                </div>

                <div className={styled5.travelerWrap}>
                    <div className={styled5.travelerBox}>
                        <div className={styled5.travelerBox1} >
                        
                            <div>
                                <img src='https://d3b39vpyptsv01.cloudfront.net/photo/1/2/def0dd0abdfd4e0f9a04aa344d44a3bf_l.jpg' />
                            </div>
                            <div className={styled5.travelerContent1}>
                                <div style={{ display: 'flex', marginBottom: '15px' }}>
                                    <HiUserCircle><span style={{ width: '15px', height: '15px' }} /></HiUserCircle><span style={{ fontSize: '12px', paddingLeft: '7px', alignContent: 'center' }}>Wan</span>
                                    <span style={{ fontSize: '12px', paddingLeft: '7px', alignContent: 'center' }}>2023-01-23</span>
                                </div>

                                <h3>Riga</h3>
                                <div>
                                    <span>
                                        발트 3국의 최대의 도시
                                    </span>

                                </div>
                            </div>
                        </div>

                        <div className={styled5.travelerBox1}>
                            <div>
                                <img src='	https://d3b39vpyptsv01.cloudfront.net/photo/1/2/e9ccb82a563531a380504792acc3234c_l.jpg' />
                            </div>
                            <div className={styled5.travelerContent1}>
                                <div style={{ display: 'flex', marginBottom: '15px' }}>
                                    <HiUserCircle><span style={{ width: '15px', height: '15px' }} /></HiUserCircle><span style={{ fontSize: '12px', paddingLeft: '7px', alignContent: 'center' }}>Jung</span>
                                    <span style={{ fontSize: '12px', paddingLeft: '7px', alignContent: 'center' }}>2023-01-24</span>
                                </div>
                                <h3>Budapest</h3>
                                <div>
                                    <span>
                                        도나우강이 흐르는 헝가리의 중심
                                    </span>

                                </div>
                            </div>

                        </div>
                        <div className={styled5.travelerBox1}>
                            <div>
                                <img src='https://d3b39vpyptsv01.cloudfront.net/photo/1/2/dabdeb9c70416669208996acbe3a0827_l.jpg' />
                            </div>
                            <div className={styled5.travelerContent1}>
                                <div style={{ display: 'flex', marginBottom: '15px' }}>
                                    <HiUserCircle><span style={{ width: '15px', height: '15px' }} /></HiUserCircle><span style={{ fontSize: '12px', paddingLeft: '7px', alignContent: 'center' }}>Jae</span>
                                    <span style={{ fontSize: '12px', paddingLeft: '7px', alignContent: 'center' }}>2023-01-25</span>
                                </div>
                                <h3>Safranbolu</h3>
                                <div>
                                    <span>
                                        사프란 꽃처럼 아름다운 도시
                                    </span>

                                </div>
                            </div>

                        </div>
                        <div className={styled5.travelerBox1}>
                            <div>
                                <img src='https://d3b39vpyptsv01.cloudfront.net/photo/1/2/fb8717ef23cd09683b96081d5cf5ed34_l.jpg' />
                            </div>
                            <div className={styled5.travelerContent1}>
                                <div style={{ display: 'flex', marginBottom: '15px' }}>
                                    <HiUserCircle><span style={{ width: '15px', height: '15px' }} /></HiUserCircle><span style={{ fontSize: '12px', paddingLeft: '7px', alignContent: 'center' }}>Min</span>
                                    <span style={{ fontSize: '12px', paddingLeft: '7px', alignContent: 'center' }}>2023-01-26</span>
                                </div>
                                <h3>
                                    Tower Bridge </h3>
                                <div>
                                    <span>
                                        런던의 심장을 가까이에서 느껴봐
                                    </span>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </Fragment>

    )
}
export default Traveler;