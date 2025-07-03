
import React from 'react';
// Removed BadgeDollarSignIcon, ClockIcon, ZapIcon, PercentIcon, LayersIcon, BarChartIcon as they were only used in the removed 'advantages' section.
// TrendingUpIcon and WalletIcon are kept as they are used in benefitsData.
import { TrendingUpIcon } from './components/icons/TrendingUpIcon';
import { WalletIcon } from './components/icons/WalletIcon';
import { BanknoteIcon } from './components/icons/BanknoteIcon';
import { Shield } from './components/icons/Shield'; 
import { CoinsIcon } from './components/icons/CoinsIcon';
import { CircleDollarSignIcon } from './components/icons/CircleDollarSignIcon';


export const testimonials = [
  {
    name: "João Pereira",
    role: "Contador Parceiro",
    image: "https://picsum.photos/seed/avatar1/128/128",
    content:
      "Indiquei APENAS UMA empresa e já recebi R$ 12.000 em 45 dias. Zero esforço da minha parte. A HC fez absolutamente tudo e minha conta bancária agradeceu.",
  },
  {
    name: "Maria Silva",
    role: "Consultora Tributária",
    image: "https://picsum.photos/seed/avatar2/128/128",
    content:
      "Minha renda EXPLODIU para mais de R$ 30.000 mensais com apenas 5 indicações. Enquanto eu durmo, o dinheiro continua entrando. É literalmente a definição de renda passiva.",
  },
  {
    name: "Carlos Mendes",
    role: "Empresário",
    image: "https://picsum.photos/seed/avatar3/128/128",
    content:
      "Minha maior comissão foi de R$ 45.000 em um ÚNICO MÊS. Simplesmente apresentei a HC para 3 conhecidos e o dinheiro começou a fluir. É a parceria mais lucrativa que já fiz.",
  },
  {
    name: "Ana Oliveira",
    role: "Advogada Tributarista",
    image: "https://picsum.photos/seed/avatar4/128/128",
    content:
      "Ganho R$ 25.000 EXTRAS todo mês sem precisar trabalhar mais. Meus clientes ficam felizes, eu fico rica, e a HC faz todo o trabalho pesado. É praticamente dinheiro de graça.",
  },
];

// Removed the 'advantages' array

export const faqData = [
  {
    question: "Quanto REALMENTE posso ganhar com as indicações?",
    answer:
      "Nossos parceiros TOP faturam entre R$ 50.000 e R$ 150.000 POR INDICAÇÃO. Temos casos de parceiros recebendo mais de R$ 300.000 em um único mês com apenas algumas indicações. Seu potencial é ILIMITADO.",
  },
  {
    question: "Existe algum limite de indicações?",
    answer:
      "ABSOLUTAMENTE NENHUM. Quanto mais você indicar, mais rico ficará. Temos parceiros que já indicaram mais de 20 empresas e continuam lucrando mensalmente sem fazer nenhum esforço adicional.",
  },
  {
    question: "Preciso ter conhecimento técnico ou tributário?",
    answer:
      "ZERO conhecimento necessário. Você só precisa conhecer pessoas. Nós cuidamos de 100% do trabalho técnico, análises, documentação e implementação. Você só indica e RECEBE.",
  },
  {
    question: "Quando vou ver o dinheiro na minha conta?",
    answer:
      "RAPIDAMENTE. Pagamos em até 10 dias após o fechamento do contrato. E mais: oferecemos adiantamento de até 30% da sua comissão total no momento da assinatura do contrato. Dinheiro rápido e garantido.",
  },
  {
    question: "Quais empresas devo indicar para maximizar meus ganhos?",
    answer:
      "Para comissões MASSIVAS, foque em empresas com mais de 30 funcionários no regime de Lucro Real ou Presumido. Setores como indústria, comércio atacadista e serviços de alto valor agregado geram as maiores recuperações e, consequentemente, as maiores comissões para você.",
  },
];

export const benefitsData = [
  {
    icon: React.createElement(BanknoteIcon, { className: "h-8 w-8 text-[#273462]" }),
    text: "Não há nenhum custo na etapa de avaliação",
  },
  {
    icon: React.createElement(WalletIcon, { className: "h-8 w-8 text-[#273462]" }),
    text: "Eficiência financeira > competitividade.",
  },
  {
    icon: React.createElement(Shield, { className: "h-8 w-8 text-[#273462]" }), 
    text: "Estar em conformidade a legislação e preparado para possíveis auditorias.",
  },
  {
    icon: React.createElement(CoinsIcon, { className: "h-8 w-8 text-[#273462]" }),
    text: "Alivio no caixa da empresa no mês subsequente a assinatura do contrato, além da economia nos meses seguintes.",
  },
  {
    icon: React.createElement(TrendingUpIcon, { className: "h-8 w-8 text-[#273462]" }),
    text: "Remuneração na modalidade Success Fee, referente ao valor recuperado de até 5 anos.",
  },
  {
    icon: React.createElement(CircleDollarSignIcon, { className: "h-8 w-8 text-[#273462]" }),
    text: "Potencial de recuperação de tributos de aproximadamente R$3mil por funcionário no período de 5 anos",
  },
];
