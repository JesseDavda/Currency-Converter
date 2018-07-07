document.getElementById('go').onclick = () => {
    console.log('bye');

    var from = document.getElementById('select_1').value;
    console.log(from);
    var to = document.getElementById('select_2').value;
    console.log(to);
    var value = document.getElementById('input_1').value;
    console.log(value);

    axios.get(`https://free.currencyconverterapi.com/api/v5/convert?q=${from}_${to}`).then(body => {
        console.log(body);
        var exchange = from + "_" + to;
        console.log(body.data.results);
        var rate = body.data.results.exchange.val;

        var exchanged_value = rate * value;

        document.getElementById("value").innerHTML = `Amount: ${exchanged_value} ${to}`;
    });
}
