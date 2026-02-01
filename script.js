document.addEventListener("DOMContentLoaded", function () {

  let images = [
    "images/team1.png",
    "images/team2.png",
    "images/team3.png"
  ];

  let index = 0;
  let slideImage = document.getElementById("slideImage");

  setInterval(function () {
    index = index + 1;
    if (index >= images.length) index = 0;
    slideImage.src = images[index];
  }, 5000);

  let members = [
    {
      name: "블루페이퍼",
      birthday: "07.10",
      type: "부마스터",
      image: "images/bluepaper.jpg"
    },
    {
      name: "샤드",
      birthday: "08.27",
      type: "클랜마스터",
      image: "images/shard.png"
    }
  ];

  let memberList = document.getElementById("memberList");
  let modal = document.getElementById("memberModal");
  let modalContent = document.getElementById("modalContent");

  members.forEach(function(member) {
    let card = document.createElement("div");
    card.className = "member-card";
    card.innerText = member.name;

    card.onclick = function () {
      openMember(member);
    };

    memberList.appendChild(card);
  });

  function openMember(member) {
    modalContent.innerHTML = `
      <h2>${member.name}</h2>
      <img src="${member.image}">
      <p>🎂 생일: ${member.birthday}</p>
      <p>📌 전형: ${member.type}</p>
    `;
    modal.style.display = "flex";
  }

  modal.onclick = function () {
    modal.style.display = "none";
  };

});
