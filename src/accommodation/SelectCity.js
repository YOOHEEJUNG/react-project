import { Fragment, useState } from "react";
import "./SelectCity.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

const SelectCity = () => {

    const[toggle,setToggle] = useState('false');

    const buttonControl = () => {
            let li_toggle = document.querySelectorAll(".li_toggle");
            let buttons = document.querySelectorAll(".ct_buttons_icon");
            // console.log(li_toggle, buttons);
            for(let i=0; i<li_toggle.length; i++){
                li_toggle[i].classList.toggle("unActive");
            }
            for(let i=0; i<buttons.length; i++){
                buttons[i].classList.toggle("unActive");
            }
    }
    

    return (
        <Fragment>
            <section className="SelectCity">
                <div className="inner_wrap">
                    <h2 className="title">
                        내 동선을 최소로 해주는 숙소를 찾아보세요!
                    </h2>
                    <div className="swiper-container">
                        <ul className="swiper-wrapper">
                            <li>
                                <a href="index_city.asp?region=111011004">
                                    <div className="thumb_wrap">
                                        <div className="imgArea">
                                            <img src="accommodation_files/select01.jpg" alt="파리"></img>
                                        </div>
                                        <div className="text_box">
                                            <p>파리</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="index_city.asp?region=111011004">
                                    <div className="thumb_wrap">
                                        <div className="imgArea">
                                            <img src="accommodation_files/select02.jpg" alt="파리"></img>
                                        </div>
                                        <div className="text_box">
                                            <p>런던</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="index_city.asp?region=111011004">
                                    <div className="thumb_wrap">
                                        <div className="imgArea">
                                            <img src="accommodation_files/select03.jpg" alt="파리"></img>
                                        </div>
                                        <div className="text_box">
                                            <p>바르셀로나</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="index_city.asp?region=111011004">
                                    <div className="thumb_wrap">
                                        <div className="imgArea">
                                            <img src="accommodation_files/select04.jpg" alt="파리"></img>
                                        </div>
                                        <div className="text_box">
                                            <p>프라하</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="index_city.asp?region=111011004">
                                    <div className="thumb_wrap">
                                        <div className="imgArea">
                                            <img src="accommodation_files/select05.jpg" alt="파리"></img>
                                        </div>
                                        <div className="text_box">
                                            <p>로마</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="index_city.asp?region=111011004">
                                    <div className="thumb_wrap">
                                        <div className="imgArea">
                                            <img src="accommodation_files/select06.jpg" alt="파리"></img>
                                        </div>
                                        <div className="text_box">
                                            <p>피렌체</p>
                                        </div>
                                    </div>
                                </a>
                            </li> {/* 여기까지가 첫째 줄 */}
                            {/* 여기서부터 보였다 안보였다 할 수 있게해야함. */}
                            <li className="li_toggle unActive">
                                <a href="index_city.asp?region=111011004">
                                    <div className="thumb_wrap">
                                        <div className="imgArea">
                                            <img src="accommodation_files/select07.jpg" alt="파리"></img>
                                        </div>
                                        <div className="text_box">
                                            <p>베니스</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="li_toggle unActive">
                                <a href="index_city.asp?region=111011004">
                                    <div className="thumb_wrap">
                                        <div className="imgArea">
                                            <img src="accommodation_files/select08.jpg" alt="파리"></img>
                                        </div>
                                        <div className="text_box">
                                            <p>마드리드</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="li_toggle unActive">
                                <a href="index_city.asp?region=111011004">
                                    <div className="thumb_wrap">
                                        <div className="imgArea">
                                            <img src="accommodation_files/select09.jpg" alt="파리"></img>
                                        </div>
                                        <div className="text_box">
                                            <p>비엔나</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="li_toggle unActive">
                                <a href="index_city.asp?region=111011004">
                                    <div className="thumb_wrap">
                                        <div className="imgArea">
                                            <img src="accommodation_files/select11.jpg" alt="파리"></img>
                                        </div>
                                        <div className="text_box">
                                            <p>부다페스트</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="li_toggle unActive">
                                <a href="index_city.asp?region=111011004">
                                    <div className="thumb_wrap">
                                        <div className="imgArea">
                                            <img src="accommodation_files/select12.jpg" alt="파리"></img>
                                        </div>
                                        <div className="text_box">
                                            <p>프랑크푸르트</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="li_toggle unActive">
                                <a href="index_city.asp?region=111011004">
                                    <div className="thumb_wrap">
                                        <div className="imgArea">
                                            <img src="accommodation_files/select13.jpg" alt="파리"></img>
                                        </div>
                                        <div className="text_box">
                                            <p>뮌헨</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="li_toggle unActive">
                                <a href="index_city.asp?region=111011004">
                                    <div className="thumb_wrap">
                                        <div className="imgArea">
                                            <img src="accommodation_files/select14.jpg" alt="파리"></img>
                                        </div>
                                        <div className="text_box">
                                            <p>베를린</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="li_toggle unActive">
                                <a href="index_city.asp?region=111011004">
                                    <div className="thumb_wrap">
                                        <div className="imgArea">
                                            <img src="accommodation_files/select15.jpg" alt="파리"></img>
                                        </div>
                                        <div className="text_box">
                                            <p>암스테르담</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="li_toggle unActive">
                                <a href="index_city.asp?region=111011004">
                                    <div className="thumb_wrap">
                                        <div className="imgArea">
                                            <img src="accommodation_files/select16.jpg" alt="파리"></img>
                                        </div>
                                        <div className="text_box">
                                            <p>브뤼셀</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="li_toggle unActive">
                                <a href="index_city.asp?region=111011004">
                                    <div className="thumb_wrap">
                                        <div className="imgArea">
                                            <img src="accommodation_files/select17.jpg" alt="파리"></img>
                                        </div>
                                        <div className="text_box">
                                            <p>인터라켄</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="ct_button_wrap">
                            <button type="button" className="ct_button">
                                <IoIosArrowDropdownCircle className="ct_buttons_icon"size="50" color="black" cursor="pointer" onClick = {buttonControl}/>
                                <IoIosArrowDropupCircle  className="ct_buttons_icon unActive" size="50" color="black"  cursor="pointer" onClick = {buttonControl}/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )

}

export default SelectCity;