import React, { useState } from 'react';
import type { CardData } from '../types';
import { GenerateIcon } from './icons';

interface CardFormProps {
  onSubmit: (formData: CardData) => void;
  isLoading: boolean;
}

const OCCASIONS = [
  "Birthday",
  "Anniversary",
  "Wedding",
  "Thank You",
  "Congratulations",
  "Get Well Soon",
  "Sympathy",
];

const CardForm: React.FC<CardFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<CardData>({
    name: '',
    occasion: OCCASIONS[0],
    description: '',
    senderName: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.occasion && formData.description && formData.senderName) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md border border-gray-100">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Recipient's Name(s)
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition"
          placeholder="e.g., Jane Doe or The Happy Couple"
          required
        />
      </div>

       <div>
        <label htmlFor="senderName" className="block text-sm font-medium text-gray-700 mb-1">
          Sender's Name(s)
        </label>
        <input
          type="text"
          name="senderName"
          id="senderName"
          value={formData.senderName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition"
          placeholder="e.g., John Smith"
          required
        />
      </div>

      <div>
        <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-1">
          Occasion
        </label>
        <select
          name="occasion"
          id="occasion"
          value={formData.occasion}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition bg-white"
          required
        >
          {OCCASIONS.map(occ => <option key={occ} value={occ}>{occ}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Tell us about them
        </label>
        <textarea
          name="description"
          id="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition"
          placeholder="e.g., Loves hiking and has a great sense of humor."
          required
        />
        <p className="text-xs text-gray-500 mt-1">This helps the AI personalize the card!</p>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center items-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300 disabled:cursor-not-allowed transition-all duration-300"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating...
          </>
        ) : (
          <>
            <GenerateIcon className="h-5 w-5" />
            Generate Card
          </>
        )}
      </button>
    </form>
  );
};

export default CardForm;
