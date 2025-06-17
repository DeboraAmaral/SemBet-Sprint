
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

interface AuthScreenProps {
  onLogin: (email: string) => void;
}

export const AuthScreen = ({ onLogin }: AuthScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onLogin(email);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl font-bold text-gray-900">
            {isLogin ? 'Cadastrar ou Entrar' : 'Criar Conta'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full"
              />
            </div>
            
            <div className="text-center">
              <button 
                type="button"
                className="text-teal-600 text-sm hover:underline"
                onClick={() => alert('Funcionalidade em desenvolvimento')}
              >
                Esqueceu a senha?
              </button>
            </div>
            
            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
              Entrar
            </Button>
          </form>
          
          <div className="text-center text-sm text-gray-600">
            <p>
              {isLogin ? 'Não tem conta?' : 'Já tem conta?'}{' '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-teal-600 hover:underline font-medium"
              >
                {isLogin ? 'Cadastre-se' : 'Faça login'}
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
