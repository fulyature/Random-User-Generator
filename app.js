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
  card.innerHTML = ``;
};
