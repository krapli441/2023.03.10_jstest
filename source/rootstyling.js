// root 식별
const root = document.getElementById('root');


// css 자주 쓰이는 스타일링 속성 변수화
let styleCenter = "center";
let styleFlex = "flex";
let styleColumn = "column";
let styleRow = "row";
let styleEvenly = "space-evenly";
let styleAround = "space-around";
let fontWeight = ["light", "bold"];

// root 스타일링
root.style.width = _teamDesign.breakPoint[2];
root.style.height =  _teamDesign.breakPoint[1];
root.style.backgroundColor = _teamDesign.colorSet[3];
root.style.display = styleFlex;
root.style.flexDirection = styleColumn;
root.style.alignItems = styleCenter;
root.style.justifyContent = styleEvenly;