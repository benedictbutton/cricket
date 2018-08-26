import sinon from 'sinon';
// import test from 'test';
import UserShowContainer from '../src/containers/UserShowContainer';
import UserShow from '../src/components/UserShow';

describe('UserShowContainer', () => {
  let wrapper;
  let componentDidMountStub = null;

  beforeAll(() => {
      componentDidMountStub = sinon.stub(UserShowContainer.prototype, 'componentDidMount').callsFake(function() {
          this.setState({
           current_user: {
                   email: "testuser90@email.com",
                   first_name: "test",
                   id: "33",
                   last_name: "user90"
                 },
           player: {
                   name: "testuser90"
                 },
           avatar: null
   });
 });
});

        // sinon.stub(window, 'fetch').resolves(mockedResponse);

        // let myHeaders = new Headers();

//   const request = new Request('http://localhost:3000/api/v1/users/36', {
    // headers: new Headers({
    //           'Content-Type': 'application/json';
    //           'status': 200;
  // });
// });
//
//         fetch(request).then(function(response) {
//           return response.json();
//         }).then(function(responseData) {
//           this.setState({ user: responseData, current_user: responseData.current_user, avatar: responseData.current_user.avatar.medium.url, player: responseData.player });
//         });
//         })


  afterAll(() => {
      componentDidMountStub.restore();
  });

  beforeEach(() => {
    wrapper = mount( <UserShowContainer  /> );
});

it('should render UserShow', () => {
   expect(wrapper.find(UserShow)).toBePresent();
  });

it('should render UserShowContainer', () => {
   expect(wrapper.find(UserShowContainer)).toBePresent();
  });

it('should have the specified initial state', () => {
  expect(wrapper.state()).toEqual({ firstName: 'test' });
});

it('should renderr the UserShow Component with specific props', () => {

  // wrapper.setState({
  //      current_user: {
  //        firstName: 'test'
  //      },
  //      avatar: "poop"
  //  });

  console.log(wrapper.props());
  console.log(wrapper.state());
  console.log(wrapper.debug());

   expect(wrapper.find(UserShow).props()).toEqual({
     firstName: "test"
   });
 });

 it('should renderrr the UserShow component with specific props', () => {
   expect(wrapper.prop('playerName')).toEqual(
     'testuser90'
   );
});

});
// let mockedResponse = {
//   current_user: {
//           email: "testuser90@email.com",
//           first_name: "test",
//           id: "33",
//           last_name: "user90"
//         },
//   player: {
//           name: "testuser90"
//         },
//   avatar: null
// };

// sinon.stub(window, 'fetch').resolves(mockedResponse);
//      this.setState({
//         current_user: {
//                 email: "testuser90@email.com",
//                 first_name: "test",
//                 id: "33",
//                 last_name: "user90"
//               },
//         player: {
//                 name: "testuser90"
//               },
//         avatar: null
// });
// });
// , () => {
// return promise.then(() => {
  // expect(wrapper.state()).to.have.property('avatar', null);
  // wrapper.update();
// });

// });


// assert.ok(Container.prototype.componentDidMount.calledOnce);

// , () => {
// return promise.then(() => {
  // expect(wrapper.state()).to.have.property('avatar', null);
  // wrapper.update();
// });
