const { isTheLastElement } = require('./helper/array.js');

function coins( coinsArr, amount ) {
    
    if ( coinsArr.length > 0 && amount > 0 ) {
        
        let coinsCounter = 0;
        let fillingAmount = 0;
        let i = 0;
        const coinsArrSorted = coinsArr.sort( ( a, b ) => b - a );

        while ( fillingAmount < amount ) {

            let previousPlus = fillingAmount + coinsArrSorted[i];

            if ( previousPlus < amount ) {

                fillingAmount += coinsArrSorted[i];
                coinsCounter++;

            } else if ( previousPlus == amount ) {

                coinsCounter++;
                return coinsCounter;

            } else if ( previousPlus > amount && !isTheLastElement( coinsArrSorted, i ) ) {

                i++;

            } else if ( previousPlus > amount && isTheLastElement( coinsArrSorted, i ) ) {

                return 'This operation is not possible';

            }
            
        }

    }

}

console.log(coins( [1,3,6], 8 ));