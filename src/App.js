import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './Components/Resume';
import LandingPage from './Components/LandingPage';
import ResumeGuide from './Components/Blog';
import ContactPage from './Components/Contact';
import CoverLetterGuide from './Components/Guides';
import JobBoardsBlog from './Components/JobsBlogPost';
import CareerBlog from './Components/Careerblog';
import AboutUs from './Components/AboutUs';
import BillingInfo from './Components/Billing';
import InterviewTips from './Components/Interviewtips';
import JobSearchTips from './Components/JobSearchTips';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import PrivacyPolicy from './Components/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/professional-resume-builder-get-hired-fast" element={<Resume />} />
          <Route path="/resume-guide" element={<ResumeGuide />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cover-letter" element={<CoverLetterGuide />} />
          <Route path="/job-boards" element={<JobBoardsBlog />} />
          <Route path="/career-advice" element={<CareerBlog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/billing" element={<BillingInfo />} />
          <Route path="/how-to-prepare-for-a-job-interview" element={<InterviewTips />} />
          <Route path="/job-search-tips" element={<JobSearchTips />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;