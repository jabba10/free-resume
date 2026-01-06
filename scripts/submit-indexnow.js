const payload = {
  host: "www.professionalresumefree.com", // Your domain WITHOUT https://
  key: "a622b31a471b4d93bc55efe5c8abbd3d", // ← Replace with your actual 64-character hex key
  keyLocation: "https://www.professionalresumefree.com/a622b31a471b4d93bc55efe5c8abbd3d.txt", // ← Full URL to your key file
  urlList: [
    "https://www.professionalresumefree.com/",
    "https://www.professionalresumefree.com/2026-resume-writing-guide-with-modern-tips/",
    "https://www.professionalresumefree.com/about/",
    "https://www.professionalresumefree.com/ai-resume-builders-how-to-use-artificial-intelligence-to-write-your-best-resume/",
    "https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder/",
    "https://www.professionalresumefree.com/ats-friendly-consumer-retail-resume-builder/",
    "https://www.professionalresumefree.com/ats-friendly-finance-resume-builder/",
    "https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder/",
    "https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder/",
    "https://www.professionalresumefree.com/ats-friendly-logistics-transportation-resume-builder/",
    "https://www.professionalresumefree.com/ats-friendly-medical-resume-builder/",
    "https://www.professionalresumefree.com/ats-friendly-tech-resume-builder/",
    "https://www.professionalresumefree.com/best-resume-templates-to-past-applicant-tracking-system/",
    "https://www.professionalresumefree.com/careers-blog/",
    "https://www.professionalresumefree.com/contact/",
    "https://www.professionalresumefree.com/cover-letter-guides/",
    "https://www.professionalresumefree.com/free-professional-resume-builder/",
    "https://www.professionalresumefree.com/free-resume-builder/",
    "https://www.professionalresumefree.com/how-to-beat-the-ats-optimization-tips-for-modern-hiring-software/",
    "https://www.professionalresumefree.com/how-to-use-chatgpt-to-improve-your-resume-bullets-prompt-engineering-guide-2025/",
    "https://www.professionalresumefree.com/how-to-write-a-professional-summary-that-hooks-recruiters-in-6-seconds/",
    "https://www.professionalresumefree.com/interview-tips/",
    "https://www.professionalresumefree.com/jobs-boards/",
    "https://www.professionalresumefree.com/jobs-search-tips/",
    "https://www.professionalresumefree.com/privacy-policy/",
    "https://www.professionalresumefree.com/professional-resume-free/",
    "https://www.professionalresumefree.com/resume-guide/",
    "https://www.professionalresumefree.com/resume-templates/",
    "https://www.professionalresumefree.com/resume-vs-cv-key-differences-and-when-to-use-which/",
    "https://www.professionalresumefree.com/what-should-a-resume-look-like/"
  ]
};

fetch("https://www.bing.com/indexnow", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
})
  .then(response => console.log("Response Status:", response.status))
  .catch(error => console.error("Network Error:", error));