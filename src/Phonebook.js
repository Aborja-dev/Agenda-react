import { useState, useEffect } from 'react'

import './App.css'

import phoneService from './services/phonebook'
import { Search } from './components/Search'
import { Form } from './components/Form'
import { Display } from './components/Display'

export const Phonebook = () => {
	const PERSON_INIT = {
			name: '',
			number: ''
	}
	const [persons, setPersons] = useState([])
	const [ search, setSearch ] = useState('')
	const [ newName, setNewName] = useState('')
    useEffect(()=>{
		phoneService.getList().then(res=>setPersons(res))
        
	},[])

	let searchedPerson = persons.find((person)=>person.name == search)
    searchedPerson = typeof(searchedPerson) == 'undefined'?PERSON_INIT:searchedPerson
      
    return (
      <div>
		<header className={ 'hero' }>
		  <h1 id={'mensaje'} className={'disabled'}>Has agregado a {newName}</h1>
          <h2 className={'main-title'}>Agenda telefonica</h2>
		  <Search className={'search'} state={setSearch}/> 
		</header>
		<main className={ 'main' }>
          	<Form setPersons={setPersons} persons={persons} setAddName={ setNewName }/>
			 {
				search.length == 0
				?<Display list={persons} />
				:<Display list={[searchedPerson]} />
			 }
		</main> 
		</div>
		)}