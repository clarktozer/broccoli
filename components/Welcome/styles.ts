import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    welcome: {
        textAlign: "center",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    text: {
        marginBottom: theme.spacing(1)
    }
}));
