const teamMateListForBtn = document.querySelectorAll(".team-mate");

console.log(teamMateListForBtn);

const teamMemberIcon = document.querySelector(".teammate-icon");
const teamMemberName = document.querySelector(".teammate-name");
const teamMemberRightArrowIcon = document.querySelector(".right-arrow-icon");


// teamMateListForBtn.array.forEach(element => {
//   element.adde
// });


for (let i = 0; i < teamMateListForBtn.length; i++) {
  teamMateListForBtn[i].addEventListener("click", function () {
    console.dir(teamMateListForBtn[i]);
  })
}