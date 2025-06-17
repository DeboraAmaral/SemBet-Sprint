
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, X } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

export const ConfirmationModal = ({ isOpen, onClose, onContinue }: ConfirmationModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <AlertTriangle className="text-orange-500" size={48} />
          </div>
          <CardTitle className="text-xl">Você realmente precisa apostar agora?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-gray-600 mb-4">Qual seu objetivo com isso?</p>
            <p className="text-sm text-gray-500">
              Lembre-se: você já gastou R$ 2.500 este mês em apostas.
            </p>
          </div>
          
          <div className="space-y-3">
            <Button
              onClick={onClose}
              className="w-full bg-teal-600 hover:bg-teal-700"
            >
              Cancelar - Vou repensar
            </Button>
            
            <Button
              onClick={onContinue}
              variant="outline"
              className="w-full border-red-300 text-red-600 hover:bg-red-50"
            >
              Continuar mesmo assim
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
