import React,{Component} from 'react'


class Event extends Component{
	state={
		name: ''
	}
	inputHandeler=(event)=>{
		console.log(event.target.value);
		// $('#hide').hide();
		this.setState({
			name:event.target.value
		})
	}

	render(){

		return (
			<div className='container'>
				<div className='row'>
					<div className='col-lg-8'>
						<input type="text" onChange={this.inputHandeler} placeholder='Enter your name' className='form-control'/>
						
					</div>
					<div className='col-lg-4'>
						<button onClick={this.dec} className='btn btn-primary'> Save </button>
					</div>
				</div>
				{this.state.name ? <p>Hi,mr {this.state.name}</p> : ''}
				<p id='hide'>this is hide </p>
			</div>
			);
	}
}

export default Event

