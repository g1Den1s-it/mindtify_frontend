import {Card} from "../../components";
import "./TestList.css"
import {useEffect, useState} from "react";
import getTestListRequset from "./api/getTestListRequset";
const TestList = () => {
    const testImage = "http://0.0.0.0/media/user/image/anime.jpg";
    const [cardList, setCardList] = useState([{}]);

    useEffect(() => {
        async function fetchTestListData(){
            const response = await getTestListRequset("/");
            setCardList(response.data);
        }

        fetchTestListData();

    }, [cardList]);


    return (
        <>
            {!cardList
                ? "Loading data..."
                : (
                    <div className="test-list">
                        {cardList.map(item => (
                            <Card key={item.id} img={item?.img} name={item.title} slug={item.slug}></Card>
                        ))}
                    </div>
                )
            }
        </>
    )
}
export default TestList;