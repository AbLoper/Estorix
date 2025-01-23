import { useSearchParams } from 'react-router-dom';

function MyComponent() {
  const [searchParams] = useSearchParams(); // الحصول على المعاملات (الـ query params)

  // للحصول على جميع الأسماء والقيم
  const params = [];
  searchParams.forEach((value, key) => {
    params.push(`${key}: ${value}`); // جمع اسم الحقل مع قيمته
  });

  return (
    <div>
      <h1>Query Parameters</h1>
      <ul>
        {params.length > 0 ? (
          params.map((param, index) => (
            <li key={index}>{param}</li> // عرض اسم الحقل مع قيمته
          ))
        ) : (
          <p>No query parameters found.</p>
        )}
      </ul>
    </div>
  );
}

export default MyComponent;
