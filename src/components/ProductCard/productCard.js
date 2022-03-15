import React, { Component, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import './productCard.css';
import { addItemInCart } from '../../redux/cart/reducer';

export const ProductCard = () => {
	const [state, setState] = useState([]);
	const controller = new AbortController();
	const signal = controller.signal;

	useEffect(() => {
		fetch('http://demo.pasakebap.sk/products.php').then(
			(res) => setState(res.data)
			// .then(
			// 	(result) => {
			// 		setState({
			// 			isLoaded: true,
			// 			items: result,
			// 		});
			// 	}
			// (error) => {
			// 	setState({
			// 		isLoaded: true,
			// 		error,
			// 	});
			// }
			// );
		);
	});

	// const { error, isLoaded, items } = state;
	const dispatch = useDispatch();
	const handleClick = (e) => {
		e.stopPropagation();
		// dispatch(addItemInCart(item));
	};

	// if (error) {
	// 	return <p>Error {error.message}</p>;
	// } else if (!isLoaded) {
	// 	return <p>Loading...</p>;
	// } else if (isLoaded) {
	// var itemList =
	return state.map((item) => {
		if (item.picture !== '') {
			var url = `https://pasakebap.sk/images/produkt/${item.picture}`;
		} else {
			url = `https://www.flexx.co/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png`;
		}
		return (
			<Col xl={6} lg={6}>
				<Card className='mb-3 popular_card' key={item.id}>
					<Row className='g-0'>
						<Col md={4} className='d-flex justify-content-center'>
							<div className='popular_card_image'>
								<Image
									key={item.picture}
									src={url}
									alt='#'
									className='img-fluid rounded card-image'
								></Image>
								<strong
									className='fs-1 text-white py-2 px-3 popular_card_price'
									key={item.price}
								>
									{item.price}€
								</strong>
							</div>
						</Col>
						<Col md={8}>
							<Card.Body className='text-center'>
								<h5 className='card-title' key={item.name_sk}>
									{item.name_sk}
								</h5>
								<p className='card-text' key={item.description_sk}>
									{item.description_sk}
								</p>
								<div>
									<strong className='card-text'>
										Alergény:{' '}
										<small className='text-muted' key={item.alergeny}>
											{item.alergeny}
										</small>
									</strong>
									<span to='/' onClick={handleClick}>
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
	// }
	// return <>{itemList}</>;
};
