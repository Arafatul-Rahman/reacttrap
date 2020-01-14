import React,{Component} from 'react'


class Count extends Component{
	 constructor(props) {
        super(props);
        this.state={
        	count:10,
        	color:'pink' 	
        }
    }
    dec = ()=>{
    	this.setState({
    		count:this.state.count -1
    	})
    	if (this.state.count<=5) {
    		this.setState({
    			color:'red'
    		})
    	}

    }
    inc = ()=>{
    	this.setState({
    		count:this.state.count +1
    	})
    	if (this.state.count>=15) {
    		this.setState({
    			color:'blue'
    		})
    		
    	}
    }

	render(){

		return (
			<div>
				<h1 style={{padding:'20px',color:this.state.color}}>
					<span><button onClick={this.dec} className='btn btn-danger'>-</button></span>
					{ this.state.count}
					<span><button onClick={this.inc} className='btn btn-primary'>+</button></span>
				</h1>
			</div>
			);
	}
}

export default Count

