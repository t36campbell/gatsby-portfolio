import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Card } from 'antd';
import SEO from '../components/seo/index';
import Main_Layout from '../components/main_layout/index';

const ContactPage = () => {
  const FormContainer = styled.form`
    display: grid;
    grid-template-columns: repeat(auto-fill, 1fr);
    margin: 16px 32px;
  `;
  const StyledInput = styled.input(
    {
      width: '100%',
    },
    (props) => ({
      flex: props.flex,
    }),
  );
  const StyledText = styled.textarea(
    {
      width: '100%',
    },
    (props) => ({
      flex: props.flex,
    }),
  );
  const underline = css({
    textDecoration: 'underline',
  });
  const button_styles = css({
    ':hover': underline,
    textDecoration: 'none',
    width: '50%',
    minWidth: '125px',
    background: 'linear-gradient(145deg, #9450bb, #7c449e)',
    boxShadow: '0 18px 36px rgba(0, 0, 0, 075)',
    textDecoration: 'none',
    color: '#191919',
  });
  const submit_container = css({
    width: '100%',
    textAlign: 'center',
  });
  const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
  `;
  const ContactContainer = styled.div`
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    justify-content: center;
    align-self: center;
    grid-template-columns: 50%;
    @media (max-width: 992px) {
      grid-template-columns: 90%;
    }
  `;
  const Styled_Card = styled(Card)`
    font-size: 1rem;
    transition: all 1000ms;
    overflow: hidden;
    border-color: #212121;
  `;
  return (
    <Main_Layout>
      <SEO title="Contact" description="Contact Tyler Campbell" />
      <ContactContainer>
        <Styled_Card hoverable theme="dark">
          <Title>Contact Me</Title>
          <FormContainer
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="bot-field" />
            <label htmlFor="firstName">
              <h3>First Name:</h3>
            </label>
            <StyledInput
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your First Name"
              flex={1}
            />
            <label htmlFor="lastName">
              <h3>Last Name:</h3>
            </label>
            <StyledInput
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your Last Name"
              flex={2}
            />
            <label htmlFor="email">
              <h3>Email:</h3>
            </label>
            <StyledInput
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              flex={3}
            />
            <label htmlFor="phone">
              <h3>Phone:</h3>
            </label>
            <StyledInput
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your Phone #"
              flex={4}
            />
            <label htmlFor="message">
              <h3>Reason:</h3>
            </label>
            <StyledText
              id="message"
              name="message"
              rows="3"
              placeholder="Enter a brief description of the reason for your corespondence"
              flex={5}
            />
            <br />
            <div css={submit_container}>
              <button type="submit" value="submit" css={button_styles}>
                Submit
              </button>
            </div>
          </FormContainer>
        </Styled_Card>
      </ContactContainer>
    </Main_Layout>
  );
};
export default ContactPage;
