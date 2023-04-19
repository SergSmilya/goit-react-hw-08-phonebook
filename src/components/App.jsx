import { Route, Routes } from 'react-router-dom';
import RegisterPage from 'Pages/RegisterPage';
import LoginPage from 'Pages/LoginPage';
import ContactsPage from 'Pages/ContactsPage';
import SharedLayout from './SharedLayout/SharedLayout';

export default function App() {
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
