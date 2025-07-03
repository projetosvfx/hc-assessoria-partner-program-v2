import React, { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Textarea } from './components/Textarea';
import { Accordion, AccordionItemProvider, AccordionTrigger, AccordionContent } from './components/Accordion';
import { testimonials, faqData, benefitsData } from './constants';
import { ArrowRight } from './components/icons/ArrowRight';
import { CheckCircle2Icon } from './components/icons/CheckCircle2Icon';
import { MenuIcon } from './components/icons/MenuIcon';
import { XIcon } from './components/icons/XIcon';
import { ChevronLeft } from './components/icons/ChevronLeft';
import { ChevronRight } from './components/icons/ChevronRight';
import { CheckIcon } from './components/icons/CheckIcon';
import { UserIcon } from './components/icons/UserIcon';
import { UsersIcon } from './components/icons/UsersIcon';
import { BuildingIcon } from './components/icons/BuildingIcon';
import { CalculatorIcon } from './components/icons/CalculatorIcon';
import { MailIcon } from './components/icons/MailIcon';

// Thank You Page Component
const ThankYouPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
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
            <p className="flex items-center justify-center gap-2">
              <MailIcon className="w-4 h-4 text-[var(--color-accent-gold)]" />
              <span className="text-white">parceiros@hcassessoria.com.br</span>
            </p>
            <p>📱 <span className="text-white">(11) 99999-9999</span></p>
          </div>
        </div>

        {/* Back Button */}
        <Button
          onClick={onBack}
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

