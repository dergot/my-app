import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutPageMain.css';

function AboutPageMain() {
	return (
		<div className='main'>
			<div className='about_area'>
				<Container>
					<Row className='align-items-center'>
						<Col xl={5} lg={5} md={6} className='offset-lg-1'>
							<div className='about_info'>
								<div className='section_title'>
									<h3 className='main_section_title pt-5 pb-3'>About Us</h3>
									<h2 className='section-best'>
										Best Kebap<br></br>in your city
									</h2>
								</div>
								<div className='section-description'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
										ducimus et iure minima qui reprehenderit sint soluta,
										voluptates. Cupiditate earum eius esse nihil nisi quia
										repellat repellendus sapiente voluptas, voluptates!
									</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}

export default AboutPageMain;
