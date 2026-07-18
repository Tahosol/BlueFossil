import { Category, apps } from "./data.js";
import { Platform } from "./data.js";
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
    <div class="rating" id="${escapeHtml(app.name)}rate">
      ${`<i class="fas fa-star"></i>`.repeat(fullStars)}${hasHalfStar ? `<i class="fas fa-star-half-stroke"></i>` : ""}
    </div>
    <div>
        <button class="more-btn" type="button">Show more</button>
        <button class="goto" type="button">Go to</button>
        </span>
        <div class="popup-text" hidden>
        </div>
    </div>
    <div class="platform"></div>
  `;
    const btn_show_more = card.querySelector(".more-btn");
    const popup_show_more = card.querySelector(".popup-text");
    const goto = card.querySelector(".goto");
    const platform = card.querySelector(".platform");
    setup_goto_and_platform(app, goto, platform);
    setup_show_more(app, btn_show_more, popup_show_more);
    return card;
}
function setup_goto_and_platform(app, goto, platform) {
    goto.title = `go to ${app.url}`;
    goto.addEventListener("click", () => {
        window.open(app.url, '_blank')?.focus();
    });
    [...app.platform].sort().forEach(pl => {
        switch (pl) {
            case Platform.ANDROID: {
                let icon_box = document.createElement("div");
                icon_box.className = "android";
                icon_box.title = "Android Support";
                let icon = document.createElement("i");
                icon.className = "fa-solid fa-robot fa-lg";
                icon_box.appendChild(icon);
                platform.appendChild(icon_box);
                break;
            }
            case Platform.IOS: {
                let icon_box = document.createElement("div");
                icon_box.className = "ios";
                icon_box.title = "IOS Support";
                let icon = document.createElement("i");
                icon.className = "fa-solid fa-apple-whole fa-lg";
                icon_box.appendChild(icon);
                platform.appendChild(icon_box);
                break;
            }
            case Platform.LINUX: {
                let icon_box = document.createElement("div");
                icon_box.className = "linux";
                icon_box.title = "Linux Support";
                let icon = document.createElement("i");
                icon.className = "fa-solid fa-terminal fa-lg";
                icon_box.appendChild(icon);
                platform.appendChild(icon_box);
                break;
            }
            case Platform.MACOS: {
                let icon_box = document.createElement("div");
                icon_box.className = "macos";
                icon_box.title = "Macos Support";
                let icon = document.createElement("i");
                icon.className = "fa-solid fa-laptop fa-lg";
                icon_box.appendChild(icon);
                platform.appendChild(icon_box);
                break;
            }
            case Platform.WINDOWS: {
                let icon_box = document.createElement("div");
                icon_box.className = "windows";
                icon_box.title = "Windows Support";
                let icon = document.createElement("i");
                icon.className = "fa-solid fa-window-restore fa-lg";
                icon_box.appendChild(icon);
                platform.appendChild(icon_box);
                break;
            }
        }
    });
}
function setup_show_more(app, btn, popup) {
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
        popup.hidden = !popup.hidden;
    });
}
function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
function renderCards(appList, query, cat) {
    if (!grid)
        return;
    const fragment = document.createDocumentFragment();
    const q = query?.toLowerCase() ?? "";
    const selectedCat = cat ?? "ALL";
    console.log(`${q}: ${selectedCat}`);
    appList.forEach(app => {
        if (app.name.toLowerCase().includes(q)) {
            if (app.category === Category[selectedCat]) {
                fragment.appendChild(createCard(app));
            }
            else if (selectedCat === "ALL") {
                fragment.appendChild(createCard(app));
            }
        }
    });
    grid.innerHTML = "";
    grid.appendChild(fragment);
}
renderCards(apps, "", "ALL");
addCategory(Category);
let searchTimer;
searchInput?.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = window.setTimeout(() => {
        renderCards(apps, searchInput.value.trim().toLowerCase(), optionCategory?.value);
    }, 150);
});
optionCategory?.addEventListener("change", () => {
    const query = searchInput?.value.trim().toLowerCase();
    const cat = optionCategory.value;
    console.log(cat);
    renderCards(apps, query, cat);
});
