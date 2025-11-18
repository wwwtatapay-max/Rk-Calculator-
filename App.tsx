
import React, { useState, useMemo, useEffect } from 'react';
import { BillItem } from './types';
import Header from './components/Header';
import CustomerDetails from './components/CustomerDetails';
import BillItems from './components/BillItems';
import AddItemForm from './components/AddItemForm';
import BillTotal from './components/BillTotal';
import Actions from './components/Actions';

const App: React.FC = () => {
    const [customerName, setCustomerName] = useState<string>('');
    const [customerNumber, setCustomerNumber] = useState<string>('');
    
    // Lazy initialization for localStorage
    const [items, setItems] = useState<BillItem[]>(() => {
        try {
            const localData = localStorage.getItem('billItems');
            return localData ? JSON.parse(localData) : [];
        } catch (error) {
            console.error("Error reading from localStorage", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('billItems', JSON.stringify(items));
        } catch (error) {
            console.error("Error writing to localStorage", error);
        }
    }, [items]);

    const addItem = (name: string, quantity: number, price: number) => {
        const newItem: BillItem = {
            id: crypto.randomUUID(),
            name,
            quantity,
            price
        };
        setItems(prevItems => [...prevItems, newItem]);
    };

    const deleteItem = (id: string) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };
    
    const clearBill = () => {
        setItems([]);
        setCustomerName('');
        setCustomerNumber('');
    }

    const totalAmount = useMemo(() => {
        return items.reduce((total, item) => total + item.quantity * item.price, 0);
    }, [items]);
    
    const formattedDate = new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    return (
        <div className="bg-slate-100 min-h-screen">
            <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl shadow-slate-400/30 flex flex-col">
                <Header />
                <main className="flex-grow p-4 md:p-6 space-y-6 overflow-y-auto">
                    <div className="p-4 bg-slate-50 rounded-xl shadow-inner shadow-slate-200/50">
                        <div className="flex justify-between items-center text-sm text-slate-500">
                            <span>Bill Generator</span>
                            <span>Date: {formattedDate}</span>
                        </div>
                    </div>

                    <CustomerDetails
                        customerName={customerName}
                        setCustomerName={setCustomerName}
                        customerNumber={customerNumber}
                        setCustomerNumber={setCustomerNumber}
                    />
                    
                    <AddItemForm onAddItem={addItem} />

                    <BillItems items={items} onDeleteItem={deleteItem} />

                    {items.length > 0 && <BillTotal total={totalAmount} />}

                </main>
                <footer className="sticky bottom-0 bg-white/80 backdrop-blur-sm border-t border-slate-200 p-4">
                    <Actions 
                        items={items}
                        customerName={customerName}
                        customerNumber={customerNumber}
                        totalAmount={totalAmount}
                        onClearBill={clearBill}
                    />
                </footer>
            </div>
        </div>
    );
};

export default App;
