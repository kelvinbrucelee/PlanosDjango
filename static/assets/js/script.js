function calcValue() {

    document.getElementById("total").value = '0';

    var plan = parseFloat(document.getElementById("plan").value);
    var priceStudent = parseFloat(document.getElementById("priceStudent").value);
    var amount = parseFloat(document.getElementById("amount").value);

    var multiply = parseFloat(priceStudent * amount);
    var total = parseFloat(plan) + parseFloat(multiply);

    var result = document.querySelector(".result");

    // Verificação se o valor é indefinido
    if (isNaN(`${total}`)) {
        document.getElementById("total").value = plan;

        //com R$
        var format = plan.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        result.textContent = format;

    } else {
        document.getElementById("total").value = total;

        //com R$
        var format = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        result.textContent = format;
    }
}