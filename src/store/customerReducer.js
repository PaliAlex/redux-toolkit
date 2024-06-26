const defaultState = {
    customers: [],
};

export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';

export const customerReducer = (state = defaultState, action) => {
    console.log(action.type)
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return {
                ...state,
                customers: [
                    ...state.customers,
                    ...action.payload,
                ]
            }
        case ADD_CUSTOMER:
            return {
                ...state,
                customers: [
                    ...state.customers,
                    action.payload,
                ],
            }

        case REMOVE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter(it => it.id !== action.payload)
            }

        default: return state
    }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})

