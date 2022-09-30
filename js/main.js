const categories = [
    {
      name: 'უძრავი ქონება',
      id: 1,
    },
    {
      name: 'ბიზნესი',
      id: 2,
    },
    {
      name: 'მედია',
      id: 3,
    },
  ];
  
  const domainList = [
    {
      domainName: 'example1',
      domainExtension: '.ge',
      price: 100,
      categories: [1, 2],
    },
    {
      domainName: 'example2',
      domainExtension: '.com.ge',
      price: 720,
      categories: [2, 3],
    },
    {
      domainName: 'example3',
      domainExtension: '.edu.ge',
      price: 340,
      categories: [2],
    },
    {
      domainName: 'example4',
      domainExtension: '.ge',
      price: 300,
      categories: [3],
    },
    {
      domainName: 'example5',
      domainExtension: '.org.ge',
      price: 650,
      categories: [1, 3],
    },
  ];
  
  
  const selectedCategories = [];
  
  const renderCategories = () => {
    const categoryContainer = document.getElementById('category-wrapper');
    categories.forEach((element) => {
      const category = document.createElement('div');
      category.classList.add('category-container');
      category.innerHTML = `
        <input onchange="onCategoryChange(${element.id})" type="checkbox" id="${element.id}" name="${element.id}">
        <label for="${element.id}">${element.name}</label>
      `;
      categoryContainer.appendChild(category);
    });
  };
  
  const onCategoryChange = (id) => {
    if (selectedCategories.includes(id)) {
      const elementIndex = selectedCategories.indexOf(id);
      selectedCategories.splice(elementIndex, 1);
    } else {
      selectedCategories.push(id);
    }
    renderDomainList();
  };
  
  const renderDomainList = () => {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';
  
    const renderDomainCard = (element) => {
      const domainCard = document.createElement('div');
      domainCard.classList.add('row');
      domainCard.classList.add('domain-card');
      domainCard.innerHTML = `
        <div class="row domain-name">
            <img src="/content/img/Btn_send.svg" class="btn-drop">
            <p>${element.domainName}${element.domainExtension}</p>
        </div>
        <div class="row domain-list">
            <div class="domain-price">
                <h3 class="domain-price-gel p16">${element.price} ₾</h3>
            </div>
            <div class="add-to-cart" onclick="addToCart()">
                <img src="/content/img/Fill 932.svg" class="btn-cart" alt="cart">
            </div>
        </div>
      `;
      resultContainer.appendChild(domainCard);
    };
  
    for (let i = 0; i < domainList.length; i++) {
      const element = domainList[i];
      const requiredCategories = element.categories;
      if (selectedCategories.length) {
        for (let j = 0; j < requiredCategories.length; j++) {
          const cat = requiredCategories[j];
          if (selectedCategories.includes(cat)) {
            renderDomainCard(element);
            break;
          }
        }
      } else {
        renderDomainCard(element);
      }
    }
  };
  
  let cartCount = 0;
  const addToCart = () => {
    cartCount += 1;
    const badge = document.getElementById('badge');
    badge.innerText = cartCount;
  };
  
  renderCategories();
  renderDomainList();
  