import React from 'react';

export type CurrentUserContextType = {
    userId: number
};

export const CurrentUserContext = React.createContext<CurrentUserContextType | null>(null);