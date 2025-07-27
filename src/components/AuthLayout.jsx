import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {
        //console.log("AuthStatus: ", authStatus);
        //console.log("authentication: ", authentication);

        // ✅ wait until authStatus is known
        if (authStatus === null || authStatus === undefined) return;

        if (authentication && !authStatus) {
            navigate("/login");
        } else if (!authentication && authStatus) {
            navigate("/");
        }

        setLoader(false);
    }, [navigate, authentication, authStatus]);

    return loader ? <h1>loading...</h1> : <>{children}</>;
}
