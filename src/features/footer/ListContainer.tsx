import { MouseEvent } from 'react';
import MailLetterIcon from './icons/MailLeterIcon';
import DjinniIcon from './icons/DjinniIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import TelegramIcon from './icons/TelegramIcon';
import GitHubIcon from './icons/GitHubIcon';

const ListContainer: React.FC = () => {
  const handleTelegramClick = () => {
    window.open('tg://resolve?domain=Anvvy', '_blank');
  };

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const { target, href } = event.currentTarget;
    window.open(href, target);
  };

  return (
    <div className="links-container">
      <ul className="links-list">
        <li className="links-list__item">
          <a
            className="links-list__item-link"
            target="_blank"
            href="https://www.linkedin.com/in/bogdan-roman-b498b924b/"
            onClick={handleLinkClick}
          >
            <LinkedInIcon />
          </a>
        </li>
        <li className="links-list__item">
          <a className="links-list__item-link" onClick={handleTelegramClick}>
            <TelegramIcon />
          </a>
        </li>
        <li className="links-list__item">
          <a
            className="links-list__item-link"
            target="_blank"
            href="https://github.com/Anvvy12"
            onClick={handleLinkClick}
          >
            <GitHubIcon />
          </a>
        </li>
        <li className="links-list__item">
          <a
            className="links-list__item-link"
            target="_blank"
            href="https://djinni.co/q/4c8217d37b/"
            onClick={handleLinkClick}
          >
            <DjinniIcon />
          </a>
        </li>
        <li className="links-list__item">
          <a
            className="links-list__item-link"
            target="_blank"
            href="mailto:romanbs.wo@gmail.com"
            onClick={handleLinkClick}
          >
            <MailLetterIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ListContainer;
