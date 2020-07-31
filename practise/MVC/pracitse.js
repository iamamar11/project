// // ! This is advance concept of doing stuff with the class

// // !Model (DB)
// class Model{
//     concat(obj){
//         return `Your Full Name is ${obj.firstName} ${obj.lastName}`;
//     }
// }
// const modelObj = new Model();

// //* view
// class viewctrl {
//     getinput(){
//         this.fname = document.querySelector('#fname').value;
//         this.lname = document.querySelector('#lname').value;
//             return {
//                 firstName : this.fname,
//                 lastName : this.lname
//             }
//         }
//     }

// const viewObj = new viewctrl();
// viewObj.getinput();

// //? Controller
// class Controller{
    
//     constructor(viewObj, modelObj){
//         this.viewobj = viewObj;
//         this.modelobj = modelObj;
//         console.log(this);
//     }

//     inputs(){
//         console.log(this);
//         let value = this.viewobj.getinput();
//         let name = this.modelobj.concat(value);
//         console.log(name);
//     }


//     in() {
//         // Either use bind  here to set the value of this or use inputs as an Arrrow Function
//         document.querySelector('.btn').addEventListener('click', this.inputs.bind(this));
//         // let self = this;
//         // document.querySelector('.btn').addEventListener('click', function(){
//         //     console.log(self);
//         // });
//     }
//     // init(){
//     //     console.log(this);
//     //     document.querySelector('.btn').addEventListener('click', () => {
//     //         console.log(this);
//     //         let val = this.viewobj.getinput();
//     //         console.log(val);
//     //     });
//     // }
// }
// const controllerObj = new Controller(viewObj, modelObj);
// controllerObj.in();


let box = {
    name: "dell", 
    display: function() {
        document.querySelector('.btn').addEventListener('click', function(){
        console.log(event);
        console.log(this);
        });
    }
}
box.display();
    

