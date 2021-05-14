import { useState } from 'react'
import axios from 'axios'

import { Input } from './Input'
import phoneService from '../services/phonebook'
const URL = 'http://localhost:3001/persons'

export const Form = ({persons, setPersons }) => {

	const isRepeat = (searchedName, nameArr) => {
		const result = nameArr.find( person => person.name == searchedName )
		return typeof(result) == 'object'?result.id:false
	 }

	const [ newName, setNewName ] = useState('')
	const [ newPhone, setNewphone ] = useState('')

	const handlerSubmit = async (event)=> {
		event.preventDefault()
		
		const newPerson = {
		  name : newName,
		  number: newPhone,
		}
		if (isRepeat(newName,persons)){
			const personId = isRepeat(newName,persons)
            const body = {...newPerson, id: personId}
			const confirm = window.confirm(`${newPerson.name} ya existe. ¿Quiere cambiar el numero de telefono?`)
			if (confirm){
                console.log("🚀 ~ file: Form.js ~ line 31 ~ handlerSubmit ~ body", body)
				phoneService.updatePerson(body)
				window.location.reload(false)
			}
		}
		else {
			phoneService.addPerson(newPerson).then( result => setPersons(persons.concat(result)))
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