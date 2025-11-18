
import React, { useState } from 'react';
import { BillItem } from '../types';
import { WhatsAppIcon, ShareIcon, ClearIcon } from './Icons';

interface ActionsProps {
    items: BillItem[];
    customerName: string;
    customerNumber: string;
    totalAmount: number;
    onClearBill: () => void;
}

const Actions: React.FC<ActionsProps> = ({ items, customerName, customerNumber, totalAmount, onClearBill }) => {
    const [shared, setShared] = useState(false);

    const generateBillText = () => {
        const date = new Date().toLocaleString('en-IN', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        let bill = `*--- BILL RECEIPT ---*\n\n`;
        bill += `*Date:* ${date}\n`;
        if (customerName) {
            bill += `*Customer:* ${customerName}\n`;
        }
        if (customerNumber) {
            bill += `*Contact:* ${customerNumber}\n\n`;
        }
        bill += `-----------------------------------\n`;
        bill += `*Items:*\n`;
        items.forEach((item, index) => {
            const itemTotal = (item.quantity * item.price).toLocaleString('en-IN', { minimumFractionDigits: 2 });
            bill += `${index + 1}. ${item.name} \n`;
            bill += `   (${item.quantity} x ${item.price.toLocaleString('en-IN')}) = *₹${itemTotal}*\n`;
        });
        bill += `-----------------------------------\n\n`;
        bill += `*GRAND TOTAL: ₹${totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}*\n\n`;
        bill += `_Thank you for your business!_`;
        
        return bill;
    };

    const handleSendWhatsApp = () => {
        if (!customerNumber) {
            alert('Please enter a customer WhatsApp number.');
            return;
        }
        if (items.length === 0) {
            alert('Please add at least one item to the bill.');
            return;
        }

        const billText = generateBillText();
        const encodedText = encodeURIComponent(billText);
        const url = `https://wa.me/${customerNumber}?text=${encodedText}`;
        window.open(url, '_blank');
    };

    const handleShareApp = async () => {
        const shareData = {
            title: 'Quick Bill Calculator',
            text: 'Check out this awesome and easy-to-use bill calculator!',
            url: window.location.href,
        };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                 // Fallback for desktop
                await navigator.clipboard.writeText(shareData.url);
                setShared(true);
                setTimeout(() => setShared(false), 2000);
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    };

    return (
        <div className="space-y-3">
            <button
                onClick={handleSendWhatsApp}
                disabled={items.length === 0 || !customerNumber}
                className="w-full flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3.5 rounded-xl hover:bg-green-600 active:bg-green-700 disabled:bg-slate-300 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
                <WhatsAppIcon className="w-6 h-6" />
                <span>Send via WhatsApp</span>
            </button>
            <div className="grid grid-cols-2 gap-3">
                 <button
                    onClick={onClearBill}
                    className="w-full flex items-center justify-center gap-2 bg-red-100 text-red-600 font-semibold py-2.5 rounded-lg hover:bg-red-200 active:bg-red-300 transition-colors duration-200"
                >
                    <ClearIcon className="w-5 h-5" />
                    <span>Clear Bill</span>
                </button>
                <button
                    onClick={handleShareApp}
                    className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-600 font-semibold py-2.5 rounded-lg hover:bg-slate-200 active:bg-slate-300 transition-colors duration-200"
                >
                     <ShareIcon className="w-5 h-5" />
                    <span>{shared ? 'Link Copied!' : 'Share App'}</span>
                </button>
            </div>
        </div>
    );
};

export default Actions;
