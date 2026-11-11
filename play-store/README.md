# Publicação na Google Play Store — Fortaleza Contabilidade

Este documento reúne o que já foi preparado no projeto e o que ainda falta para publicar o aplicativo na Google Play Store.

> **Importante:** a conta de desenvolvedor da Play Store só pode ser criada e verificada pelo titular (você), porque exige CPF/CNPJ, documento de identidade, endereço e pagamento. O que dependia do código já foi criado aqui.

---

## 1. O que já está pronto no projeto

| Item | Situação |
|---|---|
| CNPJ 45.474.189/0001-92 no rodapé do site | ✅ |
| CNPJ no Schema.org (`taxID`) | ✅ |
| Política de Privacidade (LGPD) em `/politica-de-privacidade` | ✅ |
| Manifest PWA (`/manifest.webmanifest`) | ✅ |
| Service worker com suporte offline (`/sw.js`) | ✅ |
| Ícones 192×192, 512×512, maskable e Apple Touch | ✅ `public/icons/` |
| Ícone 512×512 para a loja | ✅ `play-store/assets/icon-512.png` |
| Feature graphic 1024×500 | ✅ `play-store/assets/feature-graphic-1024x500.png` |
| 5 screenshots de celular 1080×1920 (9:16) | ✅ `play-store/assets/screenshot-0*.png` |
| Textos prontos para a ficha da loja | ✅ `play-store/descricao-loja.md` |
| Modelo do Digital Asset Links | ✅ `play-store/assetlinks.json.exemplo` |

O site agora é uma **PWA instalável**. Isso é o pré-requisito para empacotar como app Android (TWA) sem reescrever o site.

---

## 2. O que falta e depende de você

### 2.1 Conta de desenvolvedor

- [ ] Criar a conta em <https://play.google.com/console> — taxa única de **US$ 25**.
- [ ] Escolher o tipo de conta:
  - **Conta pessoal (CPF):** mais rápida; o app fica vinculado ao seu nome/CPF e exige **12 testadores por 14 dias** antes de liberar para produção (regra para contas pessoais criadas após 13/11/2023).
  - **Conta de organização (CNPJ 45.474.189/0001-92):** recomendada para a marca; exige **número D-U-N-S** (gratuito no site da Dun & Bradstreet, pode levar até 30 dias) e documentos da empresa.
- [ ] Verificar e-mail, telefone e endereço.
- [ ] Aceitar os termos e concluir a verificação de identidade.

> Não é possível criar essa conta por aqui: ela exige seus documentos e pagamento. Se você me passar qual tipo escolheu, eu deixo o restante do pacote pronto.

### 2.2 Definir o identificador do app (definitivo)

Sugestão: `br.com.fortalezacontabilidade.app`

O `applicationId` **nunca poderá ser alterado** depois da publicação. Confirme se podemos usar esse ou envie outro.

### 2.3 Chave de assinatura (keystore)

- [ ] Gerar a chave de upload e guardar arquivo `.jks` + senhas em local seguro (não versionar no Git).
- [ ] Ativar o **Play App Signing** no Console.

Sem Java/Android SDK instalados nesta máquina, o build do `.aab` precisa ser feito em uma destas opções:

1. **PWABuilder (mais fácil):** <https://www.pwabuilder.com> → informe `https://www.fortalezacontabilidade.com.br` → Android → baixar o pacote assinado. O PWABuilder gera o `.aab` e o keystore.
2. **Bubblewrap (linha de comando):** requer JDK 17 + Android SDK.
3. **Android Studio:** abrir o projeto TWA gerado pelo PWABuilder/Bubblewrap e gerar o `.aab` assinado.

### 2.4 Publicar o site antes do app

O app TWA carrega o site em produção. Portanto:

- [ ] O site precisa estar publicado em **HTTPS** no domínio `www.fortalezacontabilidade.com.br`.
- [ ] O `manifest.webmanifest` e o `sw.js` precisam estar acessíveis nesse domínio.
- [ ] Após o primeiro envio do `.aab`, pegar a impressão digital **SHA-256** do certificado (Play Console → Integridade do app → Certificado de assinatura do app) e publicar:

```
https://www.fortalezacontabilidade.com.br/.well-known/assetlinks.json
```

Use o modelo `play-store/assetlinks.json.exemplo`, trocando `COLE_AQUI_O_SHA256`. Sem esse arquivo, o app abre com a barra de endereço do navegador.

### 2.5 Ficha da loja

Já estão prontos os textos e as imagens. Ainda falta você informar:

- [ ] **E-mail de contato** para a loja (obrigatório e público). Hoje o site só tem WhatsApp; preciso de um e-mail.
- [ ] Categoria sugerida: **Negócios** (alternativa: Finanças).
- [ ] Site: `https://www.fortalezacontabilidade.com.br`
- [ ] Telefone: `+55 62 99600-0930`

### 2.6 Formulários obrigatórios no Console

- [ ] **Segurança dos dados:** declarar que o app não coleta nem compartilha dados pessoais (o formulário do site abre o WhatsApp por ação do usuário; não há analytics nem login).
- [ ] **Classificação de conteúdo (IARC):** app de negócios/contabilidade, sem conteúdo sensível. Provavelmente "Livre".
- [ ] **Público-alvo:** 18+.
- [ ] **Anúncios:** declarar "não contém anúncios".
- [ ] **Acesso ao app:** "todas as funcionalidades estão disponíveis sem login".
- [ ] **Declaração de serviços financeiros:** marcar conforme o questionário. Se o app apenas divulga serviços contábeis e abre o WhatsApp, normalmente não se enquadra como produto financeiro; mas o Console pode exigir a declaração. Se aparecer, me avise que eu preparo o texto.
- [ ] **Exclusão de conta:** não se aplica, pois o app não cria contas.

### 2.7 Testes antes da produção

- [ ] Enviar o `.aab` no canal **Teste interno**.
- [ ] Instalar pelo link e testar em um celular real: abrir, navegar, formulário, WhatsApp, modo offline.
- [ ] Conta pessoal: recrutar **12 testadores** e manter o teste fechado por **14 dias**.
- [ ] Conta de organização: o teste de 12 pessoas não é exigido, mas o teste interno é recomendado.

### 2.8 Requisitos técnicos do Android

- [ ] `targetSdkVersion` atualizado conforme a exigência vigente da Play (novas apps/atualizações precisam acompanhar o nível de API exigido no ano).
- [ ] Formato **AAB** (não APK).
- [ ] `versionCode` incrementado a cada envio.
- [ ] Ícone 512×512, feature graphic 1024×500 e no mínimo 2 screenshots (já prontos).

---

## 3. Risco importante: política de funcionalidade mínima

A Play Store pode recusar apps que são apenas uma "casca" do site (política de **funcionalidade mínima**). Um TWA do site institucional pode ser aceito, mas o risco existe.

Para reduzir esse risco, o ideal é que o app tenha algo próprio, por exemplo:

- área do cliente com login;
- envio e consulta de documentos;
- segunda via de guias e impostos;
- notificações de vencimentos;
- chat de atendimento.

O site já anuncia "acesso a documentos, guias e atendimento". Se o app for só o site, eu recomendo publicar como **versão 1.0** mesmo assim e evoluir depois — mas vale saber que a revisão pode questionar.

**Pergunta:** o app terá apenas o site ou terá área do cliente/login? Isso muda a arquitetura e o formulário de Segurança dos Dados.

---

## 4. O que eu preciso que você me envie

Para eu continuar e deixar o pacote 100% pronto:

1. **E-mail** que será usado na conta e no contato da loja.
2. **Tipo de conta:** pessoal (CPF) ou organização (CNPJ)? Se organização, já tem **D-U-N-S**?
3. **Nome do pacote** confirmado: pode ser `br.com.fortalezacontabilidade.app`?
4. **Endereço completo** da empresa (cidade/UF) para a ficha da loja.
5. O app terá **login/área do cliente** ou somente o site?
6. Você já tem **conta Google** e **cartão internacional** para a taxa de US$ 25?

> **Sobre o CPF:** não coloquei CPF no site. Dados de CPF não devem ficar públicos no rodapé (risco de fraude e exposição na LGPD). O CNPJ foi adicionado no rodapé e no Schema.org. Se o CPF for necessário para a conta de desenvolvedor, ele é informado apenas dentro do Play Console, não no site.

---

## 5. Comandos úteis

```bash
# instalar dependências
npm install

# rodar localmente
npm run dev

# gerar build de produção (inclui manifest, sw, ícones e política)
npm run build

# testar o build localmente
npm run preview
```

---

## 6. Ordem recomendada

1. Publicar o site atualizado (Netlify) no domínio oficial.
2. Criar/verificar a conta Play Console.
3. Gerar o `.aab` no PWABuilder com a URL do site.
4. Enviar no teste interno e validar no celular.
5. Publicar o `assetlinks.json` com o SHA-256 correto.
6. Preencher ficha, segurança dos dados e classificação.
7. Promover para produção.
