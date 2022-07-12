import {Facebook, Instagram, Twitter, Youtube} from "./icons";

const Footer = () => (
	<div className="footer bg-light-brown p-6 text-black">
		<div className="container mx-auto">
			<div className="footer-text flex-none md:flex items-center justify-between">
				<p>© Codeytek Academy 2020</p>
				<p className="text-gray">Learn the latest tech skills</p>
				<span className="text-black">Follow on social links to support the work</span>
			</div>
			<ul className="social-links mt-8 flex align-center ">
				<li><a href="https://www.facebook.com/codeytek" className="fa fa-facebook" target="_blank"><Facebook fill={"black"}/></a></li>
				<li className="ml-2 mt-1"><a href="https://twitter.com/codeytek" target="_blank"><Twitter fill={"black"} /></a></li>
				<li className="ml-2 mt-1"><a href="https://youtube.com/ImranSayedDev" className="fa fa-youtube" target="_blank"><Youtube fill={"black"} /></a></li>
				<li className="ml-2"><a href="https://www.instagram.com/codeytek_academy/" className="fa fa-instagram" target="_blank"><Instagram fill={"black"} /></a></li>
			</ul>
		</div>
	</div>t
);

export default Footer;
