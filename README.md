# Folha de respostas

## Javascript Questão 2:

### a) No import da api do google maps no index.html, para que servem as tags async e defer?
R: Servem para controlar o momento do carregamento e execução dos scripts sem interromper o carregamento do html, async: carrega e executa o script de forma assíncrona, defer: carrega o script de forma assíncrona, porém executa após o html carregar.


### b) Para que serve o parâmetro &callback=initMap na url da api do google maps?
R: Para passar os paramentros do mapa, para a API do Maps que foi chamada.

### c) O que acontece quando removemos o parâmetro &callback=initMap da url da api do google maps? Explique o porque.
R: Ele não carrega o mapa do google, pois o initMap é o callback que passa as configurações, onde o mapa deve carregar, quais pontos serão mostrada e todas as infos do map que queremos visualizar.

### d) Descreva pelo menos uma forma de como podemos fazer com que a aplicação funcione corretamente mesmo sem este parâmetro.
R: sem o init Map vai precisar carregar o mapa e no load da página adicionar o evento e passar as configurações. <code>google.maps.event.addDomListener(window, 'load', initialize);</code>
* [exemplo que eu fiz]( https://github.com/Amarelo-Manga/wp-theme-arena-movistar/blob/master/assets/scripts/main.js)



### e) Explique para que servem as seguintes tags do index.html: 
  `<link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">`

R:`<link rel="manifest" href="manifest.json">` - Server para dizer qual o comportamento do site/app, como salvar o site na tela do celular e definir um logo para o mesmo.

`<meta name="theme-color" content="">` - Personaliza a cor da aba no navegador no qual o site foi aberto.

`<meta name="apple-mobile-web-app-capable" content="yes">` -  Colocar o site em tela cheias em mobiles/tables Apple, depois de instalado.

`<meta name="apple-mobile-web-app-status-bar-style" content="black">` - Para se o site rodar como APP ou site Automono ele retira a barra do APPle e o site fica em tela cheia.

### f) Está aplicação pode ser considerada um PWA? Em caso negativo, explique o que falta para que seja.
R:Não, Falta o service-work eo manifest.


## Angular Questão 4:

### a) Para que serve o método ngOnInit, quais são os outros métodos do Angular lifecycle hooks e para que servem?
R:`ngOnInit` é o método que dispara quando o componente é incializado, 
 `ngOnChanges` - Quando tem atualização do valor do property-binding e antes do ngOnInit
 `ngDoCheck` - verifica as mudanças dentro do ciclo do componente
 `ngAfterContentInit` - após a inserção de conteudo na view
 `ngAfterContentChecked` - após a verificação de conteudo inserido
 `ngAfterViewChecked `- após a verificação de conteudo inserido na view
 `ngOnDestroy `- antes de destruir o componente

### b) Neste projeto, estamos usando os componentes gráficos da versão 4 da biblioteca gráfica do Ionic. Nesta versão, os componentes são Web Components. Explique o que são Web Components e explique quais são as vantagens deles.
R: Web Components são um conjunto de ferramentas para o desenvolvimento web, que pode deixar a página mais dinâmica e interativa sem precisar utilizar plugins como o jquery, deixando o código mais semántico também, neste conjunto temos 4 técnologia: Custom Elements(Em vez de utilizar divs com classes em tudo, pode se criar tags htmls, deixando o código mais semántico e mais fácil o entendimento),  HTML Templates(cria uma espécie de snippets para ser utilizado no html, exemplo: Mustache), Shadow Dom( cria o encapsulamento dentro do html, sem que precise utilizar por exemplo iframe), HTML Import( possibilidade fazer import de html, assim como no PHP por exemplo), a desvantagem é que nem todos os navegadores estão utilizando e que ainda não tem tantos web components criados que são espécie de widgets que vá adicionando ao código, vantagens para o desenvolvedor pois para o cliente final o resultado é o mesmo.

### c) Para que serve a tag ngFor do angular?
R: ngFor é um laço de repetição para um array.


### d) O que o codigo abaixo representa no arquivo list.page.ts?
`legends: Array<string> = []`
R: Definição do array das legendas, que irá receber o objeto LEGENDS.

### e) Como funciona a api Events do Ionic? Para que serve?
R: Para controlar os envios e respostas dos eventos do aplicativo, como o login de um usuário, onde controla o envio do dados de login ea resposta se está correto ou não, um formulário de cadastro para controlar o envio das informações e o retorno se foi cadastrado ou não.

### f) O que é flexbox? Para que servem as tags ion-grid, ion-row, ion-col? Quais as vantagens em utilizálas?
R: Flex box é um modelo de desenvolvimento css flexivel para responsivo.  ion-grid, ion-row, ion-col? servem para criar o grid dá página utilizando das técnicas de flex-box, indentificando o grid, linhas e colunas para a disposição do conteudo a vantagem é utilizar as ténicas de Flexbox para deixar o layout fluido.

## Angular Questão 6:

### a) Quais foram os problemas que você identificou?
R: Declaração do NameSpace do objeto Loading Controller no import, declaração dentro do constructor, erro de escopo dismissLoading, faltando o this.

### b) Ordene os problemas por ordem de criticidade, ou seja, liste todos os problemas encontrados na ordem de quais deveriam ser corrigidos primeiro em um cenário onde devessemos priorizar as correções.
R: Declaração do LoadingController e o Escopo do dismiss loading.

### c) Justifique a ordem proposta no item anterior em termos de impacto para os usuários e dificuldade para corrigir o problema.
R: Primeiro o LoadingController pois afeta o não carregamento das imagens, depois o dismiss loagind, que mostra o loading para o user que está carregando.

### d) Para que servem os comandos async e await, encontrados na função presentLoading do arquivo home.page.ts?
R: `async` - carregar o conteudo assicrono no momento do carregamento.
   `await` - Espera o carregamento para poder e fica mostrando o loading até o carregamento das imagens para poder retirar o loading do usuário.

### f) Quais as vantagens de utilizar async/await em códigos javascript/typescript?
R:é um import da biblioteca lodash, que ajuda a trabalhar com arrays, numbers, objects e afins, ajudando o código ficar menos complexo e a manipulação mais fácil.
Está sendo usado no dismissLoading, para verificar se o retorno do this.loading é null.
* [Porém deixou uma ressalva que talvez o ES5 e ES6, possa não precisar disso, referência]( https://tableless.com.br/lodash-ou-underscore-talvez-nenhum)
