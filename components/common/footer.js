export default function Footer() {
  return (
    <footer className="footer-grid">
      <div id="footer-text">
        <p>For more awesome content follow us on</p>
        <img
          src="/images/footer-logo.png"
          alt="footer-logo"
          className="footer-logo"
        />
      </div>
      <div id="footer-fb">
        <img src="/images/icon-fb.svg" />
      </div>
      <div id="footer-twitter">
        <img src="/images/icon-twitter.svg" />
      </div>
      <div id="footer-insta">
        <img src="/images/icon-insta.svg" />
      </div>
    </footer>
  );
}
