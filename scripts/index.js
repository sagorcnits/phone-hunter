// fetch data
const getData = async (inputValue, showAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
  );
  const data = await res.json();
  allCard(data.data, showAll);

  //   console.log(inputValue, showAll);
};

//  search button click function

function searchData() {
  let input = getId("input");
  const inputValue = input.value;
  // server send data
  getData(inputValue);
  //   input.value = "";

  getId("loader").classList.remove("hidden");
}

//  lopping card function
function allCard(phones, showAll) {
  console.log(showAll);
  const cardContainer = getId("card-container");
  cardContainer.textContent = "";
  if (phones.length <= 0) {
    alert("Please Valid Input try");
  }
  // cheack
  if (phones.length > 12) {
    getId("show-btn").classList.remove("hidden");
  } else {
    getId("show-btn").classList.add("hidden");
  }

  if (showAll) {
    getId("show-btn").classList.add("hidden");
  } else {
    phones = phones.slice(0, 12);
  }
  //   phone looping
  phones.forEach((phone) => {
    // console.log(phone.slug);
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
                <button class="btn btn-primary" onclick="showDetails('${phone.slug}')">Show Details</button>
                </div>
                </div>
                </div>`;

    cardContainer.appendChild(div);
  });
  // loadre
  getId("loader").classList.add("hidden");
}

// getData("iphone");

// show details function

function showAll() {
  getId("show-btn").classList.add("hidden");
  let showAllValue = getId("input").value;
  getData(showAllValue, true);
  //   console.log(showAllValue);
}

// show details function

// data fetch show details
const showDetailsData = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  console.log(data);
  const modal = getId("modal-details");
  const showModal = document.createElement("div");
  modal.innerHTML = "";
  showModal.innerHTML = `
  <div class="p-4">
                <figure class="px-5 py-5 bg-[#0D6EFD0D]">
                <img class="mx-auto" src="${data.data.image}" alt="Shoes" class="rounded-xl" />
                </figure>
               
                <h2 class="card-title mt-4">${data.data.name}</h2>
                <p><span class="font-bold">Storage: </span>${data.data.mainFeatures.storage}</p>       
                <p><span class="font-bold">Display Size: </span>${data.data.mainFeatures.displaySize}</p>       
                <p><span class="font-bold">Chipset: </span>${data.data.mainFeatures.chipSet}</p>       
                <p><span class="font-bold">Memory: </span>${data.data.mainFeatures.memory}</p>       
                <p><span class="font-bold">Slug: </span>${data.data.slug}</p>       
                <p><span class="font-bold">Release data: </span>${data.data.releaseDate}</p>       
                <p><span class="font-bold">Brand: </span>${data.data.brand}</p>       
                <p><span class="font-bold">GPS: </span>${data.data.others.GPS}</p>       
</div>
  `;
  modal.appendChild(showModal);
};

function showDetails(slug) {
  // modal
  my_modal_3.showModal();
  showDetailsData(slug);
}
