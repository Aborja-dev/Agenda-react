import {Input} from './Input'
import '../App.css'

export const Search = (props) => {
	return (
		<div >
			<Input class={'search__input'} name={''} setNewValue={props.state} />
		</div>
	)
}