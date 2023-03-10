const root = document.getElementById('root');
// root 식별

let styleCenter = "center";
let styleFlex = "flex";
let styleColumn = "column";
let styleRow = "row";
let styleEvenly = "space-evenly";
let fontWeight = ["light", "bold"];

root.style.width = _teamDesign.breakPoint[2];
root.style.height =  _teamDesign.breakPoint[1];
root.style.backgroundColor = _teamDesign.colorSet[3];
root.style.display = styleFlex;
root.style.flexDirection = styleColumn;
root.style.alignItems = styleCenter;
root.style.justifyContent = styleEvenly;
// root 스타일링