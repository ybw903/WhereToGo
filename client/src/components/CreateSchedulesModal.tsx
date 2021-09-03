import { FormEvent, useState } from 'react';
import styles from '../../styles/CreateSchedulesModal.module.css';
import KakaoMap from './KakaoMap';
import KakaoMapSearch from './KakaoMapSearch';
import KakaoMapSearchResult from './KakaoMapSearchResult';

type IProps =  {
    modalOpen: boolean
    closeModal: ()=>void
}

export default function CreateSchedulesModal ({modalOpen, closeModal}: IProps) {

    const [searchResults,setSearchResults] = useState<[]>([]);

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
                            <KakaoMap searchResults={searchResults}/>
                            <div className={styles.result__wrapper}>
                                {searchResults.map((searchResult,idx) => <KakaoMapSearchResult searchResult={searchResult} key={idx}/>)}
                            </div>
                            <div className={styles.modal__form__input}>
                                <input type="submit" className={styles.modal__form__submit__button} value="선택"></input>
                            </div>
                        </div>
                    </div>
                </div>
        </>

    );
}