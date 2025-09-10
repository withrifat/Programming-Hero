let cart = [];
// Fetch categories
const CategoriesApi = () => {
  fetch('https://openapi.programming-hero.com/api/categories')
    .then((res) => res.json())
    .then((json) => {
      displayCategories(json.categories);
    })
    .catch((err) => console.error('Error fetching categories:', err));
};

// Fetch plants by category
const loadLevelCard = (id) => {
  manageSpinner(true)
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((json) => {
      loadLevelCards(json.plants);
      manageSpinner(false)
    })
    .catch((err) => {
      console.error('Error fetching plants:', err)
      manageSpinner(false)
    });
};

// All trees category default
const allTreeCard = () => {
  manageSpinner(true)
  fetch(`https://openapi.programming-hero.com/api/plants`)
    .then((res) => res.json())
    .then((json) => {
      loadLevelCards(json.plants);
      manageSpinner(false)
    })
    .catch((err) =>{ 
      console.error('Error fetching all plants:', err)
      manageSpinner(false)
    });
};

// Active button helper
const removeActive = () => {
  const buttons = document.querySelectorAll('.category-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
};
//  spinner
const manageSpinner = (status)=>{
  if(status==true){
    document.getElementById('spinner').classList.remove('hidden');
    document.getElementById('cards').classList.add('hidden');
  } else{
    document.getElementById('cards').classList.remove('hidden');
    document.getElementById('spinner').classList.add('hidden');
  }
}
// add to cart
const addToCart = (plant) => {
  const existingItem = cart.find(item => item.id === plant.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({...plant, quantity: 1});
  }
  renderCart();
  // alert for add to cart
  alert(`${plant.name} add into cart`)
};
const renderCart = () => {
  const cartDiv = document.getElementById('cartContent');
  cartDiv.innerHTML = ''; 
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const li = document.createElement('li');
    li.classList.add('flex', 'justify-between', 'items-center', 'bg-green-50', 'px-3', 'py-2', 'rounded', 'mb-2');
    li.innerHTML = `
      <span>${item.name}</span>
      <span>৳${item.price} × ${item.quantity} 
        <button class="text-gray-500 ml-2 remove-btn" data-index="${index}">&times;</button>
      </span>
    `;
    cartDiv.appendChild(li);
  });
  const totalDiv = document.createElement('div');
  totalDiv.classList.add('font-semibold', 'text-lg', 'mt-2');
  totalDiv.textContent = `Total: ৳${total}`;
  cartDiv.appendChild(totalDiv);
  const removeButtons = cartDiv.querySelectorAll('.remove-btn');
  removeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const index = btn.dataset.index;
      cart.splice(index, 1);
      renderCart();
    });
  });
};
// end add to cart 

// Open modal with plant details (fetching from API)
const openPlantModal = (id) => {
  manageSpinner(true)
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then(res => res.json())
    .then(data => {
      const plant = data.plants; 
      const modalContent = document.getElementById('modal-content');
      modalContent.innerHTML = `
        <div class="space-y-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <img src="${plant.image}" alt="${plant.name}" class="w-full h-64 object-cover rounded-lg">
        <h2 class="text-2xl font-bold text-gray-900 tracking-wide">
            ${plant.name}
        </h2>
        <p class="text-gray-600 leading-relaxed">
            ${plant.description}
        </p>
        <div>
            <span class="inline-block bg-green-100  px-4 py-1 rounded-full text-xl font-semibold text-gray-800 mt-2">
            ${plant.category}
            </span>
        </div>
        <div>
            <span class="block text-xl font-semibold text-gray-800 mt-2">
            Price: ৳${plant.price}
            </span>
        </div>
        </div>
      `;

      document.getElementById('plant_modal').showModal();
      manageSpinner(false)
    })

    .catch(err => {
      console.error("Error fetching plant details:", err)
      manageSpinner(false)
    });
};


const loadLevelCards = (cards) => {

  const createCard = document.getElementById('cards');
  createCard.innerHTML = '';

  cards.forEach((card) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add("bg-white", "rounded-2xl", "shadow-lg", "hover:shadow-2xl", "transition-shadow", "duration-300", "p-4", "flex", "flex-col", "h-[500px]");

    cardElement.innerHTML = `
      <div class="h-44 md:h-52 lg:h-60 mb-4 overflow-hidden rounded-xl">
        <img src="${card.image}" alt="${card.name}" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 rounded-xl">
      </div>
      <h3 class="plant-name font-bold text-lg md:text-xl mb-2 text-gray-800 cursor-pointer hover:text-green-600" data-id="${card.id}">
        ${card.name}
      </h3>
      <p class="text-sm md:text-base text-gray-600 mb-4 flex-1 overflow-hidden line-clamp-4">
        ${card.description}
      </p>
      <div class="flex justify-between items-center mb-4">
        <span class="text-xs md:text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">${card.category}</span>
        <span class="font-semibold text-gray-800 text-sm md:text-base">৳${card.price}</span>
      </div>
      <button class="btn bg-[#15803D] text-white w-full py-6 rounded-full text-base md:text-lg font-semibold hover:bg-green-600 transition-colors duration-300">
        Add to Cart
      </button>
    `;

    // add evenlistener for modal call
    cardElement.querySelector(".plant-name").addEventListener("click", (e) => {
      const plantId = e.target.dataset.id;
      openPlantModal(plantId);
    });
    // Add to Cart
    cardElement.querySelector(".btn").addEventListener("click", () => {
      addToCart(card);
    });

    createCard.appendChild(cardElement);
  });

};


// Render categories with active button logic
const displayCategories = (categories) => {
  const wordContainer = document.getElementById('Categories');
  wordContainer.innerHTML = '';

  // Extra "All Trees" button
  const allTreesBtn = document.createElement('li');
  allTreesBtn.innerHTML = `
    <button class="category-btn w-full text-left px-3 py-2 rounded-xl">
      All Trees
    </button>
  `;
  wordContainer.appendChild(allTreesBtn);
  allTreesBtn.querySelector('button').classList.add('active');    // Set default active 
  // Other categories
  categories.forEach((category) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <button class="category-btn w-full text-left px-3 py-2 rounded-xl" data-id="${category.id}">
        ${category.category_name}
      </button>
    `;
    wordContainer.appendChild(li);
  });

  // Add click event for active class and loading
  const buttons = document.querySelectorAll('.category-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      removeActive();             
      btn.classList.add('active'); 
      const id = btn.dataset.id;
      if(id) {
        loadLevelCard(id);        
      } else {
        allTreeCard();            
      }
    });
  });
};

// Initialize
CategoriesApi();
allTreeCard(); // default card
