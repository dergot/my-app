import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import './HomePageMain.css';
import { ProductCard } from '../../components/ProductCard/productCard.js';
import Modals from '../../components/Modal/Modal';

const Home = () => {
	return (
		<div className='main'>
			<div className='popular_area'>
				<Container>
					<Row>
						<Col lg={12} className='text-center'>
							<h3 className='main_section_title pt-5 pb-3'>Most Popular</h3>
						</Col>
					</Row>
					<Row lg={2} xl={2}>
						<ProductCard />
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Home;
