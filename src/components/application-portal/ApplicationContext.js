import { useContext, createContext, useState, useEffect } from 'react';

const ApplicationPortalContext = createContext({});

export const ApplicationPortalProvider = ({ children }) => {
    const [email, setEmail] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [step, setStep] = useState(0);

    return (
        <ApplicationPortalContext.Provider
            value={{
                email,
                dialogOpen,
                setDialogOpen,
                step,
                setStep,
            }}
        >
            {children}
        </ApplicationPortalContext.Provider>
    );
};

export default function useApplicationPortal() {
    return useContext(ApplicationPortalContext);
}
