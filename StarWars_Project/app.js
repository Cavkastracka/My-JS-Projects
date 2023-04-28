let table = document.getElementById("table");
let linkPeople ="https://swapi.dev/api/people/?page=1";
let linkShip = "https://swapi.dev/api/starships/?page=1";
let link_next_people ="https://swapi.dev/api/people/?page=1";
let link_next_ship ="https://swapi.dev/api/starships/?page=1";
let link_prev_people=null;
let link_prev_ship=null;
let link_prev;
let link_next;
let shipOrPeople;

let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("previous");
let logo = document.getElementById("loader");
let cosmonaut =document.getElementById("cosmonaut");
let spaceShip =document.getElementById("spaceShip");

prevBtn.style.visibility = "hidden";
nextBtn.style.visibility = "hidden";
logo.style.visibility="hidden";
function callApi(link) {
    logo.style.visibility="visible";
    table.innerHTML = "";
    fetch(link)
        .then(response => response.json())
        .then(data => {
            
            console.log(data);
            let tr = document.createElement('tr');
            let th1 = document.createElement('th');
            let th2 = document.createElement('th');
            let th3 = document.createElement('th');
            let th4 = document.createElement('th');
            let th5 = document.createElement('th');
            let th6 = document.createElement('th');

            th1.innerText = "Name";
            th2.innerText = "Height";
            th3.innerText = "Mass";
            th4.innerText = "Gender";
            th5.innerText = "Birth Year";
            th6.innerText = "Films";
            tr.appendChild(th1);
            tr.appendChild(th2);
            tr.appendChild(th3);
            tr.appendChild(th4);
            tr.appendChild(th5);
            tr.appendChild(th6);
            table.appendChild(tr);

            for (let i = 0; i < data.results.length; i++) {
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');
                let td4 = document.createElement('td');
                let td5 = document.createElement('td');
                let td6 = document.createElement('td');


                td1.innerText = data.results[i].name;
                td2.innerText = data.results[i].height;
                td3.innerText = data.results[i].mass;
                td4.innerText = data.results[i].gender;
                td5.innerText = data.results[i].birth_year;
                td6.innerText = data.results[i].films.length;
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tr.appendChild(td6);
                table.appendChild(tr);

            }
            link_next = data.next;
            link_prev = data.previous;
            link_next_people = data.next;
            link_prev_people = data.previous;
             logo.style.visibility="hidden";
            if (link_prev_people != null) {
                prevBtn.style.visibility = "visible";
            } else {
                prevBtn.style.visibility = "hidden";
            }
            if (link_next_people == null) {
                nextBtn.style.visibility = "hidden";
            } else {
                nextBtn.style.visibility = "visible";
            }
        });
}


function callApiSpaceShip(link) {
    logo.style.visibility="visible";
    table.innerHTML = "";
    fetch(link)
        .then(response => response.json())
        .then(data => {
            
            console.log(data);
            let tr = document.createElement('tr');
            let th1 = document.createElement('th');
            let th2 = document.createElement('th');
            let th3 = document.createElement('th');
            let th4 = document.createElement('th');
            let th5 = document.createElement('th');
            let th6 = document.createElement('th');

            th1.innerText = "Name";
            th2.innerText = "Model";
            th3.innerText = "Manufacturer";
            th4.innerText = "Cost";
            th5.innerText = "Capacity";
            th6.innerText = "Class";
            tr.appendChild(th1);
            tr.appendChild(th2);
            tr.appendChild(th3);
            tr.appendChild(th4);
            tr.appendChild(th5);
            tr.appendChild(th6);
            table.appendChild(tr);

            for (let i = 0; i < data.results.length; i++) {
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');
                let td4 = document.createElement('td');
                let td5 = document.createElement('td');
                let td6 = document.createElement('td');


                td1.innerText = data.results[i].name;
                td2.innerText = data.results[i].model;
                td3.innerText = data.results[i].manufacturer;
                td4.innerText = data.results[i].cost_in_credits;
                td5.innerText = data.results[i].cargo_capacity;
                td6.innerText = data.results[i].starship_class;
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tr.appendChild(td6);
                table.appendChild(tr);

            }
            link_next = data.next;
            link_prev = data.previous;
            link_next_ship = data.next;
            link_prev_ship = data.previous;
             logo.style.visibility="hidden";
            if (link_prev_ship != null) {
                prevBtn.style.visibility = "visible";
            } else {
                prevBtn.style.visibility = "hidden";
            }
            if (link_next_ship == null) {
                nextBtn.style.visibility = "hidden";
            } else {
                nextBtn.style.visibility = "visible";
            }
        });
}

nextBtn.addEventListener('click', function () {
    if(shipOrPeople == 0){
    callApi(link_next);}else{
        callApiSpaceShip(link_next);

    }

});

prevBtn.addEventListener('click', function () {
    if(shipOrPeople == 0){
        callApi(link_prev);}else{
            callApiSpaceShip(link_prev);
    
        }
});

cosmonaut.addEventListener("click",function(){
    shipOrPeople =0;
    callApi(linkPeople);
})

spaceShip.addEventListener("click",function(){
    shipOrPeople =1;
    callApiSpaceShip(linkShip);
})
