
// function for input field
function getInputByForm (id){
    let inputValue = document.getElementById(id).value
    let inputNumber = parseFloat(inputValue)
    return inputNumber;
}

// noakhali
document.getElementById('btnOne').addEventListener('click',function(){
    let donated = getInputByForm('inputOne')
    let mainBalance = parseFloat(document.getElementById('balance').innerText)
    let noakhaliBalance = parseFloat(document.getElementById('noakhali').innerText)
    let feniBalance = parseFloat(document.getElementById('feni').innerText)
    let quotaBalance = parseFloat(document.getElementById('quota').innerText)

    if(typeof donated === 'number' && donated > 0 && mainBalance >= donated){
        
        let currentBalance = mainBalance - donated;
        let totalDonated = noakhaliBalance + donated
        document.getElementById('noakhali').innerText = totalDonated
        document.getElementById('balance').innerText = currentBalance
        return 0;
    }

    else {
        alert('Insufficient balance,please try again letter')
    }

})


// feni
document.getElementById('btnTwo').addEventListener('click',function(event){
   
    let donated = getInputByForm('inputTwo')
    let mainBalance = parseFloat(document.getElementById('balance').innerText)
    let noakhaliBalance = parseFloat(document.getElementById('noakhali').innerText)
    let feniBalance = parseFloat(document.getElementById('feni').innerText)
    let quotaBalance = parseFloat(document.getElementById('quota').innerText)

    if(typeof donated === 'number' && donated > 0 && mainBalance > donated){

        let currentBalance = mainBalance - donated;
        let totalDonated = feniBalance + donated
        document.getElementById('feni').innerText = totalDonated
        document.getElementById('balance').innerText = currentBalance
    }

    else {
        alert('Insufficient balance,please try again letter')
    }

})


// quota
document.getElementById('btnThree').addEventListener('click',function(event){
    
    let donated = getInputByForm('inputThree')
    let mainBalance = parseFloat(document.getElementById('balance').innerText)
    let noakhaliBalance = parseFloat(document.getElementById('noakhali').innerText)
    let feniBalance = parseFloat(document.getElementById('feni').innerText)
    let quotaBalance = parseFloat(document.getElementById('quota').innerText)

    if(typeof donated === 'number' && donated > 0 && mainBalance > donated){

        let currentBalance = mainBalance - donated;
        let totalDonated = quotaBalance + donated
        document.getElementById('quota').innerText = totalDonated
        document.getElementById('balance').innerText = currentBalance
    }

    else {
        alert('Insufficient balance,please try again letter')
    }

})


// history button

document.getElementById('historyBtn').addEventListener('click',function(){
    document.getElementById('historyBtn').style.backgroundColor = '#B4F461'
    document.getElementById('donationBtn').style.backgroundColor = 'transparent'

    showSectionbyId('transaction-container')
})


// donation button
document.getElementById('donationBtn').addEventListener('click',function(){
    document.getElementById('donationBtn').style.backgroundColor = '#B4F461'
    document.getElementById('historyBtn').style.backgroundColor = 'transparent'
    showSectionbyId('cards')
})

function showSectionbyId (id){
    document.getElementById('cards').classList.add('hidden')


    document.getElementById(id).classList.remove('hidden')
}


