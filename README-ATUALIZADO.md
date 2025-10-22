# 🚀 TonVendas - Site de Vendas de Maquininhas Ton (ATUALIZADO)

Site de vendas de maquininhas Ton com dados sincronizados automaticamente com o site oficial da Ton.

---

## 🎨 **ALTERAÇÕES REALIZADAS**

### ✅ **1. T3 Smart TON PRÓ - Mudanças de Design**
- **Fundo do container:** Alterado de VERDE para **BRANCO**
- **Texto:** Alterado de BRANCO para **PRETO**
- **Nome:** Atualizado de "T3 Smart" para **"T3 Smart TON PRÓ"**
- **Botão:** Alterado de DOURADO para **VERDE** (mantendo identidade Ton)
- **Destaque:** Mantém badge "⭐ MAIS VENDIDA ⭐" em dourado

### ✅ **2. Nova Maquininha Adicionada - T3 Smart TON SUPER**
- **Nome completo:** Maquininha T3 Smart TON SUPER
- **Badge:** SUPER
- **Slogan:** "Por dentro da T3 Smart"
- **Link de compra:** Vinculado ao seu código de revendedor
- **Características extraídas da imagem:**
  - Bateria de longa duração
  - Sistema Android rápido e inteligente
  - Chip 4G grátis
  - Conexão Wi-Fi
  - Bobina grátis para comprovantes
  - Pagamento por aproximação (NFC)
  - Receba por Pix (QR Code ou aproximação)
  - Tela touch para operações rápidas

---

## 📦 **ESTRUTURA DOS ARQUIVOS**

### 1️⃣ **index.html** + **script.js** (Recomendado)
- **index.html:** Estrutura HTML completa
- **script.js:** JavaScript separado para fácil manutenção
- **Ideal para:** Sites hospedados com vários arquivos

### 2️⃣ **index-standalone.html** (Arquivo Único)
- HTML + CSS + JavaScript tudo em um arquivo
- **Ideal para:** Upload simples em GitHub Pages, Netlify, Vercel

---

## 📊 **ORDEM DE EXIBIÇÃO DAS MAQUININHAS**

1. **T3 Smart TON PRÓ** (Destaque - Fundo Branco com borda verde) ⭐
2. **T3** (Card normal)
3. **T2** (Card normal)
4. **T3 Smart TON SUPER** (Card normal) 🆕

---

## 🔗 **LINKS DE COMPRA ATUALIZADOS**

### **T3 Smart TON PRÓ:**
```
https://ton.com.br/checkout/cart/?productId=TONPRO_TIER_NOV24_SMART_POS_B&referrer=62F0C435-81C7-40EF-BED6-75E60E7CC922&userAnticipation=0&userTag=tonpro_tier_nov24_b&utm_medium=invite_share&utm_source=revendedor
```

### **T3:**
```
https://ton.com.br/checkout/cart/?productId=TONPRO_TIER_NOV24_S920_B&referrer=62F0C435-81C7-40EF-BED6-75E60E7CC922&userAnticipation=0&userTag=tonpro_tier_nov24_b&utm_medium=invite_share&utm_source=revendedor
```

### **T2:**
```
https://ton.com.br/checkout/cart/?productId=TONPRO_TIER_NOV24_D195_B&referrer=62F0C435-81C7-40EF-BED6-75E60E7CC922&userAnticipation=0&userTag=tonpro_tier_nov24_b&utm_medium=invite_share&utm_source=revendedor
```

### **T3 Smart TON SUPER:** 🆕
```
https://www.ton.com.br/checkout/cart/?referrer=62F0C435-81C7-40EF-BED6-75E60E7CC922&userAnticipation=0&userTag=tonsuper&utm_medium=invite_share&utm_source=revendedor
```

### **Ton Max MEI/PJ:**
```
https://ton.com.br/checkout/cart/?productId=TONMAXMEI_TIER_SMART_POS&referrer=62F0C435-81C7-40EF-BED6-75E60E7CC922&userAnticipation=0&userTag=tonmaxmei_tier&utm_medium=invite_share&utm_source=revendedor
```

---

## 🎯 **CARACTERÍSTICAS T3 SMART TON SUPER** 🆕

