'use client'

import React, { createContext, useState, useContext, type ReactNode } from 'react';

export interface Organization {
    id: string
    name: string
    owner: string
    role: string
}

interface OrganizationContextProps {
    organization: Organization[] | null;
    setOrganization: (organization: Organization[]) => void;
}

const OrganizationContext = createContext<OrganizationContextProps | undefined>(undefined);

export const OrganizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [organization, setOrganization] = useState<Organization[] | null>(null);

    return (
        <OrganizationContext.Provider value={{
            organization,
            setOrganization,
        }}>
            {children}
        </OrganizationContext.Provider>
    );
};

export const useOrganization = (): OrganizationContextProps => {
    const context = useContext(OrganizationContext);
    if (!context) {
        throw new Error('useOrganization must be used within a OrganizationProvider');
    }
    return context;
};