import SectionTitle from "../../../components/SectionTitle";
import featuredImg from '../../../assets/Images/images-10.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-10">
            <SectionTitle subHeading="Check it out" heading="Featured Items"></SectionTitle>


            <div className=" md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img className=" w-[1050px] rounded" src={featuredImg} alt="" />
                </div>
                <div className=" md:ml-10">
                    <p>May 15, 1992</p>
                    <p className="uppercase">Where can you get us ?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus eos consequatur consequuntur ipsum quaerat, officiis facilis aut incidunt, beatae harum numquam autem fugiat eaque minus earum corporis saepe? Debitis!</p>
                    <button className="btn btn-outline  border-0 border-b-4 mt-4">Confirm Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