### **Especificações Técnicas:**
- ⚡ **Bateria de longa duração** - Não fica sem bateria na hora de vender
- 🤖 **Sistema Android** - Rápida e inteligente
- 📶 **Chip 4G grátis** - Sem custo adicional
- 📡 **Conexão Wi-Fi** - Nunca fique desconectado
- 🖨️ **Bobina grátis** - Comprovantes impressos ou por SMS

### **Formas de Pagamento:**
- 💳 **NFC** - Pagamento por aproximação (vendas rápidas)
- 💵 **Pix** - QR Code ou por aproximação
- 📱 **Tela Touch** - Interface ágil e precisa

---

## 🚀 **COMO USAR NO GITHUB**

### **Opção 1: Arquivos Separados (Recomendado)**
```bash
# Faça upload dos arquivos:
index.html
script.js
```

### **Opção 2: Arquivo Único**
```bash
# Faça upload apenas:
index-standalone.html

# Renomeie para index.html no GitHub
```

### **Configurar GitHub Pages:**
1. Vá em **Settings** do repositório
2. Clique em **Pages**
3. Selecione a branch **main** ou **master**
4. Clique em **Save**
5. Seu site estará disponível em: `https://seuusuario.github.io/nome-do-repo`

---

## 🎨 **MUDANÇAS VISUAIS DETALHADAS**

### **Container T3 Smart TON PRÓ (Featured):**

**ANTES:**
```css
background: linear-gradient(verde para verde escuro)
color: white (texto branco)
botão: dourado
```

**DEPOIS:**
```css
background: white (fundo branco)
color: #1A1A1A (texto preto)
botão: verde (#00D700 para #00A84F)
```

### **Mantido:**
- Badge dourado "⭐ MAIS VENDIDA ⭐"
- Borda verde destacada
- Layout em duas colunas
- Efeito de destaque (transform: scale)

---

## 📱 **RESPONSIVIDADE**

Todos os layouts se adaptam automaticamente para:
- 📱 **Mobile** (celulares)
- 📱 **Tablet** (tablets)
- 💻 **Desktop** (computadores)

---

## ✅ **CHECKLIST DE VALIDAÇÃO**

- ✅ T3 Smart renomeado para "T3 Smart TON PRÓ"
- ✅ Container com fundo branco e texto preto
- ✅ Botão verde ao invés de dourado
- ✅ T3 Smart TON SUPER adicionado
- ✅ Link de vendas TON SUPER configurado
- ✅ Características da imagem implementadas
- ✅ Ordem de exibição correta
- ✅ Tabela de comparação atualizada
- ✅ Design responsivo mantido

---

## 🔄 **SINCRONIZAÇÃO COM TON OFICIAL**

Os dados das maquininhas são baseados nas informações oficiais do site:
- www.ton.com.br/maquininha/t2
- www.ton.com.br/maquininha/t3
- www.ton.com.br/maquininha/t3-smart

**Imagens oficiais da Ton:**
- T2: `sites-cms-deco-prd.s3.us-east-1.amazonaws.com/.../maquininha-t2-right.webp`
- T3: `sites-cms-deco-prd.s3.us-east-1.amazonaws.com/.../maquininha-t3-right.webp`
- T3 Smart: `sites-cms-deco-prd.s3.us-east-1.amazonaws.com/.../maquininha-t3-smart-right.webp`

---

## 💰 **COMISSÕES**

Todos os links de compra estão vinculados ao seu código de revendedor:
```
referrer=62F0C435-81C7-40EF-BED6-75E60E7CC922
```

Quando um cliente clicar e comprar, você receberá sua comissão automaticamente! 🎉

---

## 📞 **SUPORTE**

Se precisar de ajustes adicionais, entre em contato ou modifique diretamente os arquivos:
- `index.html` - Estrutura HTML
- `script.js` - Lógica JavaScript e dados dos produtos
- `index-standalone.html` - Versão tudo-em-um

---

## 🎉 **PRONTO PARA USAR!**

Seu site está 100% atualizado com:
- ✅ T3 Smart TON PRÓ com design renovado
- ✅ T3 Smart TON SUPER adicionado
- ✅ Links de vendas configurados
- ✅ Visual profissional
- ✅ Responsivo para todos dispositivos

**Boa sorte com suas vendas! 💚🚀**
