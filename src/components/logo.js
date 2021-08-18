/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import Logopath from 'assets/logo-path-alt.png'

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
      {/* <Image
        width="130"
        height="90"
        src={Logopath}
        alt="startup landing logo"
      /> */}
       <h1 sx={{
         ml: 4,
         fontWeight: 'bold',
         fontSize: ['26px', null, null, null, '38px', '36px', '56px'],
        //  textShadow:['2px #000000'],
       }}>Path.</h1>
       <h1 sx={{
         color: '#6C368C',
         fontWeight: 'bold',
         fontSize: ['26px', null, null, null, '38px', '36px', '56px'],
         }}>ti</h1>
    </Link>
  );
}
