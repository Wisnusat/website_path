import { FaFacebook, FaTwitter, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { AiFillPhone, AiTwotoneMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

export default [
  {
    header: 'About Us',
    items: [
      {
        path: '/',
        label: 'Support Center',
      },
      {
        path: '/',
        label: 'Customer Support',
      },
      {
        path: '/',
        label: 'About Us',
      },
      {
        path: '/',
        label: 'Copyright',
      },
    ],
  },
  {
    header: 'Our Information',
    items: [
      {
        path: '/',
        label: 'Return Policy ',
      },
      {
        path: '/',
        label: 'Privacy Policy',
      },
      {
        path: '/',
        label: 'Terms & Conditions',
      },
      {
        path: '/',
        label: 'Site Map',
      },
    ],
  },
  {
    header: 'Social Media',
    items: [
      {
        path: '/',
        label: 'Facebook',
        name: 'facebook',
        icon: <FaFacebook />,
      },
      {
        path: '/',
        label: 'Twitter',
        name: 'twitter',
        icon: <FaTwitter />,
      },
      {
        path: '/',
        label: 'LinkedIn',
        name: 'linkedin',
        icon: <FaLinkedinIn />,
      },
      {
        path: '/',
        label: 'Instagram',
        name: 'instagram',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    header: 'Contact',
    items: [
      {
        path: '/',
        label: '+62 821-3198-7504',
        name: 'phone',
        icon: <AiFillPhone />,
      },
      {
        path: '/',
        label: 'barlianprasetio@gmail.com',
        name: 'email',
        icon: <AiTwotoneMail />,
      },
      {
        path: '/',
        label: 'Griya Shanta No.B-54, Mojolangu, Lowokwaru, Malang City, East Java 65141',
        name: 'location',
        icon: <GoLocation />,
      },
    ],
  },
];
