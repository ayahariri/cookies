'user strict'
/*function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1))+min;
}

//Seattle
var Seattle = {
    location:'Seattle',
    minCustomer: 23,
    maxCustomer: 65,
    averageCookie: 6.3,
    hours:[],
    randomCustomer:[],
    cookiesPerHour:[],

allHours:function(){
        for(i=6;i<=12;i++){
            this.hours.push(i+'am')
        }
        for(k=1;k<=7;k++){
            this.hours.push(k+'pm')
        }
    },

allRandomCustomer: function(){
    for(var i=0;i<14;i++){
        this.randomCustomer.push(getRandom(23,65));
    }
},
allCookiesPerHour:function(){
    this.allRandomCustomer();
    for(var j=0; j<=14;j++){
        for(var j=0; j<this.randomCustomer.length;j++)
        this.cookiesPerHour.push(Math.floor(this.randomCustomer[j]*this.averageCookie));
    }
},
};

Seattle.allCookiesPerHour();
Seattle.allHours();
console.log(Seattle);


    //Tokyo
    var Tokyo = {
        location:'Tokyo',
        minCustomer: 3,
        maxCustomer: 24,
        averageCookie: 1.2,
        hours:[],
        randomCustomer:[],
        cookiesPerHour:[],

    allHours:function(){
            for(i=6;i<=12;i++){
                this.hours.push(i+'am')
            }
            for(k=1;k<=7;k++){
                this.hours.push(k+'pm')
            }
        },

    allRandomCustomer: function(){
        for(var i=0;i<14;i++){
            this.randomCustomer.push(getRandom(23,65));
        }
    },

    allCookiesPerHour:function(){
        this.allRandomCustomer();
        for(var j=0; j<=14;j++){
            for(var j=0; j<this.randomCustomer.length;j++)
            this.cookiesPerHour.push(Math.floor(this.randomCustomer[j]*this.averageCookie));
        }
    },
};

Tokyo.allCookiesPerHour();
Tokyo.allHours();
console.log(Tokyo);

    //Dubai
    var Dubai = {
        location:'Dubai',
        minCustomer: 11,
        maxCustomer: 38,
        averageCookie: 3.7,
        hours:[],
        randomCustomer:[],
        cookiesPerHour:[],

    allHours:function(){
            for(i=6;i<=12;i++){
                this.hours.push(i+'am')
            }
            for(k=1;k<=7;k++){
                this.hours.push(k+'pm')
            }
        },

    allRandomCustomer: function(){
        for(var i=0;i<14;i++){
            this.randomCustomer.push(getRandom(23,65));
        }
    },

    allCookiesPerHour:function(){
        this.allRandomCustomer();
        for(var j=0; j<=14;j++){
            for(var j=0; j<this.randomCustomer.length;j++)
            this.cookiesPerHour.push(Math.floor(this.randomCustomer[j]*this.averageCookie));
        }
    },
};

Dubai.allCookiesPerHour();
Dubai.allHours();
console.log(Dubai);

    //Paris
    var Paris = {
        location:'Paris',
        minCustomer: 20,
        maxCustomer: 38,
        averageCookie: 2.3,
        hours:[],
        randomCustomer:[],
        cookiesPerHour:[],

    allHours:function(){
            for(i=6;i<=12;i++){
                this.hours.push(i+'am')
            }
            for(k=1;k<=7;k++){
                this.hours.push(k+'pm')
            }
        },

    allRandomCustomer: function(){
        for(var i=0;i<14;i++){
            this.randomCustomer.push(getRandom(23,65));
        }
    },

    allCookiesPerHour:function(){
        this.allRandomCustomer();
        for(var j=0; j<=14;j++){
            for(var j=0; j<this.randomCustomer.length;j++)
            this.cookiesPerHour.push(Math.floor(this.randomCustomer[j]*this.averageCookie));
        }
    },
};

Paris.allCookiesPerHour();
Paris.allHours();
console.log(Paris);

    //Lima
    var Lima = {
        location:'Lima',
        minCustomer: 2,
        maxCustomer: 16,
        averageCookie: 4.6,
        hours:[],
        randomCustomer:[],
        cookiesPerHour:[],

    allHours:function(){
            for(i=6;i<=12;i++){
                this.hours.push(i+'am')
            }
            for(k=1;k<=7;k++){
                this.hours.push(k+'pm')
            }
        },

    allRandomCustomer: function(){
        for(var i=0;i<14;i++){
            this.randomCustomer.push(getRandom(23,65));
        }
    },

    allCookiesPerHour:function(){
        this.allRandomCustomer();
        for(var j=0; j<=14;j++){
            for(var j=0; j<this.randomCustomer.length;j++)
            this.cookiesPerHour.push(Math.floor(this.randomCustomer[j]*this.averageCookie));
        }
    },
};

Lima.allCookiesPerHour();
Lima.allHours();
console.log(Lima);

function printLocation(obj){
    var root = document.getElementById('Salmon Cookies Location');
    var locationSection = document.createElement('section');
    var locationTitle = document.createElement('h2');
    var hourlyCookiesList = document.createElement('ul');
        for (var i=0;i<14; i++){
        var listItem = document.createElement('li');
        listItem.textContent=obj.hours[i]+':'+obj.cookiesPerHour[i]+'cookies';
        hourlyCookiesList.appendChild(listItem)
    }
    locationTitle.textContent=obj.location;
    locationSection.appendChild(locationTitle);
    root.appendChild(locationSection);
    locationSection.appendChild(hourlyCookiesList);
}
printLocation(Seattle);
printLocation(Tokyo);
printLocation(Dubai);
printLocation(Paris);
printLocation(Lima);
*/

/*function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}*/

var shops = [];
var hours = [];
function allHours() {
    for (i = 6; i <= 12; i++) {
        hours.push(i + 'am')
    }
    for (k = 1; k <= 7; k++) {
        hours.push(k + 'pm')
    }
}
var allTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
allHours();
console.log(hours);
var shops = []; // to add an array of all objects
function Shop(shopLocation, minCustomer, maxCustomer, averageCookie) {
    this.shopLocation = shopLocation;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.averageCookie = averageCookie;
    this.total = 0;
    this.cookiesPerHour = [];
    shops.push(this) // add this object to the shops array
}
Shop.prototype.StoreCookiesPerHour = function () {
    for (var i = 0; i < hours.length; i++) {
        var random = getRandom(this.minCustomer, this.maxCustomer);
        var average = Math.floor(random * this.averageCookie);
        this.total += average;
        this.cookiesPerHour.push(`${average}`);
        allTotals[i] += average;
    }
    allTotals[i] = + this.total;
}

Shop.prototype.render = function () {
    var rowLocation = document.createElement('tr');

    for (var i = 0; i < hours.length + 2; i++) {
        if (i === 0) { // for first empty cell
            var colData = document.createElement('th');
            rowLocation.appendChild(colData);
            colData.textContent = this.shopLocation
        }
        else if (i === hours.length + 1) { //  for last empty cell
            var colData = document.createElement('td');
            rowLocation.appendChild(colData);
            colData.textContent = this.total;
        }
        else { // hours
            var colData = document.createElement('td');
            rowLocation.appendChild(colData);
            colData.textContent = this.cookiesPerHour[i - 1];
        }

    }
    table.appendChild(rowLocation);

}


var container = document.getElementById("SalmonLocation");
var table = document.createElement('table');
table.setAttribute('border', '1')

function renderTableHeader() {
    var rowHeader = document.createElement('tr');

    for (var i = 0; i < hours.length + 2; i++) {
        if (i === 0) { // for first empty cell
            var colData = document.createElement('th');
            rowHeader.appendChild(colData);
        }
        else if (i === hours.length + 1) { //  for last empty cell
            var colData = document.createElement('th');
            rowHeader.appendChild(colData);
            colData.textContent = 'Daily Location Total';
        }
        else { // hours
            var colData = document.createElement('th');
            rowHeader.appendChild(colData);
            colData.textContent = hours[i - 1];
        }
    }
    table.appendChild(rowHeader);
    container.appendChild(table);
}
renderTableHeader();

function renderTableFooter() {

    var rowFooter = document.createElement('tr');

    for (var i = 0; i < hours.length + 2; i++) {
        if (i === 0) { // for first empty cell
            var colData = document.createElement('th');
            rowFooter.appendChild(colData);
            colData.textContent = 'Total';
        }
        else if (i === hours.length + 1) { //  for last empty cell
            var colData = document.createElement('th');
            rowFooter.appendChild(colData);
            colData.textContent = allTotals[i - 1];
        }
        else { // hours
            var colData = document.createElement('th');
            rowFooter.appendChild(colData);
            colData.textContent = allTotals[i - 1];

        }
    }
    table.appendChild(rowFooter);
}


var seattle = new Shop('Seattle', 23, 65, 6.3);


var tokyo = new Shop('Tokyo', 3, 24, 1.2);


var dubai = new Shop('Dubai', 11, 38, 3.7);


var paris = new Shop('Paris', 20, 38, 2.3);

var lima = new Shop('Lima', 2, 16, 4.6);




for (var i = 0; i < shops.length; i++) {
    shops[i].StoreCookiesPerHour();
    shops[i].render();
}

renderTableFooter();

var myForm = document.getElementById('cookieForm');
//console.log (myForm);//

myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var locationCity = event.target.locationCity.value;
    var minCustomer = parseInt(event.target.minCustomer.value);
    var maxCustomer = parseInt(event.target.maxCustomer.value);
    var avCookie = parseFloat(event.target.avCookie.value);
    //console.log(typeof(minCustomer));//
    //console.log(typeof(avCookie));//
    var rowFooter = document.createElement('tr');
    var newLocation = new Shop(locationCity, minCustomer, maxCustomer, avCookie);

    console.log(newLocation);
    newLocation.StoreCookiesPerHour();
    newLocation.render();
    myForm.reset();

})

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

