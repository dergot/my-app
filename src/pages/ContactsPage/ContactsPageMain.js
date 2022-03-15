import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ContactsPageMain.css';

function ContactsPageMain() {
	return (
		<div className='main'>
			<Container>
				<Row>
					<Col lg={12} className='text-center'>
						<h3 className='main_section_title pt-5 pb-3'>Contacts</h3>
						<p className='section-description'>
							<strong className='section-best'>
								Informácie o spoločnosti:
							</strong>
							<br></br>
							Obchodné meno: SD Holding s.r.o
							<br></br>
							Sídlo: Turčiansky Peter 84, 038 41
							<br></br>
							IČO: 479 66441
						</p>
						<p className='section-description'>
							<strong className='section-best'>Adresa prevádzky:</strong>
							<br></br>
							Paša Kebap
							<br></br>
							Milana Rastistlava Štefánika 28
							<br></br>
							Martin, Slovensko
						</p>
						<p className='section-description'>
							<strong className='section-best'>Orgán dozoru:</strong>
							<br></br>
							Inšpektorát SOI pre Žilinský kraj
							<br></br>
							Predmestská 71, P.O. Box B-89
							<br></br>
							011 79 Žilina 1
						</p>
						<p className='section-description'>
							Regionálna veterinárna a potravinová správa Martin
							<br></br>
							Záturčianska 1<br></br>
							036 80 Martin.
						</p>
						<p className='section-description'>
							<strong className='section-best'>Otváracie hodiny:</strong>
							<br></br>
							Mon - thur: 9:00 - 22:00
							<br></br>
							Fri : 9:00- 22:00
							<br></br>
							Sat: 10:00 - 22:00
							<br></br>
							Sun: - 11:00 - 22:00
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default ContactsPageMain;
