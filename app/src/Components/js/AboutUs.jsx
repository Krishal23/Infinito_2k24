import React from 'react';
import styles from './AbousUs.module.css'
import blankImage from '../assets/blank.jpg'; // Ensure you have this image in your project
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const teamMembers = [
  { role: 'Coordinator', name: 'Sarthak', email: 'sarthak@example.com', img: blankImage },
  { role: 'Assistant Coordinators', members: [{ name: 'Netra', email: 'netra@example.com', img: blankImage }, { name: 'Aryan', email: 'aryan@example.com', img: blankImage }] },
  { role: 'Fest Mentor', name: 'Amit', email: 'amit@example.com', img: blankImage },
  { role: 'Technical Heads', members: [{ name: 'Ravi', email: 'ravi@example.com', img: blankImage }, { name: 'Priya', email: 'priya@example.com', img: blankImage }] },
  { role: 'Cultural Heads', members: [{ name: 'Neha', email: 'neha@example.com', img: blankImage }, { name: 'Vikram', email: 'vikram@example.com', img: blankImage }] },
  { role: 'Web Development Head', name: 'Rohan', email: 'rohan@example.com', img: blankImage },
  { role: 'Creative Head', name: 'Maya', email: 'maya@example.com', img: blankImage },
  { role: 'Decoration Head', name: 'Sonia', email: 'sonia@example.com', img: blankImage },
  { role: 'Film and Videography Head', name: 'Arjun', email: 'arjun@example.com', img: blankImage },
  { role: 'Content Creation Head', name: 'Kriti', email: 'kriti@example.com', img: blankImage },
  { role: 'Media and Publicity Heads', members: [{ name: 'Anil', email: 'anil@example.com', img: blankImage }, { name: 'Sheetal', email: 'sheetal@example.com', img: blankImage }] },
  { role: 'Social Media Head', name: 'Nikhil', email: 'nikhil@example.com', img: blankImage },
  { role: 'Tech-Summit Head', name: 'Ananya', email: 'ananya@example.com', img: blankImage },
  { role: 'Workshop Head', name: 'Suresh', email: 'suresh@example.com', img: blankImage },
  { role: 'Hospitality Heads', members: [{ name: 'Reema', email: 'reema@example.com', img: blankImage }, { name: 'Raj', email: 'raj@example.com', img: blankImage }] },
  { role: 'Proshow Head', name: 'Ritesh', email: 'ritesh@example.com', img: blankImage },
  { role: 'Informals Head', name: 'Pooja', email: 'pooja@example.com', img: blankImage },
  { role: 'Finance Head', name: 'Arvind', email: 'arvind@example.com', img: blankImage },
  { role: 'Marketing Heads', members: [{ name: 'Sita', email: 'sita@example.com', img: blankImage }, { name: 'Rajesh', email: 'rajesh@example.com', img: blankImage }] },
  { role: 'Open House Coordinator', name: 'Gaurav', email: 'gaurav@example.com', img: blankImage },
];
const TeamMember = ({ name, email, img }) => (
  <div className={styles.teamMember}>
      <img src={img} alt={name} />
      <p className={styles.name}>{name}</p>
      <p className={styles.email}>{email}</p>
  </div>
);

const AssistMember = ({ members }) => (
  <div className={styles.assist}>
      {members.map((member, index) => (
          <div className={styles.assistMember} key={index}>
              <img src={member.img} alt={member.name} />
              <p className={styles.assistName}>{member.name}</p>
              <p className={styles.assistEmail}>{member.email}</p>
          </div>
      ))}
  </div>
);

const AboutUs = () => (
  <div className={styles.container}>
      <h1 className={styles.AboutUs} style={{ color: 'rgb(207, 14, 165)' }}>About Us</h1>
      <p className={styles.paragraph}>
          Welcome to Petrichor, where dreams take flight and moments become memories. Petrichor is not just an event; it's an experience that celebrates the convergence of passion, creativity, and community. As the orchestrators of this unique gathering, we are dedicated to curating an atmosphere where every detail is meticulously crafted to transport you to a realm of inspiration and joy. Whether you are an artist seeking a platform to showcase your talent, a participant eager to immerse yourself in the magic, or a sponsor looking to be part of something extraordinary, Petrichor invites you to join us on this enchanting journey. Together, let's create an event that echoes with the essence of Petrichor, where every drop tells a story and every moment leaves an indelible mark. Welcome to Petrichor – where the spirit of connection and creativity converges in a symphony of experiences.
      </p>
      <h1 className={styles.OurTeam}>Our Team</h1>
      {teamMembers.map((member, index) => (
          <React.Fragment key={index}>
              <h3 className={styles.h3}>{member.role}</h3>
              {member.members ? <AssistMember members={member.members} /> : <TeamMember name={member.name} email={member.email} img={member.img} />}
          </React.Fragment>
      ))}
      <footer className={styles.footer}>
          <div className={styles.footerContent}>
              <div className={styles.footerLeft}>
                  <a href="https://www.google.com/maps/place/Indian+Institute+of+Technology,+Patna/@25.5356448,84.8425419,15z/data=!4m10!1m2!2m1!1sIIT+Patna!3m6!1s0x39ed577f6954a4ab:0x6ce8f1b9fc2aa02a!8m2!3d25.5356448!4d84.8512966!15sCglJSVQgUGF0bmEiA4gBAVoLIglpaXQgcGF0bmGSAQp1bml2ZXJzaXR5mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVI0YVdWSWRUUkJSUkFC4AEA!16s%2Fm%2F04n5dz1?entry=ttu" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt />IIT PATNA, Bihta, Bihar</a>
              </div>
              <div className={styles.footerCenter}>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              </div>
              <div className={styles.footerRight}>
                  <a href="mailto:contact@example.com"><FaEnvelope /> contact@example.com</a>
              </div>
          </div>
      </footer>
  </div>
);

export default AboutUs;
