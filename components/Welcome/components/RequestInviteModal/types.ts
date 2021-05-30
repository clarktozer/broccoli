export interface RequestInviteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    onExited: (success: boolean) => void;
}

export interface RequestInviteFormValues {
    name: string;
    email: string;
    confirmEmail: string;
}

export interface ApiError {
    errorMessage: string;
}
