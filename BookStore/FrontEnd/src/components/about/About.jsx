import Navbar from '../Navbar';
import Footer from '../Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-20 text-center text-5xl">
        <h1>This is about section</h1>
      </div>
      <Footer />
    </div>
  );
};

export default About;