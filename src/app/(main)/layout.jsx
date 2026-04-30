import FooterPage from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <FooterPage></FooterPage>
        </div>
    );
};

export default layout;