import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {connect} from "react-redux";

//hoc - hight order component приймає компоненту та вертає іншу компоненту
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

//в даному прикладі ми вертаємо 2 компоненти, безпосередньо компонента та її обгортка connect

export const WithAuthRedirectComponent = (Component) => {
    let RedirectComponent = (props) => {
        let navigate = useNavigate();

        useEffect(()=>{
            if(props.isAuth === false){
                return navigate("../login")
            }
        }, [props.isAuth])
        return <Component {...props}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);


    return ConnectedAuthRedirectComponent;
}