import React from "react";
import { render, screen, fireEvent, getAllByLabelText, getByTestId, queryByTestId } from '@testing-library/react';
import  App  from './App';
import userEvent from '@testing-library/user-event';
import AppWrapper from "./App";
import { Login } from "../src/components/UseLogin";

// export const validateLoginEmail = (str = " ") => str.includes(EMAIL_REGEX);

describe("login describe statement", () => {

  test("valid email should pass authentication", ()=>{
    render(<Login/>)
    
    const inputEl = screen.getByTestId("email-input");
    userEvent.type(inputEl, "test@mail.com");

    expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
    expect(screen.queryByText("Please enter a valid email.")).not.toBeInTheDocument();


  });

  test('invalid email should show error message', () => {
    render ( <Login />)

    const inputEl = screen.getByTestId("email-input");
    userEvent.type(inputEl, "test");

    expect(screen.getByTestId("email-input")).toHaveValue("test");
    expect(screen.getByText("Please enter a valid email.")).toBeInTheDocument();

    
  });





  // test("render email input", () => {
  //   render(<App />)
    
  //   const inputEl = screen.getByTestId("email-input");
  //   expect(inputEl).toBeInTheDocument();
  //   expect(inputEl).toHaveAttribute("type", "email")
  
  // });

  // test ("pass valid email to test email input field", () => {
  //   render(<App/>);
  //   const inputEl = screen.getByTestId("email-input");
  //   userEvent.type(inputEl, "test@mail.com");
  //   expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
  //   // expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();


  // })

  test("login form should be in the document", () => {
    const component = render(<Login/>);
    const inputNode = component.getByText("Email:")
    expect(inputNode).toBeInTheDocument()
    // FIND OUT WHY I CANT RENDER THE APP INSTEAD OF LOGIN

  })

  test("login form should be in the document", () => {
    const component = render(<Login/>);
    const labelNode = component.getByText("Password:")
    expect(labelNode).toBeInTheDocument()
    // FIND OUT WHY I CANT RENDER THE APP INSTEAD OF LOGIN

  })

  test ( "email field should have label", () => {
    const component = render(<Login />)
    const emailInputNode = component.getByLabelText("Email:");
    expect(emailInputNode.getAttribute("name")).toBe("email");
  })

  test ( "email input should accept text", () => {
    const { getByLabelText, getByText } = render (<Login />);
    const emailInputNode = getByLabelText ("Email:");
    expect(emailInputNode.value).toMatch("")
    //Should be no text initially within field
    fireEvent.change(emailInputNode,{target: {value: "testing"}} )
    expect(emailInputNode.value).toMatch("testing")

    
  })
  test ("should be able to submit a form", () => {
    const mockFn = jest.fn()
    const {queryByTestId} = render (<AppWrapper handleSubmit={mockFn} />)
    const buttonNode = queryByTestId("btn-to-login");
    fireEvent.submit(buttonNode);
    expect(mockFn).toHaveBeenCalledTimes(1);
    // Only searches first page

  })



})
