import React from 'react';
import { Link } from 'react-router-dom';

const MediaBrandDivision = () => {
  return (
    <div className="department-page">
      <h2>Media & Brand Division</h2>
      <img src="/images/3.png" alt="Q&A Chronicles Logo" className="department-logo" />
      <img src="/images/2.png" alt="Q&A Faith Co. Logo" className="department-logo" />
      <img src="/images/Crownandcover3d1.jpg" alt="Crown & Cover Logo" className="department-logo" />
      <img src="/images/CrownAndcover3dfinal.png" alt="Crown & Cover Series Logo" className="department-logo" />
      <img src="/images/TheHustlethatHonorsGod(coverpage).jpg" alt="The Hustle that Honors God Cover" className="department-logo" />
      <img src="/images/BookSaleInstagramPost.jpg" alt="Book Sale Instagram Post" className="department-logo" />
      <img src="/images/TheCrown&CoverCouplesworkbook.jpg" alt="The Crown & Cover Couples Workbook" className="department-logo" />
      
      <h3>Q&A Chronicles: Faith + family YouTube, social, and devotional media</h3>
      <p>Your hub for real stories, practical tips, and inspiration for entrepreneurial families striving to thrive without a 9-to-5.</p>
      <p>Links: <a href="https://www.youtube.com/@qnachronicles" target="_blank" rel="noopener noreferrer">YouTube</a>, <a href="https://www.instagram.com/qnachronicles" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="https://www.tiktok.com/@qnachronicles" target="_blank" rel="noopener noreferrer">TikTok</a></p>

      <h3>Q&A Faith Co.: Apparel & accessories with a prophetic message</h3>
      <p>More details about Q&A Faith Co. and its connection to the Manus site will be integrated here.</p>

      <h3>Books & Digital Products: Devotionals, e-books, journals, workbooks, marriage studies</h3>
      <p>Explore our range of inspiring books and digital products designed to empower your journey.</p>

      <h3>Qwhitemusic: Inspirational music by Que White</h3>
      <p>Discover uplifting and faith-filled music by Que White.</p>

      <h3>Que the Word: Bible studies, livestreams, and spiritual growth content</h3>
      <p>Deepen your spiritual growth with our Bible studies and live sessions.</p>

      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MediaBrandDivision;

