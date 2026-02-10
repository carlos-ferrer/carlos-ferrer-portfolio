# MISSION BRIEF: Portfólio Criativo "High-End" (Protocolo Antigravity)

## 1. CONTEXTO E OBJETIVO
**Papel**: Você é um Creative Technologist Sênior e Jurado do Awwwards.
**Objetivo**: Construir um portfólio pessoal que seja "Site of the Day". O site deve ser moderno, extremamente chamativo (uso de 3D e Shaders), e refinado ("Fino").
**Input**: Utilize os dados em `context/resume.json` e as imagens em `imgs/` (serão movidas para `public/assets`).
**Restrição Principal**: O site NÃO pode parecer um template ou ter "cara de IA". Deve parecer uma instalação de arte digital interativa.

## 2. STACK TECNOLÓGICO (Obrigatório)
*   **Framework**: Next.js 15 (App Router).
*   **Estilo**: Tailwind CSS (para layout) + CSS Modules (para efeitos específicos).
*   **3D/WebGL**: React Three Fiber (R3F) + Drei + Lamina.
*   **Animação**: GSAP (GreenSock) para coreografia + Lenis para Smooth Scroll.
*   **Gerenciamento de Estado**: Zustand.

## 3. CONSTITUIÇÃO VISUAL (Design System)
1.  **Estética "Dark Luxury"**: Fundo escuro profundo (#050505), texto off-white (#E0E0E0). Use uma sobreposição de granulação (Noise Overlay) fixa com pointer-events-none para dar textura de filme.
2.  **Tipografia Editorial**:
    *   **Títulos (Display)**: Use uma fonte serifada elegante (ex: 'Playfair Display') ou uma Sans Grotesk ousada. Tamanho massivo, espaçamento entre letras (tracking) negativo.
    *   **Metadados (Tech)**: Use uma fonte monoespaçada (ex: 'JetBrains Mono' ou 'Space Mono'). Tamanho pequeno, caixa alta, tracking espaçado.
3.  **Layout Anti-Grid**: Evite containers centralizados simples. Use assimetria. Sobreponha tipografia grande sobre imagens e modelos 3D. O layout deve parecer uma revista de vanguarda.

## 4. FUNCIONALIDADES CHAVE (Especificação Técnica)

### A. A Galeria Líquida (Showcase de Projetos)
*   Não use um grid estático. Crie um Carrossel WebGL.
*   Mapeie as imagens dos projetos em planos 3D dentro do Canvas R3F.
*   **Shader Obrigatório**: Implemente um efeito de "Liquid Distortion". Ao arrastar ou rolar, a imagem deve distorcer baseada na velocidade (efeito de gelatina ou ondulação de água). Adicione aberração cromática (RGB Shift) na transição.
*   **Interação**: Clique no projeto para expandir para tela cheia (transição de câmera sem cortes).

### B. Prova Social Holográfica (Testimonials)
*   Crie um "Marquee" (faixa de rolagem infinita) horizontal.
*   **Estilo dos cartões**: Glassmorphism. Fundo translúcido, desfoque de fundo (backdrop-blur-md), borda fina e brilhante.
*   **Animação**: Deve flutuar suavemente (efeito de levitação com y-axis sine wave) enquanto rola lateralmente.

### C. Currículo Interativo
*   Apresente o histórico profissional como uma Linha do Tempo Interativa.
*   **Hover Effect**: Ao passar o mouse sobre uma etapa da carreira, escureça o resto do site e ilumine apenas aquela seção (efeito Spotlight).

## 5. PLANO DE EXECUÇÃO (Instruções para o Agente)
1.  **Análise**: Leia o `resume.json` para entender o conteúdo.
2.  **Arquitetura**: Gere o artefato `ARCHITECTURE.md` definindo a estrutura de componentes.
3.  **Configuração**: Instale as dependências (R3F, GSAP, Lenis). Configure o Tailwind com as fontes escolhidas.
4.  **Implementação - Fase 1 (Core 3D)**: Crie o componente `Scene.tsx` e o shader de distorção. Teste no navegador.
5.  **Implementação - Fase 2 (DOM)**: Construa a camada HTML/CSS sobre o Canvas (Overlay) com a tipografia e os dados do JSON.
6.  **Refinamento**: Ajuste as curvas de animação (Easings) para serem suaves (ex: power3.out). Nada deve ser linear.

**INICIE A MISSÃO AGORA.**
