"use client";

import {useEffect} from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("958e55ed-06bb-4944-8562-ccd314a6abbe");
    }, []);

    return null;
}