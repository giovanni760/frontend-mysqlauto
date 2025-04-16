//var url = "http://localhost:8080/api/cars";
var url = "https://mysql-cars.onrender.com/api/cars";
//var url = "https://giovanni-rest.onrender.com/api/users";
function postCars() {
    console.log(url);

    var myMatricula = $('#matricula').val();
    var myModelo = $('#modelo').val();
    var myMarca = $('#marca').val();
    var myAnio = $('#anio').val();
    var myColor = $('#color').val();
    var myCilindros = $('#cilindros').val();

    var mycars = {
        matricula: myMatricula,
        modelo: myModelo,
        marca: myMarca,
        age: myAnio,
	    color: myColor,
	cilindros: myCilindros
    };

console.log(mycars);

    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            $('#resultado').html(JSON.stringify(data.cars));
        },
        data: JSON.stringify(mycars)
    });
}
function getCars() {
    console.log(url);

    $.getJSON(url, function(json) {
        console.log(json);

        var arrCars = json.cars;

        var htmlTableCars = '<table border="1">';

        arrCars.forEach(function(item) {
            console.log(item);
            htmlTableCars += '<tr>' +
                                '<td>' + item.id + '</td>' +
                                '<td>' + item.matricula + '</td>' +
                                '<td>' + item.modelo + '</td>' +
                                '<td>' + item.marca + '</td>' +
                                '<td>' + item.age + '</td>' +
				'<td>' + item.color + '</td>' +
				'<td>' + item.cilindros + '</td>' +

                              '</tr>';
        });

        htmlTableCars += '</table>';

        $('#resultado').html(htmlTableCars);
    });
}

   
