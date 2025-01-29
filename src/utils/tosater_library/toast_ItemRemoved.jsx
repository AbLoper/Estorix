import toast from 'react-hot-toast';

// دالة لعرض إشعار عند القيام بعملية غير متزامنة
export const showAsyncToast = async () => {
    toast.promise(
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 500); // العملية غير المتزامنة (مثال هنا: مجرد تأخير)
        }),
        {
            loading: 'Loading...',
            success: 'Item Removed',
            error: 'Error Occurred..',
        }
    );
};
