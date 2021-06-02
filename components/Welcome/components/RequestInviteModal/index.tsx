import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField
} from "@material-ui/core";
import { Formik } from "formik";
import React, { FC } from "react";
import { OverlaySpinner } from "../../../OverlaySpinner";
import { useStyles } from "./styles";
import { RequestInviteModalProps } from "./types";
import { requestInviteValidationSchema } from "./validation";

export const RequestInviteModal: FC<RequestInviteModalProps> = ({
    isOpen,
    onClose,
    onExited,
    onSubmit,
    isLoading,
    error
}) => {
    const classes = useStyles();

    return (
        <Dialog
            onClose={onClose}
            open={isOpen}
            onExited={onExited}
            PaperProps={{
                className: classes.paper
            }}
            disableBackdropClick={isLoading}
        >
            {isLoading && <OverlaySpinner />}
            <DialogTitle>Request an invite</DialogTitle>
            <DialogContent>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        confirmEmail: ""
                    }}
                    validationSchema={requestInviteValidationSchema}
                    onSubmit={onSubmit}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleSubmit,
                        handleChange
                    }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <TextField
                                className={classes.formControl}
                                required
                                fullWidth
                                size="small"
                                variant="outlined"
                                id="name"
                                name="name"
                                label="Full name"
                                type="string"
                                value={values.name}
                                onChange={handleChange}
                                error={touched.name && Boolean(errors.name)}
                                helperText={touched.name && errors.name}
                                FormHelperTextProps={{
                                    variant: "standard"
                                }}
                                inputProps={{
                                    "data-testid": "name"
                                }}
                            />
                            <TextField
                                className={classes.formControl}
                                required
                                fullWidth
                                size="small"
                                variant="outlined"
                                id="email"
                                name="email"
                                label="Email"
                                type="string"
                                value={values.email}
                                onChange={handleChange}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                                FormHelperTextProps={{
                                    variant: "standard"
                                }}
                                inputProps={{
                                    "data-testid": "email"
                                }}
                            />
                            <TextField
                                required
                                fullWidth
                                size="small"
                                variant="outlined"
                                id="confirmEmail"
                                name="confirmEmail"
                                label="Confirm Email"
                                type="string"
                                value={values.confirmEmail}
                                onChange={handleChange}
                                error={
                                    touched.confirmEmail &&
                                    Boolean(errors.confirmEmail)
                                }
                                helperText={
                                    touched.confirmEmail && errors.confirmEmail
                                }
                                FormHelperTextProps={{
                                    variant: "standard"
                                }}
                                inputProps={{
                                    "data-testid": "confirmEmail"
                                }}
                            />
                            <div className={classes.submitButton}>
                                <Button
                                    type="submit"
                                    color="primary"
                                    variant="contained"
                                    disabled={isLoading}
                                    disableElevation
                                >
                                    Send
                                </Button>
                                {error && error.length > 0 ? (
                                    <div
                                        className={classes.error}
                                        data-testid="error"
                                    >
                                        <i>{error}</i>
                                    </div>
                                ) : null}
                            </div>
                        </form>
                    )}
                </Formik>
            </DialogContent>
        </Dialog>
    );
};
