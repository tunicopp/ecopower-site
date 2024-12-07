/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ["gsap"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Ativando a otimização de imagens com sharp
    formats: ["image/avif", "image/webp"],
  },
  // Adicionando configuração para evitar coleta de telemetria
  telemetry: false,
  experimental: {
    appDir: false, // Ajuste baseado nas configurações experimentais que deseja usar
  },
  webpack: (config) => {
    // Configurações adicionais, como aumentar a memória para processos de build
    config.optimization = {
      ...config.optimization,
      minimize: true,
    };
    return config;
  },
};

module.exports = nextConfig;
