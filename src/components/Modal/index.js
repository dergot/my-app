import React, { Component, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	Button,
	Card,
	Col,
	Container,
	FormControl,
	Image,
	InputGroup,
	Modal,
	Row,
} from 'react-bootstrap';
import { ProductCard } from '../../components/ProductCard/productCard.js';
import {
	addItemInCart,
	decreaseItemFromCart,
	deleteItemFromCart,
} from '../../redux/cart/reducer.js';
import { Counter } from '../../components';

const url = `https://www.flexx.co/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png`;

const ProductModal = ({ visible, item: propsItem, handleClose }) => {
	// const [show, setShow] = useState(false);

	const [attachments, setAttachments] = useState([]);
	const item = propsItem || {};
	const dispatch = useDispatch();

	useEffect(() => {
		if (item.id) {
			fetch(`http://demo.pasakebap.sk/products_attachments.php?id=${item.id}`)
				.then((res) => res.json())
				.then((result) => {
					setAttachments(result || []);
					console.log(result);
				});
		}
	}, [item]);

	return (
		<>
			<Modal show={visible}>
				<Modal.Header>
					<Modal.Title closeButton>Modal Title</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Card className='mb-3 popular_card'>
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
					{attachments.map((attachment) => (
						<div className='my-3 d-flex justify-content-between'>
							<div style={{ width: '30%' }}>
								<strong>Name: {attachment.name_sk}</strong>
							</div>
							<div style={{ width: '30%' }}>
								<strong>Price: {attachment.price}</strong>
							</div>
							{attachment.included === '1' ? (
								<InputGroup className='mb-3' style={{ width: '30%' }}>
									<input
										class='form-check-input'
										type='checkbox'
										value=''
										id='flexCheckChecked'
										checked
									/>
									<label class='form-check-label' for='flexCheckChecked'>
										Remove
									</label>
								</InputGroup>
							) : (
								<InputGroup className='mb-3' style={{ width: '30%' }}>
									<input
										class='form-check-input'
										type='checkbox'
										value=''
										id='flexCheckDefault'
									/>
									<label class='form-check-label' for='flexCheckDefault'>
										Add to cart
									</label>
								</InputGroup>
							)}
						</div>
					))}
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
			))
		</>
	);
};

export default ProductModal;
