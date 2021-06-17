//import { feeFactory} from './fee-calculations.js'

submitButton = document.getElementById('submit');

function onHover(){
    submitButton.style.backgroundColor = 'yellow';
}

function offHover(){
    submitButton.style.backgroundColor = '';
}

function isInformationFilled(){
    sqft = document.getElementById('sqft').value;
    bedrooms = document.getElementById('bedrooms').value;
    bathrooms = document.getElementById('bathrooms').value;
    neighborhood = document.getElementById('neighborhood').innerHTML;

    if(sqft === '' || bedrooms === '' || bathrooms === ''){
        return 'Please fill in all areas below.'
    }

    return '';
}

function feeFactory(sqft, bedrooms, bathrooms, neighborhood){
    sqft: sqft;
    bedrooms: bedrooms;
    bathrooms: bathrooms;
    neighborhood: neighborhood;

    return {
        calculateCleanFee(){
            return 0;
        },
        calculateHiddenFee(){
            return 0;
        },
        calculateDamageWaver(){
            return 0;
        },
        calculateVRBOFee(){
            return 0;
        },
        calculateMaintenanceFee(){
            return 0;
        },
        calculateLinenFee(){
            return 0;
        },
        calculateHouseKeeperFee(){
            return 0;
        },

    }
}

function getResults(sqft, bedrooms, bathrooms,neighborhood){
    let fee = feeFactory(sqft,bedrooms,bathrooms);
    return {
        cleaningFee: fee.calculateCleanFee(),
        hiddenFee: fee.calculateHiddenFee(),
        damageWaver: fee.calculateDamageWaver(),
        vrboFee: fee.calculateVRBOFee(),
        maintenanceFee: fee.calculateMaintenanceFee(),
        linenFee: fee.calculateLinenFee(),
        houseKeeperFee: fee.calculateHouseKeeperFee(),
    }

}

function postResults(results){
    document.getElementById('clean-fee').innerHTML = 'Cleaning Fee: $'+results.cleaningFee;
    document.getElementById('hidden-fee').innerHTML = 'Hidden Fee: $'+results.hiddenFee;
    document.getElementById('damage-waver').innerHTML = 'Damage Waver: $'+results.damageWaver;
    document.getElementById('vrbo-fee').innerHTML = 'VRBO Fee: $'+results.vrboFee;
    document.getElementById('maintenance-fee').innerHTML = 'Maintenance Fee: $'+results.maintenanceFee;
    document.getElementById('linen-fee').innerHTML = 'Linen Fee: $'+results.linenFee;
    document.getElementById('house-keeper-fee').innerHTML = 'House Keeper Fee: $'+results.houseKeeperFee;
}

function calculate(){
    let error = document.getElementById('error');
    let sqft = document.getElementById('sqft').innerHTML;
    let bedrooms = document.getElementById('bedrooms').innerHTML;
    let bathrooms = document.getElementById('bathrooms').innerHTML;
    let neighborhood = document.getElementById('neighborhood').innerHTML;
    let filledOut = isInformationFilled();

    if(filledOut != ''){
        error.innerHTML = filledOut;
        error.style.color = 'white';
        error.style.backgroundColor = 'red';
    } else {
        error.style.display = 'none';
        results = getResults(sqft,bedrooms,bathrooms,neighborhood);
        postResults(results);
    }
}

submitButton.addEventListener('mouseover',onHover);
submitButton.addEventListener('mouseout',offHover);
submitButton.addEventListener('click',calculate);