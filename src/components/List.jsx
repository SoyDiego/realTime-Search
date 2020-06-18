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
`;

const List = ({ fruit }) => {
	const [allFruits, setAllFruits] = useState([]);

	useEffect(() => {
		(async () => {
			const url = await fetch("https://www.fruitmap.org/api/trees");
			const fruits = await url.json();
			setAllFruits(fruits);
		})();
	}, []);

	const filteredFruit = allFruits.filter((fruitFiltered) =>
		RegExp(fruit, "gi").test(fruitFiltered.name.toLowerCase())
	);

	return (
		<Ul>
			{filteredFruit[0] !== undefined
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
