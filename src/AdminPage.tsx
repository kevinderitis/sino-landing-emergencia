import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Lock } from 'lucide-react';
import useWhatsAppNumber from './useWhatsAppNumber';

// In a real application, this should be stored securely, not hardcoded
const ADMIN_PASSWORD = 'admin123';

function AdminPage() {
  const navigate = useNavigate();
  const { whatsappNumber, setWhatsappNumber } = useWhatsAppNumber();
  const [number, setNumber] = useState(whatsappNumber);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Contraseña incorrecta');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWhatsappNumber(number);
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6">
          <div className="text-center mb-6">
            <div className="inline-block p-3 bg-blue-500 rounded-full mb-4">
              <Lock size={32} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Acceso Administrador</h1>
          </div>

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ingrese la contraseña"
              />
              {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            </div>

            <div className="flex space-x-3">
              <button
                type="submit"
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Ingresar
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6">
        <div className="text-center mb-6">
          <div className="inline-block p-3 bg-blue-500 rounded-full mb-4">
            <MessageCircle size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Configuración de WhatsApp</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
              Número de WhatsApp
            </label>
            <input
              type="text"
              id="whatsapp"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ej: 5491112345678"
            />
            <p className="mt-1 text-sm text-gray-500">
              Incluye el código de país sin el + (ej: 549 para Argentina)
            </p>
          </div>

          <div className="flex space-x-3">
            <button
              type="submit"
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Guardar cambios
            </button>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminPage;