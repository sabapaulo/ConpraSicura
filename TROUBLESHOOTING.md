# 🔧 RESOLUÇÃO DE PROBLEMAS - CompraSicura

## ❌ Problema: Deploy falhou no Vercel

**Solução:**
1. Verifique se `package.json` está na raiz
2. Verifique se `src/` existe com os arquivos certos
3. No Vercel, clique **Redeploy**
4. Se persistir, vá em **Settings** → **Build Command** e deixe como: `npm run build`

---

## ❌ Problema: Site carrega mas está em branco

**Solução:**
1. Abra: **DevTools** (F12)
2. Vá em: **Console**
3. Procure por mensagens de erro em vermelho
4. Se tiver erro, copie e reporte
5. Tente limpar cache: **Ctrl+Shift+Delete**

---

## ❌ Problema: Imagens não carregam

**Solução:**
1. Verifique se o link da imagem é HTTPS (não HTTP)
2. Teste o link em outro navegador
3. Se for imagem local, use: `https://seu-dominio.com/imagem.jpg`
4. Ou use: `https://images.unsplash.com/...`

---

## ❌ Problema: Carrinho não funciona

**Solução:**
1. Abra DevTools (F12)
2. Vá em **Console**
3. Procure por erros JavaScript
4. Teste em navegador diferente (Firefox, Chrome, Safari)

---

## ❌ Problema: Domínio não aponta pro site

**Solução:**
1. No Vercel: **Settings** → **Domains**
2. Copie os registros DNS
3. No seu registrador (GoDaddy, Namecheap, etc):
   - Vá em: **DNS Records**
   - Adicione registros CNAME/A fornecidos pela Vercel
4. Aguarde 24-48 horas para DNS propagar

---

## ❌ Problema: "Error: Cannot find module"

**Solução:**
1. Delete pasta `node_modules/`
2. Delete arquivo `package-lock.json`
3. Execute: `npm install`
4. Execute: `npm run build`

---

## ❌ Problema: Não consigo fazer git push

**Solução:**
1. Gere token no GitHub:
   - Settings → Developer settings → Personal access tokens
   - Copie o token
2. Ao fazer `git push`, use o token como password:
   ```bash
   git push
   # Username: seu_username
   # Password: seu_token_git
   ```

Ou configure SSH:
```bash
ssh-keygen -t rsa -b 4096 -C "comprasicurax@gmail.com"
# Copie public key em GitHub → Settings → SSH Keys
```

---

## ✅ TUDO FUNCIONA?

Se todos os testes passaram:
- ✅ Site carrega
- ✅ Menu funciona
- ✅ Carrinho adiciona produtos
- ✅ Responsivo em celular

**Parabéns! Seu site está 100% funcional.** 🚀

---

## 📞 PRECISA DE AJUDA?

Se o problema não está acima:

1. Verifique se tem `node` instalado: `node --version`
2. Verifique se tem `npm` instalado: `npm --version`
3. Tente atualizar: `npm install -g npm`
4. Limpe cache: `npm cache clean --force`
5. Reinstale: `npm install`

Se ainda assim não funcionar, procure por erro específico no Google + "Vercel" ou "Vite".

---

**A maioria dos problemas é resolvida em 5 minutos.**

Persistência é a chave! 💪
