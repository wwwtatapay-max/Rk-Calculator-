
import React from 'react';
import { BillItem } from '../types';
import { TrashIcon } from './Icons';

interface BillItemsProps {
    items: BillItem[];
    onDeleteItem: (id: string) => void;
}

const BillItems: React.FC<BillItemsProps> = ({ items, onDeleteItem }) => {
    if (items.length === 0) {
        return (
            <div className="text-center py-8 px-4 bg-slate-50 rounded-xl">
                <p className="text-slate-500">Your bill is empty.</p>
                <p className="text-slate-400 text-sm">Add items using the form above.</p>
            </div>
        );
    }
    
    return (
        <div className="space-y-3">
             <h2 className="text-lg font-semibold text-slate-700">Items</h2>
            <div className="flow-root">
                <ul role="list" className="-my-3 divide-y divide-slate-200">
                    {items.map((item, index) => (
                        <li key={item.id} className="flex items-center justify-between py-3 gap-4">
                            <div className="flex items-start gap-3">
                                <span className="text-sm font-medium text-slate-500 w-5 text-right">{index + 1}.</span>
                                <div>
                                    <p className="text-md font-medium text-slate-800 capitalize">{item.name}</p>
                                    <p className="text-sm text-slate-500">
                                        {item.quantity} x {item.price.toLocaleString('en-IN')}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className="text-md font-semibold text-slate-900 w-24 text-right">
                                    ₹{(item.quantity * item.price).toLocaleString('en-IN')}
                                </p>
                                <button
                                    onClick={() => onDeleteItem(item.id)}
                                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200"
                                >
                                    <TrashIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BillItems;
