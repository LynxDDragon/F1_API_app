function seatApiCall(year, round) {
    fetch(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
    .then((res) => res.json())
    .then((responseData) => seatParse(responseData, round, year))
}

function seatParse(data) {
    console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
    for (i of data.MRData.StandingsTable.StandingsLists[0].DriverStandings) {


            let f1Position = i.position
            let f1Racer = i.Driver.driverId
            let f1Nation = i.Driver.nationality
            let f1RacerSponsor = i.Constructors[0]['constructorId']
            let f1Points = i.points



            let clone = myTemplate.content.cloneNode(true);
            let td = clone.querySelectorAll('td')

            td[0].textContent = f1Position
            td[1].textContent = f1Racer
            td[2].textContent = f1Nation
            td[3].textContent = f1RacerSponsor
            td[4].textContent = f1Points

            tableBody.appendChild(clone)
        } 
    }

const myForm = document.getElementById('form')

myForm.addEventListener('submit', (races) => {
    races.preventDefault()
    const myForm = document.getElementById('form')
    formData = new FormData (myForm)
    let myList = []
    for (const [key, value] of formData) {
        myList.push(value)
    }
        seatApiCall(myList[0], myList[1])
})