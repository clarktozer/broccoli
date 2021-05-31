import {
    createMuiTheme,
    makeStyles,
    responsiveFontSizes
} from "@material-ui/core";

export const useGlobalStyles = makeStyles({
    "@global": {
        html: {
            height: "100%"
        },
        body: {
            height: "100%"
        },
        "#__next": {
            height: "100%"
        }
    }
});

let theme = createMuiTheme({
    palette: {
        type: "light"
    }
});

export const LightTheme = responsiveFontSizes(theme);
