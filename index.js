

        document.getElementById("myButton").addEventListener('click', function () {


            const accountfield = document.getElementById('accountnumber')
            const accountbox = accountfield.value;
            const passwordfield = document.getElementById('passwordnumber')
            const passwordbox = passwordfield.value;

            if(accountbox === "01837100957" && passwordbox === "arman"){
             location.href = "bank.html"
            }
             else{
                alert(" invled usr")
             }         
        })


        // .........................................................................................

        
        
    
        // document.getElementById('deposite-btn').addEventListener('click', function(){

        //     const depositeField = document.getElementById('deposite-field');
        //     const depositeAmount = depositeField.value;
        //     console.log(depositeAmount);
        
        //     const previousDepoiste = document.getElementById('total-deposite');
        //     const totalDeposite = previousDepoiste + depositeAmount;
        //     totalDeposite.innerText = depositeAmount;
        
        //     console.log(totalDeposite);
        
            
        // })