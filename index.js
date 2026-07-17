import { Category, apps } from "./data.js";
const grid = document.getElementById("cardGrid");
const searchInput = document.getElementById("input");
const optionCategory = document.getElementById("select");
function addCategory(categories) {
    if (!optionCategory)
        return;
    Object.keys(categories)
        .forEach((key) => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = categories[key];
        optionCategory.appendChild(option);
    });
}
function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}
function createCard(app) {
    const card = document.createElement("div");
    card.className = "card";
    card.tabIndex = 0;
    card.role = "button";
    const fullStars = Math.floor(app.rating);
    const hasHalfStar = app.rating % 1 !== 0;
    card.innerHTML = `
    <div class="logo-container">
      <img class="logo" src="assets/app/${escapeHtml(app.name)}.webp" alt="${escapeHtml(app.name)}">
      <div>
        <h3>${escapeHtml(app.name)}</h3>
        <span class="category">${escapeHtml(app.category)}</span>
      </div>
    </div>
    <p>${escapeHtml(app.description)}</p>
    <span class="rating" id="${escapeHtml(app.name)}rate">
      ${`<i class="fas fa-star"></i>`.repeat(fullStars)}${hasHalfStar ? `<i class="fas fa-star-half-stroke"></i>` : ""}
    </span>
    <button class="more-btn" type="button">Show more</button>
    <div class="popup-text" hidden>
    </div>
  `;
    const btn = card.querySelector(".more-btn");
    const popup = card.querySelector(".popup-text");
    const pros_head = document.createElement("div");
    pros_head.className = "pro-heading";
    pros_head.innerHTML = `
    <i class="fas fa-thumbs-up"></i> <p> Pros</p>
    `;
    const pros = document.createElement("ul");
    app.pros.forEach(pro => {
        const li = document.createElement("li");
        li.textContent = capitalizeFirstLetter(pro);
        pros.appendChild(li);
    });
    popup.appendChild(pros_head);
    popup.appendChild(pros);
    const cons_head = document.createElement("div");
    cons_head.className = "con-heading";
    cons_head.innerHTML = `
    <i class="fas fa-thumbs-down"></i> <p> Cons</p>
    `;
    const cons = document.createElement("ul");
    app.cons.forEach(con => {
        const li = document.createElement("li");
        li.textContent = capitalizeFirstLetter(con);
        cons.appendChild(li);
    });
    popup.appendChild(cons_head);
    popup.appendChild(cons);
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        popup.hidden = !popup.hidden;
    });
    popup.addEventListener("click", (e) => {
        e.stopPropagation();
    });
    card.addEventListener("click", () => {
        console.log("Card clicked:", app.name);
        window.location.assign(app.url);
    });
    card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            card.click();
        }
    });
    return card;
}
function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
function renderCards(appList, query, cat) {
    if (!grid)
        return;
    grid.innerHTML = "";
    const q = query?.toLowerCase() ?? "";
    const selectedCat = cat ?? "ALL";
    console.log(`${q}: ${selectedCat}`);
    appList.forEach(app => {
        if (app.name.toLowerCase().includes(q)) {
            if (app.category === Category[selectedCat]) {
                grid.appendChild(createCard(app));
            }
            else if (selectedCat === "ALL") {
                grid.appendChild(createCard(app));
            }
        }
    });
}
renderCards(apps, "", "ALL");
addCategory(Category);
searchInput?.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    const cat = optionCategory?.value;
    renderCards(apps, query, cat);
});
optionCategory?.addEventListener("change", () => {
    const query = searchInput?.value.trim().toLowerCase();
    const cat = optionCategory.value;
    console.log(cat);
    renderCards(apps, query, cat);
});
