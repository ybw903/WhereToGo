import { ImageInfo } from "../type";
import styles from '../../styles/Carousel.module.css'

interface iProps {
    imagesInfo: ImageInfo[],
} 

export default function CarouselSlider({imagesInfo}: iProps) {

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