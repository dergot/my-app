import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FooterLogo from '../../images/logo-footer-new2.png';
import './footer.css';

function Footer() {
	return (
		<footer className='footer'>
			<Container>
				<Row>
					<Col>
						<div className='text-center my-2'>
							<Image src={FooterLogo} alt='#' />
						</div>
						<Row>
							<Col className='text-center section-description py-3'>
								<p>0944 199 779</p>
								<a href='mailto:info@pasakebap.sk'>info@pasakebap.sk</a>
							</Col>
						</Row>
						<Row>
							<Col sm={1} md={3}></Col>
							<Col sm={10} md={6} className='mt-4 mb-4'>
								<Row>
									<Col className='col-4 text-center'>
										<Link
											to='contacts'
											className='text-decoration-none text-black'
										>
											KONTAKTY
										</Link>
									</Col>
									<Col className='col-4 text-center'>
										<a
											href='https://www.facebook.com/PasaKBP'
											target='_blank'
											className='text-decoration-none text-black'
										>
											FACEBOOK
										</a>
									</Col>
									<Col className='col-4 text-center'>
										<a
											href='https://www.pasakebap.sk/alergeny.html'
											className='text-decoration-none text-black'
										>
											ALERGÉNY
										</a>
									</Col>
								</Row>
								<Row>
									<Col className='col-12 text-center pt-3'>
										<a
											href='vop.php'
											className='text-decoration-none text-black'
										>
											Všeobecné obchodné podmienky
										</a>
									</Col>
								</Row>
							</Col>
							<Col sm={1} md={3}></Col>
						</Row>
					</Col>
					<Col className='col-12 text-center footer_copyright'>
						(c) 2022 Copyright SD Holding s.r.o.<br></br>Všetky autorské práva
						vyhradené.
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
