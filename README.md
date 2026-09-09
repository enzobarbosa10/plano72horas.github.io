# plano72horas.github.io

Página de vendas do **Plano 72 Horas** — guia-checklist de preparação doméstica para temporal, apagão e seca extrema.

Site estático de arquivo único, sem build, sem dependências. Publicado via GitHub Pages.

---

## O que é o produto

Um guia em PDF que prepara uma família para os três dias em que costuma ficar por conta própria durante uma ocorrência climática. Organizado em cinco pilares — água, energia, comida, comunicação e documentos — com passo a passo para temporal, apagão e seca, plano de família, calendário anual de risco e um checklist final para imprimir.

Público: famílias brasileiras, com foco inicial no Centro-Oeste. Preço: R$37, pagamento único.

---

## Estrutura

```
.
├── index.html # a página inteira: HTML, CSS e JS num arquivo só
├── CNAME # domínio customizado (opcional)
└── README.md
```

O CSS está no `<style>` do próprio `index.html`. As fontes (Bricolage Grotesque e Public Sans) vêm do Google Fonts por CDN — é a única requisição externa.

---

## Como publicar

Como o repositório se chama `plano72horas.github.io`, ele é um **site de usuário**: o GitHub Pages serve a raiz do branch principal e o arquivo de entrada precisa se chamar `index.html`.

1. Renomeie o arquivo da página para `index.html` e coloque na raiz do repositório.
2. Faça o commit no branch `main`.
3. Em **Settings → Pages**, defina a fonte como `Deploy from a branch`, branch `main`, pasta `/ (root)`.
4. O site sobe em alguns minutos em `https://plano72horas.github.io`.

Cada push no `main` republica a página automaticamente.

---

## Antes de colocar no ar

- [ ] **Configurar o checkout.** No fim do `index.html` há a variável `CHECKOUT_URL`, hoje com valor `"#"`. Troque pelo link da sua plataforma (Kiwify, Cakto, Hotmart). Todos os botões de compra apontam para ela.
- [ ] **Conferir os dados técnicos do guia** (litragem de água, tempo de conservação em freezer, faixas de umidade) com Defesa Civil e Corpo de Bombeiros. A página promete conteúdo específico e a responsabilidade pelo que está escrito é sua.
- [ ] **Revisar a seção "Como recebo"** no FAQ, caso a entrega não seja por e-mail em PDF.
- [ ] **Adicionar imagem de compartilhamento** (`og:image`) para o link não sair sem preview no WhatsApp.
- [ ] **Instalar o pixel/analytics** que você for usar, antes de rodar qualquer tráfego.

---

## Domínio customizado

Para usar um domínio próprio:

1. Crie um arquivo `CNAME` na raiz, com o domínio em uma única linha (ex.: `plano72horas.com.br`).
2. No seu provedor de DNS, aponte o registro `A` para os IPs do GitHub Pages e o `CNAME` do `www` para `plano72horas.github.io`.
3. Em **Settings → Pages**, marque `Enforce HTTPS` depois que o certificado for emitido.

---

## Decisões de conteúdo que valem ser preservadas

Se for editar a copy, dois pontos foram escolhas deliberadas:

**O hero é um diagnóstico, não uma promessa.** A página abre com uma lista de nove itens para a pessoa conferir o que já tem em casa. A necessidade nasce da constatação dela, não de um argumento meu. Trocar isso por uma headline de promessa enfraquece a conversão.

**Não há prova social nem escassez.** Sem depoimentos inventados e sem cronômetro. Em produto de segurança, prova social falsa destrói a confiança quando descoberta. Assim que houver compradores reais, o lugar natural dos depoimentos é logo antes da seção de preço.

---

## Aviso

O material é de orientação doméstica e não substitui as instruções dos órgãos oficiais. Em emergência: Defesa Civil **199**, Corpo de Bombeiros **193**, SAMU **192**.
