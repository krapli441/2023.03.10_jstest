// 클릭 이벤트를 위해 팀원 리스트 식별
const teamMateListForBtn = document.querySelectorAll(".team-mate");


// 토글 기능을 넣기 위해 지역변수 선열
// let changeSwitch;


// 클릭 시 팀원 리스트 안의 3가지 요소 (사람 아이콘, 이름, 화살표 아이콘) 삭제
// for (let i = 0; i < teamMateListForBtn.length; i++) {
//   changeSwitch = true;
//   teamMateListForBtn[i].addEventListener("click", function() {
//     const changeTest = teamMateListForBtn[i].children;
//     for (let j = 0; j < changeTest.length; j++) {
//     changeTest[j].style.display = "none";
//   }
//   changeSwitch = false;
//         if (changeSwitch === false) {
//           teamMateListForBtn[i].addEventListener("click", function(){
//             for (let j = 0; j < changeTest.length; j++) 
//             changeTest[j].style.display = "inline";
//           })
//           changeSwitch = true;
//         }
//     }
//     )
// }


console.log(teamMateListForBtn);
let changeSwitch = true;

teamMateListForBtn[0].addEventListener("click", switchToggle);

function switchToggle () {
  if (changeSwitch === true) {
    changeSwitch = false;
    console.log(teamMateListForBtn[0]);
    // teamMateListForBtn[0].children[0].style.display = "none";
    teamMateListForBtn[0].children.forEach(function(a) {
      a.style.display = "none";
    })

    // teamMateListForBtn[0].children[1].style.display = "none";
    // teamMateListForBtn[0].children[2].style.display = "none";

  } else {
      changeSwitch = true;
      teamMateListForBtn[0].style.display = "";
    }
  };

  console.log(typeof(teamMateListForBtn[0].children));

  const entries = Object.entries(teamMateListForBtn);

  console.log(entries);