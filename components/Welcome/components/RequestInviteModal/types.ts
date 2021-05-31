export interface RequestInviteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (values: RequestInviteFormValues) => void;
    onExited: () => void;
    isLoading?: boolean;
    error?: string;
}

export interface RequestInviteFormValues {
    name: string;
    email: string;
    confirmEmail: string;
}
