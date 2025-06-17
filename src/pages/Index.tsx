
import React, { useState } from 'react';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { AuthScreen } from '@/components/AuthScreen';
import { Dashboard } from '@/components/Dashboard';
import { ReportsScreen } from '@/components/ReportsScreen';
import { BlockingScreen } from '@/components/BlockingScreen';
import { AlternativesScreen } from '@/components/AlternativesScreen';
import { ProfileScreen } from '@/components/ProfileScreen';
import { ConfirmationModal } from '@/components/ConfirmationModal';

type Screen = 'welcome' | 'auth' | 'dashboard' | 'reports' | 'blocking' | 'alternatives' | 'profile';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [userEmail, setUserEmail] = useState<string>('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleStart = () => {
    setCurrentScreen('auth');
  };

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    setUserEmail('');
    setCurrentScreen('welcome');
  };

  const handleNavigate = (screen: string) => {
    if (screen === 'blocking') {
      // Simular tentativa de acesso a site de apostas
      setShowConfirmModal(true);
      return;
    }
    setCurrentScreen(screen as Screen);
  };

  const handleBackToDashboard = () => {
    setCurrentScreen('dashboard');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onStart={handleStart} />;
      case 'auth':
        return <AuthScreen onLogin={handleLogin} />;
      case 'dashboard':
        return (
          <Dashboard 
            userEmail={userEmail} 
            onNavigate={handleNavigate}
          />
        );
      case 'reports':
        return <ReportsScreen onBack={handleBackToDashboard} />;
      case 'blocking':
        return <BlockingScreen onBack={handleBackToDashboard} />;
      case 'alternatives':
        return <AlternativesScreen onBack={handleBackToDashboard} />;
      case 'profile':
        return (
          <ProfileScreen 
            userEmail={userEmail}
            onBack={handleBackToDashboard}
            onLogout={handleLogout}
          />
        );
      default:
        return <WelcomeScreen onStart={handleStart} />;
    }
  };

  return (
    <>
      {renderScreen()}
      <ConfirmationModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onContinue={() => {
          setShowConfirmModal(false);
          setCurrentScreen('blocking');
        }}
      />
      
      {currentScreen === 'dashboard' && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
          <div className="max-w-md mx-auto flex justify-around">
            <button
              onClick={() => setCurrentScreen('dashboard')}
              className="flex flex-col items-center space-y-1 text-teal-600"
            >
              <div className="w-6 h-6 bg-teal-600 rounded"></div>
              <span className="text-xs">Home</span>
            </button>
            <button
              onClick={() => handleNavigate('reports')}
              className="flex flex-col items-center space-y-1 text-gray-400"
            >
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
              <span className="text-xs">Relatórios</span>
            </button>
            <button
              onClick={() => handleNavigate('alternatives')}
              className="flex flex-col items-center space-y-1 text-gray-400"
            >
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
              <span className="text-xs">Alternativas</span>
            </button>
            <button
              onClick={() => setCurrentScreen('profile')}
              className="flex flex-col items-center space-y-1 text-gray-400"
            >
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
              <span className="text-xs">Perfil</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
