import React from 'react';
import { MessageCircle } from 'lucide-react';
import useWhatsAppNumber from './useWhatsAppNumber';

function ContactPage() {
  const { whatsappNumber } = useWhatsAppNumber();

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          {/* <div className="inline-block p-4 bg-blue-500 rounded-full mb-4">
            <MessageCircle size={40} className="text-white" />
          </div> */}
          <div className="inline-block bg-white rounded-full mb-2">
            <img src="/sinoca-default-399x82.png" alt="Logo" className="w-[280px] h-[280px]" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Contactanos</h1>
          <p className="text-gray-600">Si te comunicas al número de contacto y no tenes respuesta es posible que hayamos tenido inconvenientes con el mismo. Seguí los pasos para comunicarte nuevamente:</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Instrucciones</h2>
          <ol className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 mt-0.5">1</span>
              <span>Haz clic en el botón de WhatsApp abajo</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 mt-0.5">2</span>
              <span>Se abrirá una nueva ventana con WhatsApp</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 mt-0.5">3</span>
              <span>Escribe tu consulta y envíala</span>
            </li>
          </ol>
        </div>

        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 flex items-center justify-center space-x-2"
        >
          <MessageCircle size={24} />
          <span>Contactar por WhatsApp</span>
        </button>
      </div>
    </div>
  );
}

export default ContactPage;