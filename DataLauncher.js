var timer = 0;
var theTime = "";
var time_Interval = 5000;
//this class will hold the UAT space data
class InputData{
    constructor(
        SecondsData,
        Latitude,
        Longitude,
        gpsAlt,
        bmpSensorAlt,
        bmpSensorPres,
        bmpSensorTemp,
        DigitalSensorTemp,
        cssSensorTemp,
        cssSensorEco2,
        cssSensorTVOC,
        UV,
        AccelX,
        AccelZ,
        MagnetX,
        MagnetY,
        MagnetZ,
        GyroX,
        GyroY,
        GyroZ
    ) {
        this.SecondsData = SecondsData;
        this.Latitude = Latitude;
        this.Longitude = Longitude;
        this.gpsAlt = gpsAlt;
        this.bmpSensorAlt = bmpSensorAlt;
        this.bmpSensorPres = bmpSensorPres;
        this.bmpSensorTemp = bmpSensorTemp;
        this.DigitalSensorTemp = DigitalSensorTemp;
        this.cssSensorTemp = cssSensorTemp;
        this.cssSensorEco2 = cssSensorEco2;
        this.cssSensorTVOC = cssSensorTVOC;
        this.UV = UV;
        this.AccelX = AccelX;
        this.AccelZ = AccelZ;
        this.MagnetX = MagnetX;
        this.MagnetY = MagnetY;
        this.MagnetZ = MagnetZ;
        this.GyroX = GyroX;
        this.GyroY = GyroY;
        this.GyroZ = GyroZ;
    }
}
/*
this function builds the row of info to display.
example: <td>Legend: </td><td>value units</td>
*/
function dataRow(legend, value, units){
    var txt = "<td>";
    txt += legend;
    txt += ": </td><td>";
    txt += value;
    txt += " " + units;
    txt += "</td>";
    return txt;
}

function start(){
    timer = setInterval(updateDisplay, time_Interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}

function updateDisplay(){
    theTime = new Date();
    var theMinutes = theTime.getMinutes();
    if (theMinutes < 10){
        theMinutes = "0" + String(theMinutes);
    }
    var theSeconds = (theTime.getSeconds() < 10 ? + "0" + String(theTime.getSeconds()) : theTime.getSeconds());
    var timeFormat =  theTime.getHours() + ":" + theMinutes + ":" + theSeconds
    
    document.getElementById("timeStamp").innerHTML = timeFormat;

    var timeRead = data[index].SecondsData;
    var dataTable = document.getElementById("data");
    
    if (timeRead >= 10){
        dataTable.rows["SecondsData"].innerHTML = dataRow("Time Elapsed", data[index].SecondsData, "Seconds");
        dataTable.rows["Latitude"].innerHTML = dataRow("Latitude", data[index].Latitude, "");
        dataTable.rows["Longitude"].innerHTML = dataRow("Longitude", data[index].Longitude, "");
        dataTable.rows["gpsAlt"].innerHTML = dataRow("gpsAlt", data[index].gpsAlt, "");
        dataTable.rows["bmpSensorAlt"].innerHTML = dataRow("bmpSensorAlt", data[index].bmpSensorAlt, "");
        dataTable.rows["bmpSensorPres"].innerHTML = dataRow("LongbmpSensorPresitude", data[index].bmpSensorPres, "");
        dataTable.rows["bmpSensorTemp"].innerHTML = dataRow("bmpSensorTemp", data[index].bmpSensorTemp, "");
        dataTable.rows["DigitalSensorTemp"].innerHTML = dataRow("DigitalSensorTemp", data[index].DigitalSensorTemp, "");
        dataTable.rows["cssSensorTemp"].innerHTML = dataRow("cssSensorTemp", data[index].cssSensorTemp, "");
        dataTable.rows["cssSensorEco2"].innerHTML = dataRow("cssSensorEco2", data[index].cssSensorEco2, "");
        dataTable.rows["cssSensorTVOC"].innerHTML = dataRow("cssSensorTVOC", data[index].cssSensorTVOC, "");
        dataTable.rows["UV"].innerHTML = dataRow("UV", data[index].UV, "");
        dataTable.rows["AccelX"].innerHTML = dataRow("AccelX", data[index].AccelX, "");
        dataTable.rows["AccelZ"].innerHTML = dataRow("AccelZ", data[index].AccelZ, "");
        dataTable.rows["MagnetX"].innerHTML = dataRow("MagnetX", data[index].MagnetX, "");
        dataTable.rows["MagnetY"].innerHTML = dataRow("MagnetY", data[index].MagnetY, "");
        dataTable.rows["MagnetZ"].innerHTML = dataRow("MagnetZ", data[index].MagnetZ, "");
        dataTable.rows["GyroX"].innerHTML = dataRow("GyroX", data[index].GyroX, "");
        dataTable.rows["GyroY"].innerHTML = dataRow("GyroY", data[index].GyroY, "");
        dataTable.rows["GyroZ"].innerHTML = dataRow("GyroZ", data[index].GyroZ, "");
        
    }
    if (index > 500){
        index = 0;
    }
    else {
        index++;
        //index = index + 1;
    }

}
