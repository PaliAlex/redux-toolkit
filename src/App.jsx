import {useDispatch, useSelector} from "react-redux";
import './App.css';
import {addCashAction, getCashAction} from "./store/cashReduser";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./asyncActions/customers";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);


    const addCash = (cash) => {
      dispatch(addCashAction(cash))
    };

    const getCash = (cash) => {
      dispatch(getCashAction(cash))
    };

    const addCustomer = (name) => {
        const customer = {
            id: Date.now(),
            name,
        }

        dispatch(addCustomerAction(customer))
    };

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    };

    const sda = () => {
        dispatch(fetchCustomers)
    };

    return (
        <div className="App">
        <div style={{fontSize: "3rem"}}>{cash}</div>
        <div className='button-container' style={{display: "flex"}}>
            <button onClick={() => addCash(Number(prompt()))}>Top up</button>
            <button onClick={() => getCash(Number(prompt()))}>Withdrawal</button>
        </div>

        <div className='button-container' style={{display: "flex"}}>
            <button onClick={() => addCustomer(prompt())}> Add Client</button>
            <button onClick={() => getCash(Number(prompt()))}>Remove Client</button>
        </div>

        <div className='button-container' style={{display: "flex"}}>
            <button onClick={() => dispatch(fetchCustomers)}>Get clients from base</button>
        </div>

        <div className='customer-container'>
            {
                customers.length === 0
                    ? <div className='text'>No customers</div>
                    : customers.map(it => (
                        <div className='customer' onClick={() => removeCustomer(it)}>
                            {it.name}
                        </div>
                    ))
            }
        </div>
    </div>
    );
}

export default App;
