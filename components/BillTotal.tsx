
import React from 'react';

interface BillTotalProps {
    total: number;
}

const BillTotal: React.FC<BillTotalProps> = ({ total }) => {
    return (
        <div className="mt-6 p-4 bg-slate-800 text-white rounded-xl shadow-lg">
            <div className="flex justify-between items-center">
                <span className="text-xl font-bold tracking-wide">Grand Total</span>
                <span className="text-2xl font-extrabold tracking-tight">
                   ₹{total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
            </div>
        </div>
    );
};

export default BillTotal;
