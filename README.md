
## 🗃️ DOCUMENTAÇÃO
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

  Este é um componente funcional React chamado CardDisplayData, ele contém: 
  
  - `Interface CardDisplayDataProps`: Define um tipo de interface para as propriedades que queremos do nosso braco. Essa interface especifica quais propriedades podem ser passadas para o componente, bem como seus tipos.
  - `Função CardDisplayData`: Renderiza uma representação visual dos dados do barco com cada propriedade contendo um rótulo de unidade de medida associado a ela. As propriedades são inicializadas com valores padrão, caso não sejam fornecidas quando o componente é 
  usado.
  
  <h3 align="left">✅ Chart </h3>
  
  Este é um componente funcional React chamado Chart, ele contém a definição de um gráfico de linha usando a biblioteca `Carbon Charts` e o renderiza com base nos dados fornecidos através das props data. O gráfico é configurado usando o objeto options e é estilizado 
  com classes CSS.

  <h3 align="left">✅ Chat </h3>
  
  Este é um componente funcional React chamado Chat, ele renderiza uma interface de chat interativo (chat-bot) permitindo que o usuário envie perguntas para um servidor, que processa a pergunta e envia uma resposta de volta. A interface do chat inclui mensagens de 
  perguntas e respostas, um campo de entrada de texto para as perguntas e um botão de envio. Também há um botão de abertura/fechamento do chat quando ele está minimizado. Neste momento essa funcionalidade do componente esta em teste e o nosso objetivo com ele está 
  relacionado a ajudar a equipe de telemetria nas provas do DSB, onde ele irá fornecer informações confiáveis a respeito do estado do barco e com isso, a nossa equipe irá tomar decisões melhores em relação ao estado do barco e do tipo de prova visando o melhor 
  desempenho possível.
  
  <h3 align="left">✅ Dropdown </h3>
  
  Este é um componente funcional React chamado Dropdown, ele cria uma lista suspensa que permite ao usuário selecionar um piloto. Quando uma seleção é feita, a função onChange (fornecida como prop) é chamada com o novo valor selecionado e ao final, teremos os dados 
  (do barco) referente a um específico piloto para futuras análises de dados.
  
  <h3 align="left">✅ Sidebar </h3>
  
  Este é um componente funcional React chamado Dropdown, ele representa uma barra lateral de navegação presente na tela do frontend que pode ser aberta/fechada com um clique em um ícone de menu. Ela inclui opções de navegação, um botão para iniciar/parar a gravação e 
  um botão para deslogar da página.
  
  <h3 align="left">✅ ThemeToggle </h3>
  
  Este é um componente funcional React chamado Dropdown, ele cria um botão que permite ao usuário alternar entre os modos claro e escuro do tema no canto superior direito da página. Ele verifica se o componente está montado antes de renderizar para evitar possíveis  
  problemas durante a inicialização. Quando o botão é clicado, ele chama a função para trocar o tema, e exibe o ícone correspondente ao tema atual.
  
  <h3 align="left">✅ UsersCard </h3>
  
   Este é um componente funcional React chamado UsersCard, ele representa uma janela de exibição, adição e remoção de usuários autorizados onde cada um deles é representado com seu email e um ícone de lixeira para remoção.


--- 
<h3 align="left">📂 Firebase </h3>
  <div style="display: inline_block" align="center">
  <br /><br />
  <img  width="40%" src="https://github.com/ProjetoSolaresUfes/barcos-frontend/assets/80075307/41c61f6c-5905-40fd-a2cf-17cf2bb5365a">
  <br /><br />
  <div style="display: inline_block" align="left">
 
  <h3 align="left">📂 functions </h3>
      <h3 align="left">✅ auth </h3>
      <h3 align="left">✅ firestore </h3>
      <h3 align="left">✅ storage </h3>
      
   <h3 align="left">✅ index </h3>
   Este arquivo é responsável por configurar e inicializar o Firebase em nosso projeto, nele temos:

   - `Importações` do Firebase: Aqui se encontra toda importação necessária para inicializar e utilizar os serviços de autenticação, banco de dados Firestore e armazenamento.
   - `firebaseConfig`: Aqui está a configuração do Firebase que contém informações específicas do nosso projeto, como apiKey, authDomain, projectId, storageBucket, messagingSenderId e appId. Essas informações são lidas de variáveis de ambiente usando o process.env 
   para manter as credenciais seguras.
   - Inicialização Firebase e dos Serviços: Aqui temos:
     - `getFirestore`: Inicializa o Firestore, o banco de dados em tempo real do Firebase, e retorna uma instância do   
        Firestore associada à aplicação Firebase app.
     - `getAuth`: Inicializa o serviço de autenticação do Firebase e retorna uma instância de autenticação associada à 
        aplicação Firebase app.
     - `getStorage`: Inicializa o serviço de armazenamento do Firebase e retorna uma instância de armazenamento associada à 
        aplicação Firebase app.
 

--- 
<h3 align="left">📂 Mock </h3>
   <h3 align="left">✅ dados </h3>


--- 
<h3 align="left">📂 Pages </h3> 
   No Next.js não é preciso realizar nenhum tipo de configuração ou utilizar bibliotecas para fazer o tratamento de rotas, basta criar uma página dentro da pasta "pages" que irá ficar subentendido para a aplicação que os arquivos com extensão ".jsx" é uma rota 
   acessível 
   Ao criar um arquivo dentro da pasta “pages”, o Next.js automaticamente irá assumir que o nome daquele arquivo é um endereço acessível da sua aplicação. Caso seja necessário criar algum arquivo ou alguma pasta dentro dessa pasta que não será vista como um endereço, 
   basta acrescentar o “_” antes do nome do arquivo ou pasta.
   <br /><br />
   <div style="display: inline_block" align="center">
   <img  width="40%" src="https://github.com/ProjetoSolaresUfes/barcos-frontend/assets/80075307/d2319a27-88ca-422e-83b6-3634195602c0">
   <div style="display: inline_block" align="left">

   <h3 align="left">✅ _app </h3>
   No Next.js, o arquivo _app.tsx é usado para fornecer uma estrutura global para sua aplicação. Ele é responsável por fornecer componentes compartilhados, como cabeçalho e rodapé, em todas as páginas da sua aplicação.
      
   Em nosso projeto, declaramos três estados iniciais utilizando Hook useState:
      - `recordStatus`
      -  `isAuthenticated`
      -  `erroAutenticacao`
  
   Esses estados serão usados para controlar o status de gravação, o estado de autenticação do usuário e qualquer erro de autenticação.
   
    
   `UserEfect`: 
   - É configurado um observador (onAuthStateChanged) para verificar o estado da autenticação do usuário. Quando o estado de autenticação do usuário muda, uma função é executada para verificar se o usuário está autorizado com base em informações obtidas de uma coleção 
   chamada "users" no Firebase Firestore.
   -  Há um evento de escuta de socket chamado "recordStatus" que atualiza o estado recordStatus quando o status de gravação muda.
   
   `Renderização condicional`:
   -  Caso o usuário não esteja autenticado (!isAuthenticated), o código renderiza um botão "Entrar com o Google" que permite ao usuário fazer login com sua conta do Google. Se ocorrer um erro de autenticação (erroAutenticacao for verdadeiro), uma mensagem de erro é 
   exibida.
   -  Caso o usuário esteja autenticado (isAuthenticated), o código renderiza um componente Sidebar e o conteúdo da página principal, que é controlado pela prop Component. Isso inclui a capacidade de iniciar ou parar uma gravação, dependendo do valor de recordStatus.

   <h3 align="left">✅ _document </h3>
    O arquivo _document.tsx é usado para controlar o HTML que será renderizado no lado do servidor. É neste arquivo que você pode adicionar meta tags, scripts, estilos e outros elementos que serão compartilhados por todas as páginas da sua aplicação.
    O componente Head é usado para definir as configurações do cabeçalho HTML, como links para folhas de estilo, links para ícones e meta informações. O componente Html define a estrutura básica do HTML, incluindo a linguagem da página.
      
   (Em nosso projeto utilizamos um modelo básico do _document)
      
   <h3 align="left">✅ files </h3>
   
   Esse componente trabalha com operações de manipulação de arquivos, incluindo `listagem`, `download` e `exclusão` em um ambiente de armazenamento Firebase. Nele há duas funções assíncronas e ao final, a interface renderizada é uma lista de arquivos, onde cada 
   arquivo tem dois botões: um para baixar (`handleDownloadFile`) e outro para deletar (`handleDeleteFile`).
   
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
   
   - O componente Users: Define um estado chamado users para armazenar as informações dos usuários e utiliza o hook useEffect para buscar os dados dos usuários em tempo real do Firestore ao montar o componente e ao fim, renderiza um componente `UsersCard`, passando a 
   lista de usuários e uma função para adicionar novos usuários.
     

---
<h3 align="left">📂 Routes </h3>
   <h3 align="left">✅ index </h3>
   
   Este arquivo exporta um `menu` de navegação que contém os seguintes atributos:

   - name: O nome do item de menu.
   - href: O destino para onde o item de menu leva.
   - icon: Um componente de ícone React que será renderizado junto ao nome do item de menu.
---
<h3 align="left">📂 Services </h3>
   <h3 align="left">✅ socketio </h3>
   
---
<h3 align="left">📂 Styles </h3>
   <h3 align="left">✅ globals </h3>

---
<h3 align="left">📂 Types </h3>
   <h3 align="left">✅ ChartData </h3>
    Este arquivo contém a interface DadosBarco e ChartData que representa os dados do nosso barco no gráfico. 

  - `DadosBarco`: variáveis do tipo string
    - temperatura e umidade
    - velocidadeBarco e updateAt
    - estadoStringSolar1 e estadoStringSolar2
    - correnteMotor, correnteBaterias, correnteMPPT
    - tensaoSaidaMPPT, tensaoEntradaMPPT e tensaoAlimentacaoPCB]
  
 - `ChartData`: gropo de chave e valor.

---
<h3 align="left">📂 Utils </h3>
   <div style="display: inline_block" align="center">
   <br /><br />
   <img  width="40%" src="https://github.com/ProjetoSolaresUfes/barcos-frontend/assets/80075307/a013a0eb-192f-4a13-88d7-c08f7001c12c">
   <br /><br />
   <div style="display: inline_block" align="left">

   <h3 align="left">✅ Char </h3>
   
   Neste arquivo, esta presente uma a função `transformDataChart` que pega um array com os dados originais do tipo  `DadosBarco` que, extrai informações específicas de cada objeto e as
   reorganiza em um novo formato onde os pontos de dados são agrupados por tipo de dado e registrados com um carimbo de data/hora específico, que é mais adequado para ser usado em
   gráficos.
   
   <h3 align="left">✅ Chat-convert </h3>

   Neste arquivo, esta presente uma a função `formatDataChat` pega um array de objetos do tipo `DadosBarco` e os transforma em uma string formatada no estilo de um arquivo CSV, onde 
   cada linha representa um objeto e cada coluna é uma propriedade do objeto.
   
   <h3 align="left">✅ Popups </h3>

   Neste arquivo esta presente algumas funções que trabalham em conjunto para fornecer feedback ao usuário, são elas:

   - `ToastSuccess`: Esta função utiliza o `sweetalert2` para exibir uma notificação de sucesso no canto superior direito da tela por um curto período de tempo. A notificação inclui um ícone que indica o status (como "sucesso" ou "erro") e uma mensagem

   - `AlertAddEmail`: Utiliza o `Swal.fire` para exibir uma janela de alerta onde o usuário pode inserir um endereço de e-mail. O valor inserido é armazenado na variável email. Dependendo do resultado dessa operação, uma notificação de sucesso ou erro é exibida usando 
   a função ToastSucces

   <h3 align="left">✅ Screen </h3>
   
   Esse arquivo é responsável pelo controle do dimensionamento da janela a ser exibida, contém  uma função chamada `useWindowSize` que permite obter o tamanho atual da janela do navegador, e se atualizará automaticamente quando o usuário redimensionar a janela.

🔗 links interessantes:

https://community.revelo.com.br/guia-basico-para-iniciar-com-next-js-parte-i/

