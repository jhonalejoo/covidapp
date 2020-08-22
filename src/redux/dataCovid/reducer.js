import {GET_DATA_COVID_ERROR, GET_DATA_COVID_REQUESTING, GET_DATA_COVID_SUCCESS} from "./constants";

const initialState = {
    requesting: false,
    success: false,
    error: '',
    infected: {},
    death: {},
    recovered: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_COVID_REQUESTING:
            return{
                ...state,
                requesting: true
            };
        case GET_DATA_COVID_SUCCESS:
            let covid = action.data.filter(covid => covid.ciudad_de_ubicaci_n === 'Bogotá D.C.');
            let deathCovid = covid.filter(covid => covid.atenci_n === 'Fallecido');
            let recoveredCovid = covid.filter(covid => covid.atenci_n === 'Recuperado')
            return {
                ...state,
                requesting: false,
                success: true,
                infected: covid,
                death: deathCovid,
                recovered: recoveredCovid
            };
        case GET_DATA_COVID_ERROR:
            return {
                ...state,
                requesting: false,
                error: action.error
            };
        default:
            return state;
    }
}

export default reducer;
