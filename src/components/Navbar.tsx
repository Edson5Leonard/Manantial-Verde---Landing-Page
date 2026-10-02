"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Garantía de Calidad", href: "#garantia" },
    { name: "Sobre Nosotros", href: "#conocenos" },
    { name: "Productos", href: "#productos" },
    { name: "Sostenibilidad", href: "#sostenibilidad" },
    { name: "Contacto", href: "#contacto" },
  ];

  // ANIMACIÓN DE SMOOTH SCROLL PARA REDIRIGIR SUAVEMENTE
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false); // Cierra el menú móvil si está abierto

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // DETECTAR SCROLL PARA OCULTAR/MOSTRAR NAVBAR
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isOpen) return;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Oculta al bajar
      } else {
        setIsVisible(true); // Muestra al subir
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100/50 shadow-sm transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 h-24 lg:h-28 flex items-center justify-between">
        
        {/* LOGOS INDIVIDUALES - AMBOS REDIRIGEN A INICIO AL HACER CLIC */}
        <div className="flex items-center gap-1 sm:gap-1.5 group">
          
          {/* 1. CLIC EN EL ISOTIPO / LOGO DE MONTAÑA */}
          <Link
            href="#inicio"
            onClick={(e) => handleNavClick(e, "#inicio")}
            className="relative w-20 h-16 sm:w-24 sm:h-20 lg:w-28 lg:h-22 flex-shrink-0 cursor-pointer"
          >
            <Image
              src="/logo_1.png"
              alt="Manantial Verde Isotipo"
              fill
              priority
              sizes="(max-width: 768px) 96px, 112px"
              className="object-contain object-center transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* 2. CLIC EN EL TEXTO / LOGO DE LETRAS */}
          <Link
            href="#inicio"
            onClick={(e) => handleNavClick(e, "#inicio")}
            className="relative w-36 h-10 sm:w-44 sm:h-12 lg:w-52 lg:h-14 -ml-2 sm:-ml-3 cursor-pointer"
          >
            <Image
              src="/logo_letra.png"
              alt="Manantial Verde Agua de Mesa"
              fill
              priority
              sizes="(max-width: 768px) 176px, 208px"
              className="object-contain object-left transition-opacity duration-200 hover:opacity-90"
            />
          </Link>

        </div>

        {/* MENÚ DESKTOP CON DESPLAZAMIENTO SUAVE */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative text-emerald-950 hover:text-emerald-600 font-medium text-base lg:text-lg tracking-normal transition-colors duration-200 group py-1"
            >
              {link.name}
              {/* Animación de subrayado verde */}
              <span className="absolute left-0 bottom-0 w-0 h-[2.5px] bg-emerald-500 rounded-full transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* BOTÓN MÓVIL */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
            className="text-emerald-900 hover:text-emerald-600 focus:outline-none p-2 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL CON DESPLAZAMIENTO SUAVE */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-emerald-100 px-6 pt-4 pb-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-emerald-950 hover:text-emerald-600 hover:translate-x-1 font-medium text-lg tracking-normal py-2 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}