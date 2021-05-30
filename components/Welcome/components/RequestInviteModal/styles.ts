import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    formControl: {
        marginBottom: theme.spacing(2)
    },
    submitButton: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        textAlign: "center"
    },
    error: {
        marginTop: theme.spacing(2),
        color: theme.palette.error.main
    },
    paper: {
        maxWidth: "400px"
    }
}));
