# NLW Agents

Projeto desenvolvido durante o bootcamp da **Rocketseat**, utilizando tecnologias modernas para criar uma aplicação web intera## 📡 Integração com API

A aplicação consome uma API REST em `http://localhost:3333` para:

- **Gerenciamento de Salas** - Criar e listar salas de perguntas
- **Sistema de Perguntas** - Criar perguntas e receber respostas da IA
- **Upload de Áudio** - Enviar gravações de áudio para as salas
- **Dados em Tempo Real** - Sincronização automática com cache inteligentee perguntas e respostas com IA.

## ✨ Funcionalidades

- 🏠 **Criação de Salas** - Crie salas para organizar perguntas por tópico
- 📝 **Sistema de Perguntas** - Faça perguntas e receba respostas geradas por IA
- 🎙️ **Gravação de Áudio** - Grave áudios nas salas para complementar as perguntas
- ⏱️ **Timestamps** - Visualize quando as perguntas foram feitas
- � **Atualizações em Tempo Real** - Interface reativa com cache otimizado
- 📱 **Design Responsivo** - Interface moderna e acessível

## �🚀 Tecnologias Utilizadas

### Frontend

- **React 19** - Biblioteca para construção da interface
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server ultrarrápido
- **React Router DOM** - Roteamento SPA

### Formulários e Validação

- **React Hook Form** - Gerenciamento de formulários performático
- **Zod** - Validação de esquemas TypeScript-first
- **Hookform Resolvers** - Integração entre React Hook Form e Zod

### Estilização

- **TailwindCSS 4** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis e primitivos
- **Lucide React** - Biblioteca de ícones
- **Class Variance Authority** - Gerenciamento de variantes de componentes

### Gerenciamento de Estado

- **TanStack Query (React Query)** - Gerenciamento de estado de servidor e cache

### Utilitários

- **Day.js** - Manipulação de datas e timestamps
- **Clsx & Tailwind Merge** - Utilitários para classes CSS condicionais

### Qualidade de Código

- **Biome** - Linter e formatter moderno
- **Ultracite** - Regras de lint avançadas
- **Shadcn/ui** - Sistema de componentes reutilizáveis

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                    # Componentes UI reutilizáveis (Shadcn/ui)
│   ├── create-room-form.tsx   # Formulário de criação de salas
│   ├── question-form.tsx      # Formulário de perguntas
│   ├── question-item.tsx      # Item individual de pergunta
│   ├── question-list.tsx      # Lista de perguntas
│   └── room-list.tsx          # Lista de salas
├── http/
│   ├── types/                 # Tipos TypeScript para API
│   ├── use-create-question.ts # Hook para criar perguntas
│   ├── use-create-room.ts     # Hook para criar salas
│   ├── use-room-questions.ts  # Hook para buscar perguntas
│   └── use-rooms.ts           # Hook para buscar salas
├── lib/
│   ├── dayjs.ts              # Configuração do Day.js
│   └── utils.ts              # Utilitários e helpers
├── pages/
│   ├── create-room.tsx       # Página de criação/listagem de salas
│   ├── room.tsx              # Página da sala com perguntas
│   └── record-room-audio.tsx # Página de gravação de áudio
├── app.tsx                   # Componente principal com rotas
└── main.tsx                  # Ponto de entrada
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
- **Custom Hooks** - Lógica reutilizável com TanStack Query para gerenciamento de estado
- **Atomic Design** - Organização de componentes em camadas (UI, Feature, Page)
- **Path Mapping** - Imports absolutos com alias `@/` para melhor organização
- **TypeScript Strict** - Tipagem rigorosa para maior segurança e DX
- **Form Validation** - Validação client-side com Zod e React Hook Form
- **Optimistic Updates** - Atualizações otimistas para melhor UX
- **Error Boundaries** - Tratamento de erros com fallbacks apropriados

## 🎨 Sistema de Design

O projeto utiliza o **Shadcn/ui** como base do design system, garantindo:

- Componentes acessíveis por padrão
- Consistência visual
- Customização via TailwindCSS
- Suporte a temas (dark/light)

## � Dependências do Projeto

### Servidor Backend

Este projeto frontend depende de um **servidor backend** que também faz parte do ecossistema NLW Agents.

📦 **Repositório do Servidor:** [nlw-agents-server](https://github.com/kelvincharlesdev/nlw-agents-server.git)

O servidor deve ser clonado, configurado e executado separadamente para o funcionamento completo da aplicação.

**Importante:** Certifique-se de que o servidor esteja rodando em `http://localhost:3333` antes de iniciar a aplicação frontend.

## �📡 Integração com API

A aplicação consome uma API REST em `http://localhost:3333` para:

- Listagem de salas
- Gerenciamento de dados em tempo real

## 🔧 Configurações Importantes

- **TailwindCSS**: Configurado via plugin Vite com suporte a variáveis CSS
- **TanStack Query**: Client-side caching e optimistic updates habilitados
- **Biome**: Linting e formatting configurado com Ultracite para máxima qualidade
- **Vite**: Hot reload, tree-shaking e otimizações automáticas
- **Shadcn/ui**: Sistema de componentes com suporte a temas dark/light
- **Day.js**: Configurado com locale pt-BR e plugin relativeTime
- **Media Recorder API**: Suporte nativo para gravação de áudio no navegador

---

**Desenvolvido durante o NLW da Rocketseat**
