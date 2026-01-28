// Simple config: add your shops and QR image file names here
// Place the QR images (PNG/JPG) in the same folder as this file.

const shops = [
  {
    id: 'aeroplan',
    name: 'Aeroplan',
    category: 'Travel',
    image: 'aeroplan-card.jpeg',
    notes: 'Aeroplan membership barcode'
  },
  {
    id: 'tandt',
    name: 'T & T',
    category: 'Grocery',
    image: 'tandt-card.jpeg',
    notes: 'T & T membership barcode'
  },
  {
    id: 'starbucks',
    name: 'Starbucks',
    category: 'Coffee',
    image: 'starbucks-card.jpeg',
    notes: 'Starbucks rewards barcode'
  },
  {
    id: 'pc-optimum',
    name: 'PC Optimum',
    category: 'Grocery',
    image: 'pc-optimum-card.jpeg',
    notes: 'PC Optimum points card'
  }
];

const listEl = document.getElementById('shop-list');
const viewerEl = document.getElementById('viewer');
const backBtn = document.getElementById('back-btn');
const viewerTitle = document.getElementById('viewer-title');
const viewerImg = document.getElementById('viewer-img');
const viewerNotes = document.getElementById('viewer-notes');

function renderList() {
  listEl.innerHTML = '';
  shops.forEach((shop) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-title">${shop.name}</div>
      ${shop.category ? `<div class="card-category">${shop.category}</div>` : ''}
    `;
    card.addEventListener('click', () => showShop(shop));
    listEl.appendChild(card);
  });
}

function showShop(shop) {
  viewerTitle.textContent = shop.name;
  viewerImg.src = shop.image;
  viewerNotes.textContent = shop.notes || '';
  listEl.classList.add('hidden');
  viewerEl.classList.remove('hidden');
}

backBtn.addEventListener('click', () => {
  viewerEl.classList.add('hidden');
  listEl.classList.remove('hidden');
});

renderList();
