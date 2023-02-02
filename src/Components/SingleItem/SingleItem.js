import React, { useState } from "react";
import { Button, Card, Collapse } from "react-bootstrap";
import "./SingleItem.css";

export const SingleItem = ({ item }) => {
	// console.log(props);
	const [open, setOpen] = useState(false);
	const { name, website, email, phone } = item;
	const { street, suite, city, zipcode } = item.address;
	const fixingPhoneNumber = (phoneNumber) => {
		let phone = phoneNumber.slice(0, 12);
		return phone;
	};
	return (
		<>
			<div className="card mt-3 p-3">
				<div className="d-lg-flex align-items-center text-center">
					<div className="small-container col-lg-2 col-sm-12">
						<p>Hello world</p>
					</div>
					<div className="small-container col-lg-2 col-sm-12">
						<b>CONTACT</b>
						<p>{name}</p>
					</div>
					<div className="small-container col-lg-2 col-sm-12">
						<b>STREET</b>
						<p>{street}</p>
					</div>
					<div className="small-container col-lg-2 col-sm-12">
						<b>CITY</b>
						<p>{city}</p>
					</div>
					<div className="small-container col-lg-2 col-sm-12">
						<p>{website}</p>
					</div>
					<div className="small-container d-grid">
						<Button
							className="btn btn-danger"
							onClick={() => setOpen(!open)}
							aria-controls="description"
							aria-expanded={open}
						>
							View Details
						</Button>
					</div>
				</div>
				<Collapse in={open}>
					<div id="description" className="mt-3">
						<Card body className="p-2 container">
							<div>
								<h6>Description</h6>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Deleniti adipisci fugit
									sed! Ullam veritatis facilis non temporibus,
									id labore quo? Nam possimus illum nulla
									ipsam explicabo nemo error repellendus vero!
								</p>
							</div>
							<div className="row mt-3">
								<div className="col-md-4">
									<h6>Contact Person</h6>
									<p>{name}</p>
									<h6>Designation</h6>
									<p>Proprietor</p>
									<h6>Email</h6>
									<p>{email}</p>
									<h6>Phones</h6>
									<p>{fixingPhoneNumber(phone)}</p>
								</div>
								<div className="col-md-8">
									<h6>Address</h6>
									<p>
										{street +
											" " +
											suite +
											" " +
											city +
											" " +
											zipcode}
									</p>
									<h6>City</h6>
									<p>{city}</p>
									<h6>Pin-code</h6>
									<p>{zipcode}</p>
									<h6>Country</h6>
									<p>U.S.A</p>
								</div>
							</div>
						</Card>
					</div>
				</Collapse>
			</div>
		</>
	);
};