// Main App Component
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'thankyou'>('home');
  const [employees, setEmployees] = useState(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Show Thank You Page
  if (currentPage === 'thankyou') {
    return <ThankYouPage onBack={() => setCurrentPage('home')} />;
  }

  const calculateEarnings = (employees: number) => {
    const baseEarning = employees * 3000 * 0.3;
    return Math.round(baseEarning);
  };

  const earnings = calculateEarnings(employees);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Show success message briefly then redirect
    setTimeout(() => {
      setShowSuccess(false);
      setCurrentPage('thankyou');
    }, 1000);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen cosmic-background">
      {/* Temporary Developer Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={() => setCurrentPage('thankyou')}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-sm"
        >
          🔧 Ver Página de Obrigado
        </Button>
      </div>

      {/* Success Message Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 text-center">
            <CheckCircle2Icon className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Sucesso!</h3>
            <p className="text-gray-600">Redirecionando...</p>
          </div>
        </div>
      )}

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 right-6 z-50 md:hidden bg-[var(--color-primary-medium-blue)] p-3 rounded-lg glassmorphic"
      >
        {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
          <div className="fixed right-0 top-0 h-full w-64 glassmorphic p-6">
            <nav className="mt-16 space-y-4">
              <a href="#home" className="block text-white hover:text-[var(--color-accent-gold)] transition-colors">Início</a>
              <a href="#benefits" className="block text-white hover:text-[var(--color-accent-gold)] transition-colors">Benefícios</a>
              <a href="#calculator" className="block text-white hover:text-[var(--color-accent-gold)] transition-colors">Calculadora</a>
              <a href="#testimonials" className="block text-white hover:text-[var(--color-accent-gold)] transition-colors">Depoimentos</a>
              <a href="#faq" className="block text-white hover:text-[var(--color-accent-gold)] transition-colors">FAQ</a>
              <a href="#contact" className="block text-white hover:text-[var(--color-accent-gold)] transition-colors">Contato</a>
            </nav>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="hidden md:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-40 glassmorphic px-8 py-4 rounded-full">
        <div className="flex space-x-8">
          <a href="#home" className="text-white hover:text-[var(--color-accent-gold)] transition-colors font-medium">Início</a>
          <a href="#benefits" className="text-white hover:text-[var(--color-accent-gold)] transition-colors font-medium">Benefícios</a>
          <a href="#calculator" className="text-white hover:text-[var(--color-accent-gold)] transition-colors font-medium">Calculadora</a>
          <a href="#testimonials" className="text-white hover:text-[var(--color-accent-gold)] transition-colors font-medium">Depoimentos</a>
          <a href="#faq" className="text-white hover:text-[var(--color-accent-gold)] transition-colors font-medium">FAQ</a>
          <a href="#contact" className="text-white hover:text-[var(--color-accent-gold)] transition-colors font-medium">Contato</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6 cosmic-glow-text">
            <span className="text-white">Ganhe até</span>
            <br />
            <span className="text-[var(--color-accent-gold)]">R$ 150.000</span>
            <br />
            <span className="text-white">por indicação</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--color-text-medium)] mb-8 max-w-4xl mx-auto leading-relaxed">
            Torne-se parceiro da HC Assessoria e transforme seus contatos em uma fonte de renda milionária. 
            <span className="text-[var(--color-accent-gold)] font-bold"> Sem esforço, sem trabalho técnico, apenas indicações que geram fortunas.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-light)] text-[var(--color-primary-dark)] font-bold py-4 px-8 rounded-xl text-lg hover:scale-105 transition-all duration-300 button-glow-gold">
              QUERO SER PARCEIRO AGORA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-[var(--color-accent-gold)] text-[var(--color-accent-gold)] hover:bg-[var(--color-accent-gold)] hover:text-[var(--color-primary-dark)] py-4 px-8 rounded-xl text-lg transition-all duration-300">
              CALCULAR MEUS GANHOS
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glassmorphic-light p-6 rounded-2xl">
              <div className="text-3xl font-bold text-[var(--color-accent-gold)] mb-2">R$ 2.5M+</div>
              <div className="text-[var(--color-text-medium)]">Pagos em comissões</div>
            </div>
            <div className="glassmorphic-light p-6 rounded-2xl">
              <div className="text-3xl font-bold text-[var(--color-accent-gold)] mb-2">500+</div>
              <div className="text-[var(--color-text-medium)]">Parceiros ativos</div>
            </div>
            <div className="glassmorphic-light p-6 rounded-2xl">
              <div className="text-3xl font-bold text-[var(--color-accent-gold)] mb-2">98%</div>
              <div className="text-[var(--color-text-medium)]">Taxa de satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title section-title-underline text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Por que escolher a</span>
              <br />
              <span className="text-[var(--color-accent-gold)]">HC Assessoria?</span>
            </h2>
            <p className="text-xl text-[var(--color-text-medium)] max-w-3xl mx-auto">
              Oferecemos as melhores condições do mercado para nossos parceiros, com suporte completo e comissões que mudam vidas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="glassmorphic p-8 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="mb-6">
                  {benefit.icon}
                </div>
                <p className="text-[var(--color-text-light)] text-lg leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title section-title-underline text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Calcule seus</span>
              <br />
              <span className="text-[var(--color-accent-gold)]">Ganhos Potenciais</span>
            </h2>
            <p className="text-xl text-[var(--color-text-medium)]">
              Veja quanto você pode ganhar com apenas uma indicação
            </p>
          </div>

          <div className="glassmorphic p-8 md:p-12 rounded-3xl">
            <div className="mb-8">
              <label className="block text-lg font-medium text-white mb-4">
                Número de funcionários da empresa que você indicaria:
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="10"
                  max="500"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="slider w-full"
                />
                <div className="flex justify-between text-sm text-[var(--color-text-medium)] mt-2">
                  <span>10</span>
                  <span>500+</span>
                </div>
              </div>
              <div className="text-center mt-4">
                <span className="text-2xl font-bold text-[var(--color-accent-gold)]">{employees} funcionários</span>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <span className="text-lg text-[var(--color-text-medium)]">Sua comissão estimada:</span>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-[var(--color-accent-gold)] cosmic-glow-text mb-6">
                R$ {earnings.toLocaleString('pt-BR')}
              </div>
              <div className="text-[var(--color-text-medium)] text-lg">
                *Baseado em 30% de comissão sobre R$ 3.000 por funcionário recuperado
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="glassmorphic-light p-4 rounded-xl">
                <UserIcon className="h-8 w-8 text-[var(--color-accent-gold)] mx-auto mb-2" />
                <div className="text-sm text-[var(--color-text-medium)]">Por funcionário</div>
                <div className="text-xl font-bold text-white">R$ 900</div>
              </div>
              <div className="glassmorphic-light p-4 rounded-xl">
                <UsersIcon className="h-8 w-8 text-[var(--color-accent-gold)] mx-auto mb-2" />
                <div className="text-sm text-[var(--color-text-medium)]">Total da empresa</div>
                <div className="text-xl font-bold text-white">R$ {(employees * 3000).toLocaleString('pt-BR')}</div>
              </div>
              <div className="glassmorphic-light p-4 rounded-xl">
                <BuildingIcon className="h-8 w-8 text-[var(--color-accent-gold)] mx-auto mb-2" />
                <div className="text-sm text-[var(--color-text-medium)]">Sua comissão</div>
                <div className="text-xl font-bold text-[var(--color-accent-gold)]">R$ {earnings.toLocaleString('pt-BR')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title section-title-underline text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Parceiros que já</span>
              <br />
              <span className="text-[var(--color-accent-gold)]">Enriqueceram</span>
            </h2>
            <p className="text-xl text-[var(--color-text-medium)]">
              Veja os resultados reais de quem já faz parte do nosso programa
            </p>
          </div>

          <div className="relative">
            <div className="glassmorphic p-8 md:p-12 rounded-3xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-[var(--color-accent-gold)]"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-xl md:text-2xl text-[var(--color-text-light)] mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-[var(--color-accent-gold)] text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-[var(--color-text-medium)]">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glassmorphic-light p-3 rounded-full hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-[var(--color-accent-gold)]" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glassmorphic-light p-3 rounded-full hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-[var(--color-accent-gold)]" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-[var(--color-accent-gold)]'
                      : 'bg-[var(--color-primary-medium-blue)]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title section-title-underline text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Perguntas</span> <span className="text-[var(--color-accent-gold)]">Frequentes</span>
            </h2>
            <p className="text-xl text-[var(--color-text-medium)]">
              Esclareça suas dúvidas e dê o próximo passo rumo a ganhos incríveis.
            </p>
          </div>

          <div className="glassmorphic p-8 rounded-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItemProvider key={index} value={`item-${index}`} className="border-b border-[var(--color-primary-medium-blue)] last:border-b-0">
                  <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-[var(--color-accent-gold)] transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[var(--color-text-medium)] text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItemProvider>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title section-title-underline text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Quero Ser</span>
              <br />
              <span className="text-[var(--color-accent-gold)]">Parceiro Agora</span>
            </h2>
            <p className="text-xl text-[var(--color-text-medium)]">
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas
            </p>
          </div>

          <div className="glassmorphic p-8 md:p-12 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Nome completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-[var(--color-primary-medium-blue)] border-[var(--color-accent-gold)] text-white placeholder-[var(--color-text-medium)] focus:ring-[var(--color-accent-gold)]"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-[var(--color-primary-medium-blue)] border-[var(--color-accent-gold)] text-white placeholder-[var(--color-text-medium)] focus:ring-[var(--color-accent-gold)]"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Telefone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-[var(--color-primary-medium-blue)] border-[var(--color-accent-gold)] text-white placeholder-[var(--color-text-medium)] focus:ring-[var(--color-accent-gold)]"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Empresa (opcional)
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-[var(--color-primary-medium-blue)] border-[var(--color-accent-gold)] text-white placeholder-[var(--color-text-medium)] focus:ring-[var(--color-accent-gold)]"
                    placeholder="Nome da sua empresa"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Mensagem (opcional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-[var(--color-primary-medium-blue)] border-[var(--color-accent-gold)] text-white placeholder-[var(--color-text-medium)] focus:ring-[var(--color-accent-gold)]"
                  placeholder="Conte-nos sobre seu interesse em ser parceiro..."
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-light)] text-[var(--color-primary-dark)] font-bold py-4 px-12 rounded-xl text-lg hover:scale-105 transition-all duration-300 button-glow-gold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <CalculatorIcon className="animate-spin mr-2 h-5 w-5" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      QUERO SER PARCEIRO AGORA
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>

              <p className="text-sm text-[var(--color-text-medium)] text-center">
                Ao enviar este formulário, você concorda com nossos termos de uso e política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-[var(--color-primary-medium-blue)]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[var(--color-accent-gold)] mb-4">HC Assessoria</h3>
            <p className="text-[var(--color-text-medium)] max-w-2xl mx-auto">
              Transformando empresas através da recuperação tributária e criando oportunidades de renda para nossos parceiros.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <div className="space-y-2 text-[var(--color-text-medium)]">
                <p className="flex items-center justify-center gap-2">
                  <MailIcon className="w-4 h-4 text-[var(--color-accent-gold)]" />
                  contato@hcassessoria.com.br
                </p>
                <p>📱 (11) 99999-9999</p>
                <p>🏢 São Paulo, SP</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Serviços</h4>
              <div className="space-y-2 text-[var(--color-text-medium)]">
                <p>Recuperação Tributária</p>
                <p>Consultoria Fiscal</p>
                <p>Programa de Parceiros</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <div className="space-y-2 text-[var(--color-text-medium)]">
                <p>Termos de Uso</p>
                <p>Política de Privacidade</p>
                <p>CNPJ: 00.000.000/0001-00</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[var(--color-primary-medium-blue)] pt-8">
            <p className="text-[var(--color-text-medium)]">
              © 2024 HC Assessoria. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

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

export default App;