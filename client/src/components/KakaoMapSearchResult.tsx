import { useState } from 'react';
import styles from '../../styles/KakaoMapSearchResult.module.css';

interface Iprops {
    searchResult: any;
    selectedPlace: any;
    selectPlace: (place:any) => void
}
export default function KakaoMapSearchResult({searchResult, selectedPlace, selectPlace}: Iprops) {

    const clickHandler = () => {
        selectPlace(searchResult)
    }
    return(
        <div className={selectedPlace===searchResult?`${styles.selected} ${styles.searchResult}`:styles.searchResult} onClick={clickHandler}>
            <div className={styles.searchReulstName}>{searchResult.place_name}</div>
            <div className={styles.searchReulstAddress}>{searchResult.road_address_name}</div>
        </div>
    )

}