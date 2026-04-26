const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

// 👉 点击放大
function bindClick(img) {
  img.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  };
}

// =====================
// 项目1：4 - 19
// =====================
for (let i = 4; i <= 19; i++) {
  const img = document.createElement("img");
  img.src = `images/${i}.jpg`;
  bindClick(img);
  project1.appendChild(img);
}

// =====================
// 项目2：20 - 32
// =====================
for (let i = 20; i <= 32; i++) {
  const img = document.createElement("img");
  img.src = `images/${i}.jpg`;
  bindClick(img);
  project2.appendChild(img);
}

// =====================
// 点击空白关闭
// =====================
modal.onclick = () => {
  modal.style.display = "none";
};