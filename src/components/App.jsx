import { Route, Routes } from 'react-router-dom';
import RegisterPage from 'Pages/RegisterPage';
import LoginPage from 'Pages/LoginPage';
import ContactsPage from 'Pages/ContactsPage';
import SharedLayout from './SharedLayout/SharedLayout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100%',
        display: 'block',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<SharedLayout />} />
        </Route>
      </Routes>
    </div>
  );
}

// 1. Лениве завантаження import
// 2. Стилізаця
// 3. Обробка помилок
// 4. Рендер за умовою
// 5. Додати isLoadin...
// 6. Перекидання на необхідну сторінку якщо користувач залогінений
// 7. Передивитись де дублюється код та винести його в окрему функцію
