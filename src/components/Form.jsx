import React from 'react'
import List from "./List";
import styled from "@emotion/styled";

const Formulario = styled.form`
    width: 50%;
    background-color: darkorange;
    text-align: center;
    border: 2px solid #000000;

`
const Input = styled.input`
	border: none;
	background-color: transparent;
	border-bottom: 2px solid #000000;
    margin-top: 2rem;
    width: 300px;
`;
const Button = styled.button`
    background-color: #000000;
    border: none;
    padding: .5rem;
    margin: 0 .5rem;
    color: darkorange;
    font-weight: bold;
    cursor: pointer;
`;
const Form = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <Formulario onSubmit={handleSubmit}>
            <Input type="text" placeholder="Search something..."/>
            <Button type="submit">Filter list!</Button>
            <List/>
            
        </Formulario>
    )
}

export default Form
