while(1 == 1) {
    var from = document.getElementById('select_1').value;
    var to = document.getElementById('select_2').value;
    var value = document.getElementById('input_1').value;

    axios.get(`http://data.fixer.io/api/convert?access_key=&from=${from}&to=${to}&amount=${value}`, (data) => {
        console.log(data);
    });

}
