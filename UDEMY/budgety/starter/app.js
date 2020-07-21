// ! Module Pattern require closures and IIFI (creates a local scope || kind of private) because of which the data can be accessed from outside lexical Environment.

// * Starting with Budget Control Module (The backend of the project)
// !(MODEL)
let budgetController = (function(){
    
    // Data structure
    let data = {
        allItems:{
            exp : [],
            inc : []
        },
        totals : {
            exp : 0,
            inc : 0
        },
        budget: 0,
        percentage: -1,
        tax: 0
    };
    
    //? creating function constructor to make object and store data
    let Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    Expense.prototype.calcPercentage = function(totalIncome){
        if(totalIncome > 0){
            this.percentage = Math.round((this.value/totalIncome)*100);
        }else{
            this.percentage = -1;
        }
    };
    Expense.prototype.getPercentage = function(){
        return this.percentage;
    };
    let Income = function(id, description , value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    let calculateTotal = function(type){
        let sum = 0;
        data.allItems[type].forEach(element => {
            sum += element.value;
        });
        data.totals[type] = sum;
    }

    
    return{
        
        // ? creating an object here according to the input values
        additem: function(type, des, val){
            let newItem, ID;
            if(data.allItems[type].length > 0){
                // the below rep look like exp[last];
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }else{
                ID = 0;
            }
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            }else if(type === 'inc'){
                newItem = new Income(ID, des, val);
            }
            
            data.allItems[type].push(newItem);
            return newItem;
        },
        deleteItem: function(type, id){
            let ids, index;
            // map will return new array
            ids = data.allItems[type].map((current) => {
                return current.id;
            });

            // find index of the id passed by the controller using te indexOf function
            index = ids.indexOf(id);
            if(index !== -1){
                data.allItems[type].splice(index,1);
            }else{
                console.log(index); 
            }
            
        },
        calculateBudget: function(){
            
            // sum of all income and expenses
            calculateTotal('exp');     
            calculateTotal('inc');

            // calculate the budget
            data.budget = data.totals.inc - data.totals.exp;
            // cal the % of income
            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
                data.tax = Math.round((data.budget * 0.15));
            }
            else{
                data.percentage = -1;
                data.tax = 0;
            }
        },
        calculatePercentage: function(){
            data.allItems.exp.forEach(current => {
                current.calcPercentage(data.totals.inc);
            });
        },
        getPercentages: function(){
            let allPercentages = data.allItems.exp.map((current) => {
                return current.getPercentage();
            });
            return allPercentages;
        },

        getBudget : function(){
            return {
                budget : data.budget,
                totalInc : data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage,
                tax: data.tax
            };
        },
        test:function(){
            console.log(data);
        }
    };
})();



// ? User Interface or Front end of the data 
//!(VIEW)
let UIController = (function(){
    let DOMstrings = {
        inputType:'.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        taxLabel: '.tax--value',
        container: '.container',
        expensesPerLabel: '.item__percentage'
    }    

    return{
        getInput: function(){
            return {
            type : document.querySelector(DOMstrings.inputType).value, // will be inc or exp
            description : document.querySelector(DOMstrings.inputDescription).value,
            value : parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },
        addListItem: function(obj, type){
            let html, newHtml, element;
            // 1 create an html string with placeholder tags
            if(type === 'inc'){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%ID%"><div class="item__description">%DESC%</div><div class="right clearfix"> <div class="item__value">%VALUE%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }else if(type === 'exp'){
                element = DOMstrings.expenseContainer;
                html = '<div class="item clearfix" id="exp-%ID%"><div class="item__description">%DESC%</div><div class="right clearfix"><div class="item__value">%VALUE%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //  2 replace the placeholder text with some actual data
            newHtml = html.replace('%ID%', obj.id);
            newHtml = newHtml.replace('%DESC%',obj.description);
            newHtml = newHtml.replace('%VALUE%',obj.value);

            //  3 Insert html into theDOM
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
        },
        deleteListItem: function(selectorID){
            let element = document.getElementById(selectorID);
            element.parentNode.removeChild(element);
            console.log(element);
        },
        clearFields : function(){
            let field, fieldsArr;
            field = document.querySelectorAll(DOMstrings.inputDescription+','+DOMstrings.inputValue);
            fieldsArr = Array.prototype.slice.call(field);
            fieldsArr.forEach(element => {
                element.value = '';
            });
            document.querySelector(DOMstrings.inputType).focus();
            // fieldsArr[0].focus();
            
            // console.log(fieldsArr);
        },
        displayBudget: function(obj){
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expenseLabel).textContent = obj.totalExp;
            document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage+'%';
            document.querySelector(DOMstrings.taxLabel).textContent = obj.tax;
        },
        displayPercentages: function(percentages){
            let fields, fieldsArr
            fields = document.querySelectorAll(DOMstrings.expensesPerLabel);
            fieldArr = Array.prototype.slice.call(fields);
            fieldArr.forEach(element => {
                element.textContent = percentages +'%';
            });
        },
        getDOMstrings: function(){
            return DOMstrings;
        }
    };
    })();




//? (Controller) need args to connect the view and model together.
//! (Controller)
let Controller = (function(budgetCtrl, UICtrl){
    
    let setupEventListeners = function(){
        let DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputButton).addEventListener('click',CtrlAddItem);
        // Enter key
        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13){
                CtrlAddItem();
            }  
        });
        // Event Delegation
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    };

    let updatePercentages =  function(){
        
        // Cal the percentages
        budgetCtrl.calculatePercentage();

        //  read from budget controller
        let percentages = budgetCtrl.getPercentages();

        // update the user interface
        UICtrl.displayPercentages(percentages);
        // console.log(percentages);
    };

    let updateBudget = function(){
        let budget;
        // 1. Calc the Budget
        budgetCtrl.calculateBudget();

        // 2. Return the budget
        budget = budgetCtrl.getBudget();

        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget);
        // console.log(budget);
    };
    
    let CtrlAddItem = function(){
        let input, newItem;

        // 1. get the input field data
        input = UICtrl.getInput();

        if(input.description !== '' && !isNaN(input.value) && input.value > 0){

            // 2. Add item to budget controller
            newItem = budgetCtrl.additem(input.type, input.description, input.value);
            // console.log(newItem);
            
            // 3. Add item to UI
            UICtrl.addListItem(newItem, input.type);
    
            // Clearing the input fields
            UIController.clearFields();
    
            // Calculate and update budget
            updateBudget();

            // update the percentages
            updatePercentages();
        }
     };
    let ctrlDeleteItem = function(event){
        let itemID, splitID, type, ID;
        itemID = (event.target.parentNode.parentNode.parentNode.parentNode).id;
        
        if(itemID){
            // inc-id
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
            
            // delete item from the data structure
            budgetCtrl.deleteItem(type, ID);
            
            // delete the item from the user interface
            UICtrl.deleteListItem(itemID);

            // update and show the new budget
            updateBudget();
            updatePercentages();
        }
    };

     return {
         init: function(){
            console.log("application is started");

            UICtrl.displayBudget(
                {
                    budget : 0,
                    totalInc : 0,
                    totalExp: 0,
                    percentage: 0,
                    tax: 0
                });
            setupEventListeners();
         }
     };
    
    })(budgetController, UIController);
    Controller.init();


