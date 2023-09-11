
## 📁 DOCUMENTAÇÃO
<h3 align="left">✅ Entendendo o Next.js </h3>
<br /><br />
<div style="display: inline_block" align="center">
<img  width="65%" src="https://github.com/ProjetoSolaresUfes/barcos-frontend/assets/80075307/93640e4d-7a8a-44fa-82d8-e54ca98929a4">
<div style="display: inline_block" align="left">


<h3 align="left">✅ Iniciando o projeto </h3>
Caso seja a sua primeira vez utilizando o Next.js sugiro assistir a seguinte capacitação:
 </a>
 <p align="just">
  Capacitação de Desenvolvimento Web feita por André Cunha 10/05/2023
  <a href="https://www.youtube.com/watch?v=7ItQiJ0FrWo"
  <br /><br />
 </a>

Com o Next.js configurado em sua máquina e com o projeto criado, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra -> [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

Você pode começar a editar a página modificando `pages/index.tsx` que se localiza dentro de `src/`. A página é atualizada automaticamente conforme você edita o arquivo e sera mostrada no localhost.
<br /><br />


# 📂 Components
<h3 align="left">✅ Adicionando um novo componente na tela </h3>
No Next.js, os "components" são blocos de código reutilizáveis que encapsulam parte da lógica e da interface do usuário de uma página ou aplicativo.
Depois de criar um componente, você pode importá-lo e usá-lo em outras partes do seu do projeto. 
<br /><br />

Para adicionar novos componentes ao front end, é necessário trabalhar com as pastas que estão contidas dentro de `src/componentes`. 

-   Crie um novo arquivo TypeScript na pasta  `src/componentes`.  -> Ex: `componenteX.tsx`.
-   É necessário exportar a função que gera o componente (no mesmo arquivo).  -> Ex: `export default function criaComponenteX{... lógica do componente...}`
-   No arquivo  `pages/index.tsx` deve importar o componente criado. -> Ex: `import { criaComponenteX } from "@/components/componenteX";`
-   Deve utilizar o componte dentro da função `Home(){..}` do  `pages/index.tsx`.

Atualmente temos os seguintes componentes adicionado a tela:
<div style="display: inline_block" align="center">
<br /><br />
<img  width="40%" src="https://github.com/ProjetoSolaresUfes/barcos-frontend/assets/80075307/06a26fa6-a5c8-4645-a2a9-2afbb684fb64">
<br /><br />
<div style="display: inline_block" align="left">

<h3 align="left">✅ CardDisplayData </h3>
<h3 align="left">✅ Chart </h3>
<h3 align="left">✅ Chat </h3>
<h3 align="left">✅ Dropdown </h3>
<h3 align="left">✅ Sidebar </h3>
<h3 align="left">✅ ThemeToggle </h3>
<h3 align="left">✅ UsersCard </h3>





<h3 align="left">📂 Firebase </h3>


<img  width="40%" src="
<h3 align="left">✅ index </h3>

<h3 align="left">📂 functions </h3>
    <h3 align="left">✅ auth </h3>
    <h3 align="left">✅ firestore </h3>
    <h3 align="left">✅ storage </h3>

<h3 align="left">✅ index </h3>

<h3 align="left">📂 Mock </h3>

   <h3 align="left">✅ dados </h3>

<h3 align="left">📂 Pages </h3> 
No Next.js não é preciso realizar nenhum tipo de configuração ou utilizar bibliotecas para fazer o tratamento de rotas, basta criar uma página dentro da pasta "pages" que irá ficar subentendido para a aplicação que os arquivos com extensão ".jsx" é uma rota acessível 
Ao criar um arquivo dentro da pasta “pages”, o Next.js automaticamente irá assumir que o nome daquele arquivo é um endereço acessível da sua aplicação. Caso seja necessário criar algum arquivo ou alguma pasta dentro dessa pasta que não será vista como um endereço, basta acrescentar o “_” antes do nome do arquivo ou pasta.
<br /><br />
<div style="display: inline_block" align="center">
<img  width="40%" src="https://github.com/ProjetoSolaresUfes/barcos-frontend/assets/80075307/d2319a27-88ca-422e-83b6-3634195602c0">
<div style="display: inline_block" align="left">

  
<h3 align="left">✅ _app </h3>
No Next.js, o arquivo _app.tsx é usado para fornecer uma estrutura global para sua aplicação. Ele é responsável por fornecer componentes compartilhados, como cabeçalho e rodapé, em todas as páginas da sua aplicação.

Em nosso projeto, declaramos três estados iniciais utilizando Hook useState:
-  recordStatus
-  isAuthenticated
-  erroAutenticacao.
  
Esses estados serão usados para controlar o status de gravação, o estado de autenticação do usuário e qualquer erro de autenticação.


**UserEfect:** 
- É configurado um observador (onAuthStateChanged) para verificar o estado da autenticação do usuário. Quando o estado de autenticação do usuário muda, uma função é executada para verificar se o usuário está autorizado com base em informações obtidas de uma coleção chamada "users" no Firebase Firestore.
-  Há um evento de escuta de socket chamado "recordStatus" que atualiza o estado recordStatus quando o status de gravação muda.

**Renderização condicional:** 
-  Caso o usuário não esteja autenticado (!isAuthenticated), o código renderiza um botão "Entrar com o Google" que permite ao usuário fazer login com sua conta do Google. Se ocorrer um erro de autenticação (erroAutenticacao for verdadeiro), uma mensagem de erro é exibida.
-  Caso o usuário esteja autenticado (isAuthenticated), o código renderiza um componente Sidebar e o conteúdo da página principal, que é controlado pela prop Component. Isso inclui a capacidade de iniciar ou parar uma gravação, dependendo do valor de recordStatus.



<h3 align="left">✅ _document </h3>
O arquivo _document.tsx é usado para controlar o HTML que será renderizado no lado do servidor. É neste arquivo que você pode adicionar meta tags, scripts, estilos e outros elementos que serão compartilhados por todas as páginas da sua aplicação.
O componente Head é usado para definir as configurações do cabeçalho HTML, como links para folhas de estilo, links para ícones e meta informações. O componente Html define a estrutura básica do HTML, incluindo a linguagem da página.

(Em nosso projeto utilizamos um modelo básico do _document)

<h3 align="left">✅ files </h3>

Esse componente trabalha com operações de manipulação de arquivos, incluindo `listagem`, `download` e `exclusão` em um ambiente de armazenamento Firebase. Nele há duas funções assíncronas e ao final, a interface renderizada é uma lista de arquivos, onde cada arquivo tem dois botões: um para baixar (`handleDownloadFile`) e outro para deletar (`handleDeleteFile`).

- handleDownloadFile: É uma função que lida com o `download` de um arquivo. Ela usa a função `getFile` para obter o URL do arquivo e em seguida utiliza o `fetch` para baixá-lo.
O arquivo é criado como um `Blob` (objeto binário) e um link é criado para ele no `DOM`. Por fim, o elemento é adicionado ao corpo do documento e é simulado um clique nele para iniciar o download.

- handleDeleteFile: É uma função que lida com a `exclusão` de um arquivo. Usa a função `deleteFile` para remover o arquivo do armazenamento e atualiza o estado files para filtrar o arquivo excluído.



<h3 align="left">✅ index </h3>
O arquivo index.jsx é um arquivo TypeScript que geralmente é usado para representar a página inicial do projeto. O nome index.jsx é uma convenção comum para esse propósito.
Para modificar o arquivo index.jsx de um projeto, você deve seguir estas etapas:

- Localize o arquivo index.jsx: `src/pages/index.tsx`
- Edite o arquivo: Abra o arquivo pages.jsx no seu editor de código preferido. (Eu recomendo o Visual Studio Code) 
- Teste a página: Abra o navegador com a url do local host.

Nossa equipe utiliza este arquivo para exibir dados em tempo real de nosso barco `POENTE` e nele temos:

- Estado com useState: O nosso componente `Home` utiliza o `hook` useState do React para gerenciar o estado local de:

   - `dadoAtualBarco`: Armazena os dados atuais do barco.
   - `dadosBarco`: Armazena uma lista de dados do barco.
   - `dataForChart`: Armazena os dados formatados para serem exibidos em um gráfico.
   - `dataForChat`: Armazena uma string formatada para ser usada em um chat.
   - `speed`: Armazena a velocidade do barco.

- Blocos UserEffect (Existem dois):
  
  - O `primeiro` é usado para se `inscrever` a eventos do socket. Isso significa que quando os eventos `info`, `speedInfo` e `nameInfo` são emitidos pelo servidor de socket, as
     funções fornecidas serão executadas.

  - O `segundo` useEffect é usado para `atualizar` os dados que serão usados no gráfico e no chat. Ele depende do estado `dadosBarco`, o que significa que sempre que dadosBarco for
    atualizado, este useEffect será executado.

- Manipulação de eventos: Existe um `dropdown` que permite ao usuário selecionar o nome do piloto. Isso altera o estado selectedOption e emite um evento para o servidor de socket e um botão para mudança de tema (dark/light).


<h3 align="left">✅ users </h3>

Este arquivo cria uma página que `exibe` informações de usuários, permite a `adição` de novos usuários através de um alerta e utiliza o Firebase para obter e `atualizar` os dados em tempo real.

- O componente Users: Define um estado chamado users para armazenar as informações dos usuários e utiliza o hook useEffect para buscar os dados dos usuários em tempo real do Firestore ao montar o componente e ao fim, renderiza um componente `UsersCard`, passando a lista de usuários e uma função para adicionar novos usuários.
  


---

---
<h3 align="left">📂 Routes </h3>
   <h3 align="left">✅ index </h3>

---
<h3 align="left">📂 Services </h3>
   <h3 align="left">✅ socketio </h3>

---
<h3 align="left">📂 Styles </h3>
   <h3 align="left">✅ globals </h3>

---
<h3 align="left">📂 Types </h3>
   <h3 align="left">✅ ChartData </h3>

---
<h3 align="left">📂 Utils </h3>
   <h3 align="left">✅ ChartData </h3>

---
<h3 align="left">📂 Tailwind e .jason </h3>
   <h3 align="left">✅ ChartData </h3>

links interessantes:

https://community.revelo.com.br/guia-basico-para-iniciar-com-next-js-parte-i/


## 📁 DOCUMENTAÇÃO
<h3 align="left">✅ Entendendo o Next.js </h3>
<br /><br />
<div style="display: inline_block" align="center">
<img  width="65%" src="https://github.com/ProjetoSolaresUfes/barcos-frontend/assets/80075307/93640e4d-7a8a-44fa-82d8-e54ca98929a4">
<div style="display: inline_block" align="left">


<h3 align="left">✅ Iniciando o projeto </h3>
Caso seja a sua primeira vez utilizando o Next.js sugiro assistir a seguinte capacitação:
 </a>
 <p align="just">
  Capacitação de Desenvolvimento Web feita por André Cunha 10/05/2023
  <a href="https://www.youtube.com/watch?v=7ItQiJ0FrWo"
  <br /><br />
 </a>

Com o Next.js configurado em sua máquina e com o projeto criado, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra -> [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

Você pode começar a editar a página modificando `pages/index.tsx` que se localiza dentro de `src/`. A página é atualizada automaticamente conforme você edita o arquivo e sera mostrada no localhost.
<br /><br />


# 📂 Components
<h3 align="left">✅ Adicionando um novo componente na tela </h3>
No Next.js, os "components" são blocos de código reutilizáveis que encapsulam parte da lógica e da interface do usuário de uma página ou aplicativo.
Depois de criar um componente, você pode importá-lo e usá-lo em outras partes do seu do projeto. 
<br /><br />

Para adicionar novos componentes ao front end, é necessário trabalhar com as pastas que estão contidas dentro de `src/componentes`. 

-   Crie um novo arquivo TypeScript na pasta  `src/componentes`.  -> Ex: `componenteX.tsx`.
-   É necessário exportar a função que gera o componente (no mesmo arquivo).  -> Ex: `export default function criaComponenteX{... lógica do componente...}`
-   No arquivo  `pages/index.tsx` deve importar o componente criado. -> Ex: `import { criaComponenteX } from "@/components/componenteX";`
-   Deve utilizar o componte dentro da função `Home(){..}` do  `pages/index.tsx`.

Atualmente temos os seguintes componentes adicionado a tela:
<div style="display: inline_block" align="center">
<br /><br />
<img  width="40%" src="https://github.com/ProjetoSolaresUfes/barcos-frontend/assets/80075307/06a26fa6-a5c8-4645-a2a9-2afbb684fb64">
<br /><br />
<div style="display: inline_block" align="left">

<h3 align="left">✅ CardDisplayData </h3>
<h3 align="left">✅ Chart </h3>
<h3 align="left">✅ Chat </h3>
<h3 align="left">✅ Dropdown </h3>
<h3 align="left">✅ Sidebar </h3>
<h3 align="left">✅ ThemeToggle </h3>
<h3 align="left">✅ UsersCard </h3>





<h3 align="left">📂 Firebase </h3>


<img  width="40%" src="
<h3 align="left">✅ index </h3>

<h3 align="left">📂 functions </h3>
    <h3 align="left">✅ auth </h3>
    <h3 align="left">✅ firestore </h3>
    <h3 align="left">✅ storage </h3>

<h3 align="left">✅ index </h3>

<h3 align="left">📂 Mock </h3>

   <h3 align="left">✅ dados </h3>

<h3 align="left">📂 Pages </h3> 
No Next.js não é preciso realizar nenhum tipo de configuração ou utilizar bibliotecas para fazer o tratamento de rotas, basta criar uma página dentro da pasta "pages" que irá ficar subentendido para a aplicação que os arquivos com extensão ".jsx" é uma rota acessível 
Ao criar um arquivo dentro da pasta “pages”, o Next.js automaticamente irá assumir que o nome daquele arquivo é um endereço acessível da sua aplicação. Caso seja necessário criar algum arquivo ou alguma pasta dentro dessa pasta que não será vista como um endereço, basta acrescentar o “_” antes do nome do arquivo ou pasta.
<br /><br />
<div style="display: inline_block" align="center">
<img  width="40%" src="https://github.com/ProjetoSolaresUfes/barcos-frontend/assets/80075307/d2319a27-88ca-422e-83b6-3634195602c0">
<div style="display: inline_block" align="left">

  
<h3 align="left">✅ _app </h3>
No Next.js, o arquivo _app.tsx é usado para fornecer uma estrutura global para sua aplicação. Ele é responsável por fornecer componentes compartilhados, como cabeçalho e rodapé, em todas as páginas da sua aplicação.

Em nosso projeto, declaramos três estados iniciais utilizando Hook useState:
-  recordStatus
-  isAuthenticated
-  erroAutenticacao.
  
Esses estados serão usados para controlar o status de gravação, o estado de autenticação do usuário e qualquer erro de autenticação.


**UserEfect:** 
- É configurado um observador (onAuthStateChanged) para verificar o estado da autenticação do usuário. Quando o estado de autenticação do usuário muda, uma função é executada para verificar se o usuário está autorizado com base em informações obtidas de uma coleção chamada "users" no Firebase Firestore.
-  Há um evento de escuta de socket chamado "recordStatus" que atualiza o estado recordStatus quando o status de gravação muda.

**Renderização condicional:** 
-  Caso o usuário não esteja autenticado (!isAuthenticated), o código renderiza um botão "Entrar com o Google" que permite ao usuário fazer login com sua conta do Google. Se ocorrer um erro de autenticação (erroAutenticacao for verdadeiro), uma mensagem de erro é exibida.
-  Caso o usuário esteja autenticado (isAuthenticated), o código renderiza um componente Sidebar e o conteúdo da página principal, que é controlado pela prop Component. Isso inclui a capacidade de iniciar ou parar uma gravação, dependendo do valor de recordStatus.



<h3 align="left">✅ _document </h3>
O arquivo _document.tsx é usado para controlar o HTML que será renderizado no lado do servidor. É neste arquivo que você pode adicionar meta tags, scripts, estilos e outros elementos que serão compartilhados por todas as páginas da sua aplicação.
O componente Head é usado para definir as configurações do cabeçalho HTML, como links para folhas de estilo, links para ícones e meta informações. O componente Html define a estrutura básica do HTML, incluindo a linguagem da página.

(Em nosso projeto utilizamos um modelo básico do _document)

<h3 align="left">✅ files </h3>

Esse componente trabalha com operações de manipulação de arquivos, incluindo `listagem`, `download` e `exclusão` em um ambiente de armazenamento Firebase. Nele há duas funções assíncronas e ao final, a interface renderizada é uma lista de arquivos, onde cada arquivo tem dois botões: um para baixar (`handleDownloadFile`) e outro para deletar (`handleDeleteFile`).

- handleDownloadFile: É uma função que lida com o `download` de um arquivo. Ela usa a função `getFile` para obter o URL do arquivo e em seguida utiliza o `fetch` para baixá-lo.
O arquivo é criado como um `Blob` (objeto binário) e um link é criado para ele no `DOM`. Por fim, o elemento é adicionado ao corpo do documento e é simulado um clique nele para iniciar o download.

- handleDeleteFile: É uma função que lida com a `exclusão` de um arquivo. Usa a função `deleteFile` para remover o arquivo do armazenamento e atualiza o estado files para filtrar o arquivo excluído.



<h3 align="left">✅ index </h3>
O arquivo index.jsx é um arquivo TypeScript que geralmente é usado para representar a página inicial do projeto. O nome index.jsx é uma convenção comum para esse propósito.
Para modificar o arquivo index.jsx de um projeto, você deve seguir estas etapas:

- Localize o arquivo index.jsx: `src/pages/index.tsx`
- Edite o arquivo: Abra o arquivo pages.jsx no seu editor de código preferido. (Eu recomendo o Visual Studio Code) 
- Teste a página: Abra o navegador com a url do local host.

Nossa equipe utiliza este arquivo para exibir dados em tempo real de nosso barco `POENTE` e nele temos:

- Estado com useState: O nosso componente `Home` utiliza o `hook` useState do React para gerenciar o estado local de:

   - `dadoAtualBarco`: Armazena os dados atuais do barco.
   - `dadosBarco`: Armazena uma lista de dados do barco.
   - `dataForChart`: Armazena os dados formatados para serem exibidos em um gráfico.
   - `dataForChat`: Armazena uma string formatada para ser usada em um chat.
   - `speed`: Armazena a velocidade do barco.

- Blocos UserEffect (Existem dois):
  
  - O `primeiro` é usado para se `inscrever` a eventos do socket. Isso significa que quando os eventos `info`, `speedInfo` e `nameInfo` são emitidos pelo servidor de socket, as
     funções fornecidas serão executadas.

  - O `segundo` useEffect é usado para `atualizar` os dados que serão usados no gráfico e no chat. Ele depende do estado `dadosBarco`, o que significa que sempre que dadosBarco for
    atualizado, este useEffect será executado.

- Manipulação de eventos: Existe um `dropdown` que permite ao usuário selecionar o nome do piloto. Isso altera o estado selectedOption e emite um evento para o servidor de socket e um botão para mudança de tema (dark/light).


<h3 align="left">✅ users </h3>

Este arquivo cria uma página que `exibe` informações de usuários, permite a `adição` de novos usuários através de um alerta e utiliza o Firebase para obter e `atualizar` os dados em tempo real.

- O componente Users: Define um estado chamado users para armazenar as informações dos usuários e utiliza o hook useEffect para buscar os dados dos usuários em tempo real do Firestore ao montar o componente e ao fim, renderiza um componente `UsersCard`, passando a lista de usuários e uma função para adicionar novos usuários.
  


---

---
<h3 align="left">📂 Routes </h3>
   <h3 align="left">✅ index </h3>

---
<h3 align="left">📂 Services </h3>
   <h3 align="left">✅ socketio </h3>

---
<h3 align="left">📂 Styles </h3>
   <h3 align="left">✅ globals </h3>

---
<h3 align="left">📂 Types </h3>
   <h3 align="left">✅ ChartData </h3>

---
<h3 align="left">📂 Utils </h3>
   <h3 align="left">✅ ChartData </h3>

---
<h3 align="left">📂 Tailwind e .jason </h3>
   <h3 align="left">✅ ChartData </h3>

links interessantes:

https://community.revelo.com.br/guia-basico-para-iniciar-com-next-js-parte-i/

