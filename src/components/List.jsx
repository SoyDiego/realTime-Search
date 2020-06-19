import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Ul = styled.ul`
	margin: 2rem 2rem;
	padding-left: 0;
	list-style: none;
`;
const Li = styled.li`
	display: inline-block;
	padding: 1rem;
	@media (max-width: 480px) {
		padding: .2rem;
	}
`;

const List = ({ fruit, setError }) => {
	const [allFruits, setAllFruits] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const url = await fetch("https://www.fruitmap.org/api/trees");
				const fruits = await url.json();
				setAllFruits(fruits);
			} catch (error) {
				setError(true);
			}
		})();
	}, [setError]);

	const filteredFruit = allFruits.filter((fruitFiltered) =>
		RegExp(fruit, "gi").test(fruitFiltered.name.toLowerCase())
	);

	return (
		<Ul>
			{filteredFruit
				? filteredFruit.map((fruitFiltered) => (
						<Li key={fruitFiltered.id}>{fruitFiltered.name}</Li>
				  ))
				: allFruits.map((fruit) => (
						<Li key={fruit.id}>{fruit.name}</Li>
				  ))}
		</Ul>
	);
};

export default List;
