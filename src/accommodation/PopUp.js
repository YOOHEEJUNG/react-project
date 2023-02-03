import './PopUp.css'

const PopUp = () => {

    const handleClick = () => {
        document.querySelector(".popUp").style.display="none";
    }

    /* 팝업창 쿠키 제어 함수 */
    const cookieHandle = (e) => {
        let cookie = '{"popup":"false"};path=/;expires=';

        let date = new Date();
        console.log(date);

        if(e.target.value === "one"){ //화면 안 띄우기 하루 유지
            date.setDate(date.getDate()+1);
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            cookie += date.toUTCString();

        } else if(e.target.value === "seven"){ //화면 안 띄우기 1주일 유지
            date.setDate(date.getDate()+7);
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            cookie += date.toUTCString();
        }
        //웹페이지에 쿠키 생성
        document.cookie = cookie;
        
        document.querySelector(".popUp").style.display="none";
    }

    return (
        <>
            <div className='popUp'>
                <div className='popUp_innerWrap'>
                    <div className='inner_part1'>
                        <img src='accommodation_files/popup.png' alt="지구본"></img>
                    </div>
                    <div className='inner_part2'>
                        <h2>즉시 할인을 누리세요</h2>
                        <p>
                            할인 혜택을 누리려면 Stubby.com 계정으로 로그인하고 파란색 <br/>
                            Genius 로고를 찾아보세요!
                        </p>
                        <ul>
                            <li><a href='#'>로그인</a></li>
                            <li><a href='#'>회원가입</a></li>
                        </ul>
                        <div className='check_wrap'>
                            <input type="radio" name="chk_cookie" value="one" onClick={cookieHandle}/>오늘 하루 그만보기
                            <input type="radio" name="chk_cookie" value="seven" onClick={cookieHandle}/>이 창을 일주일간 열지않습니다
                        </div>    
                    </div>
                </div>
                <button type='button' className='popup_close' onClick={handleClick}>x</button>
            </div>
        </>
    )

}

export default PopUp;