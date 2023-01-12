import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Form from "./Form";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("AddTeamForm", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
    render(<Form onSubmit={onSubmit} />);
  });

  test("that error message is shown if you input wrong email", async () => {
    user.type(getEmail(), "stilyang1000gmail.com");

    user.click(screen.getByTestId("test-submit-button"));

    waitFor(() =>
      expect(
        screen.findByText(
          "Email address is invalid. Please make sure there is a '@' symbol"
        )
      ).toBeInTheDocument()
    );
  });

  test("that error message is shown if you input wrong phone number", async () => {
    user.type(getTel(), "123");

    user.click(screen.getByTestId("test-submit-button"));

    waitFor(() =>
      expect(screen.findByText("Phone number is not valid")).toBeInTheDocument()
    );
  });

  test("that error message is shown if you input under 10 characters password", async () => {
    user.type(getPassword(), "12345");

    user.click(screen.getByTestId("test-submit-button"));

    waitFor(() =>
      expect(
        screen.findByText("Password needs to be more than 10 characters")
      ).toBeInTheDocument()
    );
  });

  test("that the url input is not valid", async () => {
    user.type(getUrl(), "not-valid");

    user.click(screen.getByTestId("test-submit-button"));

    waitFor(() =>
      expect(
        screen.findByText(
          "URL must be valid.Make sure the string contains http followed by ://"
        )
      ).toBeInTheDocument()
    );
  });

  test("that the text must be more than 3 characters", async () => {
    user.type(getText(), "12");

    user.click(screen.getByTestId("test-submit-button"));

    waitFor(() =>
      expect(
        screen.findByText("Text needs to be more than 3 characters")
      ).toBeInTheDocument()
    );
  });
});

/* Functions for getting the input fields for better readability and reusability */
function getEmail() {
  return screen.getByTestId("test-email");
}

function getTel() {
  return screen.getByTestId("test-tel");
}

function getPassword() {
  return screen.getByTestId("test-password");
}

function getText() {
  return screen.getByTestId("test-text");
}

function getUrl() {
  return screen.getByTestId("test-url");
}
