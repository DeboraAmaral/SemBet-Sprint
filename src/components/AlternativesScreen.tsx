
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, TrendingUp, Gamepad2 } from 'lucide-react';

interface AlternativesScreenProps {
  onBack: () => void;
}

export const AlternativesScreen = ({ onBack }: AlternativesScreenProps) => {
  const alternatives = [
    {
      icon: BookOpen,
      title: 'Cursos online',
      description: 'Conceito de ler cursos online diferentes',
      color: 'bg-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'Investimentos',
      description: 'Invista o seu dinheiro com segurança',
      color: 'bg-green-500'
    },
    {
      icon: Gamepad2,
      title: 'Atividades recreativas',
      description: 'Custos e bens atividades',
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="flex items-center space-x-4 py-4">
          <Button
            onClick={onBack}
            variant="ghost"
            size="sm"
            className="p-0"
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-xl font-bold text-gray-900">Alternativas de Uso</h1>
        </div>
        
        <Card className="bg-gradient-to-r from-teal-500 to-teal-600 text-white border-none">
          <CardContent className="p-6 text-center">
            <h2 className="text-lg font-semibold mb-2">💡 Use seu dinheiro melhor</h2>
            <p className="text-sm opacity-90">
              Em vez de apostar, que tal investir em seu futuro?
            </p>
          </CardContent>
        </Card>
        
        <div className="space-y-4">
          {alternatives.map((alternative, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`${alternative.color} p-3 rounded-lg`}>
                    <alternative.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {alternative.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {alternative.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-6">
            <h3 className="font-semibold text-yellow-800 mb-2">🎯 Lembre-se</h3>
            <p className="text-yellow-700 text-sm">
              Pequenas mudanças de hábito podem gerar grandes resultados no longo prazo.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
