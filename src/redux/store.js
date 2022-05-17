import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi everyone!', likes: 17 },
        { id: 2, message: "It's my first post", likes: 10 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: 'Goose Alex',
          ava: (
            <img src="https://yt3.ggpht.com/ytc/AKedOLTqAkGLjQQPF69SfMt5soU-JxrA9pQicRhPxUwO=s176-c-k-c0x00ffffff-no-rj" />
          ),
        },
        {
          id: 2,
          name: 'Goose A4',
          ava: <img src="https://i.ytimg.com/vi/CU6_aGldIzs/maxresdefault.jpg" />,
        },
        {
          id: 3,
          name: 'Goose Seryaga',
          ava: (
            <img src="https://www.meme-arsenal.com/memes/3e874cafc19795c59bc538d404e14c21.jpg" />
          ),
        },
        {
          id: 4,
          name: 'Goose Glent',
          ava: <img src="https://i.ytimg.com/vi/oqstyVN19_U/hq2.jpg" />,
        },
        {
          id: 5,
          name: 'Goose Kobyacov',
          ava: (
            <img src="https://steamuserimages-a.akamaihd.net/ugc/1763701921155814786/F6BD7786FA441C426762D9E306141C38D711AE67/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" />
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
    },
  },
  _callSubscriber() {
    console.log('store was changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
