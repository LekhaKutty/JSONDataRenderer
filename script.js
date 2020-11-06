fetch('http://localhost:3000/json')
    .then(response => {
        return response.json();
    })
    .then(data =>{        
        console.log(data);
        addDeviceToTable(document.getElementById("maintablebody"), data);
    });

function addDeviceToTable(deviceTable, device){
        let devices = Object.keys(device);
        let subTable = document.getElementById("subtablebody");
        for (let i in devices) {
            let newRow = deviceTable.insertRow(-1);
            let td = newRow.insertCell(0);
           
            td.innerHTML = devices[i];
            newRow.onclick = function() { 
                subTable.innerHTML = "";
                console.log(device[devices[i]]); 
                clickDeviceToGet(device[devices[i]]);
            };
        }
}
                     
function clickDeviceToGet(deviceData){
    console.log(deviceData.format);
    let format = deviceData.format;
    let subTable = document.getElementById("subtablebody");
    let newRow = subTable.insertRow(-1);
    for (let i of format) {
        let th = newRow.insertCell();
        th.innerHTML = i;
    }
    let content = deviceData.content;
    console.log(content);
    for (let data of content) {
        let newRow = subTable.insertRow(-1);
        for (let i of data) {
            let th = newRow.insertCell();
            th.innerHTML = i;
        }
    }
    

}
