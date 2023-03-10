  // 팀원 컨테이너 생성
  const createTeamMemberContainer = document.createElement('div');
  createTeamMemberContainer.setAttribute("class", "team-members");
  root.appendChild(createTeamMemberContainer);
  
  // 팀원 컨테이너 스타일링
  createTeamMemberContainer.style.display = "flex";
  createTeamMemberContainer.style.width = "1280px";
  createTeamMemberContainer.style.height = "940px";
  createTeamMemberContainer.style.backgroundColor = _teamDesign.colorSet[2];
  createTeamMemberContainer.style.borderRadius = "60px";
  createTeamMemberContainer.style.flexDirection = styleColumn;
  createTeamMemberContainer.style.justifyContent = styleEvenly;
  createTeamMemberContainer.style.alignItems = styleCenter;
  

  // 팀원 목록 만들기 위해 변수 선언
  const teamNameList = _teamInfo.teamAllMember;

  //팀원 목록 생성
  for(let i = 0; i < _teamInfo.teamAllMember.length; i++) {
    const createTeamDiv = document.createElement('div');
    createTeamDiv.setAttribute("class", "team-mate");
    createTeamMemberContainer.appendChild(createTeamDiv);
    createTeamDiv.style.display = styleFlex;
    createTeamDiv.style.alignItems = styleCenter;
    createTeamDiv.style.justifyContent = styleAround;
    createTeamDiv.style.color = _teamDesign.colorSet[3];

    // 팀원 아이콘 생성
    const createTeamMemberIconDiv = document.createElement('div');
    createTeamMemberIconDiv.setAttribute("class", "teammate-icon");
    createTeamDiv.appendChild(createTeamMemberIconDiv);
    const createTeamMemberIcon = document.createElement('i');
    createTeamMemberIcon.setAttribute("class", "fa-solid fa-user");
    createTeamMemberIconDiv.appendChild(createTeamMemberIcon);
    createTeamMemberIcon.style.fontSize = "40px";

    // 팀원 이름 넣기 위해 div 생성
    const createTeamMemberName = document.createElement('div');
    createTeamMemberName.innerHTML = teamNameList[i].name;
    createTeamMemberName.setAttribute("class", "teammate-name");
    createTeamMemberName.style.fontSize = "48px";
    createTeamDiv.appendChild(createTeamMemberName);
    
    // 클릭 버튼 넣기 위해 div 생성
    const createTeamMemberRightArrowDiv = document.createElement('div');
    createTeamMemberRightArrowDiv.setAttribute("class", "right-arrow-icon");
    createTeamDiv.appendChild(createTeamMemberRightArrowDiv);


    // 클릭 아이콘 넣기 위해 아이콘 생성
    const createTeamMemberRightArrowIcon = document.createElement('i');
    createTeamMemberRightArrowIcon.setAttribute("class", "fa-solid fa-arrow-right");
    createTeamMemberRightArrowDiv.appendChild(createTeamMemberRightArrowIcon);
    createTeamMemberRightArrowIcon.style.fontSize = "48px";

    // 팀원 목록 스타일링
    createTeamDiv.style.width = "1080px";
    createTeamDiv.style.height = "132px";
    createTeamDiv.style.backgroundColor = _teamDesign.colorSet[4];
    createTeamDiv.style.borderRadius = "60px";

    
  }
  
  // 팀원 이름 생성
