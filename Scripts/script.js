document.getElementById('go').onclick = () => {
    //getting the values of the inputs
    var from = document.getElementById('select_1').value;
    var to = document.getElementById('select_2').value;
    var value = document.getElementById('input_1').value;

    //sending a request to ther currency rate api to recieve the rate for the conversion
    axios.get(`https://free.currencyconverterapi.com/api/v5/convert?q=${from}_${to}`).then(body => {
        var exchange = from + "_" + to;
        var rate = body.data.results[exchange].val;

        //multiplying the rate by the inputted amount to calculate the amount
        var exchanged_value = rate * value;

        document.getElementById("value").innerHTML = `Amount: ${exchanged_value} ${to}`;
        document.getElementById("rate").innerHTML = `Rate: ${rate} ${to} per ${from}`;
    });
}
