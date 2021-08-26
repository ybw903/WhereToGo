import Carousel from "../src/components/carousel";
import SearchInput from "../src/components/SearchInput";

export default function Places() {
    return(
        <div>
            <SearchInput/>
            <Carousel title={"관광지"} imagesInfo={[{title:'test', imgUrl:'test'}]}/>
            <Carousel title={"식당"} imagesInfo={[{title:'test', imgUrl:'test'}]}/>
            <Carousel title={"숙박"} imagesInfo={[{title:'test', imgUrl:'test'}]}/>
        </div>
    )
}