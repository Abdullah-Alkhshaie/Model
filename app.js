const btn = document.querySelector("button");
const hero = document.querySelector(".hero");

btn.addEventListener("click", () => {
  const overLay = document.createElement("div");
  const card = document.createElement("div");
  const title = document.createElement("h2");
  const closBtn = document.createElement("i");

  overLay.className = "overlay";
  card.className = "card-over";
  title.className = "title";
  closBtn.className = "fa-solid fa-xmark close-btn";

  title.innerText = "Model Content";

  closBtn.onclick = () => {
    overLay.style.display = "none";
  };

  hero.appendChild(overLay);
  overLay.appendChild(card);
  card.appendChild(title);
  card.appendChild(closBtn);
});
