const timetag = document.getElementById('time');
const datetag = document.getElementById('date');
// get date and time tags by using getelement by id ( returns single element)

const timeingfunction = setInterval(() => {

    const dateandtime = new Date();

    timetag.textContent = dateandtime.toLocaleTimeString();
    datetag.textContent = dateandtime.toDateString()

}, 1000) // 1000ms == 1sec
