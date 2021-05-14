import phoneService from '../services/phonebook'

const LabelPerson = ({name, number, id})=>{
	return(
		<div>
			<p>
				{name} <span>{number}</span>
			</p>	
			{	name==''?'':<Button id={id} name={name} />	}
		</div>
	)}

const Button = ({id, name})=> {
	const clickHandler = ()=>{
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
		<div >
			<h2 >Numeros</h2>
			{props.list.map( (element)=>
				<LabelPerson 
					key={element.name} 
					name={element.name} 
					number={element.number} 
					id={element.id}
				/> 
			)}
		</div>
)}