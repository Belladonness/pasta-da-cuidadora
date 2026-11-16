# Pasta da Cuidadora

Página de apresentação do kit digital Pasta da Cuidadora, com oferta de R$ 27.

## Arquivos

- `index.html`: página completa, sem etapa de build.
- `logo-pasta-da-cuidadora-simbolo.svg`: símbolo usado no cabeçalho, rodapé e ícone da aba.
- `logo-pasta-da-cuidadora.svg`: versão horizontal da marca.
- `compartilhamento.png`: imagem 1200 × 630 usada no preview de links.
- `tracking.js`: cópia do código do Pixel incorporado ao `index.html`, acionado somente após consentimento.
- `privacidade/index.html` e `contato/index.html`: páginas públicas de privacidade e atendimento na Cloudflare.
- `privacidade.html` e `contato.html`: cópias de compatibilidade da versão anterior.
- `netlify.toml`: encaminha o endereço antigo da Netlify para a Cloudflare.

## Desenvolvimento

Abra `index.html` em um navegador, mantendo os demais arquivos desta pasta ao lado dele.

## Checkout

Os botões levam ao checkout da Hotmart `https://pay.hotmart.com/T108491592B`, conferido com preço à vista de R$ 27. Confirme a entrega dos arquivos do produto na Hotmart.

## Rastreamento e contato

O site usa o Pixel da Meta `1692957962500036` somente após consentimento, com eventos `PageView`, `ViewContent` e `InitiateCheckout` no clique de compra quando o checkout estiver ativo. Os links de compra levam os parâmetros `utm_*` e `src` da página ao checkout. Configure o evento `Purchase` no produto da Hotmart com o mesmo Pixel. A Google Tag ainda aguarda seu identificador. O contato público é `contato.pastadacuidadora@gmail.com`.

## Hospedagem

A página pública está em `https://pasta-da-cuidadora.pages.dev/`, publicada por envio direto ao Cloudflare Pages. O repositório GitHub guarda os arquivos, mas não está ligado à publicação automática da Cloudflare: depois de cada alteração, envie novamente os arquivos do site. A Netlify conserva o endereço antigo e encaminha as visitas para a Cloudflare.

## Conteúdo

As prévias das folhas são ilustrativas. O repositório contém apenas a página de vendas, não os arquivos do kit ou dados de clientes.

