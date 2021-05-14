import '../App.css'

export const Input = (props)=>{
	const handlerChange = (event) => {
		const inputContent = event.target.value
		props.setNewValue(inputContent)
	 }
	 
	return (
		<div className={'search'}>
			{ props.name }	<input className={props.class} onChange={handlerChange}/>
		</div>
)}