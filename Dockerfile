# Etapa 1: Construir a aplicação
FROM node:18 AS build

# Diretório de trabalho no contêiner
WORKDIR /app

# Copiar os arquivos de dependência para o contêiner
COPY package.json package-lock.json ./

# Instalar as dependências
RUN npm install

# Instalar o pacote sharp para otimização de imagens
RUN npm install sharp

# Copiar o restante do código para o contêiner
COPY . .

# Construir o projeto Next.js com limite de memória ajustado
RUN NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Etapa 2: Rodar a aplicação
FROM node:18-alpine AS production

# Diretório de trabalho no contêiner
WORKDIR /app

# Copiar os arquivos construídos da etapa anterior
COPY --from=build /app /app

# Instalar apenas as dependências necessárias para produção
RUN npm install --production

# Expor a porta usada pelo Next.js
EXPOSE 3000

# Comando padrão para iniciar o servidor
CMD ["npm", "start"]
