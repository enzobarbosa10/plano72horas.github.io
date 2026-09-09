# Plano 72 Horas — Página de vendas

Página de vendas de página única para o **Plano 72 Horas**, um guia em PDF de
preparação doméstica para os três dias em que a família fica por conta própria:
temporal, apagão prolongado e seca extrema.

HTML, CSS e JavaScript puros. Sem build, sem framework, sem dependências —
as únicas requisições externas são as fontes do Google Fonts.

## Estrutura

```
pagina-vendas/
├── index.html    marcação e conteúdo
├── style.css     estilos (tokens de cor em :root)
├── script.js     interações (sem libs)
└── imagens/      og.jpg (1200x630) e autor.jpg (opcional)
```

## Recursos da página

- Autodiagnóstico interativo no topo — o visitante marca o que já tem em casa e
  vê o placar; a mensagem final muda conforme a pontuação
- Barra de compra fixa que aparece ao rolar para fora do hero
- Faixa sazonal que ajusta o texto pelo mês atual (temporais / seca / entressafra)
- Animação de entrada por scroll, respeitando `prefers-reduced-motion`
- Seções de FAQ, garantia, "para quem é / não é", índice do guia
- Meta tags Open Graph / Twitter para compartilhamento

## Antes de publicar

1. **Checkout** — em `script.js`, troque `CHECKOUT_URL` pelo link da sua
   plataforma (Hotmart, Kiwify, Cakto, etc.).
2. **Depoimentos** — a seção traz textos entre colchetes. Substitua por
   depoimentos reais de clientes (com autorização) ou remova a seção inteira.
   Não publique depoimento fictício.
3. **Autor** — preencha o bloco "Quem escreveu" com nome e credencial reais.
4. **Imagens** — adicione `imagens/og.jpg` e ajuste as URLs `og:` no `index.html`.
5. Revise preço, prazo de garantia e o texto legal do rodapé.

## Como rodar localmente

Abra `index.html` no navegador, ou sirva a pasta:

```
npx serve pagina-vendas
```

## Licença

Código sob MIT. O conteúdo do guia e a identidade da marca não estão incluídos.
