
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center p-4">
      <Card className="w-full max-w-sm bg-teal-600 border-none text-white shadow-2xl">
        <div className="p-8 text-center space-y-6">
          <div className="mx-auto w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6">
            <div className="text-teal-600 font-bold text-2xl">SB</div>
          </div>
          
          <div>
            <h1 className="text-2xl font-bold mb-2">SemBet:</h1>
            <p className="text-lg font-medium mb-4">Retomando o Controle Financeiro e Emocional</p>
          </div>
          
          <p className="text-sm opacity-90 leading-relaxed">
            Você sabia que muitos brasileiros perdem quantias significativas de dinheiro com apostas online?
          </p>
          
          <Button 
            onClick={onStart}
            className="w-full bg-white text-teal-600 hover:bg-gray-100 font-medium py-3 rounded-xl"
          >
            Começar
          </Button>
        </div>
      </Card>
    </div>
  );
};
