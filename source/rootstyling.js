    // root 식별
    const root = document.getElementById('root');
    const _teamInfo= _EXAMDATA.teamInformation;
    const _teamTraining = _EXAMDATA.trainingInformation;
    const _teamDesign = _EXAMDATA.designInformation;
    
    // root 스타일링
    root.style.width= _teamDesign.breakPoint[2];
    root.style.height=  _teamDesign.breakPoint[1];
    root.style.backgroundColor= _teamDesign.colorSet[3];