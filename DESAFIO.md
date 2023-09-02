**Maior Dificuldade**
```
A maior dificuldade que enfrentei ao realizar o teste foi a integração com a API de do VIA CEP, porque era preciso integrar a lógica de busca ao colocar a rua, mas com isso era preciso deixar definido algum estado/cidade como referência. Com isso, decidi usar a Api do IBGE para essa consulta e mostrar os dados disponíveis de modo que ficou prático para o usuário fazer a busca.
```


**Funcionalidade e Bibliotecas**


**Funcionalidades**

```
Mostragem do tempo atual e dos próximos baseado na geolocalização do usuário

Mostragem de ruas baseado na pesquisa fornecida pela pessoa

Envio de formulário com console.log dos dados do formulário e retorno nulo
```

- Next Js
- Tailwind CSS
- TypeScript
- Mobile First


**Bibliotecas**
```
OpenWeatherMap API: Optei por utilizar essa API para obter informações climáticas devido à sua ampla disponibilidade de dados atualizados e previsões precisas. 

Via CEP API / IBGE API : Utilizei a API do Via CEP para obter informações de endereço. Através da API do IBGE, obtive dados sobre a localidade com base no estado informado, para gerar os estados correspondentes. Esses dados foram integrados à interface para enriquecer a experiência do usuário, proporcionando uma compreensão mais completa do local, e foram bem simples de entender devido à sua documentação e usabilidade em outros projetos
```

**Daqui a 5 anos**
```
Daqui a 5 anos, me vejo como um profissional experiente e qualificado na área de desenvolvimento de software. Pretendo estar envolvido em projetos desafiadores que explorem tecnologias inovadoras, contribuindo para soluções criativas e impactantes. Além disso, pretendo continuar aprendendo e me atualizando constantemente, acompanhando as mudanças e avanços no campo da tecnologia.
```


**Melhoria na Experiência do Usuário(“Tchammmm!”)**
```
Para melhorar a experiência do usuário na minha aplicação, adicionei elementos visuais e informativos que tornam a visualização das informações climáticas mais agradável e compreensível. Utilizei ícones de clima correspondentes às condições climáticas, juntamente com descrições claras. 


Através dessas melhorias, busquei proporcionar uma experiência de usuário intuitiva e informativa, tornando a interação com o aplicativo mais agradável e útil.

Além da preocupação visual, teve implementos lógicicos: 
Dark Mode: Implementei um modo escuro que pode ser alternado pelo usuário. Isso é especialmente relevante para usuários que preferem interfaces com menor luminosidade, contribuindo para a acessibilidade e conforto visual.

Paginação na parte do CEP: Para melhorar a experiência do usuário, adicionei uma funcionalidade de paginação na exibição das informações do CEP. Como as informações podem ser extensas e detalhadas, a paginação permite uma visualização mais organizada, evitando sobrecarregar o usuário com uma única tela cheia de detalhes.

Previsão para os Próximos 5 Dias baseada na Geolocalização do Usuário: Além de fornecer o clima atual, implementei uma funcionalidade que utiliza a geolocalização do usuário para exibir a previsão do tempo para os próximos 5 dias. Essa funcionalidade é enriquecida com as descrições das condições climáticas e ícones representativos para cada dia, permitindo que o usuário planeje suas atividades de acordo com a previsão.
```
<a href="https://frontconstructor-next.vercel.app/">Site</a>
