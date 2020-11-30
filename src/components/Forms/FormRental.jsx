import React, { Component } from 'react';
import InputForm from "./inputForm/InputForm";
import TextArea from "./textAreaForm/textAreaForm";
import SelectForm from "./selectForm/SelectForm";

 class FormRental extends Component {
     state ={
        adress: ""    
     };


    render() {   
        let {
            name,
            adress,
            rent,
            provision,
            fixedCost,
            TVArate,
            owner,
            selectOwner,
            tenant,
            selectTenant,
            errorName,
            errorAdress
            
            } = this.props.rentals;
      
        if(this.props.comeFrom === "edit"){
            selectOwner = this.props.selectOwner;
            selectTenant = this.props.selectTenant;
        }
    
        return (
            <div>
                
            <InputForm type="text" name="name" value={name} onChange={() => ""} >
              Nom de la location
            </InputForm>
             <p className="help is-danger">{errorName}</p>  

            <TextArea
              name="adress"
              value={adress}
              placeholder="Rue, code postal, ville (retour à la ligne conseillé)"
              onChange={() => ""}
          
            >
              Adresse
            </TextArea>
            <p className="help is-danger">{errorAdress}</p> 

            <InputForm
              type="number"
              name="rent"
              value={rent}
              placeholder={rent}
              onChange={() => ""}
            >
              Loyer
            </InputForm>

            <InputForm
              type="number"
              name="provision"
              value={provision}
              placeholder={provision}
              onChange={() => ""}
            >
              Provisions pour charges
            </InputForm>

            <InputForm
              type="number"
              name="fixedCost"
              value={fixedCost}
              placeholder={fixedCost}
              onChange={() => ""}
            >
              Charges Fixes
            </InputForm>

            <InputForm
              type="number"
              name="TVArate"
              value={TVArate}
              placeholder={TVArate}
              onChange={() => ""}
            >
              Taux de TVA
            </InputForm>


             <SelectForm
              name="owner"
              value={owner}
              selectOption={selectOwner}
              onChange={() => ""}
            >
              Propriétaire
            </SelectForm>
  
            <SelectForm
              name="tenant"
              value={tenant}
              selectOption={selectTenant}
              onChange={() => ""}
            >
              Locataire
            </SelectForm>   
            </div>
        )
    }
}

export default FormRental
