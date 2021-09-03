import SearchInput from "../src/components/SearchInput";

export default function reviews() {

    const reviewItems = [{"title" : "제목", "content" : "내용", "imgUrl": "imgUrl"}]    

    return(
        <div>
            <SearchInput/>
            {reviewItems.map((revieItem,idx) =>
                    <div key={idx}>
                        <div>
                            <img src={revieItem.imgUrl}></img>
                        </div>
                        <div>
                            <div>{revieItem.title}</div>
                            <div>{revieItem.content}</div>
                        </div>
                    </div>

            )}

        </div>
    )
}