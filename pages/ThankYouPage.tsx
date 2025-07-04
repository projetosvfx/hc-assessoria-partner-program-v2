import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { CheckIcon } from '../components/icons/CheckIcon';

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen cosmic-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-6">
            <CheckIcon className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Main Message */}
        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 cosmic-glow-text">
          <span className="text-white">Parabéns!</span>
          <br />
          <span className="text-[var(--color-accent-gold)]">Você está a um passo</span>
          <br />
          <span className="text-white">da riqueza!</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-[var(--color-text-medium)] mb-8 leading-relaxed">
          Sua inscrição foi recebida com sucesso. Nossa equipe entrará em contato em até 24 horas para começar sua jornada rumo aos <span className="text-[var(--color-accent-gold)] font-bold">primeiros R$ 50.000</span>.
        </p>

        {/* Next Steps */}
        <div className="glassmorphic p-8 mb-8 text-left">
          <h2 className="section-title text-2xl font-bold text-[var(--color-accent-gold)] mb-6 text-center">
            Próximos Passos:
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--color-accent-gold)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[var(--color-primary-dark)] font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">Verificação de Dados</h3>
                <p className="text-[var(--color-text-medium)]">Nossa equipe validará suas informações e perfil de parceiro.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--color-accent-gold)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[var(--color-primary-dark)] font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">Treinamento Exclusivo</h3>
                <p className="text-[var(--color-text-medium)]">Acesso ao material completo sobre como maximizar suas indicações.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--color-accent-gold)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[var(--color-primary-dark)] font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">Primeira Indicação</h3>
                <p className="text-[var(--color-text-medium)]">Suporte completo para sua primeira indicação e primeiros ganhos.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="glassmorphic-light p-6 mb-8">
          <h3 className="font-bold text-[var(--color-accent-gold)] mb-4">Dúvidas? Entre em contato:</h3>
          <div className="space-y-2 text-[var(--color-text-medium)]">
            <p>📧 <span className="text-white">parceiros@hcassessoria.com.br</span></p>
            <p>📱 <span className="text-white">(11) 99999-9999</span></p>
          </div>
        </div>

        {/* Back Button */}
        <Button
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-light)] text-[var(--color-primary-dark)] font-bold py-4 px-8 rounded-xl text-lg hover:scale-105 transition-all duration-300 button-glow-gold"
        >
          Voltar ao Início
        </Button>

        {/* Social Proof */}
        <p className="text-sm text-[var(--color-text-medium)] mt-8">
          Junte-se a mais de <span className="text-[var(--color-accent-gold)] font-bold">500+ parceiros</span> que já faturam mais de R$ 50.000 mensais
        </p>
      </div>

      {/* Floating Icon */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
          <img 
            src="/hc-icone-detelha.png" 
            alt="HC Assessoria" 
            className="w-12 h-12 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;