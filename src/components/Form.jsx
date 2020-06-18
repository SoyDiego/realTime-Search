import React, { useState } from "react";
import List from "./List";
import styled from "@emotion/styled";

const Formulario = styled.form`
	width: 50%;
	background-color: darkorange;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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

const Error = styled.div`
	width: 50%;
	padding: 2rem;
	color: white;
	font-weight: bold;
	text-align: center;
	margin: 2rem;
	background-color: #ff6961;
`;

const Form = () => {
	const [fruit, setFruit] = useState("");
	const [error, setError] = useState(false);

	const handleOnChange = (e) => {
		setFruit(e.target.value);
	};

	return (
		<>
			{error ? (
				<Error>Something went wrong, sorry... :(</Error>
			) : (
				<Formulario>
					<Input
						type="text"
						placeholder="Search something..."
						value={fruit}
						onChange={handleOnChange}
					/>
					<List
						fruit={fruit}
						setFruit={setFruit}
						setError={setError}
					/>
				</Formulario>
			)}
		</>
	);
};

export default Form;
