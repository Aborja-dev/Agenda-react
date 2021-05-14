
export const Input = (props)=>{
	const handlerChange = (event) => {
		const inputContent = event.target.value
		props.setNewValue(inputContent)
	 }
	 
	return (
		<div>
			{ props.name }	<input onChange={handlerChange}/>
		</div>
)}