import { Fragment, useEffect, useRef, useState } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styled from './FlightMain.module.css';
import styled1 from 'styled-components'

const wholeTextArray = [
    '인천(한국)',
    '김포(한국)',
    '청주(한국)',
    '대구(한국)',
    '제주(한국)',
    '런던(영국)',
    '맨체스터(영국)',
    '리버풀(영국)',
    '파리(프랑스)',
    '니스(프랑스)',
    '리옹(프랑스)',
    '인터라켄(스위스)',
    '취리히(스위스)',
    '제네바(스위스)',
    '프랑크푸르트(독일)',
    '베를린(독일)',
    '로마(이탈리아)',
    '피렌체(이탈리아)',
    '베니스(이탈리아)',
    '밀라노(이탈리아)',
    '마드리드(스페인)',
    '바르셀로나(스페인)',
    '그라나다(스페인)',
    '세비야(스페인)',
]

const FlightMain = () => {
    const [adult, setAdult] = useState(1);
    const [kids, setKids] = useState(0);

    const [seatgrade, setSeatgrade] = useState('일반석');
    useEffect(() => setPassenger(`${adult + kids}명 승객, ${seatgrade}`)
        , [adult, kids, seatgrade]);



    const date = new Date();
    const td = date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate();
    // console.log(td)
    const [start, setStart] = useState('인천');
    const [arrive, setArrive] = useState('어디든지');
    const [passenger, setPassenger] = useState(`${adult + kids}명 승객, ${seatgrade}`)
    const [goday, setGoday] = useState(td);
    const [comeday, setComeday] = useState("");
    const day = useRef("");
    const comedayRef = useRef("");

    const [way, setWay] = useState("");
    const radioCheck = (e) => {
        setWay(e.target.value)
    }
    useEffect(() => {

    }, [way])

    const inputHandle = (e) => {
        if (e.target.id === 'start') {
            setStart(e.target.value)
        } else if (e.target.id === 'arrive') {
            setArrive(e.target.value);
        }
    }

    const dateHandle = (e) => {
        setGoday(e.target.value)
        console.log(comedayRef.current)
    }
    const dateHandle2 = (e) => {
        setComeday(e.target.value)

    }



    const [modalOpen, setModalOpen] = useState(false);
    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };

    //승객 수 조정
    const adultUp = () => {
        if (adult != 8) setAdult(adult + 1);
    };

    const adultDown = () => {
        if (adult != 1) setAdult(adult - 1);
    };

    const kidsUp = () => {
        if (kids != 8) setKids(kids + 1);
    };

    const kidsDown = () => {
        if (kids != 0) setKids(kids - 1);
    };

    const seatChange = (e) => {
        setSeatgrade(e.target.value)
    }
    
    const weekArr = [];
  
  const rendering = () => {
    const result = [];
    for (let i = 1; i <= kids; i++) {
      result.push(<div><div>유아/소아{i} 나이</div>
          <select key={i} className={styled.modalSelect}>{weekArr[i]}
                <option value="-1">나이를 선택하세요.</option>
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
                <option value="4">5</option>
                <option value="5">6</option>
                <option value="6">7</option>
                <option value="7">8</option>
                <option value="8">9</option>
                <option value="9">10</option>
                <option value="10">11</option>
                <option value="11">12</option>
                <option value="12">13</option>
                <option value="13">14</option>
                <option value="14">15</option>
          </select>
      </div>);       
    }
    return result;
  };

    function ModalBasic() {
        // 모달 끄기 
        const closeModal = () => {
            setModalOpen(false);
        };


        return (
            <div className={styled.container}>
                <button className={styled.close} onClick={closeModal}>
                    X
                </button>
                <div>좌석 등급</div>
                <select className={styled.modalSelect} onChange={seatChange} defaultValue={seatgrade}>
                    <option value='일반석'>일반석</option>
                    <option value='비즈니스석'>비즈니스석</option>
                    <option value='일등석'>일등석</option>
                </select>
                <div>성인</div>
                <div className={styled.destinationWrap}>
                    <button className={styled.updownBtn} onClick={adultDown}>﹣</button>
                    <input className={styled.updownCount} type='text' defaultValue={adult} />
                    <button className={styled.updownBtn} onClick={adultUp}>﹢</button>
                    <div style={{ fontSize: '17px', padding: '7px' }}>만 16세 이상 </div>
                </div>
                <div style={{ marginTop: '15px' }}>유아/소아</div>
                <div className={styled.destinationWrap}>
                    <button className={styled.updownBtn} onClick={kidsDown}>﹣</button>
                    <input className={styled.updownCount} type='text' defaultValue={kids} />
                    <button className={styled.updownBtn} onClick={kidsUp}>﹢</button>
                    <div style={{ fontSize: '17px', padding: '7px' }}>만 15세 이하</div>
                     
                </div>
                <div>{rendering()}</div>
                <br />
                <p style={{ fontSize: '13px', color: '#817b8f' }}>여행 시 탑승객의 나이는 예약된 연령 범주에 부합해야 합니다. 항공사는 만 18세 미만의 단독 여행 탑승객에 대한 제한이 있습니다.</p>
                <br />
                <p style={{ fontSize: '13px', color: '#817b8f' }}>유/소아 동반 여행 시 연령 제한과 정책은 항공사별로 다를 수 있으니 예약하기 전에 해당 항공사와 확인하시기 바랍니다.</p>
                <br />
                <hr />
                <div style={{ padding: '7px' }}>
                    <button className={styled.btn1} onClick={closeModal}>완료</button>
                </div>

            </div>
        );
    }

    const [inputValue, setInputValue] = useState('인천(한국)')

    const [isHaveInputValue, setIsHaveInputValue] = useState(false)
    const [dropDownList, setDropDownList] = useState(wholeTextArray)
    const [dropDownItemIndex, setDropDownItemIndex] = useState(-1)

    const showDropDownList = () => {
        if (inputValue === '') {
            setIsHaveInputValue(false)
            setDropDownList([])
        } else {
            const choosenTextList = wholeTextArray.filter(textItem =>
                textItem.includes(inputValue)
            )
            setDropDownList(choosenTextList)
        }
    }

    const changeInputValue = event => {
        setInputValue(event.target.value)
        setIsHaveInputValue(true)
    }

    const clickDropDownItem = clickedItem => {
        setInputValue(clickedItem)
        setIsHaveInputValue(false)
    }

    const handleDropDownKey = event => {
        //input에 값이 있을때만 작동
        if (isHaveInputValue) {
            if (
                event.key === 'ArrowDown' &&
                dropDownList.length - 1 > dropDownItemIndex
            ) {
                setDropDownItemIndex(dropDownItemIndex + 1)
            }

            if (event.key === 'ArrowUp' && dropDownItemIndex >= 0)
                setDropDownItemIndex(dropDownItemIndex - 1)
            if (event.key === 'Enter' && dropDownItemIndex >= 0) {
                clickDropDownItem(dropDownList[dropDownItemIndex])
                setDropDownItemIndex(-1)
            }
        }
    }
    /*  */
    const [inputValue1, setInputValue1] = useState('어디든지')
    const [isHaveInputValue1, setIsHaveInputValue1] = useState(false)
    const [dropDownList1, setDropDownList1] = useState(wholeTextArray)
    const [dropDownItemIndex1, setDropDownItemIndex1] = useState(-1)

    const showDropDownList1 = () => {
        if (inputValue1 === '') {
            setIsHaveInputValue1(false)
            setDropDownList1([])
        } else {
            const choosenTextList = wholeTextArray.filter(textItem =>
                textItem.includes(inputValue1)
            )
            setDropDownList1(choosenTextList)
        }
    }

    const changeInputValue1 = event => {
        setInputValue1(event.target.value)
        setIsHaveInputValue1(true)
    }

    const clickDropDownItem1 = clickedItem => {
        setInputValue1(clickedItem)
        setIsHaveInputValue1(false)
    }

    const handleDropDownKey1 = event => {
        //input에 값이 있을때만 작동
        if (isHaveInputValue1) {
            if (
                event.key === 'ArrowDown' &&
                dropDownList1.length - 1 > dropDownItemIndex1
            ) {
                setDropDownItemIndex1(dropDownItemIndex1 + 1)
            }

            if (event.key === 'ArrowUp' && dropDownItemIndex1 >= 0)
                setDropDownItemIndex1(dropDownItemIndex1 - 1)
            if (event.key === 'Enter' && dropDownItemIndex1 >= 0) {
                clickDropDownItem1(dropDownList1[dropDownItemIndex1])
                setDropDownItemIndex1(-1)
            }
        }
    }

    useEffect(showDropDownList, [inputValue])
    useEffect(showDropDownList1, [inputValue1])


    return (
        <Fragment>
            <Header />

            <div>
                <div className={styled.backgroundImg}>
                    <div className={styled.flightContents}>
                        <h1 style={{ marginBottom: '30px' }}>Start your journey now</h1>
                        <div>
                            <div className={styled.chooseBg}>
                                <div className={styled.radioWrap}>
                                    <span className={styled.radioWrap2}><input type='radio' name='check' value='roundTrip' defaultChecked onChange={radioCheck} />왕복</span>
                                    <span className={styled.radioWrap2}><input type='radio' name='check' value='oneWay' ref={comedayRef} onChange={radioCheck} />편도</span>
                                    <span className={styled.radioWrap2}><input type='radio' name='check' />다구간</span>
                                </div>
                                <div className={styled.destinationWrap}>
                                    <div style={{ width: '25%' }}>
                                        <div className={styled.radioWrap}>출발지</div>

                                        <Input
                                            type='text'
                                            value={inputValue}
                                            onChange={changeInputValue}
                                            onKeyUp={handleDropDownKey}
                                            placeholder='국가 또는 도시를 입력하세요.'
                                        />

                                        {isHaveInputValue && (
                                            <DropDownBox>
                                                {dropDownList.length === 0 && (
                                                    <DropDownItem>해당하는 도시가 없습니다.</DropDownItem>
                                                )}
                                                {dropDownList.map((dropDownItem, dropDownIndex) => {
                                                    return (
                                                        <DropDownItem
                                                            key={dropDownIndex}
                                                            onClick={() => clickDropDownItem(dropDownItem)}
                                                            onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                                                            className={
                                                                dropDownItemIndex === dropDownIndex ? 'selected' : ''
                                                            }
                                                        >
                                                            {dropDownItem}
                                                        </DropDownItem>
                                                    )
                                                })}
                                            </DropDownBox>
                                        )}

                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <div className={styled.radioWrap}>도착지</div>
                                        <Input
                                            type='text'
                                            value={inputValue1}
                                            onChange={changeInputValue1}
                                            onKeyUp={handleDropDownKey1}
                                            placeholder='국가 또는 도시를 입력하세요.'
                                        />

                                        {isHaveInputValue1 && (
                                            <DropDownBox>
                                                {dropDownList1.length === 0 && (
                                                    <DropDownItem>해당하는 도시가 없습니다.</DropDownItem>
                                                )}
                                                {dropDownList1.map((dropDownItem, dropDownIndex) => {
                                                    return (
                                                        <DropDownItem
                                                            key={dropDownIndex}
                                                            onClick={() => clickDropDownItem1(dropDownItem)}
                                                            onMouseOver={() => setDropDownItemIndex1(dropDownIndex)}
                                                            className={
                                                                dropDownItemIndex1 === dropDownIndex ? 'selected' : ''
                                                            }
                                                        >
                                                            {dropDownItem}
                                                        </DropDownItem>
                                                    )
                                                })}
                                            </DropDownBox>
                                        )}
                                    </div>
                                    <div style={{ width: '15%' }}>
                                        <div className={styled.radioWrap}>가는날</div>
                                        <input className={styled.inputStyle} type='date' min={td} max={comeday} ref={day} onChange={dateHandle} />

                                    </div>
                                    <div style={{ width: '15%' }}>
                                        <div className={styled.radioWrap}>오는날</div>
                                        {!comedayRef.current.checked && (<input className={styled.inputStyle} type='date' min={goday} onChange={dateHandle2} />)}
                                        {comedayRef.current.checked && (<input className={styled.inputStyle} type='text' defaultValue='(편도입니다)' readOnly />)}
                                    </div>
                                    <div style={{ width: '20%' }}>
                                        <div className={styled.radioWrap}>좌석등급 및 승객
                                            {modalOpen && <ModalBasic />}
                                        </div>
                                        <button className={styled.inputStyle2} onClick={showModal}>{passenger}</button>

                                    </div>
                                </div>
                                <div className={styled.searchWrap}>
                                    <div style={{ marginTop: '20px' }}><input type='checkbox' /><span style={{ color: 'white' }}>직항만</span></div>
                                    <button className={styled.searchBtn}>항공권 검색 ✈</button>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
                <div className={styled.commentWrap1}>
                    <div className={styled.commentWrap}>
                        <div className={styled.comment}><img className={styled.pic} src='https://cdn-icons-png.flaticon.com/512/3183/3183065.png'></img>출발지와 도착지에 관계없이 최저가 항공권을 둘러보고 수수료 없이 예약하세요.</div>
                        <div className={styled.comment}><img className={styled.pic} src='https://cdn-icons-png.flaticon.com/512/252/252101.png'></img>1,000개 이상의 업체가 제공하는 특가 항공권을 비교해서 가장 저렴하거나, 가장 빠르거나, 가장 친환경적인 항공권을 선택하세요.</div>
                        <div className={styled.comment}><img className={styled.pic} src='https://cdn-icons-png.flaticon.com/512/8318/8318552.png'></img>항공권이 가장 저렴한 달이나 날짜를 찾아보고, 원하는 가격이 나왔을 때 예약할 수 있도록 가격 변동 알림을 설정하세요.</div>

                    </div>
                </div>
            </div>
            <Footer />
        </Fragment >
    )
}
const activeBorderRadius = '16px 16px 0 0'
const inactiveBorderRadius = '16px 16px 16px 16px'

const WholeBox = styled1.div`
  padding: 10px;
`

const InputBox = styled1.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: ${props =>
        props.isHaveInputValue ? activeBorderRadius : inactiveBorderRadius};
  z-index: 3;

  &:focus-within {
    box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  }
`

const Input = styled1.input`
padding: 8px 16px;
height: 42px;
border: 0.0625rem solid #b2b2bf;
width: 100%;
font-size: 15px;
`

const DeleteButton = styled1.div`
  cursor: pointer;
`

const DropDownBox = styled1.ul`
  display: block;
  margin: 0 auto;
  padding: 8px 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  list-style-type: none;
  z-index: 3;
  position: absolute;
  width:260px
`

const DropDownItem = styled1.li`
  padding: 0 16px;
  text-align: left;
  &.selected {
    background-color: lightgray;
  }
`



export default FlightMain;
