import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import NavBar from './navbar';

const FIRForm = () => {
  const [formData, setFormData] = useState({
    policeStation: '',
    crimeDetails: '',
    accusedName: '',
    accusedAddress: '',
    accusedContact: '',
    complainantName: '',
    complainantAddress: '',
    complainantContact: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
  
    const pageWidth = doc.internal.pageSize.width;
    const marginLeft = 20;
    const contentWidth = pageWidth - 2 * marginLeft;
  
    // Format the content with wrapping and line spacing
    const title = `To,\nThe SHO,\nPS ${formData.policeStation}`;
    const subject = 'Sub: Registration of FIR.';
    const intro = 'Sir,\nPlease register an FIR with the facts narrated below.';
    const crimeDetails = `Crime Details: ${formData.crimeDetails}`;
    const accusedInfo = [
      `Name of Accused: ${formData.accusedName}`,
      `Address of Accused: ${formData.accusedAddress}`,
      `Contact of Accused: ${formData.accusedContact}`
    ];
    const conclusion = 'You are requested to take criminal action against the accused and protect the complainant.';
    const signature = `Yours,\n${formData.complainantName}\n${formData.complainantAddress}\n${formData.complainantContact}`;
  
    // Add text with wrapping
    doc.text(marginLeft, 20, doc.splitTextToSize(title, contentWidth));
    doc.text(marginLeft, 40, subject);
    doc.text(marginLeft, 50, intro);
  
    // Adjust line spacing by setting Y positions for each section
    doc.text(marginLeft, 70, doc.splitTextToSize(crimeDetails, contentWidth));
    let currentY = 90;
  
    accusedInfo.forEach((line) => {
      doc.text(marginLeft, currentY, doc.splitTextToSize(line, contentWidth));
      currentY += 10; // Add spacing between lines
    });
  
    doc.text(marginLeft, currentY + 10, doc.splitTextToSize(conclusion, contentWidth));
    doc.text(marginLeft, currentY + 30, doc.splitTextToSize(signature, contentWidth));
  
    doc.save('FIR_Form.pdf');
  };
  

  return (
    <div className="form-container"> {/* Using common styling */}
      <h1 className="text-center text-2xl font-bold">FIR Registration Form</h1>
      <form className="grid gap-4">
        <input type="text" name="policeStation" placeholder="Police Station Name" onChange={handleChange} required />
        <textarea name="crimeDetails" placeholder="Crime Details" onChange={handleChange} required />
        <input type="text" name="accusedName" placeholder="Accused's Name" onChange={handleChange} required />
        <input type="text" name="accusedAddress" placeholder="Accused's Address" onChange={handleChange} required />
        <input type="tel" name="accusedContact" placeholder="Accused's Contact" onChange={handleChange} required />
        <input type="text" name="complainantName" placeholder="Complainant's Name" onChange={handleChange} required />
        <input type="text" name="complainantAddress" placeholder="Complainant's Address" onChange={handleChange} required />
        <input type="tel" name="complainantContact" placeholder="Complainant's Contact" onChange={handleChange} required />
        
        <button type="button" onClick={generatePDF} className="btn-primary">Download FIR PDF</button>
      </form>
    </div>
  );
};

const LeaseForm = () => {
  const [formData, setFormData] = useState({
    leaseDate: '',
    effectiveDate: '',
    lessorName: '',
    lessorSignatory: '',
    lesseeName: '',
    lesseeSignatory: '',
    premisesAddress: '',
    rentAmount: '',
    securityDeposit: '',
    leaseDuration: '',
    terms: '',
    additionalDetails: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
  
    const pageWidth = doc.internal.pageSize.width;
    const marginLeft = 20;
    const contentWidth = pageWidth - 2 * marginLeft;
  
    // Format the content with wrapping and line spacing
    const title = `To,\nThe Landlord,\n${formData.landlordName}`;
    const subject = 'Sub: Lease Agreement Request.';
    const intro = 'Dear Sir/Madam,\nI am writing to request a lease agreement for the property mentioned below.';
    const propertyDetails = `Property Address: ${formData.propertyAddress}\nProperty Type: ${formData.propertyType}`;
    const tenantInfo = [
      `Name of Tenant: ${formData.tenantName}`,
      `Tenant Address: ${formData.tenantAddress}`,
      `Tenant Contact: ${formData.tenantContact}`
    ];
    const leaseTerms = `Lease Term: ${formData.leaseTerm}\nRent: ${formData.rentAmount}\nPayment Frequency: ${formData.paymentFrequency}`;
    const conclusion = 'I would appreciate your consideration and look forward to hearing from you soon.';
    const signature = `Sincerely,\n${formData.tenantName}\n${formData.tenantAddress}\n${formData.tenantContact}`;
  
    // Add text with wrapping
    doc.text(marginLeft, 20, doc.splitTextToSize(title, contentWidth));
    doc.text(marginLeft, 40, subject);
    doc.text(marginLeft, 50, intro);
  
    // Adjust line spacing by setting Y positions for each section
    doc.text(marginLeft, 70, doc.splitTextToSize(propertyDetails, contentWidth));
    let currentY = 90;
  
    tenantInfo.forEach((line) => {
      doc.text(marginLeft, currentY, doc.splitTextToSize(line, contentWidth));
      currentY += 10; // Add spacing between lines
    });
  
    doc.text(marginLeft, currentY + 10, doc.splitTextToSize(leaseTerms, contentWidth));
    doc.text(marginLeft, currentY + 30, doc.splitTextToSize(conclusion, contentWidth));
    doc.text(marginLeft, currentY + 50, doc.splitTextToSize(signature, contentWidth));
  
    doc.save('Lease_Agreement.pdf');
  };
  
  
  return (
    <div className="form-container">
      <h1 className="text-center text-2xl font-bold">Lease Deed Form</h1>
      <form className="grid gap-4">
        <input type="date" name="leaseDate" placeholder="Lease Date" onChange={handleChange} required />
        <input type="date" name="effectiveDate" placeholder="Effective Date" onChange={handleChange} required />
        <input type="text" name="lessorName" placeholder="Lessor's Name" onChange={handleChange} required />
        <input type="text" name="lessorSignatory" placeholder="Lessor's Authorized Signatory" onChange={handleChange} required />
        <input type="text" name="lesseeName" placeholder="Lessee's Name" onChange={handleChange} required />
        <input type="text" name="lesseeSignatory" placeholder="Lessee's Authorized Signatory" onChange={handleChange} required />
        <input type="text" name="premisesAddress" placeholder="Premises Address" onChange={handleChange} required />
        <input type="number" name="rentAmount" placeholder="Rent Amount" onChange={handleChange} required />
        <input type="number" name="securityDeposit" placeholder="Security Deposit" onChange={handleChange} required />
        <input type="text" name="leaseDuration" placeholder="Lease Duration (in years)" onChange={handleChange} required />
        <textarea name="additionalDetails" placeholder="Additional Terms and Details" onChange={handleChange} required />
        
        <button type="button" onClick={generatePDF} className="btn-primary">Download Lease Deed PDF</button>
      </form>
    </div>
  );
};


const PropertyForm = () => {
  const [formData, setFormData] = useState({
    party1Name: '',
    party2Name: '',
    saleAmount: '',
    flatDetails: '',
    paymentDetails: '',
    indemnityAmount: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
  
    const pageWidth = doc.internal.pageSize.width;
    const marginLeft = 20;
    const contentWidth = pageWidth - 2 * marginLeft;
  
    const title = 'Deed of Agreement for Property Sale';
    
    // Dynamic content
    const parties = `This Deed of Agreement is executed at __________ on __________ between ${formData.party1Name} (Party No. 1) and ${formData.party2Name} (Party No. 2).`;
    const intro = `The parties agree to the following terms and conditions regarding the sale of the property described below.`;
    const flatDetails = `Whereas Party No. 1 is the owner of the flat located at ${formData.flatDetails}. Party No. 1 agrees to sell the flat to Party No. 2 for a total consideration of Rs. ${formData.saleAmount}.`;
    const paymentDetails = `The payment has been made by Party No. 2 to Party No. 1 in the following manner: ${formData.paymentDetails}.`;
    const indemnity = `Party No. 1 assures Party No. 2 that the flat is free from any encumbrances and indemnifies Party No. 2 against any loss arising due to claims or disputes regarding the property.`;
    const conclusion = 'This agreement remains irrevocable, and Party No. 1 will not revoke or cancel it under any circumstances.';
    const signature = `Signed by Party No. 1: ${formData.party1Name}\nSigned by Party No. 2: ${formData.party2Name}`;
  
    // Set title font size
    doc.setFontSize(16);
    doc.text(marginLeft, 20, title);
  
    // Set content font size
    doc.setFontSize(12);
  
    // Add dynamic text with proper text splitting
    const splitParties = doc.splitTextToSize(parties, contentWidth);
    const splitIntro = doc.splitTextToSize(intro, contentWidth);
    const splitFlatDetails = doc.splitTextToSize(flatDetails, contentWidth);
    const splitPaymentDetails = doc.splitTextToSize(paymentDetails, contentWidth);
    const splitIndemnity = doc.splitTextToSize(indemnity, contentWidth);
    const splitConclusion = doc.splitTextToSize(conclusion, contentWidth);
    const splitSignature = doc.splitTextToSize(signature, contentWidth);
  
    // Set initial vertical position for text
    let currentY = 40;
  
    // Add text content to the PDF
    doc.text(marginLeft, currentY, splitParties);
    currentY += 20;
    doc.text(marginLeft, currentY, splitIntro);
    currentY += 20;
    doc.text(marginLeft, currentY, splitFlatDetails);
    currentY += 20;
    doc.text(marginLeft, currentY, splitPaymentDetails);
    currentY += 20;
    doc.text(marginLeft, currentY, splitIndemnity);
    currentY += 20;
    doc.text(marginLeft, currentY, splitConclusion);
    currentY += 20;
    doc.text(marginLeft, currentY, splitSignature);
  
    // Save the PDF
    doc.save('Deed_of_Agreement.pdf');
  };
  

  return (
    <div className="form-container"> {/* Using common styling */}
      <h1 className="text-center text-2xl font-bold">Deed of Agreement for Property Sale</h1>
      <form className="grid gap-4">
        <input
          type="text"
          name="party1Name"
          placeholder="Party No.1 Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="party2Name"
          placeholder="Party No.2 Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="flatDetails"
          placeholder="Flat Details"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="saleAmount"
          placeholder="Sale Amount (Rs.)"
          onChange={handleChange}
          required
        />
        <textarea
          name="paymentDetails"
          placeholder="Payment Details"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="indemnityAmount"
          placeholder="Indemnity Amount (Rs.)"
          onChange={handleChange}
          required
        />
        
        <button type="button" onClick={generatePDF} className="btn-primary">
          Download Deed of Agreement PDF
        </button>
      </form>
    </div>
  );
};



const DeclarationForm = () => {
  const [formData, setFormData] = useState({
    applicantName: "",
    fatherName: "",
    motherName: "",
    age: "",
    address: "",
    changeOfName: "",
    changeDate: "",
    complainantName: "",
    complainantAddress: "",
    complainantContact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    const pageWidth = doc.internal.pageSize.width;
    const marginLeft = 20;
    const contentWidth = pageWidth - 2 * marginLeft;

    // Format the content with wrapping and line spacing
    const title = `I, ${formData.applicantName} S/o ${formData.fatherName} D/o ${formData.motherName}, aged around ${formData.age} years, resident of ${formData.address}, do hereby solemnly affirm and declare as under:`;
    const body = `
1. That my name as per the records is ${formData.applicantName}.
2. That I have changed my name as ${formData.changeOfName} on ${formData.changeDate}.
3. At present all the records have my new name ${formData.changeOfName}.
4. I am getting a public notice published to this effect in the newspaper.
5. I state that (${formData.applicantName}) and the (${formData.changeOfName}) is the name of one and the same person and that is myself.
I am executing this declaration to be submitted to the concerned authorities for the change of name.
I hereby state that whatever is stated herein above are true to the best of my knowledge.
Solemnly affirmed at ___________ on this ____ day of ______ 20__.
(Signature of the Applicant).
Deponent.
    `;
    const verification = `VERIFICATION: Verified on this day ___________ at ___________ that the contents of the affidavit are true and correct, nothing material has been concealed and no part of it is false.
Deponent.`;

    // Add text with wrapping
    doc.text(marginLeft, 20, doc.splitTextToSize(title, contentWidth));
    doc.text(marginLeft, 40, doc.splitTextToSize(body, contentWidth));
    doc.text(marginLeft, 160, doc.splitTextToSize(verification, contentWidth));

    doc.save("Declaration_Form.pdf");
  };

  return (
    <div className="form-container">
      <h1 className="text-center text-2xl font-bold">Declaration Form</h1>
      <form className="grid gap-4">
        <input
          type="text"
          name="applicantName"
          placeholder="Applicant Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="fatherName"
          placeholder="Father's Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="motherName"
          placeholder="Mother's Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="changeOfName"
          placeholder="New Name"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="changeDate"
          placeholder="Date of Name Change"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="complainantName"
          placeholder="Complainant's Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="complainantAddress"
          placeholder="Complainant's Address"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="complainantContact"
          placeholder="Complainant's Contact"
          onChange={handleChange}
          required
        />

        <button type="button" onClick={generatePDF} className="btn-primary">
          Generate PDF
        </button>
      </form>
    </div>
  );
};


const Template = ({ template }) => {
  return (
    <>
      <div className="hero-container min-h-screen flex flex-col pt-2  gap-24">
        <NavBar/>

        {template === 'fir' && <FIRForm/>}
        {template === 'lease' && <LeaseForm />}
        {template === 'name-change' && <DeclarationForm />}
        {template === 'property' && <PropertyForm />}
      </div>
  </>
  )
}

export default Template