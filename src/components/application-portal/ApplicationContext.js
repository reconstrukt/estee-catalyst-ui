import { useContext, createContext, useState, useEffect } from 'react';

const ApplicationPortalContext = createContext({});

export const ApplicationPortalProvider = ({ children }) => {
    const [email, setEmail] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [step, setStep] = useState(0);

    const goBack = () => {
        if (step < 2) return;

        setStep(step - 1);
    };

    return (
        <ApplicationPortalContext.Provider
            value={{
                email,
                dialogOpen,
                setDialogOpen,
                step,
                setStep,
                goBack,
            }}
        >
            {children}
        </ApplicationPortalContext.Provider>
    );
};

export default function useApplicationPortal() {
    return useContext(ApplicationPortalContext);
}
