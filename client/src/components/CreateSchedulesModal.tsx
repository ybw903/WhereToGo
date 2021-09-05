import { FormEvent, useState } from 'react';
import styles from '../../styles/CreateSchedulesModal.module.css';
import KakaoMap from './KakaoMap';
import KakaoMapSearch from './KakaoMapSearch';
import KakaoMapSearchResult from './KakaoMapSearchResult';

type IProps =  {
    modalOpen: boolean
    closeModal: ()=>void
    setPlace: (place:any)=>void
}

export default function CreateSchedulesModal ({modalOpen, closeModal, setPlace}: IProps) {

    const [searchResults,setSearchResults] = useState<[]>([]);
    const [selectedPlace, setSelectedPlace] = useState(null);
    
    const selectPlace = (place:any) => {
        setSelectedPlace(place);
    }
    const buttonClickHandler =() => {
        setPlace(selectedPlace);
        closeModal();
    }
    return (
        <>
                <div className={modalOpen?styles.modal__overlay:`${styles.modal__overlay} ${styles.no__display}`}></div>
                <div className={modalOpen?styles.modal__wrapper:`${styles.modal__wrapper} ${styles.no__display}`}>
                    <div className={styles.modal__inner}>
                        <div className={styles.modal__form}>
                            <div className={styles.modal__form__header}>
                                <div className={styles.modal__form__input__header}>여행장소</div>
                                <div className={styles.modal__form__input__header} onClick={closeModal}>X</div>
                            </div>
                            <KakaoMapSearch searchResults={searchResults} setSearchResults={setSearchResults}/>
                            {selectedPlace? <KakaoMap selectedPlace={selectedPlace}/>:''}
                            <div className={styles.result__wrapper}>
                                {searchResults.map((searchResult,idx) =>
                                 <KakaoMapSearchResult key={idx} searchResult={searchResult}  selectedPlace={selectedPlace} selectPlace={selectPlace}/>)}
                            </div>
                            <div className={styles.modal__form__input}>
                                <input type="button" className={styles.modal__form__submit__button} value="선택" onClick={buttonClickHandler}></input>
                            </div>
                        </div>
                    </div>
                </div>
        </>

    );
}