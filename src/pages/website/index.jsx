import Navbar from "./lobby/navbar/navbar";
import Detail1 from "./lobby/detail1/detail1";
import Detail2 from "./lobby/detail2/detail2";
import ForBrands from "./lobby/for-brands/forBrands";
import ForInfluencers from "./lobby/for-Influencers/forInfluencers";
import BecomeProfessionalInfluencer from "./lobby/become-a-professional-Influencer/become-a-professional-Influencer";
import FeaturedStoriesPress from "./lobby/featured-stories-press/featuredStoriesPress";
import Footer from "./lobby/footer/footer";

function Lobby() {
  return (
    <>
      <Navbar />
      <Detail1 />
      <ForBrands />
      <ForInfluencers />
      <BecomeProfessionalInfluencer />
      <FeaturedStoriesPress />
      <Detail2 />
      <Footer />
    </>
  );
}

export default Lobby;
