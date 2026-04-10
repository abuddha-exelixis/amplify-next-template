"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import  Navigation  from "@/components/ui/header";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import Footer from "@/components/ui/footer";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  return (
    <>
    <Navigation />

<div className="max-w-7xl mx-auto px-4">
  <div className="content-wrapper space-y-6">

    <h1 className="text-2xl font-bold">Welcome to the Exelixis Grants and Giving Portal</h1>

    <p>
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
    </p>    
  </div>
  
</div>
<Footer />
</>
    // </main>
  );
}
