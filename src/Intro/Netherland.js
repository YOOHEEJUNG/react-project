import { Fragment } from "react"
import styled6 from './css/Netherland.module.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";


const Netherland = () => {
    <style>
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
    </style>
    return (
        <Fragment>
            <Header/>
            <div style={{ backgroundColor: 'rgb(243,239,235)' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className={styled6.netherlandInfo}>
                        <div className={styled6.netherlandContent}>
                            <h3>Netherland Tulips Festival</h3>
                            <span style={{ color: 'rgb(97, 65, 16)', fontFamily: 'IBM Plex Sans KR, sans-serif', fontSize: '14px', lineHeight: '5px' }}>
                                쾨켄호프는 전 국토의 3%가 꽃 재배지역인 네덜란드가 가장 자랑하는 튤립 생산지다.
                                부엌을 뜻하는 쾨켄(Keuken)과 정원이라는 뜻의 호프(Hof)가 합쳐진 지명은 과거 이곳이 귀족들의
                                연회장으로 사용된 정원임을 알려준다. 사순절 기간을 정점으로 이달까지 이어지는
                                ‘튤립축제’ 기간에는 26유로의 티켓 한 장으로 쾨켄호프 입장권과 공항까지 오가는 왕복 버스를 이용할 수 있다.
                            </span>

                        </div>
                        <div className={styled6.netherlandContent}>
                            <video className={styled6.tulipsVideo} src="/video_yoo/tulips.mp4" autoPlay muted loop />
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className={styled6.zanParent1}>
                    <div className={styled6.zanImg}>
                        <img className={styled6.zanImg1} style={{ width: '260px', height: '280px' }} src="https://d3b39vpyptsv01.cloudfront.net/photo/1/2/2c4bc79e923375816e2c08aee5542e18.jpg" />
                        <img className={styled6.zanImg2} style={{ width: '260px', height: '280px' }} src="https://img.freepik.com/premium-photo/windmills-at…d-on-sunset-zaandam-nether_163782-7515.jpg?w=1380" />
                    </div>
                    <div className={styled6.zanInfo}>
                        <p style={{fontSize:'80px', fontWeight:'700', color:'rgba(5, 62, 29, 0.912)', marginBottom:'25px'}}>01</p>
                        <h3 style={{fontSize: '26px', marginBottom: '25px', color:'rgb(241, 220, 200)', fontStyle:'italic'}}>Zaanse Schans</h3>
                        <span style={{fontFamily: 'IBM Plex Sans KR, sans-serif', fontSize: '14px', color: 'rgb(97, 65, 16)', textShadow:"none"}}>
                            동화 속 풍경이 그대로 펼쳐져 있는 잔세스칸스 풍차마을입니다.
                            네덜란드에 있던 옛날 풍차들을 옮겨와 재조립해 민속촌으로 꾸민 마을이라고 해요.
                            예쁘고 목가적인 집들과 나막신 공장, 치즈 공장이 일반인들에게 공개되어 있어요!
                        </span>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: 'rgba(246, 229, 207, 0.222)' }}>
                <div className={styled6.zanParent2} style={{marginBottom:'20px', padding:'20px'}}>
                    <div className={styled6.zanImg4}>
                        <img className={styled6.zanImg1} style={{ width: '300px', height: '235px' }} src="https://d3b39vpyptsv01.cloudfront.net/photo/1/2/734113a15ba936c08f6df004880e3c85_l.jpg" />
                        <img className={styled6.zanImg2} style={{ width: '300px', height: '235px' }} src="https://d3b39vpyptsv01.cloudfront.net/photo/1/2/addcb477ccabe6d59b62ffd8949db4ad.jpg" />
                    </div>
                    <div className={styled6.zanInfo2}>
                        <p style={{fontSize:'80px', fontWeight:'700', color:'rgba(5, 62, 29, 0.912)', marginBottom:'25px'}}>02</p>
                        <h3 style={{fontSize: '26px', marginBottom: '25px', color:'rgb(241, 220, 200)', fontStyle:'italic'}}>Dam Square</h3>
                        <span style={{fontFamily: 'IBM Plex Sans KR, sans-serif', fontSize: '14px', color: 'rgb(97, 65, 16)', textShadow:"none"}}>
                        암스테르담의 모든 길은 담 광장으로 향한다는 것 알고계셨나요? 
                        진정한 만남의 광장이라고 할 수 있겠네요. 
                        이런 담광장을중심으로 신 교회, 마담투소 박물관, 왕궁 등 암스테르담의 명소들이 줄지어져 있답니다. 
                        특히 담 광장은 60년대 히피들과 거리의 예술가들이 많았다고 해요. 
                        지금의 담 광장은 어떤 모습일지 한 번 확인해보세요!
                        </span>
                    </div>
                </div>
            </div>

            <div >
                <div className={styled6.zanParent3}>
                    <div className={styled6.zanImg3}>
                        <img className={styled6.zanImg1} style={{ width: '320px', height: '230px' }} src="https://d3b39vpyptsv01.cloudfront.net/photo/1/2/08a8e5646951188777be256610035a7c.jpg" />
                        <img className={styled6.zanImg2} style={{ width: '320px', height: '230px' }} src="https://d3b39vpyptsv01.cloudfront.net/photo/1/2/68d4a5845ab1ec897ec6195b6a5bc862_l.jpg" />
                    </div>
                    <div className={styled6.zanInfo3}>
                        <p style={{fontSize:'80px', fontWeight:'700', color:'rgba(5, 62, 29, 0.912)', marginBottom:'25px'}}>03</p>
                        <h3 style={{fontSize: '26px', marginBottom: '25px', color:'rgb(241, 220, 200)', fontStyle:'italic'}}>Amstel Rivier</h3>
                        <span style={{fontFamily: 'IBM Plex Sans KR, sans-serif', fontSize: '14px', color: 'rgb(97, 65, 16)', textShadow:"none"}}>
                        도시 이름 암스테르담이 바로 암스텔강에서부터 유래되었다고 해요. 
                        어떻게 하다가 강의 이름이 도시의 이름으로 파생되었을지 궁금하지 않으세요?
                         강과 도시에 관한 역사가 매우 깊답니다! 이번 투어로 그 궁금증을 파헤쳐봐요!
                        </span>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default Netherland;