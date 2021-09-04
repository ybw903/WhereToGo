import { useEffect, useRef, useState } from "react"
import styles from '../../styles/map.module.css';

interface Iprops {
    selectedPlace:any
}

export default function KakaoMap({selectedPlace}:Iprops) {

    const mapRef = useRef<HTMLDivElement|null>(null);

    useEffect(() => {
        console.log(selectedPlace);
        if(mapRef.current) {

            const latlng = new (window as any).kakao.maps.LatLng(selectedPlace.y, selectedPlace.x);

            const options = {
              center: latlng,
              level: 2,
            };
            const map = new (window as any).kakao.maps.Map(mapRef.current, options);
            map.relayout();
            map.setCenter(latlng);

            const marker =  new (window as any).kakao.maps.Marker({
                position: new (window as any).kakao.maps.LatLng(selectedPlace.y, selectedPlace.x) 
            });

            marker.setMap(map);

            const content = `<div style="padding:5px;font-size:12px;">  ${selectedPlace.place_name} </div>`;
            const infowindow = new (window as any).kakao.maps.InfoWindow({
                content: content
            });

            infowindow.open(map, marker);

            const zoomControl = new (window as any).kakao.maps.ZoomControl();
            map.addControl(
              zoomControl,
              (window as any).kakao.maps.ControlPosition.RIGHT
            );
          }
        },
        [selectedPlace]
    );

    return(
        <div>
            <div className={styles.map__Wrapper}>
                <div ref ={mapRef} className={styles.map}></div>
            </div>
            <div>
                
            </div>
        </div>

    )
}