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

    expect(
        getByRole("button", {
            name: /request an invite/i
        })
    ).toBeInTheDocument();
});

test("rendering form and validation", async () => {
    const { getByRole } = render(<Welcome />);

    fireEvent.click(getByRole("button"));
    fireEvent.click(screen.getByText("Send"));

    const { nameInput, emailInput, confirmEmailInput } = formFields();

    await waitFor(() => {
        expect(nameInput).toHaveAttribute("aria-invalid", "true");
        expect(emailInput).toHaveAttribute("aria-invalid", "true");

        fireEvent.change(nameInput, {
            target: { name: "name", value: "T" }
        });

        fireEvent.change(emailInput, {
            target: { name: "email", value: "asdf" }
        });
    });

    fireEvent.click(
        screen.getByRole("button", {
            name: /send/i
        })
    );

    await waitFor(() => {
        expect(nameInput).toHaveAttribute("aria-invalid", "true");
        expect(emailInput).toHaveAttribute("aria-invalid", "true");
        expect(confirmEmailInput).toHaveAttribute("aria-invalid", "true");
    });

    await waitFor(() => {
        fireEvent.change(nameInput, {
            target: { name: "name", value: "Test" }
        });
    });

    fireEvent.click(
        screen.getByRole("button", {
            name: /send/i
        })
    );

    await waitFor(() => {
        expect(nameInput).toHaveAttribute("aria-invalid", "false");
        expect(emailInput).toHaveAttribute("aria-invalid", "true");
        expect(confirmEmailInput).toHaveAttribute("aria-invalid", "true");
    });
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

    fireEvent.click(
        screen.getByRole("button", {
            name: /send/i
        })
    );

    await waitFor(() => {
        expect(screen.getByTestId("error")).toBeInTheDocument();
    });
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

    fireEvent.click(
        screen.getByRole("button", {
            name: /send/i
        })
    );

    const submissionSuccessValidation = await screen.findByText("All Done!");

    expect(submissionSuccessValidation).toBeInTheDocument();
});
