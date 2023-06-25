import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button
          success rounded className="mb-3" onClick={handleClick}
        >
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger  rounded className="mb-3" onMouseEnter={handleClick}>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning  rounded className="mb-3" onMouseLeave={handleClick}>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary rounded className="mb-3" >
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded className="mb-3" >
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
