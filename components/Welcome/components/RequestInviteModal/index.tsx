import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField
} from "@material-ui/core";
import axios from "axios";
import { Formik } from "formik";
import React, { FC, useState } from "react";
import { OverlaySpinner } from "../../../OverlaySpinner";
import { auth } from "./constants";
import { useStyles } from "./styles";
import { RequestInviteFormValues, RequestInviteModalProps } from "./types";
import { requestInviteValidationSchema } from "./validation";

export const RequestInviteModal: FC<RequestInviteModalProps> = ({
    isOpen,
    onClose,
    onSuccess,
    onExited
}) => {
    const classes = useStyles();
    const [isSubmitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const onSubmit = async ({ name, email }: RequestInviteFormValues) => {
        try {
            setSuccess(false);
            setSubmitting(true);
            setError("");

            const payload = {
                name,
                email
            };

            await axios.post<string>(auth, payload, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            onSuccess();
            setSuccess(true);
        } catch (error) {
            setError(error.response.data.errorMessage);
        } finally {
            setSubmitting(false);
        }
    };

    const onHandleExit = () => {
        onExited(success);
        setSuccess(false);
        setError("");
    };

    const onHandleClose = () => {
        onClose();
    };

    return (
        <Dialog
            onClose={onHandleClose}
            open={isOpen}
            onExited={onHandleExit}
            PaperProps={{
                className: classes.paper
            }}
        >
            {isSubmitting && <OverlaySpinner />}
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
                                    disabled={isSubmitting}
                                    disableElevation
                                >
                                    Send
                                </Button>
                                {error?.length > 0 && (
                                    <div className={classes.error}>
                                        <i>{error}</i>
                                    </div>
                                )}
                            </div>
                        </form>
                    )}
                </Formik>
            </DialogContent>
        </Dialog>
    );
};
