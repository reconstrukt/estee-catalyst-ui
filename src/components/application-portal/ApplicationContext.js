import { editApplication } from '@/app/lib/api';
import { useContext, createContext, useState, useEffect } from 'react';

const ApplicationPortalContext = createContext({});

export const ApplicationPortalProvider = ({ children }) => {
    const [email, setEmail] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [application, setApplication] = useState({});

    const updateApplication = async (fields) => {
        const res = await editApplication(application.uuid, {
            ...fields,
            step,
        });

        console.log('edit application', res);

        if (res.success) {
            setApplication(res.data);

            if (step < 11) {
                setStep(step + 1);
            }
        }

        return res;
    };

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
                application,
                setApplication,
                updateApplication,
            }}
        >
            {children}
        </ApplicationPortalContext.Provider>
    );
};

export default function useApplicationPortal() {
    return useContext(ApplicationPortalContext);
}
