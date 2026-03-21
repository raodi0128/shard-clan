document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     메인 슬라이더
  ========================= */
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

  /* =========================
     멤버 데이터
  ========================= */
  let membersData = [
    {
      name: "샤드",
      birthday: "0827",
      type: "일반전형",
      role: "마스터",
      image: "images/shard2.png"
    },
    {
      name: "블루페이퍼",
      birthday: "0710",
      type: "기부전형",
      role: "부마스터",
      image: "images/bluepaper.jpg"
    },
     {
      name: "안율솔",
      birthday: "0122",
      type: "일반전형",
      role: "부마스터",
      image: "images/sol.jpg"
    },
     {
      name: "김황혼",
      birthday: "1208",
      type: "아트전형",
      role: "부마스터",
      image: "images/twilight.jpg"
    },
     {
      name: "영소천",
      birthday: "0803",
      type: "일반전형",
      role: "부마스터",
      image: "images/river.png"
    },
     {
      name: "료하",
      birthday: "0601",
      type: "아트전형",
      role: "아트부원",
      image: "images/ryuha.jpg"
    },
     {
      name: "새싹고래",
      birthday: "0705",
      type: "아트전형",
      role: "아트부원",
      image: ["images/whale.png","images/whale2.png"]
    },
     {
      name: "시서연",
      birthday: "0209",
      type: "아트전형",
      role: "아트부원",
      image: "images/youn.png"
    },
     {
      name: "CH.Noa",
      birthday: "0602",
      type: "아트전형",
      role: "아트부원",
      image: "images/noa.png"
    },
     {
      name: "쇼뮹",
      birthday: "0207",
      type: "일반전형",
      role: "클랜원",
      image: "images/sho.jpg"
    },
     {
      name: "버라",
      birthday: "0117",
      type: "일반전형",
      role: "클랜원",
      image: "images/bara.jpg"
    },
     {
      name: "유저인간",
      birthday: "0811",
      type: "일반전형",
      role: "클랜원",
      image: "images/user.png"
    },
     {
      name: "427ㄷ",
      birthday: "0416",
      type: "일반전형",
      role: "클랜원",
      image: "images/427.jpg"
    },
     {
      name: "망딩",
      birthday: "0515",
      type: "아트전형",
      role: "아트부원",
      image: "images/mang.png"
    },
     {
      name: "하테",
      birthday: "0223",
      type: "기부전형",
      role: "클랜원",
      image: ["images/hate1.jpg","images/hate2.jpg"]
    }
    // 👉 여기 계속 추가
  ];

  let memberList = document.getElementById("memberList");
  let modal = document.getElementById("memberModal");
  let modalContent = document.getElementById("modalContent");

  let visibleCount = 5;
  let currentFilter = "전체";

  /* =========================
     멤버 렌더링
  ========================= */
  function renderMembers() {
    memberList.innerHTML = "";

    let filtered = membersData.filter(function (member) {
      return currentFilter === "전체" || member.type === currentFilter;
    });

    filtered.forEach(function (member, index) {
      if (index >= visibleCount) return;

      let row = document.createElement("div");
      row.className = "member-row";

      row.innerHTML = `
        <span>${member.type}</span>
        <span>${member.name}</span>
        <span>${member.birthday.slice(0,2)}-${member.birthday.slice(2)}</span>
        <span>${member.role}</span>
      `;

      row.onclick = function () {
        openMember(member);
      };

      memberList.appendChild(row);
    });
  }

  /* =========================
     멤버 모달
  ========================= */
function openMember(member) {
  let imagesHtml = "";
  let imgs = [];

  if (Array.isArray(member.image)) {
    imgs = member.image;
  } else if (member.image) {
    imgs = [member.image];
  }

  imgs.forEach(function (img) {
    imagesHtml += `<img src="${img}" class="profile-img">`;
  });

  modalContent.innerHTML = `
    <h2>${member.name}</h2>
    <div class="profile-images">
      ${imagesHtml}
    </div>
    <p>🎂 생일: ${member.birthday.slice(0,2)}-${member.birthday.slice(2)}</p>
    <p>📌 전형: ${member.type}</p>
    <p>👑 직위: ${member.role}</p>
  `;

  modal.style.display = "flex";
}



  modal.onclick = function () {
    modal.style.display = "none";
  };

  /* =========================
     필터 버튼
  ========================= */
  let filterButtons = document.querySelectorAll(".filters button");

  filterButtons.forEach(function (button) {
    button.onclick = function () {
      currentFilter = button.dataset.filter;
      visibleCount = 20;
      renderMembers();
    };
  });

  /* =========================
     정렬 버튼
  ========================= */
  let sortBirthday = document.getElementById("sortBirthday");
  let sortRole = document.getElementById("sortRole");

  sortBirthday.onclick = function () {
    membersData.sort(function (a, b) {
      return a.birthday.localeCompare(b.birthday);
    });
    renderMembers();
  };

  sortRole.onclick = function () {
    let roleOrder = {
      "마스터": 1,
      "부마스터": 2,
      "아트부원": 3,
      "클랜원": 4
    };

    membersData.sort(function (a, b) {
      return roleOrder[a.role] - roleOrder[b.role];
    });
    renderMembers();
  };

  /* =========================
     더 보기
  ========================= */
  let loadMore = document.getElementById("loadMore");

  if (loadMore) {
    loadMore.onclick = function () {
      visibleCount += 20;
      renderMembers();
    };
  }

  /* =========================
     햄버거 메뉴
  ========================= */
  let hamburger = document.getElementById("hamburger");
  let menu = document.getElementById("menu");

  hamburger.onclick = function () {
    menu.classList.toggle("active");
  };

  /* 최초 실행 */
  renderMembers();

});

