import { useState, useEffect } from 'react';

const STORAGE_KEY = 'whatsapp_number';
const DEFAULT_NUMBER = '5491112345678';

export default function useWhatsAppNumber() {
  const [whatsappNumber, setWhatsappNumberState] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored || DEFAULT_NUMBER;
  });

  const setWhatsappNumber = (number: string) => {
    localStorage.setItem(STORAGE_KEY, number);
    setWhatsappNumberState(number);
  };

  return { whatsappNumber, setWhatsappNumber };
}