var app = new Vue({
    el: '#app',
    data: {
        users: []
    }
});

$.ajax({
    url: 'https://randomuser.me/api/?results=1',
    dataType: 'json',
    success: function (data) {
        for(var i=0; i < data.results.length; i++) {
            var aux = data.results[i];
            var name = aux.name.first;
            var surname = aux.name.last;  
            var city = aux.location.city;        
            app.users.push({
                img: aux.picture.large,
                name: capitalizeFirstLetter(name)+ ' ' + capitalizeFirstLetter(surname),
                city: capitalizeFirstLetter(city),
                country: aux.nat,
                email: aux.email,
                cell:aux.cell,
            })
        }
    }
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}