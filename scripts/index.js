// fetch data
const getData = async (inputValue) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
  );
  const data = await res.json();
  allCard(data.data);
};

//  search button click function

function searchData() {
  let input = getId("input");
  const inputValue = input.value;
  // server send data
  getData(inputValue);
  input.value = "";

  getId("loader").classList.remove("hidden");
}

//  lopping card function
function allCard(phones) {
  const cardContainer = getId("card-container");
  cardContainer.textContent = "";
  if (phones.length <= 0) {
    alert("Please Valid Input try");
  }
  //   phone looping
  phones = phones.slice(0, 12);
  phones.forEach((phone) => {
    const div = document.createElement("div");
    div.innerHTML = ` <div
                class="card  shadow-xl p-3 border-[1px] border-[#CFCFCF]"
                >
                <figure class="px-10 py-10 bg-[#0D6EFD0D]">
                <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>There are many variations of passages of available, but the majority have suffered</p>
                <div class="card-actions">
                <button class="btn btn-primary">Show Details</button>
                </div>
                </div>
                </div>`;

    cardContainer.appendChild(div);
  });

  getId("loader").classList.add("hidden");
}

// getData("iphone");
