import { Link } from 'react-router-dom';
import Navigator from './Navigator';

import '../styles/components/main.css';

import iconSearch from '../images/icons/icon_search.svg';
import imageIllustration from '../images/Illustration.svg';

export default function Main() {
  return (
    <main className='main'>
      <Navigator/>
      <div className='main__search'>
        <label htmlFor='search'>Ready for <br/> Trying a new</label>
        <div className="search__input">
          <input id='search' type="text" placeholder='Search healthy recipes'/>
          <button><img src={iconSearch} alt="Search"/></button>
        </div>
      </div>
      <div className='main__illustration'>
        <img src={imageIllustration} alt="Illustration"/>
      </div>
    </main>
  );
}