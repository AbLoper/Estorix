import React, { useState, useEffect } from 'react';
import NavbarSM from './NavbarSM';
import NavbarLG from './NavbarLG';

const Navbar = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // استخدام useEffect لمراقبة تغير حجم الشاشة
    useEffect(() => {
        // التحقق من عرض الشاشة عند تحميل الصفحة أو تغير حجم الشاشة
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 992); // يمكنك تعديل القيمة حسب احتياجك (عادةً 768px هو الحد بين الشاشات الصغيرة والكبيرة)
        };

        // التحقق الأولي
        checkScreenSize();

        // إضافة event listener لتحديث الحجم عند تغيير حجم الشاشة
        window.addEventListener('resize', checkScreenSize);

        // إزالة الevent listener عند تفكيك المكون
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return isSmallScreen ? <NavbarSM /> : <NavbarLG />;
};

export default Navbar;
