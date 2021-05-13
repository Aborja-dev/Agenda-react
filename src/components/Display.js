

const LabelPerson = ({name, number })=>{
	return(
		<div className={'display__item'}>
			<p className={'display__name'}>
				{name} <span>{number}</span>
			</p>	
		</div>
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