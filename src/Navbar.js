import "./styles.css";

const Navbar = () => {
  return (
    <div className="navBg">
      <div className="logoCont">
        <img
          className="mainLogo"
          src="https://res.cloudinary.com/dxwppeplp/image/upload/v1675932637/logo_3874388_1596633542_1_kmfzfx.png"
          alt="rubixe.logo"
        />
      </div>
      <div className="navTags">
        <p className="p1">HOME</p>
        <p className="p1">SERVICES</p>
        <p className="p1">PRODUCTS</p>
        <p className="p1">AI INTERNSHIP</p>
        <p className="p1">CAREER</p>
        <p className="p1">BLOG</p>
        <p className="p1">ABOUT</p>
        <p className="p1">CONTACT US</p>
      </div>
    </div>
  );
};

export default Navbar;
