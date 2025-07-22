// Content loader utility for CMS integration
export const loadContent = async (contentPath) => {
  try {
    const response = await fetch(`/content/${contentPath}`);
    if (!response.ok) {
      throw new Error(`Failed to load content: ${contentPath}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading content:', error);
    return null;
  }
};

// Load company information
export const loadCompanyInfo = () => loadContent('company.json');

// Load department content
export const loadDepartmentContent = (departmentName) => 
  loadContent(`departments/${departmentName}.json`);

// Load all departments
export const loadAllDepartments = async () => {
  const departments = [
    'new-thing-hustle',
    'profitboost-consulting', 
    'qa-chronicles',
    'legacy-outreach'
  ];
  
  const departmentData = {};
  for (const dept of departments) {
    departmentData[dept] = await loadDepartmentContent(dept);
  }
  
  return departmentData;
};

// Default content fallbacks
export const defaultContent = {
  company: {
    name: "ProfitBoost LLC",
    tagline: "Build better. Empower your legacy.",
    description: "Empowering faith-driven entrepreneurs and families to build profitable, sustainable businesses that align with their values and purpose."
  },
  departments: {
    'new-thing-hustle': {
      name: "New Thing Hustle",
      tagline: "Motivation, Strategy & Faith-Based Business Inspiration",
      description: "Helping digital entrepreneurs launch and scale through innovative strategies.",
      services: [],
      social: {}
    },
    'profitboost-consulting': {
      name: "ProfitBoost Consulting", 
      tagline: "Real Estate & Investment Advisory",
      description: "Tailored for entrepreneurs and investors building generational wealth.",
      services: [],
      social: {}
    },
    'qa-chronicles': {
      name: "Q&A Chronicles",
      tagline: "Faith, Family, Business, Music & Community", 
      description: "Your hub for real stories, practical tips, and inspiration.",
      brands: [],
      products: [],
      social: {}
    },
    'legacy-outreach': {
      name: "Legacy + Outreach",
      tagline: "Community Empowerment & Disability Advocacy",
      description: "Offering advocacy, storytelling, and resources for families.",
      services: [],
      impact: [],
      values: [],
      social: {}
    }
  }
};

