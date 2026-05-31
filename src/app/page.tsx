'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  MapPin,
  Ruler,
  Building2,
  Truck,
  ThermometerSun,
  Shield,
  CheckCircle2,
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Leaf,
  Zap,
  Users,
  Clock
} from 'lucide-react';

// Hook for scroll reveal animations
function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(reveal => observer.observe(reveal));

    return () => observer.disconnect();
  }, []);
}

// Hook for counting animation
function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
}

// Loading Screen Component
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
      setTimeout(onComplete, 800);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loading-screen ${isHidden ? 'hidden' : ''}`}>
      <div className="text-center loading-logo">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center animate-glow">
            <Building2 className="w-10 h-10 text-gray-900" />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-4xl font-bold text-white">JFLG</span>
          <span className="text-4xl font-light text-accent-400">11</span>
        </div>
        <div className="mt-6 flex justify-center">
          <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-accent-400 to-accent-600 rounded-full animate-line" />
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-4 tracking-widest uppercase">Carregando</p>
      </div>
    </div>
  );
}

// Particles Background
function Particles() {
  return (
    <div className="particles">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}

// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-gray-950/98 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-accent-500/10'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Building2 className="w-7 h-7 text-gray-900" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white">JFLG</span>
              <span className="text-2xl font-light text-accent-400">11</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {['Sobre', 'Especificações', 'Localização', 'Galeria'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                className="text-gray-300 hover:text-accent-400 transition-all duration-300 font-medium elegant-underline"
              >
                {item}
              </a>
            ))}
            <a
              href="#contato"
              className="relative bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 px-6 py-3 rounded-xl hover:from-accent-400 hover:to-accent-500 transition-all duration-300 font-semibold overflow-hidden group"
            >
              <span className="relative z-10">Contato</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 top-1 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : ''}`} />
              <span className={`absolute left-0 top-3 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-5 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : ''}`} />
            </div>
          </button>
        </div>

        <nav className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
          <div className="flex flex-col gap-4 border-t border-gray-800 pt-4">
            {['Sobre', 'Especificações', 'Localização', 'Galeria', 'Contato'].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-accent-400 transition-all duration-300 font-medium"
                style={{ transitionDelay: `${i * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

// Stat Card with counting animation
function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal bg-gray-900/60 backdrop-blur-md rounded-2xl p-6 border border-accent-500/20 hover:border-accent-500/40 transition-all duration-500 group hover:-translate-y-1"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl font-bold text-accent-400 group-hover:scale-110 transition-transform duration-500 origin-left">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-400 mt-1 text-sm tracking-wide">{label}</div>
    </div>
  );
}

// Hero Section
function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      <Particles />

      <div className="absolute inset-0">
        <div
          className="absolute inset-0 transition-transform duration-100"
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.1)` }}
        >
          <Image
            src="/DJI_0993.webp"
            alt="Vista aérea do terreno JFLG11"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/70 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#030712_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
        <div className="reveal">
          <span className="inline-block px-5 py-2.5 bg-accent-500/10 text-accent-400 rounded-full text-sm font-semibold uppercase tracking-[0.2em] border border-accent-500/20 backdrop-blur-sm">
            Novo Empreendimento Logístico
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mt-8 mb-6 reveal delay-100">
          <span className="block text-white drop-shadow-2xl">Galpão Logístico</span>
          <span className="block bg-gradient-to-r from-accent-300 via-accent-400 to-accent-500 bg-clip-text text-transparent mt-2 animate-gradient">
            Padrão AAA
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 reveal delay-200 leading-relaxed">
          Localização estratégica no entroncamento das BRs 040 e 267, em Juiz de Fora - MG
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-300">
          <a
            href="#contato"
            className="group relative bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-gray-900 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-500 hover:scale-105 shadow-xl shadow-accent-500/20 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Solicitar Informações
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
          </a>
          <a
            href="#sobre"
            className="group border-2 border-accent-500/30 hover:border-accent-400 hover:bg-accent-500/5 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-500 backdrop-blur-sm"
          >
            <span className="group-hover:text-accent-400 transition-colors">Conhecer o Projeto</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20">
          <StatCard value={100000} suffix="" label="m² de área total" delay={400} />
          <StatCard value={4} suffix="" label="Módulos independentes" delay={500} />
          <StatCard value={190} suffix="" label="Docas disponíveis" delay={600} />
          <StatCard value={12} suffix="m" label="Pé-direito" delay={700} />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#sobre" className="flex flex-col items-center gap-2 text-accent-400/70 hover:text-accent-400 transition-colors group">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description, index }: { icon: React.ReactNode; title: string; description: string; index: number }) {
  return (
    <div
      className={`reveal card-3d bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50 hover:border-accent-500/30 transition-all duration-500 group backdrop-blur-sm`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-accent-500/20 to-accent-600/10 rounded-2xl flex items-center justify-center text-accent-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-accent-500/20">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

// About Section
function About() {
  useScrollReveal();

  const features = [
    { icon: <Shield className="w-8 h-8" />, title: "Padrão AAA", description: "Empreendimento com os mais altos padrões de qualidade e segurança do mercado logístico." },
    { icon: <ThermometerSun className="w-8 h-8" />, title: "100% Climatizado", description: "Sistema de climatização em toda área de armazenagem e mezanino operacional." },
    { icon: <Leaf className="w-8 h-8" />, title: "Certificação LEED", description: "Comprometimento com sustentabilidade e eficiência energética certificada." },
    { icon: <Users className="w-8 h-8" />, title: "Multilocatário", description: "Flexibilidade para diversos perfis de ocupantes: B2B, e-commerce, indústria e distribuição." }
  ];

  return (
    <section id="sobre" className="py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <span className="reveal text-accent-400 font-semibold uppercase tracking-[0.2em] text-sm">Sobre o Projeto</span>
          <h2 className="reveal delay-100 text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
            O Futuro da Logística em{' '}
            <span className="text-accent-400">Minas Gerais</span>
          </h2>
          <div className="reveal delay-200 w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full" />
          <p className="reveal delay-300 text-xl text-gray-400 max-w-3xl mx-auto mt-8 leading-relaxed">
            Um empreendimento logístico de alta performance, projetado para atender as demandas
            do mercado moderno com infraestrutura de ponta e localização privilegiada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Specifications Section
function Specifications() {
  useScrollReveal();

  const specs = [
    { label: "Módulos", value: "4 módulos independentes", icon: <Building2 /> },
    { label: "Área Construída", value: "≈ 100.000 m²", icon: <Ruler /> },
    { label: "Docas", value: "160 a 190 docas", icon: <Truck /> },
    { label: "Pé-Direito", value: "12 metros", icon: <Building2 /> },
    { label: "Capacidade do Piso", value: "6 ton/m²", icon: <Shield /> },
    { label: "Modulação", value: "22m x 24m", icon: <Ruler /> },
    { label: "Pátios", value: "35 a 45m de profundidade", icon: <Truck /> },
    { label: "Tipo de Uso", value: "Multilocatário", icon: <Users /> },
  ];

  const differentials = [
    "Juntas de piso serradas com tratamento em epoxi",
    "Fechamento lateral em painel termoacústico",
    "Cobertura metálica com isolamento em Facefelt",
    "Potência instalada de 5.0 MVA",
    "Climatização completa em armazenagem e mezanino",
    "Pavimentação 100% em concreto",
    "Pátio de manobras de 38m",
    "Portaria blindada 24h com 6 eclusas",
    "Circulação de pedestres por passarela coberta",
    "Sistema de sprinklers para combate a incêndio"
  ];

  return (
    <section id="especificacoes" className="py-32 bg-gray-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="reveal text-accent-400 font-semibold uppercase tracking-[0.2em] text-sm">Especificações</span>
          <h2 className="reveal delay-100 text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
            Infraestrutura de <span className="text-accent-400">Alto Padrão</span>
          </h2>
          <div className="reveal delay-200 w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-2 gap-4">
            {specs.map((spec, index) => (
              <div
                key={index}
                className={`reveal bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-accent-500/30 transition-all duration-500 group backdrop-blur-sm`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="text-accent-400 mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 inline-block">
                  {spec.icon}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-white">{spec.value}</div>
              </div>
            ))}
          </div>

          <div className="reveal-right bg-gradient-to-br from-accent-500/10 via-accent-600/5 to-transparent rounded-3xl p-10 border border-accent-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-8 text-accent-400 flex items-center gap-3">
              <div className="w-8 h-1 bg-accent-400 rounded-full" />
              Diferenciais do Projeto
            </h3>
            <div className="space-y-4">
              {differentials.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Location Section
function Location() {
  useScrollReveal();

  const features = [
    { icon: <MapPin />, title: "Localização Estratégica", desc: "Entroncamento BR-040 (BH) e BR-267 (Sul de MG)" },
    { icon: <Truck />, title: "Acesso Rodoviário", desc: "Frente para a BR-040 com fácil acesso para carretas" },
    { icon: <Zap />, title: "Infraestrutura e Operação", desc: "Plataforma elevada com amplos pátios" },
    { icon: <Clock />, title: "Mercado Logístico", desc: "Região com forte crescimento e baixa vacância" },
  ];

  return (
    <section id="localizacao" className="py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,162,39,0.05)_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="reveal text-accent-400 font-semibold uppercase tracking-[0.2em] text-sm">Localização</span>
            <h2 className="reveal delay-100 text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              Posição <span className="text-accent-400">Estratégica</span>
            </h2>
            <p className="reveal delay-200 text-xl text-gray-400 mb-10 leading-relaxed">
              Localizado no entroncamento das BRs 040 e 267, em Juiz de Fora - MG,
              o empreendimento oferece acesso privilegiado aos principais eixos logísticos do Sudeste.
            </p>

            <div className="space-y-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className={`reveal flex items-start gap-5 group`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-accent-500/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-accent-500/20 group-hover:bg-accent-500/20 group-hover:scale-110 transition-all duration-500">
                    <div className="text-accent-400">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white group-hover:text-accent-400 transition-colors">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal delay-700 mt-10 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Coordenadas</div>
              <div className="text-xl font-mono text-accent-400">21°42&apos;14.92&quot;S 43°27&apos;12.79&quot;O</div>
              <div className="text-sm text-gray-400 mt-2">BR-040, Km 780 - Juiz de Fora, MG</div>
            </div>
          </div>

          <div className="reveal-rotate relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-accent-500/20 shadow-2xl shadow-black/50">
              <Image
                src="/DJI_0997.webp"
                alt="Vista aérea da localização"
                fill
                className="object-cover image-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-accent-500/30 animate-float">
              Km 780 - BR-040
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent-500/30 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function Gallery() {
  useScrollReveal();

  const images = [
    { src: "/DJI_0002.webp", alt: "Vista aérea 1" },
    { src: "/DJI_0005.webp", alt: "Vista aérea 2" },
    { src: "/DJI_0006.webp", alt: "Vista aérea 3" },
    { src: "/DJI_0008.webp", alt: "Vista aérea 4" },
    { src: "/DJI_0009.webp", alt: "Vista aérea 5" },
    { src: "/DJI_0995.webp", alt: "Vista aérea 6" },
  ];

  return (
    <section id="galeria" className="py-32 bg-gray-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="reveal text-accent-400 font-semibold uppercase tracking-[0.2em] text-sm">Galeria</span>
          <h2 className="reveal delay-100 text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
            Conheça o <span className="text-accent-400">Terreno</span>
          </h2>
          <div className="reveal delay-200 w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`reveal-scale relative aspect-video rounded-2xl overflow-hidden border border-gray-800 group cursor-pointer`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 border-2 border-accent-500/0 group-hover:border-accent-500/50 rounded-2xl transition-all duration-500" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-sm font-medium">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Advantages Section
function Advantages() {
  useScrollReveal();

  const advantages = [
    { title: "Flexibilidade de locação", description: "Perfis de ocupantes variados: B2B, e-commerce, indústria e distribuição." },
    { title: "Alta demanda regional", description: "Módulos entre 3.000 m² e 30.000 m² com alta procura na região." },
    { title: "Eficiência operacional", description: "Pátios e docas compartilhadas para máxima eficiência logística." },
    { title: "Localização estratégica", description: "Acesso direto às BRs 040 e 267, conectando todo o Sudeste." },
    { title: "Crescimento logístico", description: "Região com forte expansão logística e baixa taxa de vacância." },
    { title: "Valorização garantida", description: "Potencial de valorização e renda estável para investidores." }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,162,39,0.05)_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <span className="reveal text-accent-400 font-semibold uppercase tracking-[0.2em] text-sm">Vantagens</span>
          <h2 className="reveal delay-100 text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
            Por que Investir no <span className="text-accent-400">JFLG11</span>?
          </h2>
          <div className="reveal delay-200 w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`reveal card-3d bg-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-accent-500/10 hover:border-accent-500/30 transition-all duration-500 group`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-accent-500/20">
                <CheckCircle2 className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">{advantage.title}</h3>
              <p className="text-gray-400 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const contacts = [
    { icon: <Phone />, label: "Telefone", value: "(32) 3xxx-xxxx" },
    { icon: <Mail />, label: "E-mail", value: "contato@jflg11.com.br" },
    { icon: <MapPin />, label: "Localização", value: "BR-040, Km 780 - Juiz de Fora, MG" },
  ];

  return (
    <section id="contato" className="py-32 bg-gray-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="reveal text-accent-400 font-semibold uppercase tracking-[0.2em] text-sm">Contato</span>
            <h2 className="reveal delay-100 text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              Interessado no <span className="text-accent-400">JFLG11</span>?
            </h2>
            <p className="reveal delay-200 text-xl text-gray-400 mb-10 leading-relaxed">
              Entre em contato conosco para mais informações sobre o empreendimento,
              disponibilidade de módulos e condições comerciais.
            </p>

            <div className="space-y-6">
              {contacts.map((item, index) => (
                <div
                  key={index}
                  className={`reveal flex items-center gap-5 group`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-accent-500/10 rounded-xl flex items-center justify-center border border-accent-500/20 group-hover:bg-accent-500/20 group-hover:scale-110 transition-all duration-500">
                    <div className="text-accent-400">{item.icon}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">{item.label}</div>
                    <div className="text-lg font-semibold text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right">
            <form onSubmit={handleSubmit} className="bg-gray-900/50 rounded-3xl p-10 border border-gray-800 backdrop-blur-sm space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { name: 'name', label: 'Nome *', type: 'text', placeholder: 'Seu nome' },
                  { name: 'email', label: 'E-mail *', type: 'email', placeholder: 'seu@email.com' },
                  { name: 'phone', label: 'Telefone', type: 'tel', placeholder: '(00) 00000-0000' },
                  { name: 'company', label: 'Empresa', type: 'text', placeholder: 'Nome da empresa' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      required={field.label.includes('*')}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                      className="w-full px-5 py-4 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all duration-300"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-4 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all duration-300 resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-gray-900 px-8 py-5 rounded-xl font-bold text-lg transition-all duration-500 hover:scale-[1.02] flex items-center justify-center gap-3 shadow-xl shadow-accent-500/20 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-16 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Building2 className="w-7 h-7 text-gray-900" />
            </div>
            <div>
              <span className="text-2xl font-bold">JFLG</span>
              <span className="text-2xl font-light text-accent-400">11</span>
            </div>
          </div>

          <div className="text-gray-400 text-center">
            <p className="font-medium">Galpão Logístico Premium - Juiz de Fora, MG</p>
            <p className="text-sm mt-1 text-gray-500">Entroncamento BR-040 e BR-267, Km 780</p>
          </div>

          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} JFLG11. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <main className={`bg-gray-950 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        <Header />
        <Hero />
        <About />
        <Specifications />
        <Location />
        <Gallery />
        <Advantages />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
