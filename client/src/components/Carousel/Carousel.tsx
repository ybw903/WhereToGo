import { ImageInfo } from "../../type";
import styles from '../../styles/Carousel.module.css'
import CarouselHeader from "./CarouselHeader";
import CarouselSlider from "./CarouselSlider";

interface iProps {
    imagesInfo: ImageInfo[],
    title: string
} 

export default function Carousel({imagesInfo, title}: iProps) {
    return(
        <div className={styles.carousel}>
            <CarouselHeader title={title}/>
            <CarouselSlider imagesInfo={imagesInfo}/>
        </div>
    )   
}