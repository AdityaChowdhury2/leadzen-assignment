import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { SingleItem } from "../SingleItem/SingleItem";
import "./List.css";

export const List = () => {
	const [items, setItems] = useState([]);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 4;

	const loadData = () => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((receivedData) => setItems(receivedData));
	};
	useEffect(() => {
		loadData();
	}, []);

	const endOffset = itemOffset + itemsPerPage;
	const currentItems = items.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(items.length / itemsPerPage);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		setItemOffset(newOffset);
	};

	return (
		<div className="container">
			{currentItems &&
				currentItems.map((item, index) => (
					<SingleItem key={index} item={item} />
				))}
			<div className="mt-4">
				<ReactPaginate
					onPageChange={handlePageClick}
					previousLabel={"Previous"}
					nextLabel={"Next"}
					pageCount={pageCount}
					containerClassName={"paginationBtn"}
					previousLinkClassName={"previousBtn"}
					nextLinkClassName={"nextBtn"}
					activeClassName={"paginationActive"}
				></ReactPaginate>
			</div>
		</div>
	);
};
