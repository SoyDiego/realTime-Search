import React, { useState } from "react";
import List from "./List";
import styled from "@emotion/styled";

const Formulario = styled.form`
	width: 50%;
	background-color: darkorange;
	text-align: center;
	border: 2px solid #000000;
	@media (min-width: 320px) {
		width: 90%;
	}
`;
const Input = styled.input`
	border: none;
	background-color: transparent;
	border-bottom: 2px solid #000000;
	margin-top: 2rem;
	text-align: center;
	@media (min-width: 480px) {
		width: 70%;
	}
	@media (min-width: 768px) {
		width: 40%;
	}
	@media (min-width: 1024px) {
		width: 30%;
	}
`;

const Form = () => {
	const [fruit, setFruit] = useState("");

	const handleOnChange = (e) => {
		setFruit(e.target.value);
	};

	return (
		<Formulario>
			<Input
				type="text"
				placeholder="Search something..."
				value={fruit}
				onChange={handleOnChange}
			/>
			<List fruit={fruit} setFruit={setFruit} />
		</Formulario>
	);
};

export default Form;
