import Buttons from './Buttons';
import './Portfolio.css';

const Portfolio = ({ lang }) => {
  return (
    <div className="portfolio-container">
      <Buttons lang={lang} />
    </div>
  );
};

export default Portfolio;
