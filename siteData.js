// siteData.js
// Completely synchronized with the official HNABC Corporate Profile PDF
export const initialSiteData = {
  version: "20260521_v4",
  name: "HN Agri Business Corporation",
  shortName: "HNABC",
  logoUrl: "logo.png",
  bannerUrl: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=1600&auto=format&fit=crop",
  proprietor: "Md. Abu Sayem",
  title: "Chairman",
  proprietorImage: "./proprietor.jpg",
  established: "2018",
  type: "Private Company",
  location: "AILCHARA BAZAR, KUSHTIA SADAR, KUSHTIA, BANGLADESH",
  phone: "+8801714718312",
  email: "sayemrscbd@gmail.com",
  about: "HN Agri Business Corporation is not just an agricultural enterprise; it's a testament to innovation, sustainability, and the relentless pursuit of excellence. Located in the heart of Kushtia, Bangladesh, our company is the brainchild of the visionary Md. Abu Sayem.",
  vision: "To play a pivotal role in advancing national agriculture, serving as a catalyst for growth and sustainability. We aspire to lead the way in innovative farming practices, enriching the lives of our fellow citizens, and contributing to a thriving agricultural sector that drives economic development and food security at the national level.",
  commitment: "We are committed to promoting sustainable agriculture practices, ensuring food security, and contributing to the economic development of our region. We prioritize quality, innovation, and customer satisfaction in everything we do.",
  
  // Professional Experience Matrix
  journey: [
    { role: "Consultant - Business and Project Development", company: "HNABC", period: "2018 - Present", details: "Provide innovative technology support services and consulting for various bio-chemical products based on rice bran oil and FMCG industries. Support project development, supervision, and commissioning with automation and advanced technology." },
    { role: "Executive Director", company: "East West Chemicals Limited, Dhaka", period: "2017 - 2018", details: "Managed operations related to sales, research and development, and advanced technology for bio-chemical products. Contributed significantly to the growth and expansion of the company." },
    { role: "General Manager - Commercial", company: "Gazi Group of Companies Limited, Dhaka", period: "2014 - 2016", details: "Oversaw commercial operations, including procurement, supply chain management, and distribution. Implemented effective strategies to optimize business performance and enhance profitability." },
    { role: "Project Manager", company: "Rice Science and Bio-Chemical Bangladesh Limited", period: "2012 - 2013", details: "Led projects in collaboration with Rice Science Corporation, Japan, focusing on rice processing and bio-chemical products. Ensured successful project planning, technical analysis, and establishment." },
    { role: "General Manager", company: "Rashid Agro Food / Oil Mills / Automatic Rice Mills Ltd.", period: "2002 - 2012", details: "Managed the largest rice processing zone in Bangladesh, including the first rice bran extraction plant and refinery. Led teams to achieve operational excellence and implemented stringent quality control measures." }
  ],

  // Core Strengths
  expertise: [
    "Fast-Moving Consumer Goods (FMCG)", "Agri Green Projects", "Solvent Extraction & Refinery Plants",
    "Rice Mill Automation", "Traditional and Islamic Finance", "Accounting Information Systems",
    "Cost Accounting", "Management Information Systems (MIS)", "Project Management",
    "Data-Driven Business Research", "Quality Management", "Business Process Outsourcing (BPO)",
    "Business Development", "Foreign Trade & Export-Import Business"
  ],

  // Full Product Catalog
  products: [
    { id: "1", name: "Premium Quality Rice", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop", description: "Cultivated and supplied to meet the dietary needs of our customers. Our rice varieties are known for their exceptional taste and nutritional value." },
    { id: "2", name: "Processed Broken Rice", image: "https://images.unsplash.com/photo-D8PSaH0o7kk?q=80&w=600&auto=format&fit=crop", description: "Widely used in various culinary applications, meticulously processed to ensure top-notch quality parameters." },
    { id: "3", name: "High-Yield Rice Bran", image: "https://images.unsplash.com/photo-BLAFq13gpCo?q=80&w=600&auto=format&fit=crop", description: "An essential byproduct of rice milling, supplied for various industrial purposes including animal feed and oil extraction tracking." },
    { id: "4", name: "Nutritional Oil Cake", image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=600&auto=format&fit=crop", description: "A valuable source of clean nutrition for livestock, derived from the extraction of edible oils from premium seeds and grains." },
    { id: "5", name: "Diverse Pulses Portfolio", image: "https://images.unsplash.com/photo-t3TTC6FPOPo?q=80&w=600&auto=format&fit=crop", description: "Providing a diverse range of high-grade pulses, meeting the critical protein needs of modern households and the food industry." },
    { id: "6", name: "Premium Edible Oil", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=600&auto=format&fit=crop", description: "Extracted carefully from the finest seeds, ideal for cooking and food preparation, ensuring both premium taste and rich nutrition." }
  ],

  // Professional Services Set
  services: [
    { id: "1", title: "Project Appraisal", description: "Assisting in evaluating and analyzing agricultural projects, ensuring they are structurally, financially viable and sustainably sound." },
    { id: "2", title: "Business Proposals", description: "Our elite team creates comprehensive, institutional-grade business proposals, helping you secure target investments and strategic partnerships." },
    { id: "3", title: "Business Research", description: "Conducting highly strategic, in-depth market research and feasibility studies to aid in new idea engineering and corporate expansion strategies." }
  ],

  // Value Pillars
  whyChooseUs: [
    { title: "Quality Assurance", desc: "We adhere to stringent quality standards, ensuring that our products meet the highest levels of quality and safety protocols." },
    { title: "Competitive Pricing", desc: "We offer competitive wholesale prices without ever compromising on the ultimate quality of our products and services." },
    { title: "Unmatched Expertise", desc: "With our extensive structural experience and industrial expertise, we bring valuable operational knowledge to help you succeed." },
    { title: "Eco Sustainability", desc: "We are dedicated to sustainable farming practices that protect our environment and natively support the community." }
  ],

  // Default theme config
  theme: {
    current: "emerald"
  },
  messages: [
    { id: 1, name: "Kazi Farhan", email: "farhan@bengalgroup.bd", category: "wholesale", text: "Inquiry regarding bulk purchase of Premium Rice Bran Oil and Oil Cakes for our feed mills. Please send wholesale price list.", date: "2026-05-21 08:32 AM" },
    { id: 2, name: "Dr. Tareq Rahman", email: "tareq@agroinnovations.com", category: "consulting", text: "We are planning to set up a new solvent extraction plant in Bogura. Requesting a consultation meeting with Md. Abu Sayem.", date: "2026-05-21 09:15 AM" }
  ]
};
