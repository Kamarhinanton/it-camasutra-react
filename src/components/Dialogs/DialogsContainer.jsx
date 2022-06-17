import {AddDialog, updateNewDialogText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewDialog: (body) => {
            dispatch(updateNewDialogText(body))
        },
        AddDialog: () => {dispatch(AddDialog())}
    }
}
//connect має свій subscribe, тому не потрібно перемальовувати(subscribe) дерево при зміні state
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;