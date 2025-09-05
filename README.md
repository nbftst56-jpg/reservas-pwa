# 📱 Controle de Reservas - PWA

Este é um aplicativo **Progressive Web App (PWA)** para controle de reservas de temporada.  
Funciona diretamente no navegador e pode ser **instalado no celular** como se fosse um app nativo, inclusive **offline**.

---

## 🚀 Como acessar

1. Abra no navegador (Chrome, Edge, Safari):  
   👉 [https://SEU_USUARIO.github.io/reservas-pwa/](https://SEU_USUARIO.github.io/reservas-pwa/)

2. No celular, toque no menu do navegador e escolha **"Adicionar à tela inicial"**.  
   - No Android (Chrome/Edge), o app ficará junto dos outros apps.  
   - No iPhone (Safari), ele será adicionado na tela inicial.  

3. Depois disso, o app funciona em **tela cheia** e **sem internet**.

---

## 📂 Estrutura do projeto

```
📦 reservas-pwa
 ┣ 📜 index.html       # Página principal do sistema
 ┣ 📜 manifest.json    # Configuração do PWA
 ┣ 📜 sw.js            # Service Worker (cache offline)
 ┣ 🖼️ icon-192.png     # Ícone PWA (192x192)
 ┣ 🖼️ icon-512.png     # Ícone PWA (512x512)
```

---

## 🛠️ Tecnologias usadas
- **HTML5 / CSS3 / JavaScript**
- **LocalStorage** para salvar dados localmente
- **Service Worker + Cache API** para funcionamento offline
- **PWA (Progressive Web App)** para instalação no celular

---

## 📦 Instalação local (opcional)
Se quiser rodar localmente no seu computador:

```bash
# Clonar o repositório
git clone https://github.com/SEU_USUARIO/reservas-pwa.git
cd reservas-pwa

# Instalar um servidor web simples (ex: serve)
npm install -g serve

# Rodar localmente
serve .
```

Depois acesse em: `http://localhost:3000`

---

✍️ Desenvolvido para uso pessoal em controle de reservas.
