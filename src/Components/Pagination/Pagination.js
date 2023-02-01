import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Pagination = ({
	itemsPerPage,
	totalItems,
	paginate,
	currentPage,
}) => {
	let pageNumbers = [];
	console.log(pageNumbers);
	console.log(totalItems);
	console.log(itemsPerPage);
	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i);
		console.log(pageNumbers);
	}

	return (
		<nav className="mt-5">
			<ul className="pagination justify-content-center">
				<li>
					<button
						className="btn"
						onClick={() => paginate(currentPage - 1)}
					>
						<i className="fa-solid fa-less-than"></i>
					</button>
				</li>
				{pageNumbers.map((number) => {
					return (
						<li key={number} className="page-item">
							<a
								onClick={() => paginate(number)}
								href="/#"
								className="page-link"
							>
								{number}
							</a>
						</li>
					);
				})}
				<li>
					<button
						className="btn"
						onClick={() => {
							if (currentPage + 1 > pageNumbers.length);
							else paginate(currentPage + 1);
						}}
					>
						<i className="fa-solid fa-greater-than"></i>
					</button>
				</li>
			</ul>
		</nav>
	);
};
