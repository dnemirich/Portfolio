import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle marginBottom={"80px"}>Contact me</SectionTitle>
                <StyledForm>
                    <Label htmlFor={"name"}>Name</Label>
                    <Field id={"name"}/>
                    <Label htmlFor={"email"}>Email</Label>
                    <Field id={"email"}/>
                    <Label htmlFor={"message"}>Message</Label>
                    <Field as={"textarea"} id={"message"}/>
                    <Button type={"submit"}>Send</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.div`
    padding-bottom: 56px;
`;

const StyledForm = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    textarea {
        resize: none;
        height: 160px;
    }
`;

const Field = styled.input`
    background-color: #fff;
    border: 1px solid #e8ecf4;
    border-radius: 8px;
    width: 400px;
    height: 40px;
    
    margin-bottom: 24px;
`;

const Label = styled.label`
    align-self: flex-start;
    margin-bottom: 8px;

    font-weight: 600;
    font-size: 16px;
`;