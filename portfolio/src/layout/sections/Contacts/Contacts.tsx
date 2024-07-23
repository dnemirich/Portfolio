import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact me</SectionTitle>
            <StyledForm>
                <Label htmlFor={"name"}>Name</Label>
                <Field id={"name"}/>
                <Label htmlFor={"email"}>Email</Label>
                <Field id={"email"}/>
                <Label htmlFor={"message"}>Message</Label>
                <Field as={"textarea"} id={"message"}/>
                <Button type={"submit"}>Send</Button>
            </StyledForm>

        </StyledContacts>
    );
};

const StyledContacts = styled.div`
    min-height: 50vh;
    background-color: #ead9b2;
`;

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`;

const Field = styled.input``;

const Label = styled.label``;