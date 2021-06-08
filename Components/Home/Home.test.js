import { mount, shallow } from "enzyme";
import HomePage from ".";
import Link from 'next/link';

jest.mock('next/link', () => ({ children }) => children);

const linksData = [
    '/headphones',
    '/speakers',
    '/earphones'
];

describe("<HomePage />", () => {
    it("should render", () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper).toBeTruthy();
    });

    it("should have the correct href", () => {
        const wrapper = mount(<HomePage />);
        const links = wrapper.find('.categories').find(Link);
        links.forEach((link, i) => {
            expect(link.props().href).toEqual(linksData[i]);
        })
    });
});