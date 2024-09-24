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














document.getElementById('btnTwo').addEventListener('click', function() {
    let donated = getValueFromInput('inputTwo');  // Get the donation amount

    if (!isNaN(donated) && donated > 0) {
        let mainBalance = parseFloat(document.getElementById('balance').innerText);

        if (mainBalance >= donated) {
            updateBalances('feni', donated);  // Update the balance

            // Add donation history entry
            const historyContainer = document.getElementById('transaction-container');
            const newHistoryEntry = document.createElement('div');
            newHistoryEntry.className = "bg-white p-4 rounded-md border-2 border-gray-300 mb-4 shadow-lg w-[90%] mx-auto";
            newHistoryEntry.innerHTML = `
                <p>${donated} BDT donated for Feni</p>
                <p>${new Date().toLocaleString()}</p>`;
            historyContainer.appendChild(newHistoryEntry);  // Add new entry to history
        } else {
            alert('Insufficient balance, please try again.');
        }
    } else {
        alert('Please enter a valid amount.');
    }
});

