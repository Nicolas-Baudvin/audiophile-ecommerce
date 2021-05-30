import { shallow } from "enzyme"
import SomeProducts from "."

describe('<SomeProducts', () => {
    it("should render", () => {
        const wrapper = shallow(<SomeProducts />);
        expect(wrapper).toBeTruthy();
    })
})