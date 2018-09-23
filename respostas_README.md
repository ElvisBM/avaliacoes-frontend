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
R:

### b) Neste projeto, estamos usando os componentes gráficos da versão 4 da biblioteca gráfica do Ionic. Nesta versão, os componentes são Web Components. Explique o que são Web Components e explique quais são as vantagens deles.
R: 

### c) Para que serve a tag ngFor do angular?
R:


### d) O que o codigo abaixo representa no arquivo list.page.ts?
`legends: Array<string> = []`
R

### e) Como funciona a api Events do Ionic? Para que serve?
R: 

### f) O que é flexbox? Para que servem as tags ion-grid, ion-row, ion-col? Quais as vantagens em utilizálas?
R: 

## Angular Questão 6:

### a) Quais foram os problemas que você identificou?
R:

### b) Ordene os problemas por ordem de criticidade, ou seja, liste todos os problemas encontrados na ordem de quais deveriam ser corrigidos primeiro em um cenário onde devessemos priorizar as correções.
R:

### c) Justifique a ordem proposta no item anterior em termos de impacto para os usuários e dificuldade para corrigir o problema.
R: 

### d) Para que servem os comandos async e await, encontrados na função presentLoading do arquivo home.page.ts?
R:

### f) Quais as vantagens de utilizar async/await em códigos javascript/typescript?
R: