import { shallow } from "enzyme";
import { motion } from "framer-motion";
import Categorie from "./categorie";

const CategorieData = {
    src: "test",
    alt: 'testalt',
    title: 'testTitle',
    route: '/testRoute'
}

describe('<Categorie', () => {
    it("should render", () => {
        const wrapper = shallow(<Categorie cat={CategorieData} />);
        expect(wrapper).toBeTruthy();
    });

    it("should animate props set to closed", () => {
        const wrapper = shallow(<Categorie cat={CategorieData} />);
        expect(wrapper.find(motion.span).props().animate).toEqual('closed');
    });

    it("should animate props set to open", () => {
        const wrapper = shallow(<Categorie cat={CategorieData} />);
        wrapper.find('.categories-item').simulate('mouseenter');
        expect(wrapper.find(motion.span).props().animate).toEqual('open');;
    });
});