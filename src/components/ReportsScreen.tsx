
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingDown } from 'lucide-react';

interface ReportsScreenProps {
  onBack: () => void;
}

export const ReportsScreen = ({ onBack }: ReportsScreenProps) => {
  const monthlyData = [
    { month: 'Jan', amount: 1200 },
    { month: 'Fev', amount: 1800 },
    { month: 'Mar', amount: 2200 },
    { month: 'Abr', amount: 2500 },
  ];

  const totalSpent = monthlyData.reduce((sum, item) => sum + item.amount, 0);

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
          <h1 className="text-xl font-bold text-gray-900">Relatórios de Gastos</h1>
        </div>
        
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-6 text-center">
            <TrendingDown className="mx-auto mb-3 text-red-500" size={32} />
            <h2 className="text-2xl font-bold text-red-600 mb-2">R$ 2.500</h2>
            <p className="text-red-700 font-medium">Total apostado este mês</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Histórico Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={data.month} className="flex justify-between items-center">
                  <span className="text-gray-600">{data.month}</span>
                  <span className="font-semibold">R$ {data.amount}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total em 4 meses:</span>
                <span className="font-bold text-lg text-red-600">R$ {totalSpent}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="font-semibold text-blue-800 mb-2">💡 Reflexão</h3>
            <p className="text-blue-700 text-sm">
              Com R$ {totalSpent} você poderia ter:
            </p>
            <ul className="mt-2 text-blue-700 text-sm space-y-1">
              <li>• Comprado um iPhone novo</li>
              <li>• Investido na poupança</li>
              <li>• Feito um curso profissionalizante</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
