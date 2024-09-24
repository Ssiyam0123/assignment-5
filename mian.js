// get value for inout field
function getValueFromInput(id){
    let donation = document.getElementById(id).value
    let donationNumber = parseFloat(donation)
    return donationNumber;
}

function updateBalances (id,donatedTaka){
    let mainBalance = document.getElementById('balance').innerText;
    let fundBalance = parseFloat(document.getElementById(id).innerText)
    let balanceNumber = parseFloat(mainBalance)

    if(balanceNumber >= donatedTaka){
        let currentBalance = balanceNumber - donatedTaka;
        let fundTotal = fundBalance  + donatedTaka;

        // dom input data
        document.getElementById('balance').innerText = currentBalance.toFixed(2);
        document.getElementById(id).innerText = fundTotal.toFixed(2)

        const modal = document.getElementById('successModal')
        modal.showModal();


    
    } 

    else{
        alert('Insufficient balance, please try again.')
    }
}


// noakhali
document.getElementById('btnOne').addEventListener('click',function(){
    let donated = getValueFromInput('inputOne')

    if (!isNaN(donated) && donated > 0) {
    let balanceBeUpdate = updateBalances('noakhali',donated)


     // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
     const historyContainer = document.getElementById('transaction-container');
     const newHistoryEntry = document.createElement('div');
     newHistoryEntry.className = "bg-white p-4 rounded-md border-2 border-gray-300 mb-4 shadow-lg w-[90%] mx-auto";
     newHistoryEntry.innerHTML = `<p>${new Date().toLocaleString()}</p>
                                  `;
     historyContainer.appendChild(newHistoryEntry);
     // ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]



    }

    else {
    alert('Please enter a valid amount.');
    };
})

// feni
document.getElementById('btnTwo').addEventListener('click',function(){
    let donated = getValueFromInput('inputTwo')

    if (!isNaN(donated) && donated > 0) {
    let balanceBeUpdate = updateBalances('feni',donated)
    } else {
    alert('Please enter a valid amount.');
    };
})

// quota
document.getElementById('btnThree').addEventListener('click',function(){
    let donated = getValueFromInput('inputThree')

    if (!isNaN(donated) && donated > 0) {
    let balanceBeUpdate = updateBalances('quota',donated)
    } else {
    alert('Please enter a valid amount.');
    };
})



function showSectionbyId (id){
    document.getElementById('cards').classList.add('hidden')


    document.getElementById(id).classList.remove('hidden')
}

// donation button
document.getElementById('donationBtn').addEventListener('click',function(){
    document.getElementById('donationBtn').style.backgroundColor = '#B4F461'
    document.getElementById('historyBtn').style.backgroundColor = 'transparent'
    showSectionbyId('cards')

})

// history button

document.getElementById('historyBtn').addEventListener('click',function(){
    document.getElementById('historyBtn').style.backgroundColor = '#B4F461'
    document.getElementById('donationBtn').style.backgroundColor = 'transparent'

    showSectionbyId('transaction-container')
})

// // history
// const history = document.createElement('div')
// history.className = "bg-white p-4 rounded-md border-2 border-gray-300 mb-4 shadow-lg"
// history.innerHtml = `
// <p>hi</p>
   
