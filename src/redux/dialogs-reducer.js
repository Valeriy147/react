const UPDATE_NEW_MESS_TEXT = 'UPDATE-NEW-MESS-TEXT';
const ADD_MESS = 'ADD-MESS';

let initialState = {
  dialogs: [
    {
      id: 1,
      name: 'Leo',
      ava: (
        <img src="https://sites.google.com/site/mythebigbangtheory/_/rsrc/1468855621740/leonard-hofstedter/one.jpg?height=320&width=238" />
      ),
    },
    {
      id: 2,
      name: 'Howard Wolowitz',
      ava: (
        <img src="https://pbs.twimg.com/profile_images/524534200905773056/9WZkNZTb_400x400.jpeg" />
      ),
    },
    {
      id: 3,
      name: 'Sheldon',
      ava: <img src="http://bm.img.com.ua/nxs/img/prikol/images/large/8/3/152838_270069.jpg" />,
    },
    {
      id: 4,
      name: 'Rajesh Koothrappali',
      ava: (
        <img src="https://sites.google.com/site/mythebigbangtheory/_/rsrc/1468855620853/radzes-kutrappali/four.jpg?height=320&width=239" />
      ),
    },
    {
      id: 5,
      name: 'Penny',
      ava: (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpnu-815CrahTrnHwZ54v9xL2M-abdRqVhQ&usqp=CAU" />
      ),
    },
  ],
  messages: [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'How is your React?' },
    { id: 3, message: 'Hello!!!' },
    { id: 4, message: 'Hello!!!' },
    { id: 5, message: 'Hello!!!' },
  ],
  newMessText: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESS: {
      let newMess = {
        id: 5,
        message: state.newMessText,
      };
      return { ...state, newMessText: '', messages: [...state.messages, newMess] };
    }
    case UPDATE_NEW_MESS_TEXT: {
      return { ...state, newMessText: action.newMess };
    }
    default:
      return state;
  }
};
export const addMess = () => ({ type: ADD_MESS });

export const onMessChange = (text) => ({
  type: UPDATE_NEW_MESS_TEXT,
  newMess: text,
});

export default dialogsReducer;
