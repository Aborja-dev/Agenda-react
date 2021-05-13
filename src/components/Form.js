import { useState } from 'react'
import { Input } from './Input'


export const Form = ({persons, setPersons }) => {

	const isRepeat = (searchedName, nameArr) => {
		const result = nameArr.find( person => person.name == searchedName )
		return typeof(result) == 'object'?true:false
	 }

	const [ newName, setNewName ] = useState('')
	const [ newPhone, setNewphone ] = useState('')

	const handlerSubmit = (event)=> {
		event.preventDefault()
		
		const newPerson = {
		  name : newName,
		  number: newPhone,
		}
		if (!isRepeat(newName,persons)){
			setPersons(persons.concat(newPerson))
		}
		else {
			alert(`El nombre ${newName} ya existe`)
		}
	 }

	return (
	<div>
		<h2>Agregar nuevo numero</h2>
		<form onSubmit= {handlerSubmit} className={ 'form' }>
            <div className={ 'form__data' }>
                <Input name = {'Nombre'} setNewValue = {setNewName}/>
				<Input name = {'Telefono'} setNewValue = {setNewphone}/>
            </div>
            <div>
              <button type="submit">Agregar</button>
            </div>
          </form>
		</div>
)}