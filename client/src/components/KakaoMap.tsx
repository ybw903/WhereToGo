import { useEffect, useRef, useState } from "react"
import styles from '../../styles/map.module.css';

interface Iprops {
    searchResults: []
}

export default function KakaoMap({searchResults}:Iprops) {

    const mapRef = useRef<HTMLDivElement|null>(null);

    useEffect(() => {
        console.log(searchResults);
        if(mapRef.current) {
            const latlng = new (window as any).kakao.maps.LatLng(33.450701, 126.570667);
            const options = {
              center: latlng,
              level: 2,
            };
            const map = new (window as any).kakao.maps.Map(mapRef.current, options);
            map.relayout();
            map.setCenter(latlng);

            const placeSearchCB = (data :any, status: any, pagination : any) => {
                if(status === (window as any).kakao.maps.services.Status.OK) {
                    let bounds = new (window as any).kakao.maps.LatLngBounds();
                    for(let i = 0; i < data.length; i++) {
                        displayMarker(data[i]);
                        bounds.extend(new (window as any).kakao.maps.LatLng(data[i].y, data[i].x));
                    }
                }
            }

            const displayMarker = (place: any) => {
                let marker = new (window as any).kakao.maps.Marker({
                    map:map,
                    position: new (window as any).kakao.maps.LatLng(place.y, place.x) 
                });
            }

            //ps.keywordSearch(searchPlace, placeSearchCB);

            const zoomControl = new (window as any).kakao.maps.ZoomControl();
            map.addControl(
              zoomControl,
              (window as any).kakao.maps.ControlPosition.RIGHT
            );
          }
        },
        [searchResults]
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