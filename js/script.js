let interviewCountList = [];
let rejectedCountList = [];

const total = document.getElementById("total");
const interview = document.getElementById("interview");
const rejected = document.getElementById("rejected");
const jobCount = document.getElementById("job-count");
const cardsSection = document.getElementById("cards-section");

jobCount.innerText = cardsSection.children.length;
function count() {
  total.innerText = cardsSection.children.length;
  interview.innerText = interviewCountList.length;
  rejected.innerText = rejectedCountList.length;
}
count();

// find button
const allBtn = document.getElementById("all-filter-btn");
const interviewBtn = document.getElementById("interview-filter-btn");
const rejectedBtn = document.getElementById("rejected-filter-btn");

// all card section
const allcardsSection = document.getElementById("allcards-section");
const filterdSection = document.getElementById("filterd-section");

// toggle button
function toggleStyle(id) {
  // add color onclick
  allBtn.classList.add("bg-gray-300", "text-black");
  interviewBtn.classList.add("bg-gray-300", "text-black");
  rejectedBtn.classList.add("bg-gray-300", "text-black");

  // remove color onclick
  allBtn.classList.remove("bg-blue-500", "text-white");
  interviewBtn.classList.remove("bg-blue-500", "text-white");
  rejectedBtn.classList.remove("bg-blue-500", "text-white");

  // filter by category job
  if (id === "all-filter-btn") {
    allcardsSection.classList.remove("hidden");
    filterdSection.classList.add("hidden");
  } else if (id === "interview-filter-btn") {
    filterdSection.classList.remove("hidden");
    allcardsSection.classList.add("hidden");
  } else if (id === "rejected-filter-btn") {
    allcardsSection.classList.add("hidden");
    filterdSection.classList.remove("hidden");
  }

  const selected = document.getElementById(id);
  selected.classList.add("bg-blue-500", "text-white");
  selected.classList.remove("bg-gray-300", "text-black");
}

// conditional render by fitersection
const filterdContainer = document.getElementById("filter-container");
if (interviewCountList.length <= 0) {
  filterdContainer.innerHTML = `
  <div class="flex flex-col items-center gap-4">
  <img src="./img/jobs.png">
  <h2 class="font-bold text-3xl text-[#002C5C]">No Jobs Available</h2>
  <p class="font-bold text-black">Check back soon for new job opportunities</p>
  </div>
  `;
}

// find main container and addEventListener
const mainContainer = document.querySelector("main");
mainContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("interview")) {
    const parentNode = event.target.parentNode.parentNode;
    // console.log(parentNode);
    const companyName = parentNode.querySelector(".company").innerText;
    const position = parentNode.querySelector(".position").innerText;
    const jobDetails = parentNode.querySelector(".job-detaills").innerText;
    const status = parentNode.querySelector(".status-1").innerText;
    const jobReview = parentNode.querySelector(".job-info").innerText;

    parentNode.querySelector(".status-1").innerText = "APPLIED";
    parentNode
      .querySelector(".status-1")
      .classList.add("bg-green-500", "text-white");

    const jobInfo = {
      companyName,
      position,
      jobDetails,
      status: "APPLIED",
      jobReview,
    };
    // console.log(jobInfo);

    let interviewListExist = interviewCountList.find(
      (item) => item.companyName === jobInfo.companyName
    );

    if (!interviewListExist) {
      interviewCountList.push(jobInfo);
    }
    count();
    interviewRender();
  }
});

function interviewRender() {
  filterdContainer.innerHTML = ``;
  for (let interview of interviewCountList) {
    const div = document.createElement("div");
    div.className =
      "p-6 hover:shadow shadow-blue-500 duration-300 flex justify-between";
    div.innerHTML = `
   <div class="space-y-3">
                  <h2 class="company font-bold text-[#002C5C] text-2xl">${interview.companyName}</h2>
                  <p class="position font-semibold text-gray-500">${interview.position}</p>
                  <p class="job-detaills">${interview.jobDetails}</p>
                  <span class="status-1 bg-gray-300 text-[#002C5C] p-2 inline-block my-2">${interview.status}</span>
                  <p class="job-info">${interview.jobReview}</p>
                  <div>
                    <button  class="interview btn btn-primary btn-soft">Interview</button>
                    <button class="rejected btn btn-error btn-soft">Rejected</button>
                  </div>
                </div>
                <div><button class=" border-amber-800 px-2 text-red-500"><i class="fa-solid fa-trash-can"></i></button></div>
  `;
    filterdContainer.appendChild(div);
  }
}
