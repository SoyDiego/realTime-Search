import React from "react";
import styled from "@emotion/styled";
import Form from "./components/Form";

const Container = styled.main`
	width: 100%;
	height: 100vh;
	background-color: #db6e00;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media (min-width: 320px) {
		height: 100vh;
	}
	@media (min-width: 480px) {
		height: 100vh;
	}
`;

function App() {
	return (
		<Container>
			<Form />
		</Container>
	);
}

export default App;
