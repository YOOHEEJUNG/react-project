import { Fragment } from "react";
import "./TopBanner.css";

const TopBanner = () => {



    return (
        <Fragment>
            <section className="stu_topBanner">
                <div className="inner_wrap">
                    <div className="viewPoint">
                        <div className="textArea">
                            <p className="type1">최적 동선의</p>
                            <p className="type2">유럽 숙소 간편검색</p>
                        </div>
                        <img src="accommodation_files/sleeping.png" alt="sleeping"/>
                    </div>
                </div>
                <div className="search">
                    <a href="#" className="search_input"><i></i>도시명으로 검색</a>
                </div>
            </section>
        </Fragment>
    )

}

export default TopBanner;