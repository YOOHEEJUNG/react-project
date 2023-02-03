import { Fragment } from "react";
import "./Footer.css"

const Footer = () => {

    return (
        <Fragment>
            <footer>
                <div className="stu_utils">
                    <div className="utils_inner_wrap">
                        <ul className="stu_links">
                            <li><a href="">광고/제휴문의</a></li>
                            <li><a href="">서비스문의</a></li>
                            <li><a href="">개인정보 취급방침</a></li>
                            <li><a href="">이용약관</a></li>
                            <li><a href="">여행자약관</a></li>
                            <li><a href="">가이드약관</a></li>
                        </ul>
                        <ul className="stu_sns">
                            <li className="stu_facebook"><a href="http://www.facebook.com/stubbyplanner/">페이스북</a></li>
                            <li className="stu_instagram"><a href="https://www.instagram.com/stubbyplanner/">인스타</a></li>
                            <li className="stu_kakaotalk"><a href="https://pf.kakao.com/_QwGUM/">카톡</a></li>
                            <li className="stu_email"><a href="mailto://stubbyteam@gmail.com">이메일</a></li>
                        </ul>
                    </div>
                </div>
                <div className="stu_coInfo">
                    <div className="coInfo_inner_wrap">
                        <div className="stu_footer_logo"></div>
                        <div className="txtWrap">
                            <div>상상속 여행을 현실로, 스투비플래너</div>
                            <div>contact : stubbyteam@gmail.com</div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )

}

export default Footer;