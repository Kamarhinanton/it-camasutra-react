import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    activateEditmode(){
        // console.log(this.state.editMode);
        //використо цей метод для того щоб реакт перемалювався
        this.setState({
            editMode: true
        })
        // console.log(this.state.editMode);
        // this.state.editMode = true;
    //    this.satState вигонаеєтся після console.logів, тобто після виконання методу activateEditMode
    }
    deactivateEditmode(){
        this.setState({
            editMode: false
        })
    }

 render () {
     return (
         <>
             {!this.state.editMode &&
                 <div>
                     <span onClick={this.activateEditmode.bind(this)
                     }>{this.props.status}</span>
                 </div>
             }
             {
                 this.state.editMode &&
                 <div>
                     <input autoFocus={true} onBlur={this.deactivateEditmode.bind(this)} value={this.props.status}></input>
                 </div>
             }
         </>
     )
 }
}

export default ProfileStatus;