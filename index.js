

const myBalance = parseFloat(document
    .getElementById('balance').innerText)


const noakhaliBalance = parseFloat(document
    .getElementById('noakhali').innerText)


const feniBalance = parseFloat(document
    .getElementById('feni').innerText)


const quotaBalance = parseFloat(document
    .getElementById('quota').innerText) 




    
    
    function getInputByForm (id){
        const donationInput = document.getElementById(id).value;
        const donationNumber = parseFloat(donationInput)
        return donationNumber;
        }
        

// btn-1
document.getElementById('btnOne')
.addEventListener('click',function(){


    const myBalance = parseFloat(document
    .getElementById('balance').innerText)


const noakhaliBalance = parseFloat(document
    .getElementById('noakhali').innerText)


const feniBalance = parseFloat(document
    .getElementById('feni').innerText)


const quotaBalance = parseFloat(document
    .getElementById('quota').innerText) 
    
    const donationAmmount = getInputByForm('inputOne') 


        if(myBalance >= donationAmmount ){
            const newBalance = myBalance - donationAmmount;
            const noakhaliDonation = noakhaliBalance + donationAmmount;

            document.getElementById('balance').innerText = newBalance
            document.getElementById('noakhali').innerText = noakhaliDonation;

            const p = document.createElement('p')
            p.innerText = `${donationAmmount} Taka Donate for Flood at Noakhali, Bangladesh`
            console.log(p)
            document.getElementById('transaction-container').appendChild(p)
        }
        else{
            alert('please try again leter')
        }
})

// btn-2
document.getElementById('btnTwo')
.addEventListener('click',function(){
    
    let donationAmmount = getInputByForm('inputTwo') 

        if(myBalance >= donationAmmount ){
            let newBalance = myBalance - donationAmmount;
            let feniDonation = feniBalance + donationAmmount;

            document.getElementById('balance').innerText = newBalance
            document.getElementById('feni').innerText = feniDonation;

            const p = document.createElement('p')
            p.innerText = `${donationAmmount} Taka Donate for Flood Relief in Feni,Bangladesh`
            console.log(p)
            document.getElementById('transaction-container').appendChild(p)
        }
        else{
            alert('please try again leter')
        }
})

// btn-3
document.getElementById('btnThree')
.addEventListener('click',function(){
    
    let donationAmmount = getInputByForm('inputThree') 
  

        if(myBalance >= donationAmmount ){
            let newBalance = myBalance - donationAmmount;
            let quotaDonation = quotaBalance + donationAmmount;

            document.getElementById('balance').innerText = newBalance
            document.getElementById('quota').innerText = quotaDonation;

            const p = document.createElement('p')
            p.innerText = `${donationAmmount} taka donated for Aid for Injured in the Quota Movement`
            console.log(p)
            document.getElementById('transaction-container').appendChild(p)
        }
        else{
            alert('please try again leter')
        }
})




// show history

function showSectionbyId(id){
    document.getElementById('').classList.add('')


    // show
    document.getElementById(id).classList.remove('hidden');
}
        

document.getElementById('')