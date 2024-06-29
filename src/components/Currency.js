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
      <div className='alert alert-success' style={{color:"white", fontWeight: 'bold',background:"limegreen",marginLeft: '2rem'}}>
          <label htmlFor={Currency}>Currency: ({currency})          </label>



          <select defaultValue={["$ Dollar"]}  name="Currency" id="Currency" value={currency}  onChange={event=>changeCurrency(event.target.value)}  style={{color:"white", fontWeight: 'bold',background:"limegreen",marginLeft: '2rem', border:0,bottom:'0.5em',backgroundColor:'limegreen'}}>

              {opciones.map((op,index)=>
                  <option display  key={index} name={op.label} value={op.value}  style={{color:"white", fontWeight: 'bold',background:"limegreen",marginLeft: '2rem', backgroundColor:'limegreen'}} >
                    {op.value}{op.label}
                  </option>

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