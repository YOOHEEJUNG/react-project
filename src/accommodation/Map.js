import { useEffect, useState } from 'react';
import './Map.css'
const { kakao } = window


const Map = () => {

    const [position, setPosition] = useState({ lat: '', lon: '' });

    useEffect(() => {

        //위치 못 갖고왔을 때 함수 , watchPostion의 두번째 매개변수
        const fail = (e) => {
            // alert(`Geolocation 오류 ${e.code} : ${e.message}`);
            alert('유저가 위치정보 이용 서비스를 거부하였습니다.')
            document.getElementById('map_part').style.display='none';
        }
        //watchPostion 의 세번재 매개변수, 지도를 정확하게 가져오라는 옵션.
        let options = {
            enableHighAccuracy: true,
            maximumAge: 0
        }

        //위치를 가져올 수 있으면 지도 생성.
        if (navigator.geolocation) {
            //내 위치 좌표
            navigator.geolocation.watchPosition(position => { //watchPosition은 위치가 바뀌면 바뀐 위치를 다시 반환해줌.

                // let latitude = position.coords.latitude; //위도
                // let longitude = position.coords.longitude; //경도

                setPosition({ lat: position.coords.latitude, lon: position.coords.longitude });
            }, fail, options);

            let lat = position.lat;
            let lon = position.lon;

            let mapContainer = document.getElementById('map'), // 지도를 표시할 div 
                mapOption = {
                    center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표
                    level: 5 // 지도의 확대 레벨 
                };

            let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

            let locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                message = '<div style="padding:5px;">내 위치</div>'; // 인포윈도우에 표시될 내용입니다

            // 마커와 인포윈도우를 표시합니다
            displayMarker(locPosition, message);

            // 지도에 마커와 인포윈도우를 표시하는 함수입니다
            function displayMarker(locPosition, message) {

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: locPosition
                });

                var iwContent = message, // 인포윈도우에 표시할 내용
                    iwRemoveable = true;

                // 인포윈도우를 생성합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: iwContent,
                    removable: iwRemoveable
                });

                // 인포윈도우를 마커위에 표시합니다 
                infowindow.open(map, marker);

                // 지도 중심좌표를 접속위치로 변경합니다
                map.setCenter(locPosition);
            }
        } else { //위치를 못 갖고 오면 지도 생성 x 
            alert('현재 브라우저로는 위치정보 서비스를 이용할 수 없습니다.');
            document.getElementById('map_part').style.display='none';
        }

    }, [position])


    return (
        <>
            <section id="map_part">
                <div className="container">
                    <div className="text">현재 내 위치</div>
                    <div id="map" style={{ width: "800px", height: "600px" }}></div>
                </div>
            </section>
        </>
    )



}

export default Map;