'user strict'
function getRandom(min, max) {
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
    var root = document.getElementById('body');
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
