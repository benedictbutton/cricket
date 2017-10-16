import UserShowContainer from '../src/containers/UserShowContainer';
import UserShow from '../src/components/UserShow';

describe('UserShowContainer', () => {
  let wrapper;

  beforeEach(() => {

    const stub = sinon.stub(User.prototype, 'fetch')
    .resolves({ : 'David' })

  User.fetch()
    .then(user => {
      expect(user.name).toBe('David')
      done()
    })
    wrapper = mount(<UserShowContainer />);
  });

  it('should render UserShow', () => {
    expect(wrapper.find(User)).toBePresent();
  });

  it('should render the UserShow component with specific props', () => {
    wrapper.setState({ firstName: "Bruce" });
    debugger;
    expect(wrapper.find(UserShow).props()).toEqual({
      firstName: "Bruce"
  });
});
});
