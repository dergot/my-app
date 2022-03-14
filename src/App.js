import * as React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/footer.js';
import Header from './components/header/header.js';
import HomePageMain from './components/main/HomePage/HomePageMain.js';
import AboutPageMain from './components/main/AboutPage/AboutPageMain.js';
import ContactsPageMain from './components/main/ContactsPage/ContactsPageMain.js';
import Cart from './components/Cart.js';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header></Header>
				<Routes>
					<Route path='/' element={<HomePageMain />} />
					<Route path='about' element={<AboutPageMain />} />
					<Route path='contacts' element={<ContactsPageMain />} />
					<Route path='cart' element={<Cart />} />
				</Routes>
				<Footer></Footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
