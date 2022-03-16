import * as React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/footer.js';
import Header from './components/header/header.js';
import HomePageMain from './pages/HomePage/HomePageMain.js';
import AboutPageMain from './pages/AboutPage/AboutPageMain.js';
import ContactsPageMain from './pages/ContactsPage/ContactsPageMain.js';
import CartPage from './pages/CartPage';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header></Header>
				<Routes>
					<Route path='/' element={<HomePageMain />} />
					<Route path='about' element={<AboutPageMain />} />
					<Route path='contacts' element={<ContactsPageMain />} />
					<Route path='cart' element={<CartPage />} />
				</Routes>
				<Footer></Footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
