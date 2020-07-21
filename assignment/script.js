let Quant1, Quant2, Quant3 = 0
let html,php,jquery ,totalHTML, totalPhp, totalJquery;

function data(book,quantity,price){
    this.book = book;
    this.quantity = quantity;
    this.price = price;
}

document.querySelector('#order').addEventListener("click", ()=>{
    
    // userr input
    Quant1 = document.querySelector('#quantity1').value;
    Quant2 = document.querySelector('#quantity2').value;
    Quant3 = document.querySelector('#quantity3').value;
    
    // Making objects
    html = new data("BASIC XHTML",parseInt(Quant1),19.99);
    php = new data("Intro to PHP",parseInt(Quant2),86.00);
    jquery = new data("Advanced JQuery",parseInt(Quant3),55.00);
    
    if(Quant1 == 0 || Quant2 == 0 || Quant3 == 0){
        alert("one of the value is 0");
    }else{
        totalHTML = (html.price) * (html.quantity);
        totalPhp = (php.price) * (php.quantity);
        totalJquery = (jquery.price) * (jquery.quantity);
    total = totalHTML + totalJquery+ totalPhp;
    document.querySelector("#html").textContent = html.book +` (Quantity =${html.quantity})`;
    document.querySelector("#htmlprice").textContent = totalHTML;

    document.querySelector("#php").textContent = php.book +` (Quantity =${php.quantity})`;
    document.querySelector("#phpprice").textContent = totalPhp;

    document.querySelector("#Jquery").textContent = jquery.book +` (Quantity =${jquery.quantity})`;
    document.querySelector("#Jqueryprice").textContent = totalJquery;

    document.querySelector("#total").textContent = `Final Total: `+total;
    }
});
