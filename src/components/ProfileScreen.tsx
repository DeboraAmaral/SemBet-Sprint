
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, User, LogOut, TrendingDown } from 'lucide-react';

interface ProfileScreenProps {
  userEmail: string;
  onBack: () => void;
  onLogout: () => void;
}

export const ProfileScreen = ({ userEmail, onBack, onLogout }: ProfileScreenProps) => {
  const userName = userEmail.split('@')[0];
  const initials = userName.substring(0, 2).toUpperCase();

  const stats = [
    { label: 'Bloqueios', value: '10', change: '2.69%' },
    { label: 'Casos', value: 'R$580', change: '' }
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
          <h1 className="text-xl font-bold text-gray-900">Perfil</h1>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16 bg-teal-600">
                <AvatarFallback className="text-white font-semibold text-lg">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 capitalize">
                  Jose Fern
                </h2>
                <p className="text-gray-600">{userEmail}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Statistic as</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
                {stat.change && (
                  <div className="flex items-center space-x-1 text-teal-600">
                    <TrendingDown size={16} />
                    <span className="text-sm font-medium">{stat.change}</span>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Button
          onClick={onLogout}
          variant="outline"
          className="w-full flex items-center justify-center space-x-2 text-red-600 border-red-300 hover:bg-red-50"
        >
          <LogOut size={16} />
          <span>Sair da Conta</span>
        </Button>
      </div>
    </div>
  );
};
