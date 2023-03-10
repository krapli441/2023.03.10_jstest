  // header 생성
  const createHeader = document.createElement('div');
  createHeader.setAttribute("class", "headers");
  root.appendChild(createHeader);
  createHeader.style.display = styleFlex;
  createHeader.style.justifyContent = styleCenter;
  createHeader.style.alignItems = styleCenter;
  createHeader.style.flexDirection = styleColumn;
  createHeader.style.width = "100%";
  createHeader.style.textAlign = styleCenter;
  createHeader.style.color = _teamDesign.colorSet[2];
  // header 텍스트 생성
  const createHeaderText = document.createElement('p');
  createHeaderText.setAttribute("class", "header-text");
  createHeaderText.innerHTML = _teamInfo.teamName;
  createHeader.appendChild(createHeaderText);
  createHeaderText.style.fontSize = "96px";
  createHeaderText.style.fontWeight = fontWeight[1];
  createHeaderText.style.letterSpacing = "50px";

  // 팀명 서브 네임
  const createSubText = document.createElement('p');
  createSubText.setAttribute("class", "sub-text");
  createSubText.innerHTML = _teamInfo.teamNameStory;
  createHeader.appendChild(createSubText);
  createSubText.style.fontSize = "40px";
  createSubText.style.fontWeight = fontWeight[0];
  createSubText.style.letterSpacing = "32.6px";