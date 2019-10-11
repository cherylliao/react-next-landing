/* interiro dummy data list :-
- Navbar
- Banner
- Feature
- About
- Projects
- Team
- News
- Testimonial
- Gallery
- Newsletter
- Footer
  - menu widget
  - copyright
  - social links
*/
/* ------------------------------------ */
// Menu data
/* ------------------------------------ */
export const menuData = [
  {
    label: '特徵',
    path: '#feature',
    offset: '80',
  },
  {
    label: '關於',
    path: '#aboutUs',
    offset: '80',
  },
  {
    label: '政策',
    path: '#project',
    offset: '80',
  },
  {
    label: '裝飾',
    path: '#team',
    offset: '80',
  },
  {
    label: '展示',
    path: '#news',
    offset: '40',
  },
  // {
  //   label: 'Testimonial',
  //   path: '#testimonial',
  //   offset: '80',
  // },
];

/* ------------------------------------ */
// Banner section data
/* ------------------------------------ */
import slide1 from 'common/src/assets/image/interior/slider/slide-1.png';
import slide2 from 'common/src/assets/image/interior/slider/slide-2.png';
import slide3 from 'common/src/assets/image/interior/slider/slide-3.png';

export const bannerData = {
  // discount: '25%',
  // discountLabel: 'DISCOUNT ON YOUR FIRST DESIGN',
  title: '我們做漂亮的設計',
  text:
    '最珍貴的寶石精湛的工藝',
  carousel: [
    {
      id: 1,
      thumb_url: slide1,
      title: '項鍊',
      link: '#1',
    },
    {
      id: 2,
      thumb_url: slide2,
      title: '環',
      link: '#1',
    },
    {
      id: 3,
      thumb_url: slide3,
      title: '裝飾',
      link: '#1',
    },
  ],
};

/* ------------------------------------ */
// Feature section data
/* ------------------------------------ */
import corporateIcon from 'common/src/assets/image/interior/feature/1.svg';
import landscapeIcon from 'common/src/assets/image/interior/feature/2.svg';
import interiorIcon from 'common/src/assets/image/interior/feature/3.svg';

export const featureData = {
  title: '服務',
  slogan: '最佳客戶服務',
  features: [
    {
      id: 1,
      icon: corporateIcon,
      title: '投資',
      description:'珠寶是最好的投資之一。由於數量有限和世界公認的稀有性，價值會隨著時間而升值',
    },
    {
      id: 2,
      icon: landscapeIcon,
      title: '原石設計',
      description:'您可以從頭開始挑選石材並進行設計以滿足您的獨特需求',
    },
    {
      id: 3,
      icon: interiorIcon,
      title: '珠寶選擇',
      description:
        '我們幫助您確定最適合您的珠寶',
    },
  ],
};

/* ------------------------------------ */
// About section data
/* ------------------------------------ */
import parentImg from 'common/src/assets/image/interior/about_parent.png';

export const aboutData = {
  thumb_url: parentImg,
  title: 'Hi, 認識 <br> 千子寶石坊',
  text:
    '我們在台北已經30年了. 從一開始，我們就去了泰國, 緬甸, 以從他們的來源獲得最優質的原石',
  text2:
    '然後，我們的工匠將它們從頭開始設計',
};

/* ------------------------------------ */
// Projects section data
/* ------------------------------------ */
import project1 from 'common/src/assets/image/interior/projects/1.png';

export const projectData = {
  title: '工作程序',
  slogan: '世界稀有',
  thumb_url: project1,
  projects: [
    {
      id: 1,
      text:
        '您不僅是客戶，而且是我們的朋友。我們是台北的一家有很多聯繫的老店',
      text2:
        '從紐約的綠色鑽石到斯里蘭卡的稀有藍寶石，我們擁有最好的與你分享',
    },
    {
      id: 2,
      text:
        '安排私人觀看',
      text2:
        '我們確保您應得的是最好的',
    },
    {
      id: 3,
      text:
        '我們確保一切都完全適合您',
      text2:
        '',
    },
  ],
};

/* ------------------------------------ */
// Team section data
/* ------------------------------------ */
import { Icon } from 'react-icons-kit';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialDribbble } from 'react-icons-kit/ionicons/socialDribbble';
import { socialGoogleplus } from 'react-icons-kit/ionicons/socialGoogleplus';
import { socialSkype } from 'react-icons-kit/ionicons/socialSkype';
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';

import member1 from 'common/src/assets/image/interior/team/member1.jpg';
import member2 from 'common/src/assets/image/interior/team/member2.jpg';
import member3 from 'common/src/assets/image/interior/team/member3.jpg';

export const teamData = {
  title: '圖片',
  slogan: '我們完美的珠寶',
  members: [
    {
      id: 1,
      avatar: member1,
      name: '翡翠',
      designation: '比鑽石稀有',
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: '#1',
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: '#1',
        },
        {
          id: 3,
          icon: <Icon icon={socialGoogleplus} />,
          url: '#1',
        },
        {
          id: 4,
          icon: <Icon icon={socialSkype} />,
          url: '#1',
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: '#1',
        },
      ],
    },
    {
      id: 2,
      avatar: member2,
      name: '藍寶星',
      designation: '神話說石頭是有靈性',
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: '#1',
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: '#1',
        },
        {
          id: 3,
          icon: <Icon icon={socialGoogleplus} />,
          url: '#1',
        },
        {
          id: 4,
          icon: <Icon icon={socialSkype} />,
          url: '#1',
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: '#1',
        },
      ],
    },
    {
      id: 3,
      avatar: member3,
      name: '紅寶石',
      designation: '泰國最好的質量',
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: '#1',
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: '#1',
        },
        {
          id: 3,
          icon: <Icon icon={socialGoogleplus} />,
          url: '#1',
        },
        {
          id: 4,
          icon: <Icon icon={socialSkype} />,
          url: '#1',
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: '#1',
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// News section data
/* ------------------------------------ */
export const newsData = [
  {
    id: 1,
    title: 'Corporate design is a crucial part of your brand.',
    excerpt:
      'Corporate design is a crucial part of your brand. Our approach corporate design is extraordinary. Please come and visit us',
    link_text: 'Read',
    link_url: '#',
  },
  {
    id: 2,
    title: 'Learn more about landscape plans, how to design them.',
    excerpt:
      'Learn more about landscape plans, how to design them, what to watch out for in your layout. We deign the appropriate layout for our clients to deliver best',
    link_text: 'Read',
    link_url: '#',
  },
  {
    id: 3,
    title: 'Discover our design ideas, beautiful photos for interior design.',
    excerpt:
      'Discover our design ideas, beautiful photos and how-to projects to create Interior Design. We try to reflect your personality on our design',
    link_text: 'Read',
    link_url: '#',
  },
  {
    id: 4,
    title: 'Interior design is an art and we are trying to paint monalisa.',
    excerpt:
      'With the best players in the designing sector, we explore a whole new world of interior design.Our approach corporate design is extraordinary',
    link_text: 'Read',
    link_url: '#',
  },
];

/* ------------------------------------ */
// Testimonial data
/* ------------------------------------ */
export const testimonialData = {
  title: 'TESTIMONIAL',
  slogan: 'What Our Clients Say',
  reviews: [
    {
      id: 0,
      name: 'Parker Joe',
      designation: 'Co-Founder & CEO',
      username: '@amader craft',
      account_url: '#',
      comment:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar:
        'https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg',
    },
    {
      id: 1,
      name: 'Britney havana',
      designation: 'Co-Founder & CEO',
      username: '@Light’s craft',
      account_url: '#',
      comment:
        'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    },
    {
      id: 2,
      name: 'June Spears',
      designation: 'Co-Founder & CEO',
      username: '@Eagle’s craft',
      account_url: '#',
      comment:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 3,
      name: 'Jessica Parker',
      designation: 'Co-Founder & CEO',
      username: '@Earth’s craft',
      account_url: '#',
      comment:
        'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work !',
      avatar:
        'https://pbs.twimg.com/profile_images/1049383024306081792/cQkGbpRO.jpg',
    },
    {
      id: 4,
      name: 'Django Dsuja',
      designation: 'Co-Founder & CEO',
      username: '@Moon’s craft',
      account_url: '#',
      comment:
        'Impressed with master class support of the team and really look forward for the future.Really, really well made! Love that each component is handmade and customised. Great Work :)',
      avatar:
        'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
    },
  ],
};

/* ------------------------------------ */
// Gallery data
/* ------------------------------------ */
import galleryImg1 from 'common/src/assets/image/interior/gallery/1.jpg';
import galleryImg2 from 'common/src/assets/image/interior/gallery/2.jpg';
import galleryImg3 from 'common/src/assets/image/interior/gallery/3.jpg';
import galleryImg4 from 'common/src/assets/image/interior/gallery/4.jpg';
import galleryImg5 from 'common/src/assets/image/interior/gallery/5.jpg';

export const galleryData = [
  {
    id: 1,
    thumb_url: galleryImg1,
    // name: 'Eco friendly',
    link: '#',
  },
  {
    id: 2,
    thumb_url: galleryImg2,
    // name: 'Living',
    link: '#',
  },
  {
    id: 3,
    thumb_url: galleryImg3,
    // name: 'Corner',
    link: '#',
  },
  {
    id: 4,
    thumb_url: galleryImg4,
    // name: 'Wall decor',
    link: '#',
  },
  {
    id: 5,
    thumb_url: galleryImg5,
    name: 'Restroom',
    link: '#',
  },
];

/* ------------------------------------ */
// Newsletter data
/* ------------------------------------ */
export const newsletterData = {
  title: 'SUBSCRIBE NEWSLETTER',
  slogan: 'Don’t Miss Out Any Offer',
  note:
    'Note: Please call us at 12pm to 8am. otherwise our customer supporter will not available to reach your call, but you can drop mail anytime.',
};

/* ------------------------------------ */
// Footer data
/* ------------------------------------ */
import { facebook } from 'react-icons-kit/fa/facebook';
import { dribbble } from 'react-icons-kit/fa/dribbble';
import { googlePlus } from 'react-icons-kit/fa/googlePlus';
import { skype } from 'react-icons-kit/fa/skype';
import { twitter } from 'react-icons-kit/fa/twitter';
import logo from 'common/src/assets/image/interior/logo.svg';

export const footerData = {
  logo: logo,
  mail: 'liaocheryl@yahoo',
  phone: '023921529',
  socialLinks: [
    {
      id: 1,
      icon: <Icon icon={facebook} />,
      name: 'facebook',
      link: '#',
    },
    {
      id: 2,
      icon: <Icon icon={dribbble} />,
      name: 'dribbble',
      link: '#',
    },
    {
      id: 3,
      icon: <Icon icon={googlePlus} />,
      name: 'googlePlus',
      link: '#',
    },
    {
      id: 4,
      icon: <Icon icon={skype} />,
      name: 'skype',
      link: '#',
    },
    {
      id: 5,
      icon: <Icon icon={twitter} />,
      name: 'twitter',
      link: '#',
    },
  ],
  menuWidgets: [
    {
      id: 1,
      title: '地址',
      menu: [
        {
          id: 1,
          text: '中正區信義路二段63號',
          link: '#',
        },
        // {
        //   id: 2,
        //   text: 'Customer Support',
        //   link: '#',
        // },
        // {
        //   id: 3,
        //   text: 'About Us',
        //   link: '#',
        // },
        // {
        //   id: 4,
        //   text: 'Copyright',
        //   link: '#',
        // },
        // {
        //   id: 5,
        //   text: 'Popular Campaign',
        //   link: '#',
        // },
      ],
    },
    {
      id: 2,
      title: '聯繫',
      menu: [
        {
          id: 1,
          text: '02 2392 1529',
          link: '#',
        },
        {
          id: 2,
          text: 'liaocheryl@yahoo.com',
          link: '#',
        },
        // {
        //   id: 3,
        //   text: 'Terms & Conditions',
        //   link: '#',
        // },
        // {
        //   id: 4,
        //   text: 'Site Map',
        //   link: '#',
        // },
        //  {
        //   id: 5,
        //   text: 'Store Hours',
        //   link: '#',
        // },
      ],
    },
    {
      id: 3,
      title: '營業時間',
      menu: [
        {
          id: 1,
          text: '週一到週六',
          link: '#',
        },
        {
          id: 2,
          text: '上午11點至下午6點',
          link: '#',
        },
        // {
        //   id: 3,
        //   text: 'Images & B-roll',
        //   link: '#',
        // },
        // {
        //   id: 4,
        //   text: 'Permissions',
        //   link: '#',
        // },
        // {
        //   id: 5,
        //   text: 'Speaker requests',
        //   link: '#',
        // },
      ],
    },
//     {
//       id: 4,
//       title: 'POLICY',
//       menu: [
//         {
//           id: 1,
//           text: 'Application security',
//           link: '#',
//         },
//         {
//           id: 2,
//           text: 'Software principles',
//           link: '#',
//         },
//         {
//           id: 3,
//           text: 'Unwanted software policy',
//           link: '#',
//         },
//         {
//           id: 4,
//           text: 'Responsible supply chain',
//           link: '#',
//         },
//       ],
//     },
  ],
};

/* ------------------------------------ */
// social profile
/* ------------------------------------ */
export const socialProfile = [
  {
    id: 1,
    icon: 'flaticon-facebook-logo',
    link: '#',
  },
  {
    id: 2,
    icon: 'flaticon-twitter-logo-silhouette',
    link: '#',
  },
  {
    id: 3,
    icon: 'flaticon-instagram',
    link: '#',
  },
  {
    id: 4,
    icon: 'flaticon-tumblr-logo',
    link: '#',
  },
  {
    id: 5,
    icon: 'flaticon-dribble-logo',
    link: '#',
  },
];
