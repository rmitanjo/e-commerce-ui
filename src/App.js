import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

import Header from './pages/layout/Header';
import Nav from './pages/layout/Nav';
import Sidebar from './pages/layout/Sidebar';
import Footer from './pages/layout/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
}