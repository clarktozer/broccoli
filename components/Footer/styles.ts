import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    footer: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: theme.palette.background.paper
    },
    message: {
        textAlign: "center",
        width: "100%"
    },
    heart: {
        fontSize: "9px"
    }
}));
