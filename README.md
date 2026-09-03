# CompraSicura — Acquista con Fiducia

**Site 100% funcional e pronto para vender.**

---

## 🚀 DEPLOY EM 5 MINUTOS (COM VERCEL GRATUITO)

### **PASSO 1: Prepare o GitHub**

1. Crie uma conta em **github.com** (se não tiver)
2. Clique em **+** → **New repository**
3. Nome: `comprasicura`
4. Marque: **Public**
5. Clique: **Create repository**

### **PASSO 2: Upload do Código**

**NO SEU COMPUTADOR (abra terminal/PowerShell):**

```bash
cd caminho/para/comprasicura
git init
git add .
git commit -m "CompraSicura pronto para deploy"
git branch -M main
git remote add origin https://github.com/SEU_USERNAME/comprasicura.git
git push -u origin main
```

(Substitua `SEU_USERNAME` pelo seu username do GitHub)

### **PASSO 3: Deploy no Vercel**

1. Acesse **vercel.com**
2. Clique: **Sign Up** → **Continue with GitHub**
3. Autorize
4. Clique: **Add New** → **Project**
5. Selecione: **comprasicura**
6. Framework: Vercel auto-detecta (tudo OK)
7. Clique: **Deploy**
8. Aguarde 1-2 minutos

**PRONTO! Seu site está online em:**
```
https://comprasicura-SEU_USERNAME.vercel.app
```

---

## 📝 ADICIONE SEU DOMÍNIO

1. **Compre um domínio** em:
   - GoDaddy
   - Namecheap
   - Registrar.com

2. **No Vercel:**
   - Settings → Domains
   - Add Domain
   - Siga as instruções para apontar DNS

---

## 🔧 PERSONALIZAÇÕES

### **Trocar Textos do Hero**
- Abra: `src/App.jsx`
- Procure por: "Prodotti selezionati"
- Edite o texto
- `git commit` e push
- Vercel atualiza automaticamente

### **Trocar Imagem do Hero**
- Procure por: `https://images.unsplash.com/photo-1555041469...`
- Substitua pela URL de sua imagem
- ou use: `https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800`

### **Trocar Cores**
- Abra: `src/index.css`
- Procure por: `--verde-bosco: #1F3A32;`
- Edite as cores HEX conforme quiser
- Salve e push

### **Adicionar Produtos Reais**
- Abra: `src/App.jsx`
- Procure por: `const products = [`
- Edite nome, preço e link de imagem
- Salve e push

---

## 📊 CONEXÃO COM SHOPIFY (Opcional)

Se quiser integrar com Shopify após:

1. No Shopify Admin: **Settings → API and apps**
2. Gere token de acesso
3. Adicione em `.env`: `VITE_SHOPIFY_TOKEN=seu_token`
4. Conecte produtos dinamicamente

(Documentação completa: veja `SHOPIFY_INTEGRATION.md`)

---

## 💬 EMAIL DE SUPORTE

Seu email de contato: **comprasicurax@gmail.com**

Atualize em `src/App.jsx` no footer se quiser trocar.

---

## ✅ CHECKLIST PRÉ-LANÇAMENTO

- [ ] Vercel deploy funciona
- [ ] Domínio apontado
- [ ] Textos em italiano OK
- [ ] Imagens carregam
- [ ] Carrinho funciona
- [ ] Email de contato correto

---

## 📱 TESTAR EM CELULAR

1. Compartilhe link Vercel com alguém
2. Abra em celular
3. Teste adicionar produto ao carrinho
4. Teste menu e busca

---

## 🔒 SEGURANÇA

- SSL/HTTPS: Vercel fornece grátis
- Dados: Nenhum dado pessoal é armazenado localmente
- Privacidade: Adicione política de privacidade em `src/App.jsx`

---

## 🎯 PRÓXIMOS PASSOS

1. ✅ Deploy no Vercel
2. ✅ Acoplar domínio
3. ✅ Adicionar produtos reais
4. ✅ Configurar pagamentos (Stripe/Shopify)
5. ✅ Marketing e lançamento

---

**Seu site está pronto para VENDER.** 🚀

Boa sorte! 💪
