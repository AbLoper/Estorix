import { useState } from 'react';
import { BiDislike, BiLike } from 'react-icons/bi';

export default function ProductLiking() {
    // الحالة المبدئية غير محددة (null)، مما يعني أنه لا يوجد إعجاب أو عدم إعجاب
    const [liked, setLiked] = useState(null);

    // دالة لتبديل الإعجاب أو عدم الإعجاب
    const handleLike = () => {
        if (liked === true) {
            setLiked(null); // إلغاء الإعجاب
        } else {
            setLiked(true); // وضع الإعجاب
        }
    };

    // دالة لتبديل عدم الإعجاب
    const handleDislike = () => {
        if (liked === false) {
            setLiked(null); // إلغاء عدم الإعجاب
        } else {
            setLiked(false); // وضع عدم الإعجاب
        }
    };

    return (
        <div>
            <BiDislike
                style={{
                    fontSize: 30,
                    color: liked === false ? 'red' : 'gray', // تغيير اللون حسب حالة الإعجاب
                    margin: '0 .2rem',
                    cursor: 'pointer'
                }}
                onClick={handleDislike} // عند الضغط على عدم الإعجاب
            />
            <BiLike
                style={{
                    fontSize: 30,
                    color: liked === true ? 'blue' : 'gray', // تغيير اللون حسب حالة الإعجاب
                    cursor: 'pointer'
                }}
                onClick={handleLike} // عند الضغط على الإعجاب
            />
        </div>
    );
}
