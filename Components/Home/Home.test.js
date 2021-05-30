import { shallow } from "enzyme";
import HomePage from ".";

describe("<HomePage />", () => {
    it("should render", () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper).toBeTruthy();
    });
});