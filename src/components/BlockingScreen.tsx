
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Shield, AlertTriangle } from 'lucide-react';

interface BlockingScreenProps {
  onBack: () => void;
}

export const BlockingScreen = ({ onBack }: BlockingScreenProps) => {
  const [isBlocked, setIsBlocked] = useState(true);
  
  const blockedSites = [
    'exemplodespostas.com',
    'apostasonline.com',
    'betexemplo.com'
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
          <h1 className="text-xl font-bold text-gray-900">Inteligrir</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="text-teal-600" size={20} />
              <span>Ativar Bloqueio</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Status do bloqueio</span>
              <Switch 
                checked={isBlocked} 
                onCheckedChange={setIsBlocked}
                className="data-[state=checked]:bg-teal-600"
              />
            </div>
            
            {isBlocked && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <Shield className="text-green-600" size={16} />
                  <span className="text-green-800 font-medium">Bloqueio Ativo</span>
                </div>
                <p className="text-green-700 text-sm mt-1">
                  Você receberá alertas ao tentar acessar sites de apostas
                </p>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Sites Bloqueados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {blockedSites.map((site, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <span className="text-gray-700">{site}</span>
                  <AlertTriangle className="text-red-500" size={16} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-6">
            <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Exemplo de alerta</h3>
            <p className="text-yellow-700 text-sm">
              "Exemplo de alerta ao tentar acessar um site de apostas"
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
