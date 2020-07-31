// ! This is the ES5 Syntax without classes and prototype

//! Model
let model = (function(){
    
    //! Code inside this is treated as a private section and we can access this code through return section 
    function innerFunction(item){
        return "Your FullName is : "+item.fname+" "+item.lname;
    }

    return{
        concatInputs(item){
            return innerFunction(item);
        }
    }
})();

//* View
let view = (function(){
    let DOM = {
        firstName : '#fname',
        lastName : '#lname'
    }
return{
    getInput: function(){
        return{
            fname: document.querySelector(DOM.firstName).value,
            lname: document.querySelector(DOM.lastName).value,
        }
    }
}
    
})();

//? controller
let controller = (function(modelctrl, viewctrl){
    
    function setup(){
        document.querySelector('.btn').addEventListener('click', doStuff);
    }

    function doStuff(){
        let inputs = viewctrl.getInput();

        let fullName = modelctrl.concatInputs(inputs);
        console.log(fullName);
    }
    return{
        init: function(){
            console.log("running");
            setup();
        }
    }
    
    
})(model, view);
controller.init();



// !This is the ES5 Representation

function control(viewObj) {
    this.viewObj = viewObj;
}
control.prototype.ini = function(){
        console.log(this);
        // let self = this;
        fun = () =>{
            console.log(this);
        }
        // fun();
        document.querySelector('.btn').addEventListener('click', fun);    
}

let personCtrl = new control(viewObj);
console.log(personCtrl);
personCtrl.ini();







