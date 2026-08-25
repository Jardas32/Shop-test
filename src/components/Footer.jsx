import "../css/footer.css";
import { datafooter } from "../data/products";

function Footer() {
  return (
    <div className="wrapper-footer">
      <div className="wrapper-footer-top">
        <div className="logo">
          <span>E</span>
          -shop
        </div>

        <div className="wrapper-footer-nav-info">
          {datafooter.footerNavInfo.map((info) => (
            <div key={info.id} className="content-text">
              {info.name}
            </div>
          ))}
        </div>

        <div className="wrapper-footer-contact-info">
          {datafooter.footerContactInfo.map((info) => (
            <div key={info.id} className="context-text">
              {info.name}
            </div>
          ))}
        </div>
      </div>

      <div className="wrapper-footer-bootom">Copy@</div>
    </div>
  );
}

export default Footer;
