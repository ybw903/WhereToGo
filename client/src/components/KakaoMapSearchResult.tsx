import styles from '../../styles/KakaoMapSearchResult.module.css';

interface Iprops {
    searchResult: any
}
export default function KakaoMapSearchResult({searchResult}: Iprops) {
    return(
        <div className={styles.searchResult}>
            <div className={styles.searchReulstName}>{searchResult.place_name}</div>
            <div className={styles.searchReulstAddress}>{searchResult.road_address_name}</div>
        </div>
    )

}