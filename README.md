
# Documentação Frontend - Re.Colhe

## Estrutura de Pastas e Organização do Código

```
src/
├── components/
│   ├── Accordion/
│   ├── FooterNavBar/
│   ├── Header/
│   ├── InputBar/
│   ├── LocationCard/
│   ├── LocationList/
│   ├── Map/
│   ├── NavButton/
│   └── SearchBar/
├── pages/
│   ├── Ajuda/
│   ├── Aprender/
│   ├── DadosUsuario/
│   ├── DicasReciclagem/
│   ├── EmDesenvolvimento/
│   ├── Forum/
│   ├── Home/
│   ├── Inicio/
│   ├── Login/
│   ├── Menu/
│   ├── MenuDicas/
│   ├── Notificacoes/
│   ├── NovaSolicitacao/
│   ├── PerfilSelector/
│   ├── PevsFavoritos/
│   └── PontosDeColeta/
├── services/
│   ├── authService.ts
│   ├── favoritesService.ts
│   └── pevService.ts
├── types/
│   └── locations.ts
└── mocks/
    └── notificacoesMock.ts
```

## Tema (Style Guide)

### Cores
```css
--soft-white: #f9fafb;
--moss-green: #011c15;
--light-natural-green: #d2edbe;
--green-forest: #01402f;
--brigth-green: #22b54b;
--highlight-green: #d0fe95;
--background-gradient: linear-gradient(180deg, #d0fe95 0%, #f9fafb 100%);
```

### Tipografia
**Coolvetica** - Títulos
- Tamanhos: 1.75rem, 1.375rem, 1.125rem
- Peso: 400 (regular)

**Poppins** - Texto, botões, labels  
- Tamanhos: 1.25rem, 1rem, 0.875rem
- Pesos: 400, 500, 600

### Espaçamento
Base: 8px system
- 0.5rem (8px)
- 1rem (16px) 
- 1.5rem (24px)
- 2rem (32px)

### Border Radius
- 8px (small)
- 12px (medium)
- 14.37px (large)

## Componentes Base

### 1. **Accordion**
- Conteúdo expansível/retrátil
- Seta animada rotação
- Usado na página Ajuda

### 2. **NavButton**
- Navegação entre rotas React Router
- Suporte a navegação com estado
- Botão genérico com children

### 3. **InputBar**
- Campo de entrada de texto
- Ícone olho para senha
- Ícone editar para dados
- Contador de caracteres

### 4. **SearchBar**
- Busca com ícone lupa
- Submit por formulário
- Placeholder customizável

### 5. **Header**
- Logo na Home / Botão voltar nas outras
- Avatar morador/empresa
- Ícone notificações

### 6. **FooterNavBar**
- 4 ícones de navegação inferior
- Ícones ativos por rota atual
- Posição fixed bottom

### 7. **LocationCard**
- Card de ponto de coleta
- Ícone material reciclável
- Botão favorito com toggle
- Informações: endereço, horário, telefone

### 8. **LocationList**
- Lista de LocationCards
- Empty state quando vazia
- Filtro por material

### 9. **Map**
- Mapa Leaflet com marcadores
- Pins coloridos por tipo de material
- Popup com informações do PEV


## Navegação

### Rotas Principais:
```
/ → Inicio
/selecionar-perfil → PerfilSelector  
/login → Login
/home → Home
/menu → Menu
/meus-dados → DadosUsuario
/pevs → PevsFavoritos
/em-desenvolvimento → EmDesenvolvimento
/ajuda → Ajuda
/notificacoes → Notificacoes
/pontos-de-coleta → PontosDeColeta
/forum → Forum
/menu-dicas → MenuDicas
/nova-solicitacao → NovaSolicitacao
/dicas-reciclagem → DicasReciclagem
/aprenda → Aprender
```

### Fluxo Usuário:
```
Inicio → PerfilSelector → Login → Home
     ↳ PontosDeColeta
     ↳ Forum
     ↳ MenuDicas → DicasReciclagem
                ↳ Aprender
     ↳ Menu → MeusDados
           ↳ PevsFavoritos  
           ↳ Ajuda
           ↳ EmDesenvolvimento
     ↳ Notificacoes
     ↳ NovaSolicitacao
```

Você está certo. Não existem essas interfaces. Vou corrigir com a realidade:

## Gestão de Estado

### Implementação Atual:
**LocalStorage** para persistência básica:
```typescript
// Dados de usuário
localStorage.setItem('userType', 'morador' | 'empresa');
localStorage.setItem('userName', 'Nome Usuário');
localStorage.setItem('email', 'email@usuario.com');
localStorage.setItem('cep', '00000-000');
localStorage.setItem('token', 'auth-token');
localStorage.setItem('usuarioId', '123');
localStorage.setItem('userTypeApi', 'Comum' | 'Colaborador');
```

### Arquitetura Escolhida:
- **Atual**: localStorage + useState (já implementado)
- **Futuro**: Manter estrutura atual - funciona bem para o escopo

### Estrutura Estado:
```typescript
// Dados armazenados no localStorage
- userType: string
- userName: string  
- email: string
- cep: string
- token: string
- usuarioId: string
- userTypeApi: string

// Estados locais nos componentes
- email: string (Login)
- senha: string (Login) 
- isOpen: boolean (Accordion)
- abaAtiva: string (Forum/Notificações)
- favorite: boolean (LocationCard)
- userType: string | null (vários componentes)
- locations: Location[] (PontosDeColeta)
- filteredLocations: Location[] (PontosDeColeta)
- favorites: Location[] (PevsFavoritos)
- loading: boolean (vários componentes)
```

## Dependências Principais

### Core Framework:
```json
"react": "^19.1.1",
"react-dom": "^19.1.1", 
"react-router-dom": "^7.9.5",
"typescript": "~5.9.3"
```

### UI e Mapas:
```json
"leaflet": "^1.9.4",
"react-leaflet": "^5.0.0"
```

### HTTP e Autenticação:
```json
"axios": "^1.13.1",
"jwt-decode": "^4.0.0"
```

### Desenvolvimento:
```json
"vite": "^7.1.7",
"@vitejs/plugin-react": "^5.0.4",
"@types/leaflet": "^1.9.21",
"@types/react": "^19.1.16",
"@types/react-dom": "^19.1.9",
"eslint": "^9.36.0"
```

### Padrões de Desenvolvimento:
- Components: `PascalCase`
- TypeScript para type safety  
- CSS modules com variáveis CSS
- Mobile-first responsive design
- Bundler: Vite
- Linter: ESLint










