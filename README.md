# Fortaleza Contabilidade — Site e PWA

Site institucional e aplicativo web (PWA) da **Fortaleza Contabilidade** (CNPJ 45.474.189/0001-92), com atendimento 100% online para empresas, produtores rurais e agronegócio.

## Funcionalidades

- Landing page responsiva com React 19 + Vite + Tailwind CSS.
- Animações com Framer Motion.
- Triagem de leads em modal, com envio contextual para o WhatsApp.
- SEO por rota, Open Graph, Schema.org e FAQ estruturado.
- Política de Privacidade em `/politica-de-privacidade`.
- PWA instalável: manifest, service worker e suporte offline.
- Pacote de publicação na Play Store em [`play-store/`](./play-store/).

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

O build sai em `dist/` e inclui o manifest, o service worker, os ícones e a política de privacidade.

## Publicação na Play Store

O passo a passo completo, o que já está pronto e o que ainda depende do titular está em [`play-store/README.md`](./play-store/README.md).

## Estrutura

```
public/
  icons/                 ícones da PWA e da loja
  manifest.webmanifest   manifest da PWA
  sw.js                  service worker (offline)
play-store/
  assets/                ícone 512, feature graphic e screenshots
  README.md              checklist de publicação
  descricao-loja.md      textos prontos para a ficha da Play Store
  assetlinks.json.exemplo
src/
  pages/MainLP.jsx       landing page
  pages/Privacidade.jsx  política de privacidade
  pages/NotFound.jsx     404
  utils/seo.js           SEO por rota
```

---

Desenvolvido com foco em excelência contábil e performance digital.
