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
      {/* <h1>Path.ti</h1> */}
      <Image
        width="130"
        // height="00"
        src={Logopath}
        alt="startup landing logo"
      />
    </Link>
  );
}
