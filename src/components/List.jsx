import React from "react";
import styled from "@emotion/styled";

const Ul = styled.ul`
    margin: 2rem 2rem;
    padding-left: 0;
    list-style: none;
`;
const Li = styled.li`
    display: inline-block;
    padding: 1rem;
`

const List = () => {
	return (
		<Ul>
			<Li>Apples</Li>
			<Li>Bananas</Li>
			<Li>Avocados</Li>
			<Li>Carrots</Li>
			<Li>Watermelon</Li>
			<Li>Strawberries</Li>
			<Li>Orange</Li>
			<Li>Mango</Li>
			<Li>Nectarine</Li>
		</Ul>
	);
};

export default List;
