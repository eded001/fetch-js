const img = document.querySelector("img");
const btnUpdateCat = document.querySelector("#btn-update-cat");

console.log(img)

window.addEventListener("load", async () => {
  const response = await fetchData();
  const imgInfos = {
    src: response.url,
    height: response.height,
    width: response.width
  };

  console.log(response);

  img.src = imgInfos.src;
  img.setAttribute("height", imgInfos.height);
  img.setAttribute("width", imgInfos.width);
});

btnUpdateCat.addEventListener("click", async () => {
  const response = await fetchData();
  const imgInfos = {
    src: response.url,
    height: response.height,
    width: response.width
  };

  console.log(response);

  img.src = imgInfos.src;
  img.setAttribute("height", imgInfos.height);
  img.setAttribute("width", imgInfos.width);
});

async function fetchData() {
  btnUpdateCat.setAttribute("disabled", "disabled");

  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  
  if (!res.ok) {
    btnUpdateCat.removeAttribute("disabled");
    throw new Error(`Response status: ${res.status}`);
  } else {
    const data = await res.json();
    btnUpdateCat.removeAttribute("disabled");
    return data[0];
  }
}
