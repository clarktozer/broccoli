import { ThemeProvider } from "@material-ui/core";
import { render, RenderOptions } from "@testing-library/react";
import React, { FC, ReactElement } from "react";
import { LightTheme } from "../theme";

const Providers: FC = ({ children }) => (
    <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>
);

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { customRender as render };
