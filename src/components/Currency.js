import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch,currency } = useContext(AppContext);

  const opciones = [
      { value: "$", label: "Dollar" },
      { value: "£", label: "Pound" },
      { value: "€", label: "Euro" },
      { value: "₹", label: "Ruppee" }
    ];

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }


  return (
      <div className='alert alert-success' style={{color:"white", fontWeight: 'bold',background:"limegreen"}}>
          <label htmlFor="Currency">Currency({currency})</label>
          <select  name="Currency" id="Currency"   onChange={event=>changeCurrency(event.target.value)}>
              {opciones.map((op,index)=> <option key={index} value={op.value} >{op.value}{op.label}</option>

              )}
                {/*<option value="$" name="Dollar">$ Dollar</option>*/}
                {/*<option value="£">£ Pound</option>*/}
                {/*<option value="€">€ Euro</option>*/}
                {/*<option value="₹">₹ Ruppee</option>*/}

      </select>

    </div>
    );
};

export default Currency;