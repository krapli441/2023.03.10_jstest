  // 팀원 컨테이너 생성
  const createTeamMemberContainer = document.createElement('div');
  createTeamMemberContainer.setAttribute("class", "team-members");
  root.appendChild(createTeamMemberContainer);
  
  createTeamMemberContainer.style.display = "flex";
  createTeamMemberContainer.style.width = "1280px";
  createTeamMemberContainer.style.height = "940px";
  createTeamMemberContainer.style.backgroundColor = _teamDesign.colorSet[2];
  createTeamMemberContainer.style.borderRadius = "60px";

  //팀원 목록 생성
  for(let i = 0; i < _teamInfo.teamAllMember.length; i++) {
    const createTeamDiv = document.createElement('div');
    createTeamDiv.setAttribute("class", "team-mate");
    createTeamMemberContainer.appendChild(createTeamDiv);
    console.error('lols')
  }

