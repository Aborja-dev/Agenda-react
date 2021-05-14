import { useState } from 'react'
import { Input } from './Input'
import phoneService from '../services/phonebook'

import '../App.css'

const NewPersonAlert = ()=>{
	const alert = document.getElementById('mensaje')
	alert.classList.remove('disabled')
    alert.classList.add('active-message')
	setTimeout(()=>{
		alert.classList.remove('active-message')
		alert.classList.add('disabled')
	}, 3000)
}

export const Form = ({persons, setPersons, setAddName }) => {

	const isRepeat = (searchedName, nameArr) => {
		const result = nameArr.find( person => person.name == searchedName )
		return typeof(result) == 'object'?result._id:false
	 }

	const [ newName, setNewName ] = useState('')
	const [ newPhone, setNewphone ] = useState('')

	const handlerSubmit = (event)=> {
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
				phoneService.updatePerson(body)
				window.location.reload(false)
			}
		}
		else {
			phoneService.addPerson(newPerson).then(returnedNewPerson => setPersons(persons.concat(returnedNewPerson)))
			setAddName(newPerson.name)
			NewPersonAlert()
		}
	 }

	return (
	<div className={ 'container' }>
		<h2 className={'title'}>Agregar nuevo numero</h2>
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