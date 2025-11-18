
import React, { useState, useRef } from 'react';
import { PlusIcon } from './Icons';

interface AddItemFormProps {
    onAddItem: (name: string, quantity: number, price: number) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ onAddItem }) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('1');
    const [price, setPrice] = useState('');
    const nameInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const numQuantity = parseFloat(quantity);
        const numPrice = parseFloat(price);

        if (name.trim() && !isNaN(numQuantity) && numQuantity > 0 && !isNaN(numPrice) && numPrice >= 0) {
            onAddItem(name.trim(), numQuantity, numPrice);
            setName('');
            setQuantity('1');
            setPrice('');
            nameInputRef.current?.focus();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-3">
            <h3 className="text-md font-semibold text-slate-700">Add Item</h3>
            <input
                ref={nameInputRef}
                type="text"
                placeholder="Item Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
            />
            <div className="grid grid-cols-2 gap-3">
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                    min="0"
                    step="any"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
                />
                <input
                    type="number"
                    placeholder="Price per item"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    min="0"
                    step="any"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
                />
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-md hover:shadow-lg">
                <PlusIcon className="w-5 h-5" />
                <span>Add Item</span>
            </button>
        </form>
    );
};

export default AddItemForm;
