export type CollectionItem = { name: string; description: string; image: string };

export const beds: CollectionItem[] = [
  { name: "Pier", description: "Design inspirado na leveza de um píer, com cabeceira integrada e visual contemporâneo.", image: "/catalogo/camas/pier-ambiente.jpg" },
  { name: "Amalfitana", description: "Linhas curvas e acabamento acolhedor para uma composição leve e sofisticada.", image: "/catalogo/camas/amalfitana-ambiente.jpg" },
  { name: "Utah", description: "Estrutura marcante, combinando madeira e tecido para um ambiente de personalidade.", image: "/catalogo/camas/utah-ambiente.jpg" },
  { name: "Flora", description: "Visual elegante e leve, pensado para composições contemporâneas e acolhedoras.", image: "/catalogo/camas/flora-ambiente.jpg" },
  { name: "Monza", description: "Cabeceira estruturada e detalhes que valorizam a presença da cama no ambiente.", image: "/catalogo/camas/monza-ambiente.jpg" },
  { name: "Roma", description: "Uma proposta clean e atemporal para quartos que pedem simplicidade e elegância.", image: "/catalogo/camas/roma-ambiente.jpg" },
];

export const headboards: CollectionItem[] = [
  "Quebec", "Oslo", "Atlântica", "Istambul", "Mileto", "Montreal", "Line", "Barcelona Classic", "Fiore", "Milão Classic", "Rubi", "Dubai", "Miami", "Mônaco Premium",
].map((name) => ({ name, description: "Modelo disponível em diferentes cores e tecidos. Consulte medidas e acabamentos.", image: `/catalogo/cabeceiras/${name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(" ", "-")}-ambiente.jpg` }));

export const guideArticles = [
  ["como-escolher-o-colchao-ideal", "Como escolher o colchão ideal: guia completo para comprar sem errar", "Guia de compra", "Organize a compra do colchão: medidas, necessidades de quem vai usar, teste na loja e informações que precisam estar claras antes da decisão."],
  ["melhor-colchao-para-casal", "Qual o melhor colchão para casal? Veja como escolher", "Perfil do consumidor", "Saiba como escolher um colchão para duas pessoas avaliando espaço individual, horários de sono, movimentos e preferências compartilhadas."],
  ["melhor-colchao-queen", "Qual o melhor colchão Queen? Guia completo", "Guia de compra", "Veja como planejar a compra de um colchão Queen: medida, circulação no quarto, base, altura do conjunto e teste a dois."],
  ["melhor-colchao-king", "Qual o melhor colchão King? O que avaliar antes de comprar", "Guia de compra", "Planeje um colchão King com atenção ao caminho da entrega, à base e ao espaço do quarto."],
  ["espuma-ou-molas", "Colchão de espuma ou molas: qual é melhor?", "Comparativos", "Compare o núcleo de espuma com o de molas e entenda o papel das camadas na escolha."],
  ["molas-ensacadas-ou-lfk", "Molas ensacadas ou molas LFK: qual escolher?", "Comparativos", "Entenda a diferença entre molas em invólucros individuais e o conjunto LFK."],
  ["colchao-para-dormir-de-lado", "Qual o melhor colchão para quem dorme de lado?", "Perfil do consumidor", "Aprenda a avaliar acolhimento de ombros e quadril, apoio do tronco e interação com o travesseiro."],
  ["colchao-firme-ou-macio", "Colchão firme ou macio: qual é melhor para você?", "Conforto e sono", "Diferencie firmeza, acolhimento e suporte para comparar colchões."],
  ["hora-de-trocar-colchao", "Quando é hora de trocar o colchão? 7 sinais de alerta", "Cuidados", "Conheça sinais para inspecionar a cama e saber quando investigar a base ou considerar a substituição."],
  ["como-cuidar-do-colchao", "Como cuidar do colchão para aumentar sua durabilidade", "Cuidados", "Aprenda a organizar limpeza, ventilação e proteção do colchão."],
  ["densidade-d28-d33-d45", "O que significa D28, D33, D45 e outras densidades de espuma?", "Conteúdo técnico", "Entenda densidades de espuma e evite confundi-las com firmeza ou capacidade de peso."],
  ["o-que-sao-molas-ensacadas", "O que são molas ensacadas e como elas funcionam?", "Conteúdo técnico", "Conheça a estrutura de molas em invólucros individuais e seus limites de informação."],
].map(([slug, title, category, excerpt]) => ({ slug, title, category, excerpt }));

