// blog button



function updateBalances(id, balanceChange) {
    const balanceElem = document.getElementById('balance');
    let currentMainBalance = parseFloat(balanceElem.innerText);

    if (currentMainBalance > balanceChange) {
        const newMainBalance = currentMainBalance - balanceChange;
        const donationElem = document.getElementById(id);
        let currentDonationBalance = parseFloat(donationElem.innerText);
        
        // Update values in DOM
        donationElem.innerText = (currentDonationBalance + balanceChange).toFixed(2);
        balanceElem.innerText = newMainBalance.toFixed(2);
    } else {
        alert('Insufficient balance, please try again.');
    }
}

// Noakhali Donation
document.getElementById('btnOne').addEventListener('click', function() {
    let donated = getInputByForm('inputOne');
    if (!isNaN(donated) && donated > 0) {
        updateBalances('noakhali', donated);
    } else {
        alert('Please enter a valid amount.');
    }
})

// Feni Donation
document.getElementById('btnTwo').addEventListener('click', function() {
    let donated = getInputByForm('inputTwo');
    if (!isNaN(donated) && donated > 0) {
        updateBalances('feni', donated);
    } else {
        alert('Please enter a valid amount.');
    }
});

// Quota Donation
document.getElementById('btnThree').addEventListener('click', function() {
    let donated = getInputByForm('inputThree');
    if (!isNaN(donated) && donated > 0) {
        updateBalances('quota', donated);
    } else {
        alert('Please enter a valid amount.');
    }
});

// Show/hide sections
document.getElementById('historyBtn').addEventListener('click', function() {
    document.getElementById('historyBtn').style.backgroundColor = '#B4F461';
    document.getElementById('donationBtn').style.backgroundColor = 'transparent';
    showSectionbyId('transaction-container');
});

document.getElementById('donationBtn').addEventListener('click', function() {
    document.getElementById('donationBtn').style.backgroundColor = '#B4F461';
    document.getElementById('historyBtn').style.backgroundColor = 'transparent';
    showSectionbyId('cards');
});

function showSectionbyId(id) {
    document.getElementById('cards').classList.add('hidden');
    document.getElementById('transaction-container').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
