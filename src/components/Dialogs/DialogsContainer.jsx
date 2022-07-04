import {AddDialog, updateNewDialogText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
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


//функція з redux бібліотеки


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirectComponent
)(Dialogs)