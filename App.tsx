import React, { useEffect, useRef, useState, useCallback, FormEvent } from "react";
import { cn } from "./utils/cn";
import { testimonials, faqData, benefitsData } from "./constants";

import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Textarea } from "./components/Textarea";
import { Accordion, AccordionItemProvider as AccordionItem, AccordionContent, AccordionTrigger } from "./components/Accordion";

import { Shield } from "./components/icons/Shield";
import { ArrowRight } from "./components/icons/ArrowRight";
import { XIcon } from "./components/icons/XIcon";
import { MenuIcon } from "./components/icons/MenuIcon";
import { ChevronLeft } from "./components/icons/ChevronLeft";
import { ChevronRight } from "./components/icons/ChevronRight";
import { UserIcon } from "./components/icons/UserIcon";
import { CheckIcon } from "./components/icons/CheckIcon";
import { UsersIcon } from "./components/icons/UsersIcon";
import { BuildingIcon } from "./components/icons/BuildingIcon";
import { DollarSignIcon } from "./components/icons/DollarSignIcon";
import { CircleDollarSignIcon } from "./components/icons/CircleDollarSignIcon";
import { CoinsIcon } from "./components/icons/CoinsIcon";
import { BanknoteIcon } from "./components/icons/BanknoteIcon";
import { TrendingUpIcon } from "./components/icons/TrendingUpIcon"; // Ensure this is imported for Benefits
import { CheckCircle2Icon } from "./components/icons/CheckCircle2Icon";
import { AlertCircleIcon } from "./components/icons/AlertCircleIcon";
import { Loader2Icon } from "./components/icons/Loader2Icon";
import { ChevronUpIcon } from "./components/icons/ChevronUpIcon"; // For scroll to top
import { CalculatorIcon } from "./components/icons/CalculatorIcon"; // New calculator icon

// Função para scroll suave
function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Hero Background Carousel Component
function HeroBackgroundCarousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Array of background images with the new uploaded images
  const backgroundImages = [
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/hc-assessoria/imagem-home-1751501708072.webp",
    "/imagem-home-02.jpg", // Business meeting image
    "/imagem-home-03.jpg", // Professional writing image
  ];

  useEffect(() => {
    // Preload images for smoother transitions
    const preloadImages = async () => {
      const imagePromises = backgroundImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });
      
      try {
        await Promise.all(imagePromises);
        setIsLoaded(true);
      } catch (error) {
        console.log("Some images failed to load, but continuing...");
        setIsLoaded(true);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (backgroundImages.length > 1 && isLoaded) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
      }, 6000); // Change image every 6 seconds for better visibility
      
      return () => clearInterval(interval);
    }
  }, [backgroundImages.length, isLoaded]);

  if (!isLoaded) {
    // Show first image while loading
    return (
      <>
        <div
          className="absolute inset-0 -z-20 bg-no-repeat bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url('${backgroundImages[0]}')` }}
        />
        <div className="absolute inset-0 -z-10" style={{background: 'rgba(10, 15, 30, 0.9)'}}></div>
      </>
    );
  }

  return (
    <>
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 -z-20 bg-no-repeat bg-cover bg-center transition-opacity duration-2000 ease-in-out ${
            index === currentImage ? 'opacity-60' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}
      <div className="absolute inset-0 -z-10" style={{background: 'rgba(10, 15, 30, 0.9)'}}></div>
      
      {/* Optional: Add indicators to show current image */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? 'bg-[var(--color-accent-gold)] scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to background image ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}

// Componente TestimonialCarousel (adaptado)
function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("right");

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 500); // Slightly longer for smoother perceived transition
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="glassmorphic p-8 md:p-12">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[var(--color-primary-medium-blue)]/70 border border-[var(--color-accent-gold)]/30 flex items-center justify-center text-white hover:bg-[var(--color-primary-medium-blue)] hover:border-[var(--color-accent-gold)] transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[var(--color-primary-medium-blue)]/70 border border-[var(--color-accent-gold)]/30 flex items-center justify-center text-white hover:bg-[var(--color-primary-medium-blue)] hover:border-[var(--color-accent-gold)] transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="relative overflow-hidden min-h-[300px] md:min-h-[250px] flex items-center"> {/* Ensure consistent height */}
          <div
            className={`transition-all duration-500 ease-in-out w-full ${
              isAnimating
                ? "opacity-0 transform " + (direction === "right" ? "translate-x-12" : "-translate-x-12")
                : "opacity-100 transform translate-x-0"
            }`}
          >
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-br from-[var(--color-accent-gold)] to-[var(--color-accent-gold-light)] rounded-full blur-sm opacity-70"></div>
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-[var(--color-primary-medium-blue)] flex items-center justify-center overflow-hidden border-2 border-[var(--color-accent-gold)]/50">
                  {testimonials[current].image ? (
                    <img
                      src={testimonials[current].image || `https://picsum.photos/seed/placeholderUser/128/128`}
                      alt={testimonials[current].name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <UserIcon className="h-12 w-12 md:h-16 md:w-16 text-[var(--color-text-light)]" />
                  )}
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-[var(--color-accent-gold)] text-2xl">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl font-medium italic mb-4 text-[var(--color-text-light)]">
                  "{testimonials[current].content}"
                </blockquote>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                  <div className="font-bold text-lg text-white">{testimonials[current].name}</div>
                  <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[var(--color-accent-gold)]"></div>
                  <div className="text-[var(--color-text-medium)]">{testimonials[current].role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? "right" : "left");
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrent(index);
                  setIsAnimating(false);
                }, 500);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out
                ${current === index ? "bg-[var(--color-accent-gold)] scale-125" : "bg-[var(--color-accent-gold)]/40 hover:bg-[var(--color-accent-gold)]/70"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Componente AnimatedCounter
function AnimatedCounter({
  value,
  label,
  prefix = "",
  suffix = "",
}: { value: number; label: string; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startValue = 0;
          const duration = 2000; 
          const startTime = Date.now();

          const step = () => {
            const now = Date.now();
            const timePassed = now - startTime;
            const progress = Math.min(timePassed / duration, 1);
            
            startValue = Math.ceil(progress * value);
            setCount(startValue);

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(step);
            } else {
              setCount(value); 
            }
          };
          animationFrameId = requestAnimationFrame(step);
          observer.unobserve(entries[0].target); 
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = counterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [value]);

  return (
    <div ref={counterRef} className="text-center p-8 glassmorphic-light">
      <div className="text-3xl font-bold bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-light)] bg-clip-text text-transparent whitespace-nowrap">
        {prefix}
        {count.toLocaleString("pt-BR")}
        {suffix}
      </div>
      <div className="text-sm text-[var(--color-text-medium)] mt-2">{label}</div>
    </div>
  );
}

// Componente EarningsSimulator
function EarningsSimulator() {
  const [companies, setCompanies] = useState(3);
  const [avgRecovery, setAvgRecovery] = useState(1000000);
  const [months, setMonths] = useState(12);

  const totalRecovery = companies * avgRecovery;
  const hcShare = totalRecovery * 0.2;
  const hcShareAfterTaxes = hcShare * (1 - 0.1633);
  const representativeCommission = hcShareAfterTaxes * 0.1;
  const monthlyCommission = months > 0 ? representativeCommission / months : 0;

  const handleSliderChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(Number(e.target.value));
  };
  
  const getSliderBackground = (value: number, min: number, max: number) => {
    const percentage = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, var(--color-accent-gold) 0%, var(--color-accent-gold) ${percentage}%, var(--color-primary-medium-blue) ${percentage}%, var(--color-primary-medium-blue) 100%)`;
  };

  return (
    <div className="glassmorphic p-8 md:p-12">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 section-title-underline section-title">
          <span className="text-[var(--color-accent-gold)] flex items-center justify-center gap-3">
            <CalculatorIcon className="h-8 w-8 md:h-10 md:w-10" />
            Calculadora de Ganhos
          </span>
        </h3>
        <p className="text-lg text-[var(--color-text-medium)]">
          Projete seus ganhos potenciais com nossa ferramenta interativa.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          {/* Companies Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label htmlFor="companiesRange" className="text-white font-medium text-lg">Empresas indicadas</label>
              <span className="text-[var(--color-accent-gold)] font-bold text-xl bg-[var(--color-primary-medium-blue)]/50 px-3 py-1 rounded-full">
                {companies}
              </span>
            </div>
            <input id="companiesRange" type="range" min="1" max="10" value={companies} onChange={handleSliderChange(setCompanies)}
              className="w-full slider" style={{ background: getSliderBackground(companies, 1, 10) }} />
          </div>
          {/* Recovery Slider */}
           <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label htmlFor="recoveryRange" className="text-white font-medium text-lg">Valor médio recuperado</label>
              <span className="text-[var(--color-accent-gold)] font-bold text-xl bg-[var(--color-primary-medium-blue)]/50 px-3 py-1 rounded-full">
                R$ {avgRecovery.toLocaleString("pt-BR")}
              </span>
            </div>
            <input id="recoveryRange" type="range" min="500000" max="5000000" step="100000" value={avgRecovery} onChange={handleSliderChange(setAvgRecovery)}
              className="w-full slider" style={{ background: getSliderBackground(avgRecovery, 500000, 5000000) }} />
          </div>
          {/* Months Slider */}
           <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label htmlFor="monthsRange" className="text-white font-medium text-lg">Período de recebimento</label>
              <span className="text-[var(--color-accent-gold)] font-bold text-xl bg-[var(--color-primary-medium-blue)]/50 px-3 py-1 rounded-full">
                {months} {months === 1 ? "mês" : "meses"}
              </span>
            </div>
            <input id="monthsRange" type="range" min="1" max="24" value={months} onChange={handleSliderChange(setMonths)}
              className="w-full slider" style={{ background: getSliderBackground(months, 1, 24) }} />
          </div>
          <div className="glassmorphic-light p-4">
            <h4 className="text-sm font-bold text-[var(--color-accent-gold)] mb-2">Como calculamos:</h4>
            <div className="text-xs text-[var(--color-text-medium)] space-y-1">
              <p>• HC recebe 20% do valor recuperado</p>
              <p>• Descontamos 16,33% de impostos</p>
              <p>• Você recebe 10% do valor líquido</p>
            </div>
          </div>
        </div>

        <div className="glassmorphic-light p-8 h-full flex flex-col justify-around">
            {[
              { label: "Valor Total Recuperado", value: totalRecovery, size: "text-3xl md:text-4xl" },
              { label: "Receita Bruta HC (20%)", value: hcShare, size: "text-2xl md:text-3xl" },
              { label: "SUA COMISSÃO TOTAL (10% liq.)", value: representativeCommission, size: "text-4xl md:text-5xl", primary: true },
              { label: `RENDA MENSAL (${months}m)`, value: monthlyCommission, size: "text-4xl md:text-5xl", primary: true },
            ].map(item => (
              <div key={item.label} className="text-center my-3">
                <h4 className="text-base text-[var(--color-text-medium)] mb-1">{item.label}</h4>
                <div className={`${item.size} font-bold ${item.primary ? "text-[var(--color-accent-gold)]" : "text-[var(--color-text-light)]"}`}>
                  R$ {Math.round(item.value).toLocaleString("pt-BR")}
                </div>
              </div>
            ))}
            <Button
              onClick={() => scrollToSection("formulario")}
              className="mt-6 bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-light)] hover:opacity-90 text-[var(--color-primary-dark)] font-bold border-0 rounded-xl py-4 text-lg shadow-lg w-full"
            >
              🎯 QUERO LUCRAR AGORA!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
        </div>
      </div>
    </div>
  );
}

// Componente ContactForm
function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "", email: "", whatsapp: "", empresa: "", cnpj: "",
    contato: "", cargo: "", telefone: "", observacoes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => { const newErrors = { ...prev }; delete newErrors[name]; return newErrors; });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório";
    if (!formData.email.trim()) newErrors.email = "Email é obrigatório";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido";
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "WhatsApp é obrigatório";
    if (!formData.empresa.trim()) newErrors.empresa = "Nome da empresa é obrigatório";
    if (!formData.contato.trim()) newErrors.contato = "Nome do contato é obrigatório";
    if (!formData.telefone.trim()) newErrors.telefone = "Telefone do contato é obrigatório";
    // Basic phone/CNPJ validation (can be enhanced)
    if (formData.cnpj.trim() && formData.cnpj.replace(/\D/g, "").length !== 14) newErrors.cnpj = "CNPJ inválido";
    if (formData.telefone.trim() && formData.telefone.replace(/\D/g, "").length < 10) newErrors.telefone = "Telefone inválido";
    if (formData.whatsapp.trim() && formData.whatsapp.replace(/\D/g, "").length < 10) newErrors.whatsapp = "WhatsApp inválido";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 2) value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    if (value.length > (value.startsWith("(11)") && value.length === 14 ? 9 : (value.length > 9 && value.includes(" ") ? (value.split(" ")[1].length === 5 ? 9:8):8) )) {
       value = value.replace(/(\d{4,5})$/, "-$1");
    }
    setFormData((prev) => ({ ...prev, [e.target.name]: value }));
  };
  
  const formatCNPJ = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 14) value = value.slice(0, 14);
    if (value.length > 2) value = `${value.slice(0, 2)}.${value.slice(2)}`;
    if (value.length > 6) value = `${value.slice(0, 6)}.${value.slice(6)}`;
    if (value.length > 10) value = `${value.slice(0, 10)}/${value.slice(10)}`;
    if (value.length > 15) value = `${value.slice(0, 15)}-${value.slice(15)}`;
    setFormData((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true); setSubmitStatus("idle");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); 
      setSubmitStatus("success");
      setSubmitMessage("Formulário enviado! Entraremos em contato em breve.");
      setFormData({ nome: "", email: "", whatsapp: "", empresa: "", cnpj: "", contato: "", cargo: "", telefone: "", observacoes: "" });
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => { if (submitStatus === "success") setSubmitStatus("idle"); }, 5000);
    }
  };
  
  const inputStyles = "bg-[var(--color-primary-medium-blue)]/70 border-[var(--color-accent-gold)]/30 text-white placeholder:text-[var(--color-text-medium)]/70 focus:border-[var(--color-accent-gold)] focus:ring-1 focus:ring-[var(--color-accent-gold)]";
  const errorBorderStyles = "border-red-500 focus:border-red-500 focus:ring-red-500";


  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus !== "idle" && (
        <div className={`p-4 rounded-lg text-sm ${submitStatus === "success" ? "bg-green-500/20 border border-green-500/50 text-green-300" : "bg-red-500/20 border border-red-500/50 text-red-300"}`}>
          <div className="flex items-center gap-3">
            {submitStatus === "success" ? <CheckCircle2Icon className="h-5 w-5 text-green-400" /> : <AlertCircleIcon className="h-5 w-5 text-red-400" />}
            <p>{submitMessage}</p>
          </div>
        </div>
      )}

      <div>
        <h3 className="text-xl font-bold text-[var(--color-accent-gold)] mb-3">Seus Dados</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Input id="nome" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome completo *" className={`${inputStyles} ${errors.nome ? errorBorderStyles : ''}`} />
            {errors.nome && <p className="text-xs text-red-400 mt-1">{errors.nome}</p>}
          </div>
          <div>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="E-mail *" className={`${inputStyles} ${errors.email ? errorBorderStyles : ''}`} />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </div>
        </div>
        <div className="mt-4">
          <Input id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={formatPhone} placeholder="WhatsApp *" className={`${inputStyles} ${errors.whatsapp ? errorBorderStyles : ''}`} />
          {errors.whatsapp && <p className="text-xs text-red-400 mt-1">{errors.whatsapp}</p>}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-[var(--color-accent-gold)] mb-3">Dados da Empresa Indicada</h3>
        <div>
          <Input id="empresa" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Nome da empresa *" className={`${inputStyles} ${errors.empresa ? errorBorderStyles : ''}`} />
          {errors.empresa && <p className="text-xs text-red-400 mt-1">{errors.empresa}</p>}
        </div>
        <div className="mt-4">
          <Input id="cnpj" name="cnpj" value={formData.cnpj} onChange={formatCNPJ} placeholder="CNPJ (opcional)" className={`${inputStyles} ${errors.cnpj ? errorBorderStyles : ''}`} />
          {errors.cnpj && <p className="text-xs text-red-400 mt-1">{errors.cnpj}</p>}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 mt-4">
          <div>
            <Input id="contato" name="contato" value={formData.contato} onChange={handleChange} placeholder="Nome do contato na empresa *" className={`${inputStyles} ${errors.contato ? errorBorderStyles : ''}`} />
            {errors.contato && <p className="text-xs text-red-400 mt-1">{errors.contato}</p>}
          </div>
          <Input id="cargo" name="cargo" value={formData.cargo} onChange={handleChange} placeholder="Cargo (opcional)" className={inputStyles} />
        </div>
        <div className="mt-4">
          <Input id="telefone" name="telefone" value={formData.telefone} onChange={formatPhone} placeholder="Telefone do contato *" className={`${inputStyles} ${errors.telefone ? errorBorderStyles : ''}`} />
          {errors.telefone && <p className="text-xs text-red-400 mt-1">{errors.telefone}</p>}
        </div>
        <div className="mt-4">
          <Textarea id="observacoes" name="observacoes" value={formData.observacoes} onChange={handleChange} placeholder="Observações (opcional)" rows={3} className={inputStyles} />
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-light)] hover:opacity-90 text-[var(--color-primary-dark)] font-bold border-0 rounded-xl py-4 text-lg shadow-lg">
        {isSubmitting ? <><Loader2Icon className="mr-2 h-5 w-5 animate-spin" />Enviando...</> : "QUERO SER PARCEIRO AGORA"}
      </Button>
    </form>
  );
}

// Componente BenefitsSection
function BenefitsSection() {
    const encodedGraphSVG = `data:image/svg+xml;charset=UTF-8,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='subtle_dots' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23c8a743' fill-opacity='0.05' cx='5' cy='5' r='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='80' height='80' fill='url(%23subtle_dots)'/%3E%3C/svg%3E`;
    const benefitCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const addToRefs = useCallback((el: HTMLDivElement | null) => {
    if (el && !benefitCardRefs.current.includes(el)) { benefitCardRefs.current.push(el); }
  }, []);

  useEffect(() => {
    const currentRefs = benefitCardRefs.current; 
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetElement = entry.target as HTMLElement;
          targetElement.style.opacity = '1';
          targetElement.style.transform = 'translateY(0px) scale(1)';
          const index = parseInt(targetElement.dataset.index || '0', 10);
          targetElement.style.transitionDelay = `${index * 120}ms`; // Slightly increased delay
          observer.unobserve(targetElement);
        }
      });
    }, { threshold: 0.1 });
    currentRefs.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => { currentRefs.forEach((ref) => { if (ref) observer.unobserve(ref); }); observer.disconnect(); };
  }, [addToRefs]); 

  return (
    <section id="beneficios" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-0 right-0 h-full w-2/3 md:w-1/2 opacity-30 -z-[1]"
        style={{
          background: `radial-gradient(ellipse at 100% 50%, rgba(173,147,85,0.2) 0%, transparent 60%)`,
          clipPath: 'ellipse(100% 80% at 100% 50%)',
        }}
      />
      <div className="absolute top-0 left-0 h-1/2 w-1/3 opacity-20 -z-[1]"
        style={{
          background: `radial-gradient(ellipse at 0% 0%, rgba(19,36,77,0.5) 0%, transparent 70%)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 uppercase tracking-wider section-title-underline section-title">
            Benefícios Exclusivos
          </h2>
           <p className="text-lg text-gray-600 mt-6">Vantagens que impulsionam seu sucesso e o de seus clientes.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <div
              key={index} ref={addToRefs} data-index={index}
              className="group flex flex-col p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg space-y-5 hover:border-[var(--color-accent-gold)]/40 hover:shadow-xl transition-all duration-300 ease-in-out"
              style={{ opacity: 0, transform: 'translateY(40px) scale(0.95)', transitionProperty: 'opacity, transform', transitionDuration: '700ms', transitionTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)' }}
            >
              <div className="flex-shrink-0 self-start p-3 bg-gradient-to-br from-[var(--color-accent-gold)] to-[var(--color-accent-gold-light)] rounded-xl shadow-lg border border-black/10">
                {React.cloneElement(benefit.icon, { size: 32, className: "text-[var(--color-primary-dark)]" })}
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed flex-grow">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// Componente App principal
export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const navLinks = [
    { id: "hero", label: "Início" },
    { id: "como-funciona", label: "Como Funciona" },
    { id: "beneficios", label: "Benefícios" },
    { id: "calculadora", label: "Calculadora" },
    { id: "depoimentos", label: "Depoimentos" },
    { id: "faq", label: "FAQ" },
    { id: "formulario", label: "Seja Parceiro" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) { // Trigger if 30% visible
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0.3, 0.7] } 
    );
    navLinks.forEach(link => {
      const element = document.getElementById(link.id);
      if (element) { sectionRefs.current[link.id] = element; observer.observe(element); }
    });
    const handleScroll = () => setHeaderScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => {
      Object.values(sectionRefs.current).forEach(el => { if (el) observer.unobserve(el); });
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navLinks]);

  const handleNavClick = (id: string) => { scrollToSection(id); setIsMobileMenuOpen(false); };

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-[var(--color-accent-gold)] selection:text-[var(--color-primary-dark)]">
      {/* Header & Navigation */}
      <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
        headerScrolled ? "py-3 bg-[#E8E8E8] shadow-lg" : "py-5 bg-[#E8E8E8]"
      )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick("hero");}} className="transition-transform hover:scale-105">
              <img src="https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/hc-assessoria/hc-logo-principal-1751499132949.webp" alt="HC Assessoria Logo" className="h-14" />
            </a>
            <nav className="hidden md:flex space-x-1">
              {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative",
                    activeSection === link.id ? "text-[var(--color-accent-gold)]" : "text-[var(--color-primary-deep-blue)] hover:text-[var(--color-accent-gold)]"
                  )}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-[var(--color-accent-gold)] rounded-full"></span>
                  )}
                </a>
              ))}
            </nav>
            <div className="md:hidden">
              <Button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} variant="ghost" size="icon" aria-label="Open menu"
                className="text-[var(--color-primary-deep-blue)] hover:text-[var(--color-accent-gold)] hover:bg-[var(--color-accent-gold)]/10">
                {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#E8E8E8]/95 backdrop-blur-md shadow-xl rounded-b-lg border-t border-gray-300">
            <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                  className={cn("block px-3 py-3 rounded-md text-base font-medium transition-colors hover:bg-[var(--color-accent-gold)]/20 hover:text-[var(--color-accent-gold)]",
                    activeSection === link.id ? "bg-[var(--color-accent-gold)]/10 text-[var(--color-accent-gold)]" : "text-[var(--color-primary-deep-blue)]")}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-12 overflow-hidden">
          <HeroBackgroundCarousel />

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-5 py-2 mb-10 text-sm font-semibold tracking-wider text-[var(--color-primary-dark)] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-light)] rounded-full shadow-lg">
                OPORTUNIDADE EXCLUSIVA DE PARCERIA
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white hero-title">
                <span className="block leading-tight">Transforme Suas</span>
                <span className="block bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-light)] bg-clip-text text-transparent leading-tight mt-2" style={{WebkitTextStroke: '1px transparent'}}>
                  Indicações em DINHEIRO
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-[var(--color-text-medium)] mb-12 max-w-2xl mx-auto">
                Ganhe comissões <span className="text-[var(--color-accent-gold)] font-semibold">RECORRENTES</span> por até 5 anos. Sem esforço, <span className="font-semibold">SEM CUSTO</span>, apenas lucro.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Button onClick={() => scrollToSection("formulario")}
                  className="w-full sm:w-auto bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-light)] hover:opacity-90 text-[var(--color-primary-dark)] font-bold border-0 rounded-xl py-4 px-10 text-lg shadow-xl transition-all hover:scale-105">
                  QUERO LUCRAR AGORA <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button onClick={() => scrollToSection("como-funciona")} variant="outline"
                  className="w-full sm:w-auto text-[var(--color-accent-gold)] border-[var(--color-accent-gold)]/70 hover:bg-[var(--color-accent-gold)]/10 hover:border-[var(--color-accent-gold)] rounded-xl py-4 px-10 text-lg transition-all hover:scale-105">
                  Saiba Mais
                </Button>
              </div>
              <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <AnimatedCounter value={250000000} prefix="R$" label="Recuperados para Clientes" />
                <AnimatedCounter value={25000000} prefix="R$" label="Pagos em Comissões" />
                <AnimatedCounter value={500} suffix="+ " label="Parceiros Satisfeitos" />
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="py-20 md:py-32 bg-[var(--color-primary-dark)]/50 relative overflow-hidden">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[var(--color-accent-gold)]/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[var(--color-primary-medium-blue)]/10 rounded-full blur-3xl -z-10"></div>
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white section-title-underline section-title">
                <span className="bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-light)] bg-clip-text text-transparent">Como Funciona</span> a Parceria?
              </h2>
              <p className="text-lg text-[var(--color-text-medium)] mt-6">Simples, transparente e lucrativo. Nós cuidamos de tudo!</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                { icon: <UsersIcon className="h-10 w-10 text-[var(--color-accent-gold)]" />, title: "1. Indique Empresas", description: "Conecte-nos com empresas que podem se beneficiar da recuperação tributária." },
                { icon: <BuildingIcon className="h-10 w-10 text-[var(--color-accent-gold)]" />, title: "2. Nós Cuidamos de Tudo", description: "Nossa equipe especializada realiza toda a análise, documentação e processo de recuperação." },
                { icon: <DollarSignIcon className="h-10 w-10 text-[var(--color-accent-gold)]" />, title: "3. Receba Suas Comissões", description: "Você lucra comissões generosas sobre o valor recuperado, por até 5 anos." },
              ].map((step, index) => (
                <div key={index} className="glassmorphic p-8 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(173,147,85,0.2)] hover:border-[var(--color-accent-gold)]/30 hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-[var(--color-primary-medium-blue)]/50 rounded-full border-2 border-[var(--color-accent-gold)]/30 inline-block shadow-lg">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-white section-title">{step.title}</h3>
                  <p className="text-[var(--color-text-medium)] text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
             <div className="text-center mt-16">
              <Button onClick={() => scrollToSection("formulario")} className="bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-light)] hover:opacity-90 text-[var(--color-primary-dark)] font-bold border-0 rounded-xl py-4 px-10 text-lg shadow-lg transition-all hover:scale-105">
                QUERO LUCRAR AGORA <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <BenefitsSection />

        <section id="calculadora" className="py-20 md:py-32 relative overflow-hidden">
          {/* Background image with reduced overlay opacity for better visibility */}
          <div className="absolute inset-0 -z-20 bg-no-repeat bg-cover bg-center opacity-80" 
               style={{backgroundImage: "url('/imagem-bg-01.jpg')"}}></div>
          <div className="absolute inset-0 -z-10" style={{background: 'rgba(10, 15, 30, 0.6)'}}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <EarningsSimulator />
          </div>
        </section>
        
        <section id="depoimentos" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white section-title-underline section-title">
                O Que Nossos <span className="bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-light)] bg-clip-text text-transparent">Parceiros Dizem</span>
              </h2>
              <p className="text-lg text-[var(--color-text-medium)] mt-6">Histórias reais de sucesso e prosperidade através da nossa parceria.</p>
            </div>
            <TestimonialCarousel />
          </div>
        </section>

        <section id="faq" className="py-20 md:py-32" style={{backgroundColor: '#E8E8E8'}}>
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 section-title-underline section-title">
                Perguntas <span className="bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-light)] bg-clip-text text-transparent">Frequentes</span>
              </h2>
              <p className="text-lg text-gray-600 mt-6">Esclareça suas dúvidas e dê o próximo passo rumo a ganhos incríveis.</p>
            </div>
            <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg p-2 md:p-4">
              <Accordion type="single" collapsible className="w-full" defaultValue="faq-0">
                {faqData.map((item, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border-gray-200 last:border-b-0">
                    <AccordionTrigger className="text-lg text-left hover:text-[var(--color-accent-gold)] text-gray-800 p-6 font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 px-6 pb-6 text-sm leading-relaxed bg-gray-50/50 rounded-b-md">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section id="formulario" className="relative py-20 md:py-32 overflow-hidden">
         <div className="absolute inset-0 -z-10" style={{background: 'radial-gradient(circle at 50% 100%, rgba(19, 36, 77, 0.7) 0%, var(--color-primary-dark) 60%)'}}></div>
          <div className="container mx-auto px-4 relative z-10">
            
            {/* Two column layout: Form on left, Image on right */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Form Column with title moved here */}
              <div className="glassmorphic p-8 md:p-12">
                {/* Title and description moved inside form column */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white section-title-underline section-title">
                    Pronto Para <span className="bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-light)] bg-clip-text text-transparent">Lucrar Alto?</span>
                  </h2>
                  <p className="text-lg text-[var(--color-text-medium)] mt-6">Preencha o formulário e nossa equipe entrará em contato em até 24h para iniciar esta parceria de sucesso.</p>
                </div>
                <ContactForm />
              </div>
              
              {/* Image Column */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-accent-gold)]/20 to-[var(--color-accent-gold-light)]/20 rounded-3xl blur-xl"></div>
                  <img 
                    src="/imagem-forms.jpg" 
                    alt="Parceria de Sucesso" 
                    className="relative w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-[#E8E8E8] border-t border-gray-300">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 flex justify-center">
             <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick("hero");}} className="inline-block">
                <img src="https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/hc-assessoria/hc-logo-principal-1751499132949.webp" alt="HC Assessoria Logo" className="h-[67px]" />
              </a>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            © {new Date().getFullYear()} HC Assessoria. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-500">
            Transformando conhecimento tributário em prosperidade para parceiros.
          </p>
        </div>
      </footer>
      <button
        onClick={() => scrollToSection('hero')}
        className={cn(
          "fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-accent-gold)] to-[var(--color-accent-gold-light)] text-[var(--color-primary-dark)] shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-gold)] focus:ring-offset-2 focus:ring-offset-[#E8E8E8] transition-all duration-300 z-50 flex items-center justify-center",
          activeSection === 'hero' && !headerScrolled ? 'opacity-0 pointer-events-none translate-y-4' : 'opacity-100 translate-y-0'
        )}
        aria-label="Scroll to top"
      >
        <ChevronUpIcon className="w-6 h-6" />
      </button>
    </div>
  );
}