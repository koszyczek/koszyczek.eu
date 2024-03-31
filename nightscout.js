async function getNightscoutData() {
    const url = 'https://web-production-4268.up.railway.app/api/v1/entries.json?count=1';
    const response = await fetch(url);
    const data = await response.json();
    const bloodSugar = data[0].sgv;
    const arrowDirection = data[0].direction;

    const arrowUnicode = getArrowUnicode(arrowDirection);

    return {
        bloodSugar: parseInt(bloodSugar, 10),
        arrow: arrowUnicode
    };
}

function getArrowUnicode(direction) {
    switch (direction) {
        case 'SingleUp':
            return '↑';
        case 'DoubleUp':
            return '↟';
        case 'SingleDown':
            return '↓';
        case 'DoubleDown':
            return '↡';
            case 'FortyFiveUp':
                return '↗';
                case 'FortyFiveDown':
                    return '↘';
        case 'Flat':
            return '→'; // or any other flat arrow symbol
        // Add more cases as needed
        default:
            return ''; // handle unknown direction
    }
}

getNightscoutData().then(data => {
    const mergedValue = `${data.bloodSugar}${data.arrow}`;
    document.querySelector('#blood-sugar-and-arrow').innerHTML = mergedValue; // Assuming you have an element with id 'blood-sugar-and-arrow'
});
