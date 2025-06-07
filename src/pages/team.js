import React from 'react';
import './team.css';
import adityaImage from '../assets/team/aditya.jpg';
import teamImage from '../assets/team/team.jpg'; 
import palakImage from '../assets/team/palak.jpg';
import abhinavImage from '../assets/team/abhinav.jpg';
import shashankImage from '../assets/team/shashank.jpg';
import gunidhhiImage from '../assets/team/gunnidhi.jpg';
import jagdeepImage from '../assets/team/jagdeep.jpg';
import sahilImage from '../assets/team/sahil.jpg';
import ashiniImage from '../assets/team/ashini.jpg';
import aaryaImage from '../assets/team/aarya.jpg';
import lochanImage from '../assets/team/lochan.jpg';
import roushanImage from '../assets/team/roushan.jpg';
const aditya = {
  name: 'Aditya Raj',
  role: 'Chief Advisor',
  img: adityaImage,
  socials: {
    linkedin: 'https://www.linkedin.com/in/aditya-raj-2686772b8/',
    email: 'mailto:aditya1raj003@gmail.com',
    instagram: 'https://www.instagram.com/aditya_raj645/',
  },
};

const secondRowMembers = [
  {
    name: 'Shashank Kumar Saha',
    role: 'Club Coordinator',
    img: shashankImage,
    socials: {
      linkedin: 'https://linkedin.com/in/shashank',
      email: 'mailto:sk927saha@gmail.com',
      instagram: 'https://instagram.com/shashank',
    },
  },
  {
    name: 'Gunnidhi Singhi',
    role: 'Club Co-Coordinator',
    img: gunidhhiImage,
    socials: {
      linkedin: 'https://linkedin.com/in/gunnidhi',
      email: 'mailto:gunnidhisinghi.official@gmail.com ',
      instagram: 'https://instagram.com/gunnidhi_03',
    },
  },
  {
    name: 'Jagdeep Kaur', 
    role: 'Executive General',
    img: jagdeepImage,
    socials: {
      linkedin: 'https://linkedin.com/in/jagdeep',
      email: 'mailto:jagdeep@example.com',
      instagram: 'https://instagram.com/jagdeep',
    },
  },
];

const thirdRowMembers  = [
  {
    name: 'Abhinav Anand',
    role: 'Event Manager',
    img: abhinavImage,
    socials: {
      linkedin: 'https://linkedin.com/in/abhinav',
      email: 'mailto: abhinavsingh0233@gmail.com',
      instagram: 'https://instagram.com/theguyonsky_',
    },
  },
  {
    name: 'Palak Priyadarshani',
    role: 'Event Manager',
    img: palakImage,
    socials: {
      linkedin: 'https://linkedin.com/in/palak',
      email: 'mailto:mausampriyadarshini@gmail.com',
      instagram: 'https://instagram.com/evara051',
    },
  },
  {
    name: 'Aarya Tiwari',
    role: 'PR & Media',
    img: aaryaImage,
    socials: {
      linkedin: 'https://linkedin.com/in/aarya',
      email: 'mailto: aarya06032006@gmail.com',
      instagram: 'https://instagram.com/Aarya_tiwari2006',
    },
  },
  {
    name: 'Sahil Verma',
    role: 'PR & Media',
    img: sahilImage,
    socials: {
      linkedin: 'https://www.linkedin.com/in/sahil-verma-a323631b0?trk=contact-info ',
      email: 'mailto: sverma10jun@gmail.com',
      instagram: 'https://instagram.com/sahil_._verma0303',
    },
  },
];

const otherMembers1 = [
  {
    name: 'Roushan Srivastav',
    role: 'Executive Member',
    img: roushanImage,
    socials: {
      linkedin: 'https://www.linkedin.com/in/roushan-srivastava-5799a3360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
      email: 'mailto:roushansrivastava3@gmail.com',
      instagram: 'https://www.instagram.com/_roushan_srivastava_/',
    },
  },
  {
    name: 'Ashini Bala',
    role: 'Executive Member',
    img: ashiniImage,
    socials: {
      linkedin: ' https://www.linkedin.com/in/ashini-bala-275a08305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
      email: 'mailto: balaashini19@gmail.com',
      instagram: 'https://instagram.com/chaoshini.0_0',
    },
  },
  {
    name: 'Lochan Agarwal',
    role: 'Executive Member',
    img: lochanImage,
    socials: {
      linkedin: ' https://www.linkedin.com/in/lochan-agarwal-00b372327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
      email: 'mailto:lochanagarwal2@gmail.com',
      instagram: 'https://instagram.com/lochan._.agarwal',
    },
  },
];

// SocialIcon component uses your custom icons from public folder
function SocialIcon({ type, url }) {
  if (!url) return null;

  const icons = {
    linkedin: '/assets/logo/linkedin.png',
    email: '/assets/logo/mail.png',
    instagram: '/assets/logo/instagram.png',
  };

  return (
    <a href={url} target="_blank" rel="noreferrer" aria-label={type} className="team-social-link">
      <img src={icons[type]} alt={`${type} icon`} className="social-icon-img" />
    </a>
  );
}

// TeamCard component to render individual member cards
function TeamCard({ member }) {
  return (
    <div className="team-card">
      <img src={member.img} alt={member.name} className="team-photo" />
      <h3 className="team-name">{member.name}</h3>
      <p className="team-role">{member.role}</p>
      <div className="team-socials">
        {Object.entries(member.socials).map(([key, url]) => (
          <SocialIcon key={key} type={key} url={url} />
        ))}
      </div>
    </div>
  );
}


export default function Team() {
  return (
    <div className="team-container">
      <h1 className="team-title">Meet Our Team</h1>

      {/* Chief Advisor - centered single card */}
      <div className="team-row team-row-center">
        <TeamCard member={aditya} />
      </div>

      {/* Coordinators - centered */}
      <div className="team-row team-row-three">
        {secondRowMembers.map((member, idx) => (
          <TeamCard key={idx} member={member} />
        ))}
      </div>

      {/*  Members - properly centered */}
      <div className="team-row team-row-four">
        {thirdRowMembers.map((member, idx) => (
          <TeamCard key={idx} member={member} />
        ))}
      </div>

      {/* Executive Members - centered with empty space */}
      <div className="team-row team-row-three">
        {otherMembers1.map((member, idx) => (
          <TeamCard key={idx} member={member} />
        ))}
        {/* Add empty div to balance the row if needed */}
        <div className="team-card-empty"></div>
      </div>

      <h3 className="word">Club Artisti 2024-25</h3>
      <div className="club-image-container">
        <img className="club-img" src={teamImage} alt="Club Image" />
      </div>
    </div>
  );
}

