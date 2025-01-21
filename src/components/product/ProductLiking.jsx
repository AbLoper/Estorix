// import { useState } from "react";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
export default function ProductLiking(like) {
    // const [likes, setLikes] = useState(like);
    return (
        <div>
            <BiDislike style={{ fontSize: 30, color: 'red',margin:'0 .2rem' }} />
            <BiLike style={{ fontSize: 30, color: 'blue' }} />
        </div>
    )
}