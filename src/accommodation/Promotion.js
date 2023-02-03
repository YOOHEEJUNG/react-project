import { Fragment } from "react";
import "./Promotion.css";

const Promotion = () => {

    return (
        <Fragment>
            <section className="promotion_part">
                <div className="promo_inner_wrap">
                    <h2>혜택</h2>
                    <p>고객님을 위해 준비된 프로모션과 특가, 특별 혜택을 만나보세요</p>
                    <div className="promo_picture_box">
                        <ul className="inner_box">
                            <li className="promo_picture01">
                                <div>
                                    <h3>새 여행으로 여는 새해</h3>
                                    <p>
                                        2023년 3월 31일까지 15%이상 저렴하게<br />
                                        숙박할 수 있는 상품을 예약하세요
                                    </p>
                                    <button className="btn btn-info">2023 새해맞이 특가 찾기</button>
                                </div>
                            </li>
                            <li className="promo_picture02">
                                <div>
                                    <h3>일상을 떠나 만끽하는 나만의 자유시간</h3>
                                    <p>
                                        Booking.com과 함께 한 달 이상 여유롭게<br />
                                        숙박해 보세요
                                    </p>
                                    <button className="btn btn-info">1개월 이상 숙박할 수 있는 숙소 찾기</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        </Fragment>
    )

}

export default Promotion;