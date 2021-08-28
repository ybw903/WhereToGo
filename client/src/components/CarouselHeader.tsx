interface Iprops {
    title : string
}

export default function CarouselHeader({title}: Iprops) {

    return (
        <div>
            <div> {title}</div>
            <div> 모두 보기</div>
        </div>
    )
}