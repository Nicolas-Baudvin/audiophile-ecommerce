import { shallow } from "enzyme";
import Header from ".";
import Link from "next/link";

describe("<Header />", () => {
    it("should render", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toBeTruthy();
    });

    it("should render one logo", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('.header-title').length).toEqual(1);
    });

    it("should render 5 nav items", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(Link).length).toEqual(5);
    });

    it("should render 1 icon button", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('.header-icon').length).toEqual(1);
    })
});