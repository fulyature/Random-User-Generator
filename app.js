const btn = document.getElementById("btn");
const card = document.querySelector(".inner-container");

btn.addEventListener("click", () => {
  getData();
});
const getData = async () => {
  try {
    const URL = "https://randomuser.me/api";
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(res.status);
    } else {
      const data = await res.json();
      console.log(data);
      domaYaz(data);
    }
  } catch (error) {
    console.log(error);
  }
};

const domaYaz = (x) => {
  const {
    picture: { medium },
    name: { first },
    name: { last },
    location: { country },
    phone,
    email,
  } = x.results[0];

  card.innerHTML = `<img class="image" src="${medium}"" alt="" />
  <p>
    <i class="fa-solid fa-user"> Name:</i>
    <span class="name">${first}</span>
  </p>
  <p>
    <i class="fa-solid fa-user"> Last-Name:</i>
    <span class="last-name">${last}</span>
  </p>
  <p>
    <i class="fa-solid fa-magnifying-glass-location"> Location:</i>
    <span class="location">${country}</span>
  </p>
  <p>
    <i class="fa-solid fa-phone-flip"> Phone:</i>
    <span class="phone"${phone}</span>
  </p>
  <p>
    <i class="fa-solid fa-envelope"> Email:</i>
    <span class="email">${email}</span>
  </p>`;
};
