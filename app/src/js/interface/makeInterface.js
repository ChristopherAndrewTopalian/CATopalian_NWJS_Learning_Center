// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    ba(mainDiv);

    //-//

    let subDiv = ce('div');
    subDiv.id = 'subDiv';
    mainDiv.append(subDiv);

    //-//

    mainDiv.append(makeTitleOfApp());

    //-//

    let openContainer = ce('div');
    openContainer.style.display = 'flex';
    openContainer.style.flexDirection = 'column';
    subDiv.append(openContainer);

    //-//

    let defaultAppLabel = ce('div');
    defaultAppLabel.textContent = 'Open in Default Application';
    openContainer.append(defaultAppLabel);

    //-//

    let openText001Button = ce('button');
    openText001Button.textContent = 'text001.txt';
    openText001Button.style.alignSelf = 'flex-start'; // no stretch
    openText001Button.onmouseover = function()
    {
        hoverSound();
    };
    openText001Button.onclick = function()
    {
        clickSound();
        openInDefaultApp('text', 'text001.txt');
    };
    openContainer.append(openText001Button);

    //-//

    let openHydrogenButton = ce('button');
    openHydrogenButton.textContent = 'Hydrogen.pdf';
    openHydrogenButton.style.alignSelf = 'flex-start'; // no stretch
    openHydrogenButton.onmouseover = function()
    {
        hoverSound();
    };
    openHydrogenButton.onclick = function()
    {
        clickSound();
        openInDefaultApp('pdf', 'hydrogen.pdf');
    };
    openContainer.append(openHydrogenButton);

    //-//

    let openVideo001Button = ce('button');
    openVideo001Button.textContent = '001.mp4';
    openVideo001Button.style.alignSelf = 'flex-start'; // no stretch
    openVideo001Button.onmouseover = function()
    {
        hoverSound();
    };
    openVideo001Button.onclick = function()
    {
        clickSound();
        openInDefaultApp('videos', '001.mp4');
    };
    openContainer.append(openVideo001Button);

    //-//

    let thickHR001 = ce('hr');
    thickHR001.style.height = 10 + 'px';
    thickHR001.style.width = 100 + '%';
    subDiv.append(thickHR001);

    //-//

    let fileExplorerLabel = ce('div');
    fileExplorerLabel.textContent = 'Open in File Explorer';
    subDiv.append(fileExplorerLabel);

    //-//

    let openInFileExplorerContainer = ce('div');
    openInFileExplorerContainer.style.display = 'flex';
    openInFileExplorerContainer.style.flexDirection = 'column';
    subDiv.append(openInFileExplorerContainer);

    //-//

    let openTxtExplorerButton = ce('button');
    openTxtExplorerButton.textContent = 'text001.txt';
    openTxtExplorerButton.style.alignSelf = 'flex-start'; // no stretch
    openTxtExplorerButton.onmouseover = function()
    {
        hoverSound();
    };
    openTxtExplorerButton.onclick = function()
    {
        clickSound();

        openInFileExplorer('text', 'text001.txt');
    };
    openInFileExplorerContainer.append(openTxtExplorerButton);

    //-//

    let openPdfExplorerButton = ce('button');
    openPdfExplorerButton.textContent = 'Hydrogen.pdf';
    openPdfExplorerButton.style.alignSelf = 'flex-start'; // no stretch
    openPdfExplorerButton.onmouseover = function()
    {
        hoverSound();
    };
    openPdfExplorerButton.onclick = function()
    {
        clickSound();

        openInFileExplorer('pdf', 'Hydrogen.pdf');
    };
    openInFileExplorerContainer.append(openPdfExplorerButton);

    //-//

    let openVideofExplorerButton = ce('button');
    openVideofExplorerButton.textContent = '001.mp4';
    openVideofExplorerButton.style.alignSelf = 'flex-start'; // no stretch
    openVideofExplorerButton.onmouseover = function()
    {
        hoverSound();
    };
    openVideofExplorerButton.onclick = function()
    {
        clickSound();

        openInFileExplorer('videos', '001.mp4');
    };
    openInFileExplorerContainer.append(openVideofExplorerButton);

}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

