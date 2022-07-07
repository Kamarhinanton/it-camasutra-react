import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
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
    deactivateEditmode = () =>{
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

 render () {
     return (
         <>
             {!this.state.editMode &&
                 <div>
                     {/*bind привязує контекст назавжди, навіть якщо ми віддаємо фцію*/}
                     <span onClick={this.activateEditmode.bind(this)
                     }>{this.props.status}</span>
                 </div>
             }
             {
                 this.state.editMode &&
                 <div>
                     <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditmode} value={this.state.status}></input>
                 </div>
             }
         </>
     )
 }
}

export default ProfileStatus;