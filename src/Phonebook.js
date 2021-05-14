import {useState, useEffect } from 'react'

import phoneService from './services/phonebook'
import { Search } from './components/Search'
import { Form } from './components/Form'
import { Display } from './components/Display'

export const Phonebook = () => {
	const PERSON_INIT = {
			name: '',
			number: ''
	}

    useEffect( async() => {
        const personsList = await phoneService.getList()
        setPersons(personsList)
    },[])
	const [persons, setPersons] = useState([])
	const [ search, setSearch ] = useState('')

	let searchedPerson = persons.find((person)=>person.name == search)
    searchedPerson = typeof(searchedPerson) == 'undefined'?PERSON_INIT:searchedPerson
    return (
      <div>
		<header>
          <h2>Agenda telefonica</h2>
		  <Search state={setSearch}/> 
		</header>
		<main>
          	<Form setPersons={setPersons} persons={persons}/>    
			 {
				search.length == 0
				?<Display list={persons} />
				:<Display list={[searchedPerson]} />
			 }
		</main> 
		</div>
		)}