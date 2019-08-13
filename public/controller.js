var app = new Vue({
    el: '#app',
    data: {
        users: []
    }
})

$.ajax({
    url: 'https://randomuser.me/api/?results=50',
    dataType: 'json',
    success: function (data) {
        for(var i=0; i < data.results.length; i++) {
            var aux = data.results[i];
            var name = aux.name.first;
            var surname = aux.name.last;  
            var city = aux.location.city;        
            app.users.push({
                img: aux.picture.thumbnail,
                name: capitalizeFirstLetter(name)+ ' ' + capitalizeFirstLetter(surname),
                city: capitalizeFirstLetter(city),
                country: aux.nat
            })
            app.users[i].url = "detail.html?user=" + JSON.stringify(app.users[i])
        }
    }
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}