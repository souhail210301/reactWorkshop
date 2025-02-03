import React, { useState } from 'react';

export default function ListManager({ initialItems, placeholder = "Entrez un nouveau élément" }) {
    const [items, setItems] = useState(initialItems);
    const [newItem, setNewItem] = useState('');

    const handleAdd = () => {
        if (newItem) {
            const newItems = [...items];
            newItems.map(item => item);  
            newItems.push(newItem);     
            setItems(newItems);
            setNewItem('');
        }
    };

    const handleDelete = (index) => {
        const filteredItems = items.map((item, i) => {
            if (i !== index) return item;
        }).filter(Boolean); 
        setItems(filteredItems);
    };

    return (
        <div>
            <h2>Liste :</h2>
            <div>
                {items.map((item, index) => (
                    <div key={index}>
                        {item} <button onClick={() => handleDelete(index)}>
                            Supprimer
                        </button>
                    </div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder={placeholder}
                />
                <button onClick={handleAdd}>
                    Ajouter
                </button>
            </div>
        </div>
    );
} 