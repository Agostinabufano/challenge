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
            app.users.push({
                img: aux.picture.thumbnail,
                name: aux.name.first + ' ' + aux.name.last,
                city: aux.location.city,
                country: aux.nat
            })
        }
    }
});