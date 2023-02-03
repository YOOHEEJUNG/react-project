import { Button } from "react-bootstrap";
import { KAKAO_AUTH_URL } from "./OAuth";
import styled from './KakaoLogin.module.css';

const KakaoLogin = () => {

    return (
        <div className={styled.btnBox}>
            <h3>카카오로 로그인 하기</h3>
                <Button href={KAKAO_AUTH_URL} className={styled.btn}>
                    <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
                </Button>
        </div>
    )
}

export default KakaoLogin;