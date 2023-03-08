# Define a imagem base
FROM node:18-alpine

# Cria o diretório da aplicação dentro do contêiner
WORKDIR /app

# Copia o arquivo package.json e o arquivo yarn.lock
COPY package.json yarn.lock ./

# Instala as dependências
RUN yarn install --production

# Copia todo o código fonte para dentro do contêiner
COPY . .

# Define a pasta mapeada do servidor
VOLUME [ "/app/src/files" ]

# Compila a aplicação React
RUN yarn build

# Expõe a porta 80
EXPOSE 3000

# Define o comando a ser executado quando o contêiner for iniciado
CMD ["yarn", "start"]

