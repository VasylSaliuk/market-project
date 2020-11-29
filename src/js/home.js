import "../css/home.css";
import refs from "./refs.js";
console.log(refs);
console.log(refs.homeSection);
// Деструктуризация обекта доступа
const { homeSection } = refs;
console.log(homeSection);

const homeTitle = `<h2 class="homeTitle">Home</h2>`;

homeSection.insertAdjacentHTML("afterbegin", homeTitle);

const homeContent = document.createElement("p");
const content = `Lorem ipsum, dolor sit amet consecteture. Harum ipsum et non odit quis nemo reiciendis consectetur natus perspiciatis, officia, exercitationem nostrum voluptas debitis dignissimos, esse delectus.`;
homeContent.textContent = content;
console.log(homeContent);

const title = document.querySelector(".homeTitle");
title.appendChild(homeContent);
