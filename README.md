# NLW Agents

Projeto desenvolvido durante o bootcamp da **Rocketseat**, utilizando tecnologias modernas para criar uma aplicação web interativa.

## 🚀 Tecnologias Utilizadas

### Frontend

- **React 19** - Biblioteca para construção da interface
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server ultrarrápido
- **React Router DOM** - Roteamento SPA

### Estilização

- **TailwindCSS 4** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis e primitivos
- **Lucide React** - Biblioteca de ícones
- **Class Variance Authority** - Gerenciamento de variantes de componentes

### Gerenciamento de Estado

- **TanStack Query (React Query)** - Gerenciamento de estado de servidor e cache

### Qualidade de Código

- **Biome** - Linter e formatter moderno
- **Ultracite** - Regras de lint avançadas
- **Shadcn/ui** - Sistema de componentes reutilizáveis

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── ui/           # Componentes UI reutilizáveis
├── lib/
│   └── utils.ts      # Utilitários e helpers
├── pages/
│   ├── create-room.tsx
│   └── room.tsx
├── app.tsx           # Componente principal
└── main.tsx          # Ponto de entrada
```

## 🛠️ Configuração e Instalação

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/kelvincharlesdev/nlw-agents-web.git
cd web
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

4. Acesse `http://localhost:5173` no navegador

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview da build de produção
```

## 🏗️ Padrões de Projeto

- **Componentes Funcionais** - Uso exclusivo de React Function Components
- **Custom Hooks** - Lógica reutilizável com TanStack Query
- **Atomic Design** - Organização de componentes em camadas
- **Path Mapping** - Imports absolutos com alias `@/`
- **TypeScript Strict** - Tipagem rigorosa para maior segurança

## 🎨 Sistema de Design

O projeto utiliza o **Shadcn/ui** como base do design system, garantindo:

- Componentes acessíveis por padrão
- Consistência visual
- Customização via TailwindCSS
- Suporte a temas (dark/light)

## � Dependências do Projeto

### Servidor Backend

Este projeto frontend depende de um **servidor backend** que também faz parte do ecossistema NLW Agents.

📦 **Repositório do Servidor:** [nlw-agents-server](https://github.com/kelvincharlesdev/nlw-server.git)

O servidor deve ser clonado, configurado e executado separadamente para o funcionamento completo da aplicação.

**Importante:** Certifique-se de que o servidor esteja rodando em `http://localhost:3333` antes de iniciar a aplicação frontend.

## �📡 Integração com API

A aplicação consome uma API REST em `http://localhost:3333` para:

- Listagem de salas
- Gerenciamento de dados em tempo real

## 🔧 Configurações Importantes

- **TailwindCSS**: Configurado via plugin Vite
- **TanStack Query**: Client-side caching habilitado
- **Biome**: Linting e formatting configurado com Ultracite
- **Vite**: Hot reload e otimizações automáticas

---

**Desenvolvido com ❤️ durante o NLW da Rocketseat**
