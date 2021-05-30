import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({
    palette: {
        type: "light"
    }
});

export const LightTheme = responsiveFontSizes(theme);
