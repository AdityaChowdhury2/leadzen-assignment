import React from "react";
import { Link } from "react-router-dom";
import "./SingleItem.css";

export const SingleItem = ({ item }) => {
	// console.log(props);
	const { name, website, id } = item;
	const { street, city } = item.address;
	return (
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

				<Link to={`/user/${id}`}>
					<div className="small-container d-grid">
						<button className="btn btn-danger">View Details</button>
					</div>
				</Link>
			</div>

			{/* <div className="d-flex justify-content-around align-items-center">
				<div className="">
					<p>Hello world</p>
				</div>
				<div className="small-container">
					<b>CONTACT</b>
					<p>{name}</p>
				</div>
				<div className="small-container">
					<b>STREET</b>
					<p>{street}</p>
				</div>
				<div className="small-container">
					<b>CITY</b>
					<p>{city}</p>
				</div>
				<Link to="/information">
					<div className="d-grid ">
						<button className="btn btn-danger">View Details</button>
					</div>
				</Link>
			</div> */}
		</div>
	);
};
