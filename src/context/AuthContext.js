import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext' ;
import tachkilaApi from '../api/tachkila';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clear_error_mrssage':
                return { ...state , errorMessage: '' };
        case 'signout':
            return { token:null , errorMessage: '' };
        default:
            return state;
    }
};
const tryLocalSignin = (dispatch) => async () => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            dispatch({ type: 'signin', payload: token });
            navigate('mainFlow');
        }else{
            navigate('Signin');
        }
    };


const signup = (dispatch) => async ({nom,prenom,email,motdepasse,datenaissance,localisation,telephone,profession,niveau}) => {
        try {
            const response = await tachkilaApi.post('/signup',{nom,prenom,email,motdepasse,datenaissance,localisation,telephone,profession,niveau});
            await AsyncStorage.setItem('token', response.data.token);
            
            dispatch({ type: 'signin', payload: response.data.token });
            navigate('mainFlow');

        } catch (err) {
            console.log(err);
            dispatch({ type: 'add_error', payload: 'Une erreur s\'est produite lors de l\'inscription'})
        }
    };


const signin = (dispatch) => async ({email,motdepasse}) => {
    try {
        const response = await tachkilaApi.post('/signin',{email,motdepasse});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('mainFlow');

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Une erreur s\'est produite lors de la connexion'})
    }
    };

const signout = (dispatch) => async () => {
        await AsyncStorage.removeItem('token');
        dispatch({type:'signout'});
        navigate('Signin');
    };

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_mrssage'});
    };

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup,signin,signout,clearErrorMessage,tryLocalSignin },
    { token: null, errorMessage: '' }
);