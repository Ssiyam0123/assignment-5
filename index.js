

let myBalance = parseFloat(document
    .getElementById('balance').innerText)


let noakhaliBalance = parseFloat(document
    .getElementById('noakhali').innerText)


let feniBalance = parseFloat(document
    .getElementById('feni').innerText)


let quotaBalance = parseFloat(document
    .getElementById('quota').innerText) 


let dialog = document.getElementById('my_modal_1')

    
    
    function getInputByForm (id){
        let donationInput = document.getElementById(id).value;
        let donationNumber = parseFloat(donationInput)
        return donationNumber;
        }
        


document.getElementById('btnOne')
.addEventListener('click',function(){
    
    let donationAmmount = getInputByForm('inputOne') 
    let location = 'Fmine-2024 at Feni,Bangladesh'

        if(myBalance >= donationAmmount ){
            let newBalance = myBalance - donationAmmount;
            let noakhaliDonation = noakhaliBalance + donationAmmount;

            document.getElementById('balance').innerText = newBalance
            document.getElementById('noakhali').innerText = noakhaliDonation;

            const p = document.createElement('p')
            p.innerText = `${donationAmmount} Taka is Donated for ${location}`
            console.log(p)
            document.getElementById('transaction-container').appendChild(p)

            

            
            // console.log(newBalance,noakhaliDonation)
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