const amount = document.getElementById("amount");

amount.addEventListener("input", (event)=>{
 let value = amount.value.replace(/\D/g,"");

 value = Number(value) / 100;

 amount.value = formatCurrencyBRL(value);

 console.log(event);
})

function formatCurrencyBRL(value){
    value = value.toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL",
    })

    return value;
}