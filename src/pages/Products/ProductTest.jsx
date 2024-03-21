import ProductCard from "./Products";

const TestComponent = () => {
  return (
    <div>
      <h2>Product Cards for Testing</h2>

      {/* Banking on MiFiX Card */}
      <ProductCard
        title="Banking on MiFiX"
        description="MiFiX seamlessly connects banks, NBFCs, and other financial institutions with customers, business correspondents, DSAs, field officers, branches, and third-party partners. It streamlines the entire loan origination process, encompassing KYC, loan underwriting, document collection, account opening, disbursement of payments, collections management, reporting, billing, and settlement. By leveraging MiFiX, financial institutions can experience significant efficiency gains exceeding 50%, optimizing operations and enhancing customer experiences."
        imageUrl="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixsid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // Update demoUrl if available
        demoUrl="https://www.example.com/mifix-banking-demo"
      />

      {/* FAR on MiFiX Card */}
      <ProductCard
        title="FAR on MiFiX: Revolutionizing Remittances"
        description="FAR (Finance Against Remittances) on MiFiX empowers over 250 million migrant workers globally. This innovative solution fosters collaboration between participants across borders, including money transfer operators, banks, telecom companies, and other financial institutions. FAR on MiFiX efficiently manages critical processes in cross-border remittances, such as X-Border KYC, data synchronization, underwriting, documentation, account opening, remittances, reconciliation, reporting, billing, and settlement. This translates to faster transactions, enhanced transparency, improved security, and greater financial inclusion for migrant workers and their families."
        imageUrl="https://images.unsplash.com/photo-1498851317124-839d7c393cfc?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixsid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D"
        // Update demoUrl if available
        demoUrl="https://www.example.com/far-remittance-demo"
      />

      {/* Add more ProductCard instances as needed for testing */}
    </div>
  );
};

export default TestComponent;
