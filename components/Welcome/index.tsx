import { Button, Typography } from "@material-ui/core";
import React, { FC, useState } from "react";
import { RequestInviteModal, SuccessModal } from "./components";
import { useStyles } from "./styles";

export const Welcome: FC = () => {
    const classes = useStyles();
    const [isRequestInviteOpen, setRequestInviteOpen] = useState(false);
    const [isSuccessOpen, setSuccessOpen] = useState(false);

    const onOpenRequestInvite = () => {
        setRequestInviteOpen(true);
    };

    const onCloseRequestInvite = () => {
        setRequestInviteOpen(false);
    };

    const onCloseSuccess = () => {
        setSuccessOpen(false);
    };

    const onExited = (success: boolean) => {
        if (success) {
            setSuccessOpen(true);
        }
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
                onSuccess={onCloseRequestInvite}
                onExited={onExited}
            />
            <SuccessModal isOpen={isSuccessOpen} onClose={onCloseSuccess} />
        </div>
    );
};
