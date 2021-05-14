
import phoneService from '../services/phonebook'
import '../App.css'

const LabelPerson = ({name, number, id})=>{
	return(
		<div className={'display__item'}>
			<p className={'display__name'}>
				{name} <span>{number}</span>
			</p>	
			{	name==''?'':<Button id={id} name={name} />	}
		</div>
	)}

const Button = ({id, name})=> {
	const clickHandler = ()=>{
		console.log("🚀 ~ file: Display.js ~ line 16 ~ Button ~ id", id)
		const confirm = window.confirm(`Borrar el nombre ${name}`)
        if (confirm){
			phoneService.deletePerson(id)
			window.location.reload(false);
		}
	}
	return (
		<button onClick={clickHandler}>Eliminar</button>
	)}

export const Display = (props) => {
	return (
		<div className={ 'display container' }>
			<h2 className={'title'}>Numeros</h2>
			{props.list.map( (element)=>
				<LabelPerson 
					key={element.name} 
					name={element.name} 
					number={element.number} 
					id={element._id}
				/> 
			)}
		</div>
)}