import React, { Component, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { ProductCard } from '../../components/ProductCard/productCard.js';
import {
	addItemInCart,
	decreaseItemFromCart,
	deleteItemFromCart,
} from '../../redux/cart/reducer.js';
import { Counter } from '../../components';

const url = `https://www.flexx.co/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png`;

const CartPage = () => {
	const items = useSelector((state) => state.cart.itemsInCart);
	// console.log(items);
	const dispatch = useDispatch();
	const [total, setTotal] = useState(0);

	useEffect(() => {
		setTotal(
			items.reduce(
				(accumulator, curItem) =>
					accumulator + Number(curItem.price) * curItem.count,
				0
			)
		);
	}, [items]);

	return (
		<div className='main'>
			{items.map((item) => (
				<div>
					<Card className='mb-3 popular_card' key={item.id}>
						<Row className='g-0'>
							<Col md={4} className='d-flex justify-content-center'>
								<div className='popular_card_image'>
									<Image
										key={item.picture}
										src={
											item.picture
												? `https://pasakebap.sk/images/produkt/${item.picture}`
												: url
										}
										alt='#'
										className='img-fluid rounded card-image'
									></Image>
									<strong
										className='fs-1 text-white py-2 px-3 popular_card_price'
										key={`product_price_${item.price}`}
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
										<span
											onClick={() => dispatch(deleteItemFromCart(item.id))}
											key={item.id}
										>
											<Button
												type='button'
												className='text-white card_add_to_cart_btn'
											>
												<strong>Remove from cart</strong>
											</Button>
										</span>
										<div>
											<Counter
												value={item.count}
												onIncrease={() => dispatch(addItemInCart(item))}
												onDecrease={() =>
													dispatch(decreaseItemFromCart(item.id))
												}
											/>
										</div>
									</div>
								</Card.Body>
							</Col>
						</Row>
					</Card>
				</div>
			))}
			<div>{total}</div>
		</div>
	);
};

export default CartPage;
