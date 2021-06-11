import React, {useState} from 'react';
import './header.scss';

//Images
import { ReactComponent as MenuIcon } from '../../../../assets/images/burger-icon.svg';
import { ReactComponent as BackIcon } from '../../../../assets/images/back-icon.svg';
import { ReactComponent as Logo } from '../../../../assets/images/miles-logo.svg';
import { ReactComponent as CoinIcon } from '../../../../assets/images/coin-icon.svg';
import { ReactComponent as FlagIcon } from '../../../../assets/images/flag-img.svg';
import { ReactComponent as Facebook } from '../../../../assets/images/facebook-icon.svg';
import { ReactComponent as Twitter } from '../../../../assets/images/twitter-icon.svg';
import { ReactComponent as GooglePlus } from '../../../../assets/images/google-icon.svg';
import { ReactComponent as Instagram } from '../../../../assets/images/instagram-icon.svg'

function Header() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	
	return <header className="header">
		<nav className="header__content">
			<div className="header__content--menu-icon" onClick={handleClick}>
			{ click ? (
					<BackIcon className="header__content--icon-back" />
				) : (
					<MenuIcon />
				)}
			</div>
			<div className="header__content--nav">
				<Logo className="header__content--logo"/>
				<ul className={click ? 'header__content-list header__content-list--active' : 'header__content-list'}>
					<li className="header__content--item">
						<a href="">
							Requisitos del alquiler
						</a>
					</li>
					<li className="header__content--item">
						<a href="">
							Preguntas frecuentes
						</a>
					</li>
					<li className="header__content--item">
						<a href="">
							Localidades
						</a>
					</li>
					<li className="header__content--item">
						<a href="">
							Contáctanos
						</a>
					</li>
					<li className="header__content--item">
						<div className="header__content-follow">
							<p className="header__content-follow--title">Síguenos en</p>
							<div className="header__content-icons-sn">
								<figure className="header__content-icons-sn--fb">
									<a href="">
										<Facebook />	
									</a>
								</figure>
								<figure className="header__content-icons-sn--tw">
									<a href="">
										<Twitter />	
									</a>
								</figure>
								<figure className="header__content-icons-sn--gp">
									<a href="">
										<GooglePlus />	
									</a>
								</figure>
								<figure className="header__content-icons-sn--ig">
									<a href="">
										<Instagram />	
									</a>
								</figure>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div className="header__content-options" >
				<button className="header__content-options-money">
					<figure className="header__content-options-money--icon">
						<CoinIcon />	
					</figure>
				</button>
				<button className="header__content-options-languaje">
					<figure className="header__content-options-languaje--icon">
						<FlagIcon />	
					</figure>
				</button>
			</div>
		</nav>
	</header>;
  }

export default Header;
