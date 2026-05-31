'use client';

import { useState } from 'react';
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

// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-primary-500">JFLG</span>
              <span className="text-2xl font-light text-primary-400">11</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-gray-700 hover:text-primary-500 transition-colors font-medium">Sobre</a>
            <a href="#especificacoes" className="text-gray-700 hover:text-primary-500 transition-colors font-medium">Especificações</a>
            <a href="#localizacao" className="text-gray-700 hover:text-primary-500 transition-colors font-medium">Localização</a>
            <a href="#galeria" className="text-gray-700 hover:text-primary-500 transition-colors font-medium">Galeria</a>
            <a href="#contato" className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold">
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#sobre" className="text-gray-700 hover:text-primary-500 transition-colors font-medium">Sobre</a>
              <a href="#especificacoes" className="text-gray-700 hover:text-primary-500 transition-colors font-medium">Especificações</a>
              <a href="#localizacao" className="text-gray-700 hover:text-primary-500 transition-colors font-medium">Localização</a>
              <a href="#galeria" className="text-gray-700 hover:text-primary-500 transition-colors font-medium">Galeria</a>
              <a href="#contato" className="bg-primary-500 text-white px-6 py-3 rounded-lg text-center font-semibold">
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/DJI_0993.webp"
          alt="Vista aérea do terreno JFLG11"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
        <div className="animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-accent-500/90 text-primary-900 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
            Novo Empreendimento Logístico
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp delay-100">
          Galpão Logístico
          <span className="block text-gradient mt-2">Padrão AAA</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 animate-fadeInUp delay-200">
          Localização estratégica no entroncamento das BRs 040 e 267, em Juiz de Fora - MG
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-300">
          <a
            href="#contato"
            className="bg-accent-500 hover:bg-accent-600 text-primary-900 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 animate-pulse-glow"
          >
            Solicitar Informações
          </a>
          <a
            href="#sobre"
            className="border-2 border-white/50 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
          >
            Conhecer o Projeto
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fadeInUp delay-400">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-accent-400">100.000</div>
            <div className="text-gray-300 mt-1">m² de área total</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-accent-400">4</div>
            <div className="text-gray-300 mt-1">Módulos independentes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-accent-400">190</div>
            <div className="text-gray-300 mt-1">Docas disponíveis</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-accent-400">12m</div>
            <div className="text-gray-300 mt-1">Pé-direito</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
}

// About Section
function About() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Padrão AAA",
      description: "Empreendimento com os mais altos padrões de qualidade e segurança do mercado logístico."
    },
    {
      icon: <ThermometerSun className="w-8 h-8" />,
      title: "100% Climatizado",
      description: "Sistema de climatização em toda área de armazenagem e mezanino operacional."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Certificação LEED",
      description: "Comprometimento com sustentabilidade e eficiência energética certificada."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multilocatário",
      description: "Flexibilidade para diversos perfis de ocupantes: B2B, e-commerce, indústria e distribuição."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-semibold uppercase tracking-wider">Sobre o Projeto</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            O Futuro da Logística em <span className="text-primary-500">Minas Gerais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um empreendimento logístico de alta performance, projetado para atender as demandas
            do mercado moderno com infraestrutura de ponta e localização privilegiada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Specifications Section
function Specifications() {
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
    <section id="especificacoes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-semibold uppercase tracking-wider">Especificações</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Infraestrutura de <span className="text-primary-500">Alto Padrão</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-4">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-primary-50 transition-colors group"
              >
                <div className="text-primary-500 mb-3 group-hover:scale-110 transition-transform">
                  {spec.icon}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{spec.label}</div>
                <div className="text-lg font-bold text-gray-900 mt-1">{spec.value}</div>
              </div>
            ))}
          </div>

          {/* Differentials */}
          <div className="bg-primary-500 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Diferenciais do Projeto</h3>
            <div className="space-y-4">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-100">{item}</span>
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
  return (
    <section id="localizacao" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent-400 font-semibold uppercase tracking-wider">Localização</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Posição <span className="text-accent-400">Estratégica</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Localizado no entroncamento das BRs 040 e 267, em Juiz de Fora - MG,
              o empreendimento oferece acesso privilegiado aos principais eixos logísticos do Sudeste.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Localização Estratégica</h4>
                  <p className="text-gray-400">Entroncamento BR-040 (BH) e BR-267 (Sul de MG)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Acesso Rodoviário</h4>
                  <p className="text-gray-400">Frente para a BR-040 com fácil acesso para carretas e veículos pesados</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Infraestrutura e Operação</h4>
                  <p className="text-gray-400">Plataforma elevada com excelente visibilidade e amplos pátios</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Mercado Logístico</h4>
                  <p className="text-gray-400">Região com forte crescimento logístico e baixa taxa de vacância</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="text-sm text-gray-400 mb-2">Coordenadas</div>
              <div className="text-lg font-mono">21°42&apos;14.92&quot;S 43°27&apos;12.79&quot;O</div>
              <div className="text-sm text-gray-400 mt-2">BR-040, Km 780 - Juiz de Fora, MG</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/DJI_0997.webp"
                alt="Vista aérea da localização"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent-500 text-primary-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl">
              Km 780 - BR-040
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function Gallery() {
  const images = [
    { src: "/DJI_0002.webp", alt: "Vista aérea do terreno 1" },
    { src: "/DJI_0005.webp", alt: "Vista aérea do terreno 2" },
    { src: "/DJI_0006.webp", alt: "Vista aérea do terreno 3" },
    { src: "/DJI_0008.webp", alt: "Vista aérea do terreno 4" },
    { src: "/DJI_0009.webp", alt: "Vista aérea do terreno 5" },
    { src: "/DJI_0995.webp", alt: "Vista aérea do terreno 6" },
  ];

  return (
    <section id="galeria" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-semibold uppercase tracking-wider">Galeria</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Conheça o <span className="text-primary-500">Terreno</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Imagens aéreas do terreno onde será construído o empreendimento logístico JFLG11.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Advantages Section
function Advantages() {
  const advantages = [
    {
      title: "Flexibilidade de locação",
      description: "Perfis de ocupantes variados: B2B, e-commerce, indústria e distribuição."
    },
    {
      title: "Alta demanda regional",
      description: "Módulos entre 3.000 m² e 30.000 m² com alta procura na região."
    },
    {
      title: "Eficiência operacional",
      description: "Pátios e docas compartilhadas para máxima eficiência logística."
    },
    {
      title: "Localização estratégica",
      description: "Acesso direto às BRs 040 e 267, conectando todo o Sudeste."
    },
    {
      title: "Crescimento logístico",
      description: "Região com forte expansão logística e baixa taxa de vacância."
    },
    {
      title: "Valorização garantida",
      description: "Potencial de valorização e renda estável para investidores."
    }
  ];

  return (
    <section className="py-24 bg-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-400 font-semibold uppercase tracking-wider">Vantagens</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Por que Investir no <span className="text-accent-400">JFLG11</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors"
            >
              <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-primary-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
              <p className="text-gray-300">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-primary-500 font-semibold uppercase tracking-wider">Contato</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Interessado no <span className="text-primary-500">JFLG11</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Entre em contato conosco para mais informações sobre o empreendimento,
              disponibilidade de módulos e condições comerciais.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Telefone</div>
                  <div className="text-lg font-semibold text-gray-900">(32) 3xxx-xxxx</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">E-mail</div>
                  <div className="text-lg font-semibold text-gray-900">contato@jflg11.com.br</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Localização</div>
                  <div className="text-lg font-semibold text-gray-900">BR-040, Km 780 - Juiz de Fora, MG</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Enviar Mensagem
                <ArrowRight className="w-5 h-5" />
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold">JFLG</span>
              <span className="text-xl font-light text-gray-400">11</span>
            </div>
          </div>

          <div className="text-gray-400 text-center">
            <p>Galpão Logístico Premium - Juiz de Fora, MG</p>
            <p className="text-sm mt-1">Entroncamento BR-040 e BR-267, Km 780</p>
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
  return (
    <main>
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
  );
}
