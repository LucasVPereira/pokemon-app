
# Pokémon List - Frontend React

## Descrição

Este projeto foi desenvolvido como parte de um desafio técnico de Frontend. Ele consome dados da PokéAPI para exibir uma lista de Pokémon em uma interface interativa. A aplicação permite a pesquisa, exibição de informações sobre Pokémon e a navegação por teclado para uma experiência mais acessível.

---

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface.
- **React Router**: Utilizado para roteamento dentro da aplicação.
- **React Query**: Para fazer o gerenciamento de dados assíncronos e cache de API.
- **Tailwind CSS**: Framework CSS para estilização responsiva e moderna.
- **PokéAPI v2**: API pública para obter dados sobre Pokémon.

---

## Como Rodar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:

```bash
git clone <URL_DO_REPOSITORIO>
cd <nome_do_diretorio>
```

2. **Instale as dependências**:

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**:

```bash
npm start
```

4. O projeto será iniciado no endereço `http://localhost:5173/` ou conforme configurado no Vite.

---

## Como Contribuir

Se você quiser contribuir com o projeto, siga esses passos:

1. **Faça um fork do repositório.**
2. **Clone o repositório forkado**:

```bash
git clone <URL_DO_SEU_FORK>
```

3. **Crie uma nova branch** para sua feature ou correção:

```bash
git checkout -b nome-da-branch
```

4. **Faça as modificações necessárias e commit as mudanças**:

```bash
git add .
git commit -m "Descrição do que foi feito"
```

5. **Suba suas alterações para o repositório remoto**:

```bash
git push origin nome-da-branch
```

6. **Abra um pull request** para que as mudanças sejam revisadas e mescladas.

---

## Funcionalidades

- **Exibição de Pokémons**: Mostra uma lista de Pokémon com seus nomes e imagens (fallback com iniciais caso a imagem não seja carregada).
- **Pesquisa por Nome**: O usuário pode pesquisar Pokémon por nome.
- **Badges de Habilidades**: Exibe as habilidades de cada Pokémon em formato de badge.
- **Foco e Navegação por Teclado**: A navegação entre os Pokémons é possível via teclas de seta e o campo de pesquisa pode ser focado com o atalho "CTRL + /".
- **Responsividade**: A interface é responsiva e se adapta a diferentes tamanhos de tela, funcionando bem em dispositivos móveis e desktops.

---

## Arquitetura e Estrutura de Pastas

A estrutura de pastas do projeto é organizada para facilitar a manutenção e escalabilidade. Abaixo está a explicação de cada diretório principal:

```bash
src/
│
├── components/          # Componentes reutilizáveis como o SearchBar, AvatarFallback e PokemonList
│   ├── AvatarFallback.tsx
│   ├── PokemonList.tsx
│   └── SearchBar.tsx
│
├── hooks/               # Custom hooks, como o usePokemon
│   └── usePokemon.ts
│
├── pages/               # Páginas do projeto, como Home
│   └── Home.tsx
│
├── App.tsx              # Componente principal onde as rotas são definidas
├── index.tsx            # Ponto de entrada da aplicação
└── main.tsx             # Arquivo responsável por configurar o React, React Query e Router
```

- **components**: Contém os componentes responsáveis pela interface do usuário.
- **hooks**: Contém hooks personalizados, como o `usePokemon`, para lidar com as chamadas da API.
- **pages**: Define as páginas da aplicação. Atualmente, temos apenas a página `Home`.
- **App.tsx**: Define as rotas e renderiza os componentes.
- **index.tsx**: Ponto de entrada da aplicação.
- **main.tsx**: Configuração principal para o React, React Query e React Router.

---