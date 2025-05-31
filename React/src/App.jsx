import './App.css';
import Lista from './components/List';
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/Appbar';
import Login from './Login';
import ItemDetail from './components/ItemDetail';
import useAuth from './hooks/useAuth';
import useItems from './hooks/useItems';

function App() {
  const { isLogin, login, logout } = useAuth();
  const { items, addItem, deleteItem, getItemById } = useItems(isLogin);

  return (
    <div>
      <BrowserRouter>
        {isLogin && <ResponsiveAppBar logout={logout} />}
        <Routes>
          <Route path="/" element={<Login onLogin={login} />} />
          <Route path="/add" element={<Add addItem={addItem} />} />
          <Route path="/items" element={<Lista items={items} ondelete={deleteItem} />} />
          <Route path="/items/:id" element={<ItemDetail getItemById={getItemById} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;