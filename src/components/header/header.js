import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Container,
	Navbar,
	NavDropdown,
	Nav,
	Button,
	Offcanvas,
	Image,
	Row,
	Col,
} from 'react-bootstrap';
import LogoImg from '../../images/logo_new.png';
import './header.css';

function OffCanvasExample({ name, ...props }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button
				onClick={handleShow}
				className='navbar-toggler burger-menu-btn bg-black d-flex align-items-center'
			>
				<p className='text-white my-0'>{name}</p>
				<i className='fs-1 bi bi-list text-white'></i>
			</Button>
			<Offcanvas show={show} onHide={handleClose} {...props}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Paša Kebap</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Nav className='me-auto my-2 my-lg-0'>
						<Link to='/' className='text-black active'>
							Home
						</Link>
						<NavDropdown title='Menu' id='navbarScrollingDropdown'>
							<NavDropdown.Item className='text-black' href='#new'>
								NEW
							</NavDropdown.Item>
							<NavDropdown.Item className='text-black' href='#kebap'>
								KEBAP
							</NavDropdown.Item>
							<NavDropdown.Item className='text-black' href='#yufka'>
								YUFKA
							</NavDropdown.Item>
							<NavDropdown.Item className='text-black' href='#tanier'>
								TANIER
							</NavDropdown.Item>
							<NavDropdown.Item className='text-black' href='#doner-box'>
								Döner box
							</NavDropdown.Item>
							<NavDropdown.Item className='text-black' href='#pide'>
								PIDE
							</NavDropdown.Item>
							<NavDropdown.Item className='text-black' href='#soup'>
								SOUP
							</NavDropdown.Item>
							<NavDropdown.Item className='text-black' href='#dessert'>
								DESSERT
							</NavDropdown.Item>
							<NavDropdown.Item className='text-black' href='#side-dish'>
								SIDE DISH
							</NavDropdown.Item>
							<NavDropdown.Item className='text-black' href='#drinks'>
								DRINKS
							</NavDropdown.Item>
						</NavDropdown>
						<Link to='/about' className='text-black'>
							About Us
						</Link>
						<Link to='/contacts' className='text-black'>
							Contacts
						</Link>

						<Link to='/cart' className='text-black'>
							Cart
						</Link>
					</Nav>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}

function Example() {
	return (
		<>
			{['end'].map((placement, idx) => (
				<OffCanvasExample key={idx} placement={placement} name={'MENU'} />
			))}
		</>
	);
}

function Header() {
	return (
		<header className='header'>
			<Navbar expand='lg'>
				<Container fluid>
					<Link to='/' className='navbar-brand'>
						<Image className='navbar-brand-img' src={LogoImg} alt='#'></Image>
					</Link>
					<Example></Example>
				</Container>
			</Navbar>
			<Container>
				<Row>
					<Col xl={9} md={12}>
						<div className='header_text text-center'>
							<h1>
								pasa<br></br>kebap
							</h1>
						</div>
					</Col>
				</Row>
			</Container>
		</header>
	);
}

export default Header;
