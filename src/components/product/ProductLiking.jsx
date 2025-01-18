// import { useState } from "react";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
export default function ProductLiking(like) {
    // const [likes, setLikes] = useState(like);
    return (
        <div>
            <BiDislike style={{ fontSize: 25, color: 'red' }} />
            <BiLike style={{ fontSize: 25, color: 'blue' }} />
        </div>
    )
}