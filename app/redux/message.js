import { configureChannel } from './channel';

let channel = configureChannel();

export const ADD_MESSAGE = 'eqtv/message/add';

const initialState = [];

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
}

function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message
  }
}

export function sendMessage(message) {
  // TODO ADD WEBSOCKETS CODE
  return (dispatch, getState) => {
    let payload = {
      text: message
    };

    channel.push('new:message', payload)
      .receive('ok', response => {
        console.log('created MESSAGE', response);
      })
      .receive('error', error => {
        console.error(error);
        // dispatch(addTodoFailure(text, error));
      });
  }
}

export function subscribeMessage() {
  return dispatch => {
    channel.on('new:message', message => dispatch(addMessage(message.text)));
  }
}

export function recieveMessage(message) {

}
