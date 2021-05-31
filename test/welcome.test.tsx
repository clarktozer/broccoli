import { fireEvent, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Welcome } from "../components";
import { render } from "./setup";

const formFields = () => ({
    nameInput: screen.getByTestId("name"),
    emailInput: screen.getByTestId("email"),
    confirmEmailInput: screen.getByTestId("confirmEmail")
});

test("rendering app", async () => {
    const { getByRole } = render(<Welcome />);

    expect(getByRole("button")).toHaveTextContent("Request an invite");
});

test("rendering form and validation", async () => {
    const { getByRole } = render(<Welcome />);

    fireEvent.click(getByRole("button"));
    fireEvent.click(screen.getByText("Send"));

    const emptyNameValidation = await screen.findByText(
        "Please enter your full name!"
    );
    const emptyEmailValidation = await screen.findByText(
        "Please enter your email address!"
    );

    expect(emptyNameValidation).toBeInTheDocument();
    expect(emptyEmailValidation).toBeInTheDocument();

    const { nameInput, emailInput } = formFields();

    await waitFor(() => {
        fireEvent.change(nameInput, {
            target: { name: "name", value: "T" }
        });

        fireEvent.change(emailInput, {
            target: { name: "email", value: "asdf" }
        });
    });

    fireEvent.click(screen.getByText("Send"));

    const minLengthNameValidation = await screen.findByText(
        "Please enter more than 3 characters!"
    );
    const validEmailValidation = await screen.findByText(
        "Please enter a valid email address!"
    );
    const matchEmailValidation = await screen.findByText(
        "Your email address much match!"
    );

    expect(minLengthNameValidation).toBeInTheDocument();
    expect(validEmailValidation).toBeInTheDocument();
    expect(matchEmailValidation).toBeInTheDocument();
});

test("rendering form and submission failure", async () => {
    const { getByRole } = render(<Welcome />);

    fireEvent.click(getByRole("button"));

    const { nameInput, emailInput, confirmEmailInput } = formFields();

    await waitFor(() => {
        fireEvent.change(nameInput, {
            target: { name: "name", value: "Test" }
        });

        fireEvent.change(emailInput, {
            target: { name: "email", value: "usedemail@blinq.app" }
        });

        fireEvent.change(confirmEmailInput, {
            target: { name: "confirmEmail", value: "usedemail@blinq.app" }
        });
    });

    fireEvent.click(screen.getByText("Send"));

    const submissionFailValidation = await screen.findByText(
        "This email address is already in use"
    );

    expect(submissionFailValidation).toBeInTheDocument();
});

test("rendering form and submission success", async () => {
    const { getByRole } = render(<Welcome />);

    fireEvent.click(getByRole("button"));

    const { nameInput, emailInput, confirmEmailInput } = formFields();

    await waitFor(() => {
        fireEvent.change(nameInput, {
            target: { name: "name", value: "Test" }
        });

        fireEvent.change(emailInput, {
            target: { name: "email", value: "test@blinq.app" }
        });

        fireEvent.change(confirmEmailInput, {
            target: { name: "confirmEmail", value: "test@blinq.app" }
        });
    });

    fireEvent.click(screen.getByText("Send"));

    const submissionSuccessValidation = await screen.findByText("All Done!");

    expect(submissionSuccessValidation).toBeInTheDocument();
});
