// ===== DADOS ESTÁTICOS COM IMAGENS DAS MAQUININHAS =====
const APP_DATA = {
  lastFetched: "2025-10-28T14:00:00.000Z",
  contacts: {
    phones: [
      "31 98498-7116",
      "3004-9137"
    ],
    whatsappLink: "https://api.whatsapp.com/send?phone=5531984987116&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20ofertas%20rel%C3%A2mpago%20da%20Ton!"
  },
  benefits: [
    {
      icon: "🚚",
      title: "Troca grátis e garantia vitalícia",
      description: "Trocamos a sua maquininha sem você precisar sair de casa",
      color: "#007AFF"
    },
    {
      icon: "📱",
      title: "Venda pelo App com TapTon, Link e Pix",
      description: "Esqueceu a maquininha em casa? Venda em qualquer lugar usando seu celular",
      color: "#5856D6"
    },
    {
      icon: "⚡",
      title: "Receba no mesmo dia",
      description: "Escolha no app como prefere receber as suas vendas",
      color: "#FF9500"
    },
    {
      icon: "💰",
      title: "Tempo é dinheiro",
      description: "Menos tempo perdido com burocracia, mais tempo vendendo. Com o Ton, você recebe com taxa baixa e sem complicação",
      color: "#FFC107"
    },
    {
      icon: "📊",
      title: "Gestão fácil do MEI",
      description: "Gere e pague seu DAS, acompanhe benefícios e cuide do MEI sem custos. Tudo no app onde você vende e recebe",
      color: "#4CAF50"
    },
    {
      icon: "📶",
      title: "Chip com internet ilimitada e grátis",
      description: "Sem nenhum custo mensal adicional no seu bolso",
      color: "#00BCD4"
    },
    {
      icon: "👤",
      title: "Não precisa ter CNPJ",
      description: "Ainda não tem uma empresa? O Ton é pra todos: PF, PJ ou MEI",
      color: "#9C27B0"
    },
    {
      icon: "💚",
      title: "Aqui sua Maquininha não tem aluguel",
      description: "Com o Ton você tem máquina de qualidade sem pesar no bolso",
      color: "#00C853"
    },
    {
      icon: "💳",
      title: "Aceite as principais formas de pagamento",
      description: "Aceita Mastercard, Visa, Elo, American Express, Apple Pay, Google Pay, Samsung Pay, Pix e muito mais",
      color: "#FF3B30"
    }
  ],
  products: [
    {
      "id": "ton-max-mei",
      "title": "Ton Max – Para MEI e PJ",
      "slogan": "A máquina ideal para quem tem CNPJ. Taxas bem baixas!",
      "image": "https://sspark.genspark.ai/cfimages?u1=iCjj%2Bk0gu1I0snI6NFwuVI9bWTCaoNdlvBcFSVAb7qGMpTvWQEkV19h7Sw2oAo4GNayOdLw79PBkPtTumK5%2F1%2FdbRmsWGR%2FpaYtA6O%2B1CKPbXoLc8jCEI4PJ%2FthHeNGTAkASymvn&u2=Oh28sj5ixTJWd5P%2F&width=2560",
      "benefits": [
        "Taxas exclusivas para MEI/PJ",
        "Sem aluguel, a máquina é sua",
        "Vendeu recebeu no mesmo dia",
        "Gerencie seu Mei e pague seu DAS sem custo",
        "Melhor custo-benefício"
      ],
      "sellerLink": "https://ton.com.br/checkout/cart/?productId=TONMAXMEI_TIER_SMART_POS&referrer=62F0C435-81C7-40EF-BED6-75E60E7CC922&userAnticipation=0&userTag=tonmaxmei_tier&utm_medium=invite_share&utm_source=revendedor"
    },
    {
      "id": "t3-smart-ton-pro",
      "title": "T3 Smart Ton Pró",
      "slogan": "A mais completa! Receba em 1 dia e venda em qualquer lugar.",
      "image": "https://sspark.genspark.ai/cfimages?u1=kf5OL78Yx%2BF%2FdzChTmf6DAdovgqDrEzSKscBgrM7iuyPXCcE23bhCw%2FNeNwvFejK8zL6d6hOyp6NQQv18%2B456vVjwRCl4QpeM5i451tT6%2F3%2BMJb1HZ7PnmdkJhOZzF2oFNHvLsLlRXwr2EddUhVW08jQx4c%2Fjh8ExsAmt3U9L%2FTMavXq4TBEzWvSsFU77ejCoQ%3D%3D&u2=YiCtHQmm3U0jHTSO&width=2560",
      "benefits": [
        "Recebimento, no mesmo dia ou em 1 dia útil",
        "Melhores taxas para pessoa física",
        "Bateria de longa Duração",
        "Bobina Gratis, Chip 4G Gratis",
        "Tela Touch com sistema Android",
        "Conexão WI-FI",
        "Receba por Aproximação",
        "Aceita Pix na Maquininha",
        "Comprovante por SMS ou impresso"
      ],
      "sellerLink": "https://ton.com.br/checkout/cart/?productId=TONPRO_TIER_NOV24_SMART_POS_B&referrer=62F0C435-81C7-40EF-BED6-75E60E7CC922&userAnticipation=0&userTag=tonpro_tier_nov24_b&utm_medium=invite_share&utm_source=revendedor"
    },
    {
      "id": "t3-ton-pro",
      "title": "T3 Ton Pró",
      "slogan": "O plano mais completo e robusto para o seu negócio.",
      "image": "https://sspark.genspark.ai/cfimages?u1=m4fpN1Zl8ygLX6elioWmcDigRmi%2B2TcmiQ1tCKgk7jt7xm8i1OnvbejXF83%2BzwaX7cGYUBhI1RHoDz8d7V73%2F0g8OlLLVqaBraT4BadZQPlIeupcqejQ8FbYbYfxxLRv0fhwsSxblUaFhhsmQjjzSsb8Jg9ySFRNn9UrHettSF04n154jWkNkU8t%2BTNYyZuR&u2=LNHjOL2H%2FhaI8RtH&width=2560",
      "benefits": [
        "Taxas competitivas",
        "Sem aluguel",
        "Chip 3G Gratis",
        "Conexão WI-FI",
        "Bobina Gratis",
        "Receba por aproximação",
        "Receba por Pix",
        "Suporte 24h"
      ],
      "sellerLink": "https://ton.com.br/checkout/cart/?productId=TONPRO_TIER_NOV24_S920_B&referrer=62F0C435-81C7-40EF-BED6-75E60E7CC922&userAnticipation=0&userTag=tonpro_tier_nov24_b&utm_medium=invite_share&utm_source=revendedor"
    },
    {
      "id": "t2-ton-pro",
      "title": "T2 Ton Pró",
      "slogan": "A máquina ideal para quem busca praticidade e economia.",
      "image": "https://sspark.genspark.ai/cfimages?u1=biCgiT8ooZ53mJZFwtfVEPfkSCKekKQn%2BDQHIjSmiRQBkl8ijiZDbMgWGhNtEkGN1jfhQrKcVfOv%2Fh948PPNvPqSEwBCBlctBrV7p55%2F9beOOwRr9MIe5wKlhcklCdJs9pMa799%2BMOem26QO2y2fLLULsrA6F%2BzWINaCbsNkhl4UnLDJiKMT6ix6GXvqDYHeLP1%2B3hKR&u2=RRXVt9tLC%2FOBVK9q&width=2560",
      "benefits": [
        "Simples e prática",
        "Chip 3G Gratis",
        "Conexão WI-FI",
        "Receba por Aproximação",
        "Receba por Pix",
        "Taxas reduzidas",
        "Bateria de longa duração"
      ],
      "sellerLink": "https://ton.com.br/checkout/cart/?productId=TONPRO_TIER_NOV24_D195_B&referrer=62F0C435-81C7-40EF-BED6-75E60E7CC922&userAnticipation=0&userTag=tonpro_tier_nov24_b&utm_medium=invite_share&utm_source=revendedor"
    },
    {
      "id": "t3-smart-ton-super",
      "title": "T3 Smart Ton Super",
      "slogan": "Para quem está começando e precisa de uma máquina inteligente.",
      "image": "https://sspark.genspark.ai/cfimages?u1=kf5OL78Yx%2BF%2FdzChTmf6DAdovgqDrEzSKscBgrM7iuyPXCcE23bhCw%2FNeNwvFejK8zL6d6hOyp6NQQv18%2B456vVjwRCl4QpeM5i451tT6%2F3%2BMJb1HZ7PnmdkJhOZzF2oFNHvLsLlRXwr2EddUhVW08jQx4c%2Fjh8ExsAmt3U9L%2FTMavXq4TBEzWvSsFU77ejCoQ%3D%3D&u2=YiCtHQmm3U0jHTSO&width=2560",
      "benefits": [
        "Ideal para iniciantes",
        "Aceita Pix e QR Code",
        "Recebimento, no mesmo dia ou em 1 dia útil",
        "Melhores taxas para pessoa física",
        "Bateria de longa Duração",
        "Bobina Gratis, Chip 4G Gratis",
        "Tela Touch com sistema Android",
        "Conexão WI-FI",
        "Receba por Aproximação",
        "Aceita Pix na Maquininha",
        "Comprovante por SMS ou impresso"
      ],
      "sellerLink": "https://ton.com.br/checkout/cart/?productId=TONSUPER_SMART_POS&referrer=62F0C435-81C7-40EF-BED6-75E60E7CC922&userAnticipation=0&userTag=tonsuper&utm_medium=invite_share&utm_source=revendedor"
    }
  ],
  plansComparison: [
    {
      name: "Super",
      profile: "Ideal pra quem está começando",
      strengths: "Fácil entrada, sem exigências • Taxas um pouco mais altas • Recebimento mais demorado • Autônomos iniciantes e ambulantes (~R$ 2.000/mês)"
    },
    {
      name: "Pro",
      profile: "Vendas constantes",
      strengths: "Recebe rápido, taxas boas • Sem Aluguel • Negócios de vendas constantes (R$ 2.000–10.000/mês)"
    },
    {
      name: "Max MEI",
      profile: "CNPJ ativo",
      strengths: "Economia e profissionalismo • Taxas Bem Baixas • Melhor Custo e Beneficio • MEIs e pequenos negócios"
    },
    {
      name: "Ultra",
      profile: "Negócios fixos",
      strengths: "Ideal pra parcelado • Profissional • Deliverys, lojas, serviços fixos"
    },
    {
      name: "Mega",
      profile: "Grandes empresas",
      strengths: "Menores taxas • Para Grandes Negocios • Empresas e redes com alto faturamento"
    }
  ],
  faq: [
    {
      question: "Preciso pagar aluguel?",
      answer: "Não! Todas as maquininhas da Ton são **sem aluguel**. Comprou, é sua."
    },
    {
      question: "Posso vender sem CNPJ?",
      answer: "Sim, pode usar com CPF. Mas se tiver MEI, as taxas são ainda menores."
    },
    {
      question: "Quando recebo o dinheiro?",
      answer: "Depende do plano: mesmo dia, 1, 14 ou 30 dias."
    },
    {
      question: "Tem garantia?",
      answer: "Sim, garantia vitalícia com troca em caso de defeito."
    },
    {
      question: "Aceita PIX e vale-alimentação?",
      answer: "Sim! PIX, débito, crédito à vista e parcelado, vale-refeição e alimentação (modelo dependente)."
    }
  ],
  // NOVA SEÇÃO: BOTÕES DE DICAS COM LINKS EXTERNOS
  tipsButtons: [
    {
      icon: "📰",
      title: "TOP 10 artigos sobre vendas que você precisa conhecer",
      url: "https://www.agendor.com.br/blog/artigos-sobre-vendas/"
    },
    {
      icon: "🚀",
      title: "10 técnicas de vendas infalíveis",
      url: "https://meusucesso.com/artigos/10-tecnicas-de-vendas-infaliveis-23/"
    },
    {
      icon: "🤝",
      title: "7 técnicas de abordagem para não ser invasivo com seu cliente!",
      url: "https://www.zendesk.com.br/blog/tecnicas-de-abordagem/"
    },
    {
      icon: "💼",
      title: "8 blogs brasileiros que todo empreendedor deveria ler",
      url: "https://sebrae.com.br/sites/PortalSebrae/artigos/8-blogs-brasileiros-que-todo-empreendedor-deveria-ler,6307baede1306510VgnVCM1000004c00210aRCRD"
    },
    {
      icon: "💳",
      title: "5 vantagens que a maquininha de cartão oferece para sua loja",
      url: "https://empreendedores.mercadopago.com.br/vantagens-de-adquirir-uma-maquininha-de-cartao-para-sua-loja"
    },
    {
      icon: "🎯",
      title: "Conheça as 8 principais técnicas de vendas",
      url: "https://sebrae.com.br/sites/PortalSebrae/artigos/conheca-as-8-principais-tecnicas-de-vendas,a4f0bbd7f0f07810VgnVCM1000001b00320aRCRD"
    },
    {
      icon: "👥",
      title: "Abordagem ao cliente: um momento crucial para a venda",
      url: "https://sebrae.com.br/sites/PortalSebrae/artigos/abordagem-ao-cliente-um-momento-crucial-para-a-venda,5492219a524c4810VgnVCM100000d701210aRCRD"
    },
    {
      icon: "📈",
      title: "Máquinas de cartão potencializam as vendas em até 30%",
      url: "https://sebrae.com.br/sites/PortalSebrae/ufs/ac/artigos/maquinas-de-cartao-potencializam-as-vendas-em-ate-30,6869237d61dbc710VgnVCM100000d701210aRCRD"
    },
    {
      icon: "✅",
      title: "Maquininha de cartão: vantagens e como usar no seu negócio",
      url: "https://nox.com.br/maquininha-de-cartao-vantagens/"
    },
    {
      icon: "🌟",
      title: "Conheça os benefícios da maquininha de cartão",
      url: "https://www.concil.com.br/blog/conheca-os-beneficios-da-maquininha-de-cartao/"
    },
    {
      icon: "💚",
      title: "Como Preencher a declaração do Imposto de Renda MEI 2025",
      url: "https://blog.ton.com.br/web-stories/como-fazer-a-declaracao-do-imposto-de-renda-para-mei/"
    },
    {
      icon: "📝",
      title: "Vantagens e Riscos de ter um Sócio",
      url: "https://blog.ton.com.br/web-stories/vantagens-e-riscos-de-ter-um-socio/"
    },
    {
      icon: "💰",
      title: "MEI paga imposto de Renda?",
      url: "https://blog.ton.com.br/web-stories/mei-paga-imposto-de-renda/"
    },
    {
      icon: "⚖️",
      title: "8 Vantagens e Desvantagens da Maquininha T3 Ton",
      url: "https://maquininha.cc/vantagens-desvantagens-t3-ton/"
    },
    {
      icon: "Com é a Declaração De Imposto de Renda para MEI",
      title: "",
      url: "https://blog.ton.com.br/web-stories/como-e-a-declaracao-de-imposto-para-mei/"
    },
    {
      icon: "📚",
      title: "Blog do Ton",
      url: "https://blog.ton.com.br"
    },
    {
      icon: "🔍",
      title: "A Maquininha Ton é boa? Confira!",
      url: "https://www.mobills.com.br/blog/maquininha-de-cartao/maquininha-ton/"
    },
    {
      icon: "✍️",
      title: "7 Copies Poderosas para Anunciar a Maquininha Ton e ...",
      url: "https://maquininhas.blog/7-copies-poderosas-para-anunciar-a-maquininha-ton-e-impulsionar-suas-vendas/"
    }
  ]
};

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
  renderAllSections();
  setupEventListeners();
});

// ===== RENDERIZAR TODAS AS SEÇÕES =====
function renderAllSections() {
  renderBenefits(); // NOVA FUNÇÃO PARA OS 9 CARDS
  renderProducts();
  renderComparison();
  renderFAQ();
  renderTipsButtons(); // NOVA FUNÇÃO PARA OS BOTÕES DE DICAS
  renderArticles();
  
  // Mostrar o site após o carregamento dos dados
  document.body.style.opacity = 1;
}

// ===== RENDERIZAR BENEFÍCIOS (9 CARDS) =====
function renderBenefits() {
  const container = document.getElementById('benefits-container');
  if (!APP_DATA || !APP_DATA.benefits) return;

  container.innerHTML = APP_DATA.benefits.map(benefit => `
    <div class="benefit-card">
      <div class="benefit-icon" style="color: ${benefit.color};">${benefit.icon}</div>
      <h3 class="benefit-title">${benefit.title}</h3>
      <p class="benefit-description">${benefit.description}</p>
    </div>
  `).join('');
}

// ===== RENDERIZAR PRODUTOS =====
function renderProducts() {
  const container = document.getElementById('products-container');
  if (!APP_DATA || !APP_DATA.products) return;

  container.innerHTML = APP_DATA.products.map((product, index) => `
    <div class="product-card">
      <div class="product-image-wrapper">
        <img src="${product.image}" 
             alt="${product.title}" 
             class="product-image"
             loading="lazy"
             onerror="this.src='https://via.placeholder.com/300x300/00C853/FFFFFF?text=Ton+${product.title.replace(/\s/g, '+')}'">
        ${index === 0 ? '<span class="product-badge">⭐ MAIS VENDIDA</span>' : ''}
      </div>
      <div class="product-content">
        <h3 class="product-name">${product.title}</h3>
        <p class="product-slogan">${product.slogan}</p>
        <ul class="features-list">
          ${product.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
        </ul>
        <a href="${product.sellerLink}" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="btn-primary">
          🚀 Quero este modelo
        </a>
      </div>
    </div>
  `).join('');
}

// ===== RENDERIZAR COMPARAÇÃO DE PLANOS =====
function renderComparison() {
  const container = document.getElementById('comparison-container');
  if (!APP_DATA || !APP_DATA.plansComparison) return;

  container.innerHTML = APP_DATA.plansComparison.map(plan => `
    <div class="comparison-card">
      <h3>${plan.name}</h3>
      <p><strong>Perfil:</strong> ${plan.profile}</p>
      <p>${plan.strengths}</p>
    </div>
  `).join('');
}

// ===== RENDERIZAR FAQ =====
function renderFAQ() {
  const container = document.getElementById('faq-container');
  if (!APP_DATA || !APP_DATA.faq) return;

  container.innerHTML = APP_DATA.faq.map((item, index) => `
    <div class="faq-item" data-index="${index}">
      <div class="faq-question" onclick="toggleFAQ(${index})">
        <span>${item.question}</span>
        <span class="faq-toggle">▼</span>
      </div>
      <div class="faq-answer">
        <p>${item.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>
      </div>
    </div>
  `).join('');
}

// ===== NOVA FUNÇÃO: RENDERIZAR BOTÕES DE DICAS =====
function renderTipsButtons() {
  const container = document.getElementById('tips-buttons-container');
  if (!APP_DATA || !APP_DATA.tipsButtons) return;

  container.innerHTML = APP_DATA.tipsButtons.map(tip => `
    <a href="${tip.url}" 
       target="_blank" 
       rel="noopener noreferrer" 
       class="tip-button">
      <span class="tip-button-icon">${tip.icon}</span>
      <span class="tip-button-text">${tip.title}</span>
      <span class="tip-button-arrow">→</span>
    </a>
  `).join('');
}

// ===== RENDERIZAR ARTIGOS =====
function renderArticles() {
  const container = document.getElementById('articles-container');
  if (!APP_DATA || !APP_DATA.articles || APP_DATA.articles.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <p style="color: var(--text-muted); font-size: 16px;">
          Nenhum artigo disponível no momento.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = APP_DATA.articles.map(article => `
    <div class="article-card">
      <div class="article-header">
        <div class="article-date">📅 ${new Date(article.date).toLocaleDateString('pt-BR')}</div>
        <h3 class="article-title">${article.title}</h3>
      </div>
      <div class="article-content">
        ${article.content.substring(0, 150)}...
      </div>
      <div class="article-cta">
        <a href="#">Ler mais →</a>
      </div>
    </div>
  `).join('');
}

// ===== TOGGLE FAQ =====
function toggleFAQ(index) {
  const items = document.querySelectorAll('.faq-item');
  const item = items[index];
  
  // Fechar todos os outros
  items.forEach((el, i) => {
    if (i !== index) {
      el.classList.remove('active');
    }
  });
  
  // Toggle o atual
  item.classList.toggle('active');
}

// ===== MOSTRAR SEÇÃO =====
function showSection(sectionId) {
  // Ocultar todas as seções
  document.getElementById('home').style.display = 'none';
  document.getElementById('articles').style.display = 'none';
  document.getElementById('faq').style.display = 'none';

  // Mostrar a seção selecionada
  if (sectionId === 'home') {
    document.getElementById('home').style.display = 'block';
  } else if (sectionId === 'articles') {
    document.getElementById('articles').style.display = 'block';
  } else if (sectionId === 'faq') {
    document.getElementById('faq').style.display = 'block';
  }

  // Atualizar nav ativa
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('onclick').includes(sectionId)) {
      link.classList.add('active');
    }
  });

  // Scroll para o topo
  window.scrollTo(0, 0);
}

// ===== SETUP EVENT LISTENERS =====
function setupEventListeners() {
  // Event listeners adicionais podem ser adicionados aqui
}
