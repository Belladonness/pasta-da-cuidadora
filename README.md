# Pasta da Cuidadora

Página de apresentação do kit digital Pasta da Cuidadora, com oferta de R$ 27.

## Arquivos

- `index.html`: página completa, sem etapa de build.
- `logo-pasta-da-cuidadora-simbolo.svg`: símbolo usado no cabeçalho, rodapé e ícone da aba.
- `logo-pasta-da-cuidadora.svg`: versão horizontal da marca.
- `compartilhamento.png`: imagem 1200 × 630 usada no preview de links.
- `tracking.js`: Pixel da Meta acionado somente após consentimento.
- `privacidade.html` e `contato.html`: informação de privacidade e canal público de atendimento.
- `netlify.toml`: diretório de publicação configurado como `.`.

## Desenvolvimento

Abra `index.html` em um navegador, mantendo os demais arquivos desta pasta ao lado dele.

## Checkout

O checkout ainda não está configurado. Em `index.html`, preencha `CHECKOUT_URL` com o link HTTPS real gerado na Hotmart. Configure a entrega dos arquivos do produto na Hotmart antes de liberar as vendas.

## Rastreamento e contato

O site usa o Pixel da Meta `1692957962500036` somente após consentimento, com eventos `PageView`, `ViewContent` e `InitiateCheckout` no clique de compra quando o checkout estiver ativo. Os links de compra levam os parâmetros `utm_*` e `src` da página ao checkout. Configure o evento `Purchase` no produto da Hotmart com o mesmo Pixel. A Google Tag ainda aguarda seu identificador. O contato público é `contato.pastadacuidadora@gmail.com`.

## Hospedagem

A configuração incluída permite importar o repositório na Netlify, sem comando de build, usando o diretório `.`. A mesma pasta pode ser publicada em outra hospedagem estática.

## Conteúdo

As prévias das folhas são ilustrativas. O repositório contém apenas a página de vendas, não os arquivos do kit ou dados de clientes.

