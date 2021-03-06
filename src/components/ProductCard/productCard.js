import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import './productCard.css';
import { addItemInCart, decreaseItemFromCart } from '../../redux/cart/reducer';
import Counter from '../Counter';
import ProductModal from '../Modal';

const url = `https://www.flexx.co/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png`;

export const ProductCard = () => {
	const dispatch = useDispatch();
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const itemsInCart = useSelector((state) => state.cart.itemsInCart);
	const [modalItem, setModalItem] = useState();

	useEffect(() => {
		const setCount = () => {
			console.log(items);
			itemsInCart.forEach((el) => {
				const results = [...items];
				const item = results.find(({ id }) => id === el.id);

				if (item && el.count !== item.count) {
					item.count = el.count;
					setItems(results);
				}
			});
		};

		return setCount();
	}, [items, itemsInCart]);

	useEffect(() => {
		fetch('http://demo.pasakebap.sk/products.php')
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	// return (
	// 	<div>
	// 		{items.map(({ count }) => (
	// 			<div>{count || 0}</div>
	// 		))}
	// 	</div>
	// );

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<div>
				{items.map((item) => (
					<Col xl={6} lg={6}>
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
											{item.price}???
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
												Alerg??ny:{' '}
												<small className='text-muted' key={item.alergeny}>
													{item.alergeny}
												</small>
											</strong>
											{/* {item.count ? (
												<Counter
													value={item.count}
													onIncrease={() => dispatch(addItemInCart(item))}
													onDecrease={() =>
														dispatch(decreaseItemFromCart(item.id))
													}
												/>
											) : (
												<Button
													onClick={() => dispatch(addItemInCart(item))}
													type='button'
													className='text-white card_add_to_cart_btn'
												>
													<strong>Add to cart</strong>
												</Button>
											)} */}
											<Button onClick={() => setModalItem(item)}>
												Add to cart
											</Button>
										</div>
									</Card.Body>
								</Col>
							</Row>
						</Card>
					</Col>
				))}
				<ProductModal
					visible={Boolean(modalItem)}
					item={modalItem}
					handleClose={() => setModalItem(undefined)}
				/>
			</div>
		);
	}
};
