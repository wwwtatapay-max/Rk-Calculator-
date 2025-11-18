
import React from 'react';
import { ReceiptIcon } from './Icons';

const Header: React.FC = () => {
    return (
        <header className="bg-slate-800 text-white p-4 text-center rounded-b-2xl shadow-lg">
            <div className="flex items-center justify-center gap-3">
                <ReceiptIcon className="w-7 h-7" />
                <h1 className="text-2xl font-bold tracking-tight">Quick Bill</h1>
            </div>
        </header>
    );
};

export default Header;
