import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import './HomePageMain.css';
import { addToCart } from '../../actions/cartActions.js';

class Home extends Component {
	handleClick = (id) => {
		this.props.addToCart(id);
	};

	render() {
		let itemList = this.props.items.map((item) => {
			return (
				<Col xl={6} lg={6}>
					<Card className='mb-3 popular_card' key={item.id}>
						<Row className='g-0'>
							<Col md={4} className='d-flex justify-content-center'>
								<div className='popular_card_image'>
									<Image
										src={item.img}
										alt='#'
										className='img-fluid rounded card-image'
									></Image>
									<strong className='fs-1 text-white py-2 px-3 popular_card_price'>
										{item.price.toFixed(2)}€
									</strong>
								</div>
							</Col>
							<Col md={8}>
								<Card.Body className='text-center'>
									<h5 className='card-title'>{item.title}</h5>
									<p className='card-text'>{item.desc}</p>
									<div>
										<strong className='card-text'>
											Alergény:{' '}
											<small className='text-muted'>{item.allergens}</small>
										</strong>
										<span
											to='/'
											onClick={() => {
												this.handleClick(item.id);
											}}
										>
											<Button
												type='button'
												className='text-white card_add_to_cart_btn'
											>
												<strong>Add to cart</strong>
											</Button>
										</span>
									</div>
								</Card.Body>
							</Col>
						</Row>
					</Card>
				</Col>
			);
		});

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
							{itemList}
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		items: state.items,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (id) => {
			dispatch(addToCart(id));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
