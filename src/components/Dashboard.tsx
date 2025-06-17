
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Shield, Lightbulb, TrendingUp } from 'lucide-react';

interface DashboardProps {
  userEmail: string;
  onNavigate: (screen: string) => void;
}

export const Dashboard = ({ userEmail, onNavigate }: DashboardProps) => {
  const userName = userEmail.split('@')[0];
  const monthlyCost = 2500;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center py-4">
          <h1 className="text-2xl font-bold text-gray-900">Olá</h1>
          <p className="text-gray-600 capitalize">{userName}</p>
        </div>
        
        <Card className="bg-gradient-to-r from-teal-500 to-teal-600 text-white border-none">
          <CardContent className="p-6">
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-2">Custo de Oportunidade</h2>
              <p className="text-3xl font-bold mb-2">R${monthlyCost}</p>
              <p className="text-sm opacity-90">
                Com R$ {monthlyCost} apostados no mês você poderia ter comprado um smartphone
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Gastos Anteriores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between h-32 mb-4">
              <div className="flex items-end space-x-2 h-full">
                <div className="bg-teal-200 w-8 h-12"></div>
                <div className="bg-teal-300 w-8 h-16"></div>
                <div className="bg-teal-400 w-8 h-20"></div>
                <div className="bg-teal-500 w-8 h-32"></div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Mar</span>
              <span>Abr</span>
              <span>Mai</span>
              <span>Ago</span>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 gap-4">
          <Button
            onClick={() => onNavigate('reports')}
            className="flex items-center justify-center space-x-2 bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 py-4"
          >
            <BarChart3 size={20} />
            <span>Ver Relatórios</span>
          </Button>
          
          <Button
            onClick={() => onNavigate('blocking')}
            className="flex items-center justify-center space-x-2 bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 py-4"
          >
            <Shield size={20} />
            <span>Ativar Bloqueio</span>
          </Button>
          
          <Button
            onClick={() => onNavigate('alternatives')}
            className="flex items-center justify-center space-x-2 bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 py-4"
          >
            <Lightbulb size={20} />
            <span>Alternativas de Uso</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
