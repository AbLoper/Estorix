import React, { useState } from 'react';
import Styles from './ProductLicking.module.css'; // استيراد ملف الـ CSS Modules

// مكون لعرض النجوم
const ProductRating = ({ rate, onRatingChange }) => {
  const [hoveredStar, setHoveredStar] = useState(null); // لتخزين النجم الذي يتم تحريكه بالماوس

  // دالة لإدارة التغيير عند النقر على النجمة
  const handleStarClick = (index) => {
    onRatingChange(index + 1); // تحديث التقييم
  };

  // دالة لإدارة التغيير عند تمرير الماوس فوق النجمة
  const handleStarHover = (index) => {
    setHoveredStar(index); // تعيين النجمة المعلقة
  };

  // دالة لإزالة تأثير الماوس عندما يخرج الماوس
  const handleStarLeave = () => {
    setHoveredStar(null); // إزالة النجمة المعلقة
  };

  // دالة لإنشاء النجوم
  const stars = [...Array(5)].map((_, index) => {
    const isFilled = index < (hoveredStar !== null ? hoveredStar + 1 : rate); // تحديد النجوم المملوءة بناءً على التقييم
    return (
      <span
        key={index}
        className={`${Styles.star} ${isFilled ? Styles.filled : ''}`} // استخدام متغيرات CSS Modules
        onClick={() => handleStarClick(index)} // النقر لتحديد التقييم
        onMouseEnter={() => handleStarHover(index)} // التمرير لتحديد النجمة المعلقة
        onMouseLeave={handleStarLeave} // عند خروج الماوس
      >
        ★
      </span>
    );
  });

  return <div className={Styles.rating}>{stars}</div>; // استخدام المتغيرات هنا أيضا
};

export default ProductRating;
