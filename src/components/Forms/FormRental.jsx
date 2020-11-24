import React, { Component } from 'react'
import InputForm from "./inputForm/InputForm";
import TextArea from "./textAreaForm/textAreaForm";
import SelectForm from "./selectForm/SelectForm";

 class FormRental extends Component {

     state ={
        adress: this.props.rentals.adress    
     };


    handleChangeAdress = e =>{
        console.log("pouet: ")
        this.setState({
            adress: e.target.value 
        })
    }

    render() {
        const {
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
            errorAdress, 
            } = this.props.rentals;
       console.log("in formRental: ", this.props.rentals.adress)

        return (
            <div>
                
            <InputForm type="text" name="name" value={name}>
              Nom de la location
            </InputForm>
             <p className="help is-danger">{errorName}</p> 

            <TextArea
              name="adress"
              value={adress}
              onChange={this.handleChangeAdress}
              placeholder="Rue, code postal, ville (retour à la ligne conseillé)"
            >
              {adress}
            </TextArea>
            <p className="help is-danger">{errorAdress}</p> 

            <InputForm
              type="number"
              name="rent"
              value={rent}
              placeholder={rent}
            >
              Loyer
            </InputForm>

            <InputForm
              type="number"
              name="provision"
              value={provision}
              placeholder={provision}
            >
              Provisions pour charges
            </InputForm>

            <InputForm
              type="number"
              name="fixedCost"
              value={fixedCost}
              placeholder={fixedCost}
            >
              Charges Fixes
            </InputForm>

            <InputForm
              type="number"
              name="TVArate"
              value={TVArate}
              placeholder={TVArate}
            >
              Taux de TVA
            </InputForm>


            {/* <SelectForm
              name="owner"
              value={owner}
              selectOption={selectOwner}
            >
              Propriétaire
            </SelectForm>
  
            <SelectForm
              name="tenant"
              value={tenant}
              selectOption={selectTenant}
            >
              Locataire
            </SelectForm> */}
            </div>
        )
    }
}

export default FormRental
