import { ImageInfo } from "../type";
import styles from '../../styles/Carousel.module.css'
export default function Carousel(imagesInfo: ImageInfo[]) {
    return(
        <div className={styles.carousel}>
            {imagesInfo.map((imageInfo,idx) => 
                <div key={idx}>
                    <img src={imageInfo.imgUrl} alt={imageInfo.title}></img>
                    <div>{imageInfo.title}</div>
                </div>
            )}
        </div>
    )   
}