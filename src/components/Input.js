
export const Input = (props)=>{
	const handlerChange = (event) => {
		const inputContent = event.target.value
        console.log("🚀 ~ file: Input.js ~ line 5 ~ handlerChange ~ inputContent", inputContent)
		props.setNewValue(inputContent)
	 }
	 
	return (
		<div>
			{ props.name }	<input onChange={handlerChange}/>
		</div>
)}