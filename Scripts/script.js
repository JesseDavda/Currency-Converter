document.getElementById('go').onclick = () => {
    console.log('bye');

    var from = document.getElementById('select_1').value;
    console.log(from);
    var to = document.getElementById('select_2').value;
    console.log(to);
    var value = document.getElementById('input_1').value;
    console.log(value);

    axios.get(`https://www.currencyconverterapi.com/api/v5/convert?q=${from}_${to}&compact=ultra`).then(data => {
        console.log(data);
    });
}
