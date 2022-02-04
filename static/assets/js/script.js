var pricing = new Vue({
    delimiters: ['${', '}'],
    el: '#pricing',
    data: {
        result: '',
        messageTotal: 'Valor Total',
    },
    methods: {
        greet: function calcValue() {
            document.getElementById("total").value;
            var plan = parseFloat(document.getElementById("plan").value);
            var priceStudent = parseFloat(document.getElementById("priceStudent").value);
            var amount = parseFloat(document.getElementById("amount").value);
            var multiply = parseFloat(priceStudent * amount);
            var total = parseFloat(plan) + parseFloat(multiply);
            var result = document.querySelector(".result");
            // Verificação se o valor é indefinido
            if (isNaN(`${total}`)) {
                var format = "";
                this.result = format;
            } else {
                document.getElementById("total").value = total;
                var format = total.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                });
                this.result = 'Valor Total \n' + format;
            }
        }
    }
})