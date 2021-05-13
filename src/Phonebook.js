import {useState } from 'react'
import { Search } from './components/Search'
import { Form } from './components/Form'
import { Display } from './components/Display'

const personsList = [
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
]


export const Phonebook = () => {
	const PERSON_INIT = {
			name: '',
			number: ''
	}
	const [persons, setPersons] = useState(personsList)
	const [ search, setSearch ] = useState('')
	//const [ newName, setNewName] = useState('')

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