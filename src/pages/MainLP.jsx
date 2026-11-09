import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useInView } from 'framer-motion';
import {
  Menu, X, Calculator, Users, Briefcase, Search, ShieldCheck, ChevronDown,
  Phone, ArrowRight, FileText, Receipt, Truck, FileCheck, Cloud, Zap, LifeBuoy,
  ExternalLink, Sprout, Building2, HeartPulse, User, Handshake, Globe, Laptop
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { usePageSeo } from '../utils/seo';

const faqs = [
  { q: "Como trocar de contador?", a: "O processo é simples e nós cuidamos de tudo. Entramos em contato com o seu contador atual, solicitamos a documentação necessária e fazemos a transição de forma segura, sem interromper as atividades da sua empresa." },
  { q: "A Fortaleza Contabilidade atende em todo o Brasil?", a: "Sim. Nosso atendimento é 100% online, o que nos permite atender clientes de diferentes regiões do Brasil, com atenção especial ao estado de Goiás." },
  { q: "Vocês atendem produtores rurais?", a: "Sim. Atuamos com contabilidade rural, organização contábil e tributária rural e apoio a produtores rurais e empresas do agronegócio." },
  { q: "Fazem regularização de imóveis rurais?", a: "Sim, oferecemos serviços de regularização de imóveis rurais, com análise da situação e orientação sobre os passos necessários." },
  { q: "Atendem profissionais autônomos?", a: "Sim. Atendemos profissionais autônomos, empresas, produtores rurais, cooperativas e associações." },
  { q: "O atendimento é totalmente online?", a: "Sim. Todo o atendimento é realizado de forma digital, com segurança e proximidade, independentemente da sua localização." }
];

const FortalezaSPA = () => {
  usePageSeo({
    title: "Fortaleza Contabilidade - Contabilidade Online e Rural em Goiás",
    description: "Contabilidade online para empresas, produtores rurais e agronegócio em todo o Brasil, com ênfase em Goiás. Fale com um especialista.",
    path: "/",
    faqs,
    preloadImage: "/fundo-00.webp",
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [isTriageModalOpen, setIsTriageModalOpen] = useState(false);
  const [triageStep, setTriageStep] = useState(1);
  const [triageData, setTriageData] = useState({ segment: '', goal: '' });
  const [isScrolled, setIsScrolled] = useState(false);
  const faqRef = useRef(null);
  const isFaqInView = useInView(faqRef, { margin: "-200px" });

  const openTriageModal = (e) => {
    if (e) e.preventDefault();
    setTriageStep(1);
    setTriageData({ segment: '', goal: '' });
    setIsTriageModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFaqInView) return;
    const interval = setInterval(() => {
      setActiveFaq((prev) => (prev !== null ? (prev + 1) % faqs.length : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, [isFaqInView]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5562996000930";

  const services = [
    {
      title: "Contabilidade empresarial",
      icon: <Calculator className="w-8 h-8 text-blue-600" />,
      desc: "Escrituração contábil, balancetes, demonstrações e obrigações acessórias para empresas de diferentes portes e segmentos.",
      fullDetails: [
        "Classificação e escrituração contábil",
        "Elaboração de balancetes e demonstrações contábeis",
        "Obrigações acessórias e declarações",
        "Acompanhamento contábil mensal",
        "Suporte para decisões gerenciais"
      ]
    },
    {
      title: "Contabilidade rural",
      icon: <Sprout className="w-8 h-8 text-blue-600" />,
      desc: "Contabilidade especializada para produtores rurais, com organização contábil e tributária voltada ao agronegócio.",
      fullDetails: [
        "Escrituração contábil rural",
        "Organização das obrigações do produtor rural",
        "Apoio à gestão financeira da propriedade",
        "Orientação tributária rural",
        "Atendimento online em todo o Brasil"
      ]
    },
    {
      title: "Regularização de imóveis rurais",
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      desc: "Análise da situação e orientação para regularização de imóveis rurais, com acompanhamento profissional.",
      fullDetails: [
        "Análise documental",
        "Identificação de pendências",
        "Orientação sobre regularização",
        "Acompanhamento do processo",
        "Suporte contábil relacionado"
      ]
    },
    {
      title: "Planejamento tributário",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      desc: "Estudo do enquadramento tributário e orientação para uma carga tributária adequada à realidade do negócio.",
      fullDetails: [
        "Análise do regime tributário",
        "Orientação sobre enquadramento",
        "Planejamento fiscal responsável",
        "Acompanhamento de mudanças legais",
        "Suporte consultivo"
      ]
    },
    {
      title: "Departamento fiscal",
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      desc: "Apuração de tributos e gestão das obrigações fiscais, com organização e cumprimento de prazos.",
      fullDetails: [
        "Apuração de tributos",
        "Emissão e controle de guias",
        "Obrigações acessórias",
        "Acompanhamento fiscal mensal",
        "Orientação sobre notas fiscais"
      ]
    },
    {
      title: "Departamento pessoal e trabalhista",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      desc: "Folha de pagamento, admissões, rescisões e obrigações trabalhistas com segurança e conformidade.",
      fullDetails: [
        "Elaboração de folha de pagamento",
        "Admissões e rescisões",
        "Férias e 13º salário",
        "Obrigações trabalhistas e previdenciárias",
        "Suporte ao empregador"
      ]
    },
    {
      title: "Consultoria contábil e tributária",
      icon: <Search className="w-8 h-8 text-blue-600" />,
      desc: "Orientação técnica para melhorar a gestão, a conformidade e o desempenho financeiro do negócio.",
      fullDetails: [
        "Consultoria contábil",
        "Consultoria tributária",
        "Análise de processos",
        "Orientação estratégica",
        "Suporte contínuo"
      ]
    },
    {
      title: "Atendimento a profissionais autônomos",
      icon: <User className="w-8 h-8 text-blue-600" />,
      desc: "Serviços contábeis para profissionais autônomos, com organização fiscal e orientação personalizada.",
      fullDetails: [
        "Abertura e organização contábil",
        "Declarações e obrigações",
        "Planejamento tributário",
        "Orientação fiscal",
        "Atendimento online"
      ]
    },
    {
      title: "Atendimento a cooperativas e associações",
      icon: <Handshake className="w-8 h-8 text-blue-600" />,
      desc: "Suporte contábil e fiscal para cooperativas e associações, respeitando suas particularidades.",
      fullDetails: [
        "Escrituração contábil",
        "Obrigações fiscais e acessórias",
        "Relatórios gerenciais",
        "Orientação tributária",
        "Acompanhamento contínuo"
      ]
    }
  ];

  const segments = [
    "Produtores rurais",
    "Empresas do agronegócio",
    "Profissionais da saúde",
    "Empresas em geral",
    "Profissionais autônomos",
    "Cooperativas e associações"
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden w-full">
      {/* Scroll Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50" style={{ scaleX }} />

      {/* 1. NAVBAR */}
      <header className={`fixed w-full top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300 ${isScrolled ? 'py-2 shadow-sm' : 'py-4'}`}>
        <div className="max-w-[1400px] mx-auto px-4 xl:px-6 flex justify-between items-center gap-4">
          <a href="/" className="flex items-center gap-2 cursor-pointer shrink-0">
            <img src="/logo.svg" alt="Fortaleza Contabilidade" className="h-10 w-auto object-contain" />
          </a>

          <nav className="hidden lg:flex flex-1 justify-center items-center gap-4 xl:gap-6 font-medium text-[13px] xl:text-sm text-slate-600 whitespace-nowrap">
            <a href="#servicos" className="hover:text-blue-600 transition-colors">Serviços</a>
            <a href="#agro" className="hover:text-blue-600 transition-colors">Agronegócio</a>
            <a href="#sobre" className="hover:text-blue-600 transition-colors">Sobre nós</a>
            <a href="#online" className="hover:text-blue-600 transition-colors">Atendimento online</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
            <a href="#contato" className="hover:text-blue-600 transition-colors">Contato</a>
          </nav>

          <div className="hidden lg:flex items-center gap-2 xl:gap-3 text-[13px] xl:text-sm shrink-0">
            <a href="https://wa.me/5562996000930" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 xl:px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 font-semibold whitespace-nowrap">
              Falar com Especialista
            </a>
          </div>

          <button className="lg:hidden text-slate-900" aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl rounded-b-3xl border-t border-slate-100 flex flex-col p-8 gap-5 font-medium z-50"
            >
              <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 hover:text-blue-600 transition flex items-center gap-3 border-b border-slate-100 pb-3">Serviços</a>
              <a href="#agro" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 hover:text-blue-600 transition flex items-center gap-3 border-b border-slate-100 pb-3">Agronegócio</a>
              <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 hover:text-blue-600 transition flex items-center gap-3 border-b border-slate-100 pb-3">Sobre nós</a>
              <a href="#online" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 hover:text-blue-600 transition flex items-center gap-3 border-b border-slate-100 pb-3">Atendimento online</a>
              <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 hover:text-blue-600 transition flex items-center gap-3 border-b border-slate-100 pb-3">FAQ</a>
              <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 hover:text-blue-600 transition flex items-center gap-3 border-b border-slate-100 pb-3">Contato</a>
              <a href="https://wa.me/5562996000930" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="bg-blue-600 text-white text-center py-4 rounded-full mt-2 font-bold shadow-lg w-full">Falar com Especialista</a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center pt-20 pb-6 md:pt-28 md:pb-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/fundo-00.webp" alt="Fortaleza Contabilidade - contabilidade online e rural" fetchPriority="high" decoding="async" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-slate-900/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial="hidden" animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
            className="w-full flex flex-col items-center md:items-start text-center md:text-left"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-semibold text-xs md:text-sm mb-4 backdrop-blur-sm">
              Contabilidade online e rural
            </motion.div>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 max-w-4xl">
              Contabilidade estratégica para quem deseja crescer com <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">segurança.</span>
            </motion.h1>

            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-sm md:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Soluções contábeis, tributárias e rurais com atendimento 100% online para empresas e produtores de todo o Brasil, com ênfase no estado de Goiás.
            </motion.p>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto mb-10">
              <a href="https://wa.me/5562996000930?text=Ol%C3%A1!%20Conheci%20a%20Fortaleza%20Contabilidade%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os." target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-center transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:scale-105">
                <FaWhatsapp size={20} className="relative z-10" />
                <span className="relative z-10">Solicitar atendimento</span>
              </a>
              <a href="#servicos" className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-semibold text-center hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md">
                Conhecer serviços
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="servicos" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nossos serviços</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Soluções contábeis, fiscais, tributárias e trabalhistas para empresas, produtores rurais e profissionais.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedService(service)}
                className="bg-slate-50 border border-slate-200 p-8 rounded-3xl cursor-pointer hover:shadow-xl hover:border-blue-300 transition-all group text-center md:text-left flex flex-col items-center md:items-start"
              >
                <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal de Serviços */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
              <motion.div
                role="dialog" aria-modal="true" aria-label="Detalhes do serviço"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white p-8 rounded-3xl max-w-lg w-full relative"
              >
                <button onClick={() => setSelectedService(null)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900"><X /></button>
                <div className="mb-6">{selectedService.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{selectedService.title}</h3>
                <p className="text-slate-600 mb-6">{selectedService.desc}</p>
                {selectedService.fullDetails && (
                  <ul className="mb-8 space-y-3 text-sm text-slate-700">
                    {selectedService.fullDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <button onClick={() => { setSelectedService(null); openTriageModal(); }} className="block w-full bg-blue-600 text-white text-center py-3 rounded-full font-semibold hover:bg-blue-700">
                  Solicitar este serviço
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Modal de Triagem */}
        <AnimatePresence>
          {isTriageModalOpen && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
              <motion.div
                role="dialog" aria-modal="true" aria-label="Agendar atendimento"
                initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white p-6 md:p-8 rounded-3xl max-w-md w-full relative max-h-[90vh] overflow-y-auto"
              >
                <button onClick={() => setIsTriageModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900"><X /></button>
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <FaWhatsapp size={24} />
                </div>

                {triageStep === 1 ? (
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">Qual o seu segmento?</h3>
                    <p className="text-slate-600 mb-6 text-sm">Selecione a sua área de atuação:</p>
                    <div className="space-y-3">
                      {["Empresa", "Produtor rural", "Profissional autônomo", "Cooperativa / Associação", "Outros"].map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => { setTriageData({ ...triageData, segment: option }); setTriageStep(2); }}
                          className="w-full text-left px-5 py-3.5 rounded-xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700 font-medium text-slate-700 transition-all flex justify-between items-center group"
                        >
                          {option}
                          <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <button onClick={() => setTriageStep(1)} className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-2 flex items-center gap-1 hover:underline">&larr; Voltar</button>
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">O que você busca hoje?</h3>
                    <p className="text-slate-600 mb-6 text-sm">Selecione o serviço para falarmos com o especialista certo:</p>
                    <div className="space-y-3">
                      {["Contabilidade empresarial", "Contabilidade rural", "Regularização de imóvel rural", "Planejamento tributário", "Outros"].map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            const texto = `Olá! Sou do segmento de *${triageData.segment}* e procuro ajuda com *${option}*.`;
                            window.open(`${WHATSAPP_LINK}&text=${encodeURIComponent(texto)}&type=phone_number&app_absent=0`);
                            setIsTriageModalOpen(false);
                          }}
                          className="block w-full text-left px-5 py-3.5 rounded-xl border border-slate-200 hover:border-green-600 hover:bg-green-50 hover:text-green-700 font-medium text-slate-700 transition-all flex justify-between items-center group"
                        >
                          {option}
                          <FaWhatsapp size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* 4. AGRONEGÓCIO */}
      <section id="agro" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-xs mb-6 mx-auto">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Especialização
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Especialistas no agronegócio</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Posicionamos a Fortaleza Contabilidade como referência no atendimento ao produtor rural e às empresas do campo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Contabilidade para produtores rurais",
              "Organização contábil e tributária rural",
              "Regularização de imóveis rurais",
              "Orientação e suporte especializado",
              "Atendimento online em todo o Brasil"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 text-left"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-bold text-slate-800 text-sm md:text-base leading-tight">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="https://wa.me/5562996000930?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20contabilidade%20rural." target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg">
              Falar sobre contabilidade rural
            </a>
          </div>
        </div>
      </section>

      {/* 5. SEGMENTOS */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Segmentos atendidos</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Atendemos diferentes perfis de clientes, com atenção às particularidades de cada segmento.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {segments.map((seg, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span className="font-medium text-slate-800">{seg}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOBRE NÓS */}
      <section id="sobre" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Sobre a Fortaleza Contabilidade</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              A Fortaleza Contabilidade nasceu em 2022, da visão de que a contabilidade é essencial para o desenvolvimento, a organização e o crescimento de qualquer empresa, e da certeza de que seria possível oferecer um serviço contábil descomplicado, acessível e próximo da realidade de cada cliente.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Desde o início, nosso propósito é ir além das obrigações fiscais e contábeis, oferecendo soluções que proporcionem segurança, tranquilidade e contribuam para decisões mais estratégicas.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Com atuação nas áreas contábil, fiscal, tributária e trabalhista, atendemos empresas, profissionais autônomos, produtores rurais, cooperativas e associações, com ênfase nos setores da saúde e do agronegócio, compreendendo as particularidades, os desafios e as necessidades específicas de cada segmento.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Acreditamos que a contabilidade deve ser uma aliada do crescimento, e não apenas uma obrigação.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] w-full bg-slate-900">
            <img src="/fundo06.webp" alt="Fortaleza Contabilidade" loading="lazy" decoding="async" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 7. ATENDIMENTO ONLINE */}
      <section id="online" className="py-24 bg-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4">Atendimento online</div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Seu negócio merece uma contabilidade próxima, mesmo à distância.</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            O atendimento digital permite atender clientes de diferentes regiões do Brasil, com atenção especial ao estado de Goiás. Tudo com segurança, organização e proximidade.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white border border-slate-200 px-6 py-4 rounded-2xl flex items-center gap-3">
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-slate-800">Atendimento em todo o Brasil</span>
            </div>
            <div className="bg-white border border-slate-200 px-6 py-4 rounded-2xl flex items-center gap-3">
              <Laptop className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-slate-800">100% online</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" ref={faqRef} className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-xs mb-6 mx-auto">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Tire suas dúvidas
          </div>
          <h2 className="text-4xl font-black text-white mb-2 leading-tight">Dúvidas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Frequentes</span></h2>
        </div>

        <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              role="button"
              tabIndex={0}
              aria-expanded={activeFaq === i}
              onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveFaq(activeFaq === i ? null : i); } }}
              className={`bg-white/5 backdrop-blur-md border ${activeFaq === i ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-white/10 hover:border-blue-400/50'} rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer`}
            >
              <div className="w-full flex justify-between items-center p-6 text-left">
                <span className={`font-bold text-lg transition-colors ${activeFaq === i ? 'text-blue-400' : 'text-slate-200'}`}>{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${activeFaq === i ? 'bg-blue-600 text-white' : 'bg-white/10 text-slate-400'}`}>
                  <ChevronDown className={`transform transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} size={18} />
                </div>
              </div>
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-300 leading-relaxed pt-2 border-t border-white/10">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center mt-10">
          <p className="text-lg text-slate-400 mb-6">Não encontrou o que procurava? Fale diretamente com nossa equipe.</p>
          <a href="https://wa.me/5562996000930" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg">
            <FaWhatsapp size={18} /> Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* 9. APLICATIVO (em breve) */}
      <section id="app" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4">Aplicativo</div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Aplicativo em desenvolvimento</h2>
          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
            Estamos preparando um aplicativo próprio para facilitar o acesso a documentos, guias e atendimento. Em breve, mais informações.
          </p>
        </div>
      </section>

      {/* 10. CONTATO */}
      <section id="contato" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4">Atendimento rápido</div>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Fale conosco</h2>
            <p className="text-lg text-slate-600 leading-relaxed">Explique brevemente a sua necessidade. Nossa equipe entrará em contato via WhatsApp.</p>
          </div>

          <form className="space-y-5 w-full text-left" onSubmit={(e) => {
            e.preventDefault();
            const nome = e.target.nome.value;
            const telefone = e.target.telefone.value;
            const email = e.target.email.value;
            const assunto = e.target.assunto.value;
            const mensagem = e.target.mensagem.value;
            const texto = `Olá! Meu nome é *${nome}*.\nTelefone: ${telefone}\nE-mail: ${email}\nAssunto: ${assunto}\n\nMensagem:\n${mensagem}`;
            window.open(`${WHATSAPP_LINK}&text=${encodeURIComponent(texto)}&type=phone_number&app_absent=0`);
          }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Nome *</label>
                <input name="nome" type="text" placeholder="Como podemos te chamar?" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Telefone *</label>
                <input name="telefone" type="tel" placeholder="(00) 00000-0000" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">E-mail *</label>
              <input name="email" type="email" placeholder="seu@email.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">Assunto *</label>
              <input name="assunto" type="text" placeholder="Qual o assunto?" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">Mensagem *</label>
              <textarea name="mensagem" rows={4} placeholder="Conte um pouco mais sobre o que você precisa..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" required></textarea>
            </div>
            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl py-4 transition-colors flex items-center justify-center gap-2 text-lg shadow-lg shadow-green-500/30">
              <FaWhatsapp size={24} />
              Enviar pelo WhatsApp
            </button>
          </form>

          <div className="mt-10 text-center text-slate-600">
            <p className="flex items-center justify-center gap-2"><Phone size={18} className="text-blue-600" /> (62) 99600-0930</p>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 pt-16 pb-6 border-t border-slate-800 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 pb-12">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-6 bg-white/5 p-4 rounded-2xl border border-white/10 shadow-xl inline-block backdrop-blur-sm">
                <img src="/logo.svg" alt="Logotipo Fortaleza Contabilidade" loading="lazy" decoding="async" className="h-12 w-auto object-contain" />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs font-medium">Contabilidade estratégica para empresas e produtores rurais, com atendimento 100% online.</p>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>Links Rápidos</h4>
              <ul className="flex flex-col gap-3 text-sm font-medium">
                <li><a href="#servicos" className="hover:text-white transition flex items-center gap-2"><ArrowRight size={14} /> Serviços</a></li>
                <li><a href="#agro" className="hover:text-white transition flex items-center gap-2"><ArrowRight size={14} /> Agronegócio</a></li>
                <li><a href="#sobre" className="hover:text-white transition flex items-center gap-2"><ArrowRight size={14} /> Sobre nós</a></li>
                <li><a href="#online" className="hover:text-white transition flex items-center gap-2"><ArrowRight size={14} /> Atendimento online</a></li>
                <li><a href="#faq" className="hover:text-white transition flex items-center gap-2"><ArrowRight size={14} /> FAQ</a></li>
                <li><a href="#contato" className="hover:text-white transition flex items-center gap-2"><ArrowRight size={14} /> Contato</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>Contato</h4>
              <ul className="space-y-4 text-sm text-slate-300 font-medium">
                <li className="flex items-center justify-center md:justify-start gap-3"><FaWhatsapp size={18} className="text-blue-400 shrink-0" /> (62) 99600-0930</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold tracking-wide text-slate-500">
            <p>© {new Date().getFullYear()} Fortaleza Contabilidade. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/5562996000930?text=Ol%C3%A1!%20Conheci%20a%20Fortaleza%20Contabilidade%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os."
        target="_blank" rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center ${isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}`}
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
};

export default FortalezaSPA;