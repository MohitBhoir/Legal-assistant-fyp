import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import NavBar from './navbar';
import { useParams } from 'react-router-dom';


const LeaseForm = () => {
  const [formData, setFormData] = useState({
    leaseDate: "",
    effectiveDate: "",
    lessorName: "",
    lessorSignatory: "",
    lesseeName: "",
    lesseeSignatory: "",
    premisesAddress: "",
    rentAmount: "",
    securityDeposit: "",
    leaseDuration: "",
    additionalDetails: "",
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
    const contentWidth = pageWidth - marginLeft * 2;

    const title = "Lease Agreement";
    const sectionSpacing = 10;

    // Adding Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(title, pageWidth / 2, 20, { align: "center" });

    // Adding Agreement Details
    let currentY = 40;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    const leaseDetails = [
      `Lease Date: ${formData.leaseDate}`,
      `Effective Date: ${formData.effectiveDate}`,
      `Lessor's Name: ${formData.lessorName}`,
      `Lessor's Authorized Signatory: ${formData.lessorSignatory}`,
      `Lessee's Name: ${formData.lesseeName}`,
      `Lessee's Authorized Signatory: ${formData.lesseeSignatory}`,
      `Premises Address: ${formData.premisesAddress}`,
      `Rent Amount: Rs. ${formData.rentAmount}`,
      `Security Deposit: Rs. ${formData.securityDeposit}`,
      `Lease Duration: ${formData.leaseDuration} years`,
    ];

    leaseDetails.forEach((detail) => {
      doc.text(detail, marginLeft, currentY);
      currentY += sectionSpacing;
    });

    // Terms and Conditions Section
    currentY += sectionSpacing;
    doc.setFont("helvetica", "bold");
    doc.text("Terms and Conditions:", marginLeft, currentY);
    currentY += sectionSpacing;

    doc.setFont("helvetica", "normal");
    const termsAndConditions = [
      "1. The tenant agrees to pay the rent by the due date every month.",
      "2. The landlord agrees to provide a habitable premise.",
      "3. The security deposit will be refunded at the end of the lease term after deductions for any damages.",
      "4. Any modifications to the property must be approved by the landlord.",
      "5. Both parties must provide 30 days' notice before terminating the lease.",
    ];

    termsAndConditions.forEach((term) => {
      const wrappedTerm = doc.splitTextToSize(term, contentWidth);
      doc.text(wrappedTerm, marginLeft, currentY);
      currentY += sectionSpacing * wrappedTerm.length;
    });

    // Additional Terms Section
    if (formData.additionalDetails.trim()) {
      currentY += sectionSpacing;
      doc.setFont("helvetica", "bold");
      doc.text("Additional Terms and Details:", marginLeft, currentY);
      currentY += sectionSpacing;

      doc.setFont("helvetica", "normal");
      const additionalTerms = doc.splitTextToSize(formData.additionalDetails, contentWidth);
      additionalTerms.forEach((line) => {
        doc.text(line, marginLeft, currentY);
        currentY += sectionSpacing;
      });
    }

    // Footer: Signatures
    currentY += sectionSpacing * 2;
    doc.setFont("helvetica", "bold");
    doc.text("Signatures:", marginLeft, currentY);
    currentY += sectionSpacing;
    doc.text(`Lessor: _______________________`, marginLeft, currentY);
    currentY += sectionSpacing;
    doc.text(`Lessee: _______________________`, marginLeft, currentY);

    // Save the PDF
    doc.save("Lease_Agreement.pdf");
  };

  return (
    <div className="form-container">
      <h1 className="text-center text-2xl font-bold">Lease Deed Form</h1>
      <form className="grid gap-4">
        <input
          type="date"
          name="leaseDate"
          placeholder="Lease Date"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="effectiveDate"
          placeholder="Effective Date"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lessorName"
          placeholder="Lessor's Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lessorSignatory"
          placeholder="Lessor's Authorized Signatory"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lesseeName"
          placeholder="Lessee's Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lesseeSignatory"
          placeholder="Lessee's Authorized Signatory"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="premisesAddress"
          placeholder="Premises Address"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="rentAmount"
          placeholder="Rent Amount"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="securityDeposit"
          placeholder="Security Deposit"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="leaseDuration"
          placeholder="Lease Duration (in years)"
          onChange={handleChange}
          required
        />
        <textarea
          name="additionalDetails"
          placeholder="Additional Terms and Details"
          onChange={handleChange}
          required
        ></textarea>

        <button type="button" onClick={generatePDF} className="btn-primary">
          Download Lease Deed PDF
        </button>
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

const WillComponent = () => {
  const [formData, setFormData] = useState({
    testatorName: '',
    fatherName: '',
    residence: '',
    religion: '',
    dateOfBirth: '',
    appointedExecutor: '',
    executorResidence: '',
    bankDetails: '',
    propertyAddress: '',
    charitableTrustName: '',
    charitableTrustPurpose: '',
    spouseName: '',
    houseAddress: '',
    bankAccount: '',
    insurancePolicyDetails: '',
    sonName: '',
    sonGuardian: '',
    residentialPlot: '',
    carDetails: '',
    mutualFundDetails: '',
    daughterName: '',
    fdDetails: '',
    lockerDetails: '',
    shareDetails: '',
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

    const title = 'Last Will and Testament';

    // Dynamic content based on form data
    const intro = `I, Shri/Smt ${formData.testatorName}, son/daughter/wife of Shri ${formData.fatherName}, a resident of ${formData.residence}, by religion ${formData.religion}, born on ${formData.dateOfBirth}, do hereby revoke all my previous Wills (or) Codicils and declare that this is my last Will, which I make on this ${new Date().toLocaleDateString()}.`;

    const declaration = `I declare that I am writing this will out of my free volition and without any coercion or undue influence whatsoever.`;
    const executor = `I appoint Shri ${formData.appointedExecutor}, son/daughter of ${formData.executorResidence}, resident of ${formData.executorResidence} to be the executor of this Will. In a case where Shri ${formData.appointedExecutor} were to predecease me, then Shri ${formData.appointedExecutor} will be the executor of this Will.`;
    const liabilities = `Any liability owed by me, and the executor fees and probation expenses shall be paid from my bank account no ${formData.bankDetails}. In case the fund is insufficient, then the income from the property located at ${formData.propertyAddress} shall be used. In case there is any surplus amount, then the surplus amount should be donated to a charitable trust ${formData.charitableTrustName} for the purpose of ${formData.charitableTrustPurpose}.`;

    const spouseBequest = `I bequeath the following assets to my Wife Smt ${formData.spouseName}:
    1. My house located at ${formData.houseAddress}
    2. Bank balance of my savings account no ${formData.bankAccount} with ${formData.bankDetails}
    3. The proceeds of my Term insurance policy ${formData.insurancePolicyDetails}, from ${formData.insurancePolicyDetails}
    4. Any other asset not mentioned in this Will but of which I am the owner.`;

    const sonBequest = `I bequeath the following assets to my son, ${formData.sonName} (in case he is a minor, ${formData.sonGuardian}, his legal guardian, shall be responsible for the welfare of following assets until he is major):
    1. Residential Plot no ${formData.residentialPlot} located at ${formData.propertyAddress}
    2. My car with registration no ${formData.carDetails}
    3. My mutual fund investments with folio numbers ${formData.mutualFundDetails}`;

    const daughterBequest = `I bequeath the following assets, irrespective of her marital status, to my daughter, Smt ${formData.daughterName}:
    1. My Bank fixed deposits in ${formData.bankDetails} bearing ${formData.fdDetails}
    2. The contents of bank locker no ${formData.lockerDetails}, with bank ${formData.bankDetails}, bank address ${formData.propertyAddress}
    3. My Shares ${formData.shareDetails} of ${formData.bankDetails} company`;

    const signature = `All the above assets are owned by me. No one else has rights on these properties. \n\nSigned by Testator: ${formData.testatorName}`;

    const witnesses = `Witnesses:
    We hereby attest that this Will has been signed by Shri ${formData.testatorName} as his last Will at ${formData.residence} in the joint presence of himself and us. The testator is in sound mind and made this Will without any coercion.`;

    // Set title font size
    doc.setFontSize(16);

    // Calculate the position to center the title
    const titleWidth = doc.getTextWidth(title);
    const titleX = (pageWidth - titleWidth) / 2; // Centers the title horizontally

    // Add title in the center
    doc.text(titleX, 20, title);

    // Set content font size
    doc.setFontSize(12);

    // Add dynamic text with proper text splitting
    const splitIntro = doc.splitTextToSize(intro, contentWidth);
    const splitDeclaration = doc.splitTextToSize(declaration, contentWidth);
    const splitExecutor = doc.splitTextToSize(executor, contentWidth);
    const splitLiabilities = doc.splitTextToSize(liabilities, contentWidth);
    const splitSpouseBequest = doc.splitTextToSize(spouseBequest, contentWidth);
    const splitSonBequest = doc.splitTextToSize(sonBequest, contentWidth);
    const splitDaughterBequest = doc.splitTextToSize(daughterBequest, contentWidth);
    const splitSignature = doc.splitTextToSize(signature, contentWidth);
    const splitWitnesses = doc.splitTextToSize(witnesses, contentWidth);

    // Set initial vertical position for text
    let currentY = 40;

    // Add text content to the PDF
    doc.text(marginLeft, currentY, splitIntro);
    currentY += 20;
    doc.text(marginLeft, currentY, splitDeclaration);
    currentY += 20;
    doc.text(marginLeft, currentY, splitExecutor);
    currentY += 20;
    doc.text(marginLeft, currentY, splitLiabilities);
    currentY += 30;
    doc.text(marginLeft, currentY, splitSpouseBequest);
    currentY += 30;
    doc.text(marginLeft, currentY, splitSonBequest);
    currentY += 30;
    doc.text(marginLeft, currentY, splitDaughterBequest);
    currentY += 30;
    doc.text(marginLeft, currentY, splitSignature);
    currentY += 20;
    doc.text(marginLeft, currentY, splitWitnesses);

    // Save the PDF
    doc.save('Last_Will_and_Testament.pdf');
};


  return (
    <div className="form-container">
      <h1 className="text-center text-2xl font-bold">Last Will and Testament</h1>
      <form className="grid gap-4">
        <input
          type="text"
          name="testatorName"
          placeholder="Testator's Name"
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
          name="residence"
          placeholder="Residence"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="religion"
          placeholder="Religion"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="appointedExecutor"
          placeholder="Appointed Executor Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="executorResidence"
          placeholder="Executor's Residence"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="bankDetails"
          placeholder="Bank Details"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="propertyAddress"
          placeholder="Property Address"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="charitableTrustName"
          placeholder="Charitable Trust Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="charitableTrustPurpose"
          placeholder="Charitable Trust Purpose"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="spouseName"
          placeholder="Spouse's Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="houseAddress"
          placeholder="House Address"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="bankAccount"
          placeholder="Bank Account"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="insurancePolicyDetails"
          placeholder="Insurance Policy Details"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="sonName"
          placeholder="Son's Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="sonGuardian"
          placeholder="Guardian of Son (if minor)"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="residentialPlot"
          placeholder="Residential Plot"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="carDetails"
          placeholder="Car Details"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="mutualFundDetails"
          placeholder="Mutual Fund Details"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="daughterName"
          placeholder="Daughter's Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="fdDetails"
          placeholder="FD Details"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lockerDetails"
          placeholder="Locker Details"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="shareDetails"
          placeholder="Share Details"
          onChange={handleChange}
          required
        />
        <button
          type="button"
          onClick={generatePDF}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Generate Will PDF
        </button>
      </form>
    </div>
  );
};

const Template = () => {
  const { temp: tempName } = useParams();
  return (
    <>
      <div className="hero-container min-h-screen flex flex-col pt-2  gap-24">
        <NavBar/>
        {tempName === 'lease' && <LeaseForm />}
        {tempName === 'name-change' && <DeclarationForm />}
        {tempName === 'property' && <PropertyForm />}
        {tempName === 'will' && <WillComponent />}
      </div>
  </>
  )
}

export default Template