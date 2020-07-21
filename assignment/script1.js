let UIcontroller = (function(){
    return{
        getInput: function(){
            return{
                Quant1 : document.querySelector('#quantity1').value,
                Quant2 : document.querySelector('#quantity2').value,
                Quant3 : document.querySelector('#quantity3').value
            }
        },
        display: function(book1, book2, book3, total){
            document.querySelector("#html").textContent = book1.name +` (Quantity =${book1.quant})`;
            document.querySelector("#htmlprice").textContent =book1.total ;

            document.querySelector("#php").textContent = book2.name +` (Quantity =${book2.quant})`;
            document.querySelector("#phpprice").textContent = book2.total;

            document.querySelector("#Jquery").textContent = book3.name +` (Quantity =${book3.quant})`;
            document.querySelector("#Jqueryprice").textContent = book3.total;

            document.querySelector("#total").textContent = `Final Total: `+total;
        }
    }
})();

//! Creating new object and assigning the value to the construcutor..
//! using closure here to calculate the total of the books.

let BEcontroller = (function(){
 
    function Book(name, qty, price){
        this.name = name;
        this.qty = qty;
        this.price = price;
    };
    return{
        createItem: function(name, quant, price){
            let book = new Book(name,quant,price);  
            return function(){
                let total = parseInt(quant) * parseInt(price);
                // return total;              
                return{
                    name : name,
                    quant : quant,
                    price : price,
                    total : total
                };
            };
        },
    };
})();

// Controller is where both modules are joined together and function calling is done
let Controller = (function(UICtrl, BECtrl){
    // event listener for making the APP works
    let setup = function(){
        document.querySelector('#order').addEventListener('click', ()=>{
            getdata();
            });
        }
    let getdata = function(){
        let book1, book2, book3; 

        //*1. get the quantity value from input
        let input = UICtrl.getInput();
        console.log(input);

        //*2. now we need to find the total in BE controller
        if(input.Quant1 == 0 || input.Quant2 == 0 || input.Quant3 == 0){
            alert("one of the item is 0");
        }
        else{
            book1 = BECtrl.createItem("HTML",parseInt(input.Quant1),19.99)();
            book2 = BECtrl.createItem("PHP",parseInt(input.Quant2),86.00)();
            book3 = BECtrl.createItem("JQuery",parseInt(input.Quant3),55.00)();
            finalTotal = book1.total+ book2.total +book3.total;
            console.log(book1,book2,book3);  
            console.log(finalTotal);
        }

        //*3. Now we need to make a new function and pass all this value to he UI controller;
        UICtrl.display(book1,book2,book3,finalTotal);
    }
    return{
        init : function(){
            console.log("APP IS RUNNING");
            setup();
        }
    }

})(UIcontroller, BEcontroller);
Controller.init();