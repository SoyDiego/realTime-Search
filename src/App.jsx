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
`;

function App() {
	return (
		<Container>
			<Form />
		</Container>
	);
}

export default App;
