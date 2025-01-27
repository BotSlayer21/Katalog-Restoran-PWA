import CONFIG from '../../globals/config';

const createRestaurantDetail = (restaurant) => `
  <div id="contentdetail" class="contentdetail">
    <div class="resto_info_detail">
      <h2 class="detail_title">${restaurant.name}</h2>
      <img class="image_detail" crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
      <div class="detail_list">
        <h4>City</h4>
        <p class="detail_city">${restaurant.city}</p>
        <h4>Address</h4>
        <p class="detail_address">${restaurant.address}</p>
        <h4>Rating</h4>
        <p class="detail_rate">${restaurant.rating}</p>
        <h4>Description</h4>
        <p class="detail_desc">${restaurant.description}</p>
      </div>
    </div>
    <div class="menuContainer">
      <div class="menuMakan">
        <h3 class="InfoFood">Daftar Makanan:</h3>
        <ul>
          ${restaurant.menus.foods.map((menu) => `<li>${menu.name}</li>`).join('')}
        </ul>
      </div>
      <div class="menuMinum">
        <h3 class="InfoDrinks">Daftar Minuman:</h3>
        <ul>
          ${restaurant.menus.drinks.map((menu) => `<li>${menu.name}</li>`).join('')}
        </ul>
      </div>
    </div>
    <div class="reviewCust">
      <h2 class="headerInformation">Ulasan</h2>
      <div class="customerReviews">
        ${restaurant.customerReviews.map((review) => `
          <div class="customerReview">
            <p class="custReview">"${review.review}"</p>
            <p class="custName">${review.name},</p>
            <p class="custDate">${review.date}</p>
          </div>`).join('')}
      </div>
    </div>
  </div>
`;

const createRestaurantItem = (restaurant) => `
  <div class="contentlist" id="list">
    <a href="/#/detail/${restaurant.id}">
      <div class="resto_info">
        <img class="image" crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        <h2 class="info_judul">${restaurant.name}</h2>
        <p class="info_city">${restaurant.city}</p>
        <p class="info_desc">${restaurant.description.slice(0, 225)}</p>
        <p class="info_rates">Rating: ${restaurant.rating}</p>
      </div>
    </a>
  </div>
`;

const createsukaButtonTemplate = () => `
  <button aria-label="suka this resto" id="sukaButton" class="suka">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createsukadButtonTemplate = () => `
  <button aria-label="unsuka this resto" id="sukaButton" class="suka">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItem,
  createRestaurantDetail,
  createsukaButtonTemplate,
  createsukadButtonTemplate,
};
