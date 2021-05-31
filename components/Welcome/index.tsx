import { Button, Typography } from "@material-ui/core";
import axios, { AxiosError } from "axios";
import React, { FC, useState } from "react";
import { RequestInviteModal, SuccessModal } from "./components";
import { RequestInviteFormValues } from "./components/RequestInviteModal/types";
import { auth } from "./constants";
import { useStyles } from "./styles";
import { AuthError } from "./types";

export const Welcome: FC = () => {
    const classes = useStyles();
    const [isRequestInviteOpen, setRequestInviteOpen] = useState(false);
    const [isSuccessOpen, setSuccessOpen] = useState(false);
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

            setSuccess(true);
            setRequestInviteOpen(false);
        } catch (err) {
            const error: Error | AxiosError<AuthError> = err;

            if (axios.isAxiosError(error) && error.response) {
                setError(error.response.data.errorMessage);
            } else {
                setError(error.message);
            }
        } finally {
            setSubmitting(false);
        }
    };

    const onOpenRequestInvite = () => {
        setRequestInviteOpen(true);
    };

    const onCloseRequestInvite = () => {
        setRequestInviteOpen(false);
    };

    const onCloseSuccess = () => {
        setSuccessOpen(false);
    };

    const onExited = () => {
        if (success) {
            setSuccessOpen(true);
        }

        setError("");
        setSuccess(false);
    };

    return (
        <div className={classes.welcome}>
            <Typography className={classes.text} variant="h2">
                A better way to enjoy every day.
            </Typography>
            <Typography className={classes.text}>
                Be the first to know when we launch.
            </Typography>
            <Button
                size="medium"
                color="primary"
                variant="contained"
                onClick={onOpenRequestInvite}
            >
                Request an invite
            </Button>
            <RequestInviteModal
                isOpen={isRequestInviteOpen}
                onClose={onCloseRequestInvite}
                onSubmit={onSubmit}
                onExited={onExited}
                isLoading={isSubmitting}
                error={error}
            />
            <SuccessModal isOpen={isSuccessOpen} onClose={onCloseSuccess} />
        </div>
    );
};
