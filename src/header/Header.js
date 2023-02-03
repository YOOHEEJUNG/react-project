import { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from './Header.module.css';

const Header = () => {

    return (
        <>

            <header className={styled.header}>
                <div className={styled.header_box}>
                    <div className={styled.first_content}>
                        <Link to='#'>
                            <p>셀프 유럽여행, 시간/비용 줄여주는</p>
                            <h3>스투비 셀프팩</h3>
                        </Link>
                    </div>
                    <span>
                        <Link to='#'>
                            <img className={styled.img} src='https://www.stubbyplanner.com/images2/stu_logo_mobile.png' />
                        </Link>
                    </span>
                    <div className={styled.login}>
                        <p><Link to='#'>예약내역</Link></p>
                        <p className={styled.loginText}><Link to='/login'>로그인<img src='https://www.stubbyplanner.com/img_v9/ico_flag_ko.png'/></Link></p>
                        <p className={styled.join}><Link to='#'>회원가입</Link></p>
                    </div>
                </div>
                <div className={styled.bannerBox}>
                    <div className={styled.mainBanner}>
                        <p><Link to='/'>홈</Link></p>
                        <p><Link to='/search'>탐색</Link></p>
                        <p><Link to="/accommodation">숙소</Link></p>
                        <p><Link to='/flight'>항공</Link></p>
                    <div className={styled.search_icon}>
                        <a href='#'><img src='https://svgsilh.com/svg/1093183.svg'></img></a>
                    </div>
                    </div>
                </div>
            </header>

        </>
    )

}

export default Header;