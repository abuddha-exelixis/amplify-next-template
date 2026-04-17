"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../../app.css";
import  Navigation  from "@/components/ui/header";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { useParams } from "next/navigation";
import Footer from "@/components/ui/footer";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  
  function retrieveStaticContent(contentDetails: any) {
    // const params = useParams();
    let htmlContent = '<h1 className="text-2xl font-bold">Page Not Found</h1>';
    if (contentDetails['id'] === 'community-support-donations.html') {
      htmlContent = '<h1 className="text-2xl font-bold">Community Support Donations</h1><p>      Monetary charitable contributions to support 501(c)(3), 501(c)(4), and 501(c)(6) non-profit organizations’ initiatives or general missions in support of local community causes.</p><p>Community Support Donation proposals must be submitted at least 60 days prior to program start date, if applicable.</p><p>Health- and cancer-focused program support requests should be submitted in the Healthcare-Related Charitable Contributions category.</p>';
    }else if (contentDetails['id'] === 'hrc_contributions.html') {
      htmlContent = '<h1 className="text-2xl font-bold">Healthcare-Related Charitable Contributions</h1><p>Monetary charitable contributions to support 501(c)(3), 501(c)(4), and 501(c)(6) non-profit organizations\' initiatives or general missions in support of oncology and cancer awareness, patient education and advocacy, or to provide a general benefit to the healthcare community. Exelixis may not receive tangible benefits in return for such support.</p><p>Healthcare-related charitable contribution proposals must be submitted at least 60 days prior to the program start date, if applicable.</p><p>Healthcare-related charitable contributions do not include Patient Assistance Foundation Donations.</p>';
    }else if (contentDetails['id'] === 'ipaf.html') {
      htmlContent = '<h1 className="text-2xl font-bold">Independent Patient Assistance Foundation (IPAF)</h1><p>Monetary charitable contributions to support independent patient assistant foundations that provide financial assistance to help patients access available treatments for specific diseases or receive health care-related support.</p>';
    }else if (contentDetails['id'] === 'meded.html') {
      htmlContent = '<h1 className="text-2xl font-bold">Medical Education Requests (Med Ed)</h1><p>Support for advancing scientific discourse and improving patient care through clinical, scientific, or educational programs or activities including, but not limited to:</p><ul className="list-disc list-inside space-y-1"><li>Independent medical education (IME) that is either accredited continuing medical education (CME) or non-accredited CME</li><li>Third party scientific/educational conferences and professional meetings for which no tangible benefit (exhibit, registration, etc) is provided</li><li>Grand rounds, journal clubs, and tumor boards.</li></ul><p>Supported delivery formats include live events such as educational conferences, symposia, or meetings, enduring educational materials, and web-based or online educational activities.</p><p>Exelixis may not receive tangible benefits for a medical education request with the exception of fair recognition of support.</p><p>Medical education proposals must be submitted at least 90 days prior to the program start date and at least 60 days prior to the funding decision needed date.</p>';
    }else if (contentDetails['id'] === 'sponsorships.html') {
      htmlContent = '<h1 className="text-2xl font-bold">Sponsorships</h1><p>General funding support of various scientific and educational activities or programs through the sponsorship and participation in activities including, but not limited to:</p><ul className="list-disc list-inside space-y-1"><li>Scientific conferences and meetings</li><li>Non-profit professional societies supporting healthcare-related research and education</li><li>Corporate council memberships</li><li>Exhibits and medical informational booths</li><li>Product theaters</li></ul><p>Exelixis may receive appropriate tangible benefits in return for such support, commensurate with the amount of funding provided as part of a sponsorship.</p><p>Sponsorship proposals must be submitted at least 60 days prior to the program start date.</p>';
    }
    setdefaultContent(htmlContent);
  }
  const params = useParams();
  
  const [defaultContent, setdefaultContent] = useState<string>('<span></span>');

  useEffect(() => {
    retrieveStaticContent(params);
  }, []);

  const headerNavigation = [
  { key: 1, name: 'Home', href: '/', current: false },
  { key: 2, name: 'Register', href: '#', current: false },
  { key: 3, name: 'Sign In', href: '/signin', current: false },
  { key: 4, name: 'Community Support Donations', href: '/content/community-support-donations.html', current: (params['id'] == 'community-support-donations.html'?true:false) },
  { key: 5, name: 'Healthcare - Related Charitable Contributions', href: '/content/hrc_contributions.html', current: (params['id'] == 'hrc_contributions.html'?true:false) },
  { key: 6, name: 'Independent Patient Assistance Foundation', href: '/content/ipaf.html', current: (params['id'] == 'ipaf.html'?true:false) },
  { key: 7, name: 'Medical Education Grants', href: '/content/meded.html', current: (params['id'] == 'meded.html'?true:false) },
  { key: 8, name: 'Sponsorships', href: '/content/sponsorships.html', current: (params['id'] == 'sponsorships.html'?true:false) },
];
  

  
  return (
    <>
    <Navigation navigation={headerNavigation}/>

<div className="max-w mx-auto">
  <div className="content-wrapper space-y-6" dangerouslySetInnerHTML={{ __html : defaultContent}}>

  </div>
</div>
<Footer />
</>
    // </main>
  );
}
