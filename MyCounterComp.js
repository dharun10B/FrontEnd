import React,{Component} from "react";

class MyCounterComp extends Component{

    constructor(){
        super();
        this.state={
            Mycount:0
        }
    }
    changeStateData = ()=>{
        this.setState({Mycount:this.state.Mycount+1}); 
    }
    changeStateData1 = ()=>{
        this.setState({Mycount:this.state.Mycount-1}); 
    }
    changeStateData2 = ()=>{
        this.setState({Mycount:this.state.Mycount=0}); 
    }
    render(){
        return(
            <div>
                <h2>this is MyCounterComponent</h2>
                <p>
                    Counter:<strong>{this.state.Mycount}</strong>
                </p>

                <button type="button" className="btn btn-success" onClick={()=>this.changeStateData()}>
                    Increment Button
                </button>
                <button type="button" className="btn btn-success" onClick={()=>this.changeStateData1()}>
                    Decrement Button
                </button>
                <button type="reset" className="btn btn-warning" onClick={()=>this.changeStateData2()}>
                    Reset
                </button>
            </div>
        )
    }
}
export default MyCounterComp;