export const weather = (state={cities:[], curCity: 0}, action) => {
    switch (action.type) {
        case 'FETCH':
            return {
                ...state,
                curCity: action.id,
            };
        case 'SUCCESS':
            let flag = false;
            let newCities = state.cities.map((city)=>{
                if (city.id === action.id){
                    flag = true;
                    return action.city;
                } else {
                    return city;
                }
            });
            if (!flag) {
                newCities.push(action.city);
            }

            return {
                ...state,
                cities: newCities
            };
        default:
            return state;
    }
};

