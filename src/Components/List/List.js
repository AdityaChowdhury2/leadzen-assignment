// import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { Pagination } from "../Pagination/Pagination";
// import { Link } from "react-router-dom";
import { SingleItem } from "../SingleItem/SingleItem";
import "./List.css";

export const List = () => {
	const [items, setItems] = useState([]);
	const [showDescription, setShowDescription] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(4);
	const paginate = (pageNumber) => {
		if (pageNumber) setCurrentPage(pageNumber);
	};
	const loadData = () => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((receivedData) => setItems(receivedData));
	};
	useEffect(() => {
		loadData();
	}, []);

	//get current items
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
	// console.log(currentItems);
	return (
		<div className="container">
			<div className="row">
				{currentItems.map((item, index) => (
					<SingleItem key={index} item={item} />
				))}
				<Pagination
					currentPage={currentPage}
					itemsPerPage={itemsPerPage}
					totalItems={items.length}
					paginate={paginate}
				></Pagination>
			</div>
		</div>
	);
};
