import { FormEvent, useState } from 'react';
import styles from '../../styles/KakaoMapSearch.module.css';

interface Iprops {
    searchResults: [],
    setSearchResults: (data:any) => void
}

export default function KakaoMapSearch({searchResults, setSearchResults}:Iprops) {

    const [inputText, setInputText] = useState("");

    const onChange = (e:FormEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value);
    }
    
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const ps = new (window as any).kakao.maps.services.Places();
        
        const placeSearchCB =  (data :any, status: any, pagination : any) => {
            if(status === (window as any).kakao.maps.services.Status.OK) {
                setSearchResults([...data])
            }
        }

        ps.keywordSearch(inputText, placeSearchCB);
        setInputText("");
    }

    return (
        <div className={styles.searchPlacesFormWrapper}>
            <form  className={styles.searchPlacesForm} onSubmit={handleSubmit}>
                <input className={styles.searchPlacesFormInput} type= "text" onChange={onChange} value={inputText} placeholder="장소를 입력해주세요."/>
                <button className={styles.searchPlaceFormButton} type="submit">검색</button>
            </form>
        </div>
    )
}