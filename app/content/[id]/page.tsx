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

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  
  function retrieveStaticContent(contentDetails: any) {
    // const params = useParams();
    console.log("This is the static content", contentDetails);
    let htmlContent = '<h1 className="text-2xl font-bold">Page Not Found</h1>';
    if (contentDetails['id'] === 'community-support-donations.html') {
      htmlContent = '<h1 className="text-2xl font-bold">Community Support Donations</h1><p>      Monetary charitable contributions to support 501(c)(3), 501(c)(4), and 501(c)(6) non-profit organizations’ initiatives or general missions in support of local community causes.</p><p>Community Support Donation proposals must be submitted at least 60 days prior to program start date, if applicable.</p><p>Health- and cancer-focused program support requests should be submitted in the Healthcare-Related Charitable Contributions category.</p>';
    }else if (contentDetails['id'] === 'hrc_contributions.html') {
      htmlContent = '<h1 className="text-2xl font-bold">Healthcare-Related Charitable Contributions</h1><p>Monetary charitable contributions to support 501(c)(3), 501(c)(4), and 501(c)(6) non-profit organizations\' initiatives or general missions in support of oncology and cancer awareness, patient education and advocacy, or to provide a general benefit to the healthcare community. Exelixis may not receive tangible benefits in return for such support.</p><p>Healthcare-related charitable contribution proposals must be submitted at least 60 days prior to the program start date, if applicable.</p><p>Healthcare-related charitable contributions do not include Patient Assistance Foundation Donations.</p>';
    }else if (contentDetails['id'] === 'ipaf.html') {
      htmlContent = '<h1 className="text-2xl font-bold">Independent Patient Assistance Foundation (IPAF)</h1><p>Monetary charitable contributions to support independent patient assistant foundations that provide financial assistance to help patients access available treatments for specific diseases or receive health care-related support.</p>';
    }else if (contentDetails['id'] === 'meded.html') {
      htmlContent = '<h1 className="text-2xl font-bold">Medical Education Requests (Med Ed)</h1><p>Support for advancing scientific discourse and improving patient care through clinical, scientific, or educational programs or activities including, but not limited to:</p><ul><li>Independent medical education (IME) that is either accredited continuing medical education (CME) or non-accredited CME</li><li>Third party scientific/educational conferences and professional meetings for which no tangible benefit (exhibit, registration, etc) is provided</li><li>Grand rounds, journal clubs, and tumor boards.</li></ul><p>Supported delivery formats include live events such as educational conferences, symposia, or meetings, enduring educational materials, and web-based or online educational activities.</p><p>Exelixis may not receive tangible benefits for a medical education request with the exception of fair recognition of support.</p><p>Medical education proposals must be submitted at least 90 days prior to the program start date and at least 60 days prior to the funding decision needed date.</p>';
    }else if (contentDetails['id'] === 'sponsorships.html') {
      htmlContent = '<h1 className="text-2xl font-bold">Sponsorships</h1><p>General funding support of various scientific and educational activities or programs through the sponsorship and participation in activities including, but not limited to:</p><ul><li>Scientific conferences and meetings</li><li>Non-profit professional societies supporting healthcare-related research and education</li><li>Corporate council memberships</li><li>Exhibits and medical informational booths</li><li>Product theaters</li></ul><p>Exelixis may receive appropriate tangible benefits in return for such support, commensurate with the amount of funding provided as part of a sponsorship.</p><p>Sponsorship proposals must be submitted at least 60 days prior to the program start date.</p>';
    }
    setdefaultContent(htmlContent);
  }
  const params = useParams();
  console.log('Params : ', params['id']);

  const [defaultContent, setdefaultContent] = useState<string | null>(null);

  useEffect(() => {
    retrieveStaticContent(params);
  }, []);
  

  
  return (
    <>
    <Navigation />

<div className="max-w-7xl mx-auto px-4">
  <div className="content-wrapper space-y-6">

    {/* <h1 className="text-2xl font-bold">Welcome to the Exelixis Grants and Giving Portal. Dynamic Page</h1> */}
    {/* <div dangerouslySetInnerHTML={{ __html: defaultContent }}></div> */}
    {defaultContent}
    {/* <p>
      This site allows you to submit a proposal(s) seeking support for Community Support Donations,
      Healthcare-Related Charitable Contributions, Independent Patient Assistance Foundations (IPAF),
      Medical Educational Grants, and Sponsorships. Please click on the tabs above for details regarding our submission categories.
    </p>

    <p>
      Exelixis welcomes proposals seeking support within the therapeutic area of oncology,
      with focus including, but not limited to:
    </p>

    <ul className="list-disc list-inside space-y-1">
      <li>Renal cell carcinoma (RCC)</li>
      <li>Hepatocellular carcinoma (HCC)</li>
      <li>Thyroid cancer</li>
      <li>Neuroendocrine tumors (NET)</li>
    </ul>

    <p>
      Proposals in other tumor types or in a therapeutic area other than oncology may be submitted for consideration,
      but all requests must align with the Exelixis Annual Plans for committee approval. Please note that submission
      of a request in the above therapeutic area and disease states does not guarantee approval, as not all requests can be supported.
    </p>

    <p>
      To submit a proposal, you must first create an account using the ‘Register’ link on the top of this page.
      If you already have an account, please use the ‘Sign In’ link on the top of this page and enter your login credentials.
    </p>

    <p className="font-bold">
      Please refer to the <a href="#" className="text-blue-600 underline">Exelixis - Grant Requestor Guide</a>
      for details regarding the submission and processing of your proposal
    </p>

    <p className="font-bold">
      For technical support, please contact SteepRock Client Services:
    </p>

    <p>
      Email: <a href="mailto:Support@SteepRockInc.com" className="text-blue-600 underline">Support@SteepRockInc.com</a><br/>
      Phone: +1 718-576-1406 (M-F 8am - 6pm US ET)
    </p>

    <p>
      You may also contact the Exelixis team via email at
      <a href="mailto:grants@exelixis.com" className="text-blue-600 underline">grants@exelixis.com</a>
      for specific questions regarding your proposal.
    </p> */}

  </div>
</div>
</>
    // </main>
  );
}
