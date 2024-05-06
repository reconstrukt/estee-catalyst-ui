import { editApplication } from '@/app/lib/api';
import { useContext, createContext, useState, useEffect } from 'react';

const ApplicationPortalContext = createContext({});

export const ApplicationPortalProvider = ({ children }) => {
    const [email, setEmail] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [application, setApplication] = useState({});

    const [values, setValues] = useState({});

    const updateApplication = async () => {
        const res = await editApplication(application.uuid, {
            ...values,
            step:
                application && application.step && application.step > step
                    ? application.step
                    : step,
        });

        console.log('edit application', res);

        if (res.success) {
            setApplication(res.data);
            setStep(step + 1);
        }

        return res;
    };

    const goBack = () => {
        if (step < 2) return;

        setStep(step - 1);
    };

    const resetApplication = () => {
        setDialogOpen(false);
        setStep(0);
        setApplication({});
        setEmail('');
        setValues({});
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
                resetApplication,
                values,
                setValues,
            }}
        >
            {children}
        </ApplicationPortalContext.Provider>
    );
};

export default function useApplicationPortal() {
    return useContext(ApplicationPortalContext);
}
