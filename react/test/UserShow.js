import sinon from "sinon";
import UserShow from "../src/components/UserShow";

describe("UserShow", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<UserShow />);
  });

  // console.log(wrapper.props());
  // console.log('here I am');
  // console.log(wrapper.debug());

  it("should render UserShow", () => {
    expect(wrapper.find("h1")).toBePresent();
  });

  it("should render the UserShow component with specific props", () => {
    expect(wrapper.prop("firstName")).toEqual("test");
  });

  it("should render the UserShow component with specific props", () => {
    expect(wrapper.prop("email")).toEqual("testuser90@email.com");
  });
});
