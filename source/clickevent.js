// 클릭 이벤트를 위해 팀원 리스트 식별
const teamMateListForBtn = document.querySelectorAll(".team-mate");



function stylechange() {
  teamMateListForBtn[0].children[0].children[0].setAttribute("class", "fa-brands fa-github");
  teamMateListForBtn[0].children[1].innerHTML = "Github";
  teamMateListForBtn[0].children[2].children[0].setAttribute("class","fa-solid fa-arrow-left");
}

teamMateListForBtn[0].addEventListener("click", stylechange);

function stylechange_1() {
  teamMateListForBtn[1].children[0].children[0].setAttribute("class", "fa-brands fa-github");
  teamMateListForBtn[1].children[1].innerHTML = "Github";
  teamMateListForBtn[1].children[2].children[0].setAttribute("class","fa-solid fa-arrow-left");
}

teamMateListForBtn[1].addEventListener("click", stylechange_1);

function stylechange_2() {
  teamMateListForBtn[2].children[0].children[0].setAttribute("class", "fa-brands fa-github");
  teamMateListForBtn[2].children[1].innerHTML = "Github";
  teamMateListForBtn[2].children[2].children[0].setAttribute("class","fa-solid fa-arrow-left");
}

teamMateListForBtn[2].addEventListener("click", stylechange_2);

function stylechange_3() {
  teamMateListForBtn[3].children[0].children[0].setAttribute("class", "fa-brands fa-github");
  teamMateListForBtn[3].children[1].innerHTML = "Github";
  teamMateListForBtn[3].children[2].children[0].setAttribute("class","fa-solid fa-arrow-left");
}

teamMateListForBtn[3].addEventListener("click", stylechange_3);

function stylechange_4() {
  teamMateListForBtn[4].children[0].children[0].setAttribute("class", "fa-brands fa-github");
  teamMateListForBtn[4].children[1].innerHTML = "Github";
  teamMateListForBtn[4].children[2].children[0].setAttribute("class","fa-solid fa-arrow-left");
}

teamMateListForBtn[4].addEventListener("click", stylechange_4);


// teamMateListForBtn.forEach(stylechange());


// 토글 기능을 넣기 위해 지역변수 선열
// let changeSwitch;


// 클릭 시 팀원 리스트 안의 3가지 요소 (사람 아이콘, 이름, 화살표 아이콘) 삭제


// console.log(teamMateListForBtn);
// let changeSwitch = true;

// for (let button = 0; button < teamMateListForBtn.length; button++) {
//   teamMateListForBtn[button].addEventListener("click", switchToggle);
//   console.log(teamMateListForBtn[button]);
// }

// teamMateListForBtn.forEach(switchToggle);
// let changeSwitch = true;

// function switchToggle() {
//   for (let i = 0; i < teamMateListForBtn.length; i++) {
//     teamMateListForBtn[i].addEventListener("click", function() {
//       const changeTest = teamMateListForBtn[i].children;
//       for (let j = 0; j < changeTest.length; j++) {
//       changeTest[j].style.display = "none";
//     }
//     changeSwitch = false;
//     if (changeSwitch === false) {
//       teamMateListForBtn[i].addEventListener("click", function(){
//         for (let j = 0; j < changeTest.length; j++) 
//         changeTest[j].style.display = "inline";
//       })
//       changeSwitch = true;
//     }
//   }
//   )
//   }
// }


