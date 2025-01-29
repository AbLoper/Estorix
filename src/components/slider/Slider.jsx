import React from 'react';
import Styles from './slider.module.css'; // استيراد ملف CSS
import { useSelector } from 'react-redux';


const ItemsSlider = () => {
    const cartItems = useSelector(state => state.cart.items);
    return (
        <div className={Styles.sliderContainer}>
            <div className={Styles.sliderImages}>
                {
                    cartItems.map((items, index) => {
                        return <img src={items.image} key={index} alt=''
                        style={{
                            objectFit: 'contain',
                            maxHeight: '100%',
                            padding: "1rem",
                        }}/>
                    })
                }
            </div>
        </div>
    );
};

export default ItemsSlider;
