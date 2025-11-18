
import React from 'react';
import { UserIcon, PhoneIcon } from './Icons';

interface CustomerDetailsProps {
    customerName: string;
    setCustomerName: (name: string) => void;
    customerNumber: string;
    setCustomerNumber: (number: string) => void;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({
    customerName,
    setCustomerName,
    customerNumber,
    setCustomerNumber
}) => {
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-700">Customer Details</h2>
            <div className="relative">
                <UserIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                    type="text"
                    placeholder="Customer Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200 bg-white"
                />
            </div>
            <div className="relative">
                <PhoneIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                    type="tel"
                    placeholder="WhatsApp Number (e.g., 91...)"
                    value={customerNumber}
                    onChange={(e) => setCustomerNumber(e.target.value.replace(/[^0-9]/g, ''))}
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200 bg-white"
                />
            </div>
        </div>
    );
};

export default CustomerDetails;
