import {AUTH} from './../constants/action.type';

export auth(data){
   return {
    type: AUTH,
    data: data
   }
}
