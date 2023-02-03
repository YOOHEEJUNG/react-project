import styled from './Homepage.module.css';

const Homepage = () => {

    return(
        <>
            <section className={styled.mainBox}>
                <div className={styled.mainImg}>
                    <img src="https://d3b39vpyptsv01.cloudfront.net/photo/1/2/2f69e05d4d598d3959fb6d8a1801ef5a.jpg"/>
                </div>
                <div className={styled.mainText}>
                    <p className={styled.p1}>상상 속 유럽여행,</p>
                    <p className={styled.p2}>현실로 만들어 보세요.</p><br/>
                    <p className={styled.p3}>지도 위에서 다양한 유럽 도시들을 탐색하고</p>
                    <p className={styled.p4}>교통편과 숙박일수를 추천 받으세요.</p>
                    <p className={styled.p5}>친구를 초대 해 함께 하거나</p>
                    <p className={styled.p6}>모바일 앱에서 수정 할 수 있습니다.</p>
                    <div className={styled.start}>
                        <a href="#">플래너 시작하기</a>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Homepage;