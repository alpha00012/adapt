import React from 'react';
import '../layout/prospectusStyle.css'; // Ensure the correct path
import DefaultLayout from '../layout/DefaultLayout.jsx';

const ExhibitingProspectus2024 = () => {
  return (
    <DefaultLayout>
      <div className="prospectus-container">
        <main className="prospectus-main">
          {/* Existing sections */}
          
          <section className="prospectus-section event-calendar">
            <h2>2024 Event Calendar</h2>
            <p>DRJ Spring 2024: Renaissance Orlando at SeaWorld - Orlando, FL (March 17-20, 2024)</p>
            <p>DRJ Fall 2024: Gaylord Texan - Dallas, TX (September 8-11, 2024)</p>
          </section>

          <section className="prospectus-section event-attendance">
            <h2>Event Attendance Shows Buyer Interest</h2>
            <p>
              Professionals who attend events show a high level of intent, which provides a strong signal that there will be further action from the prospect. DRJ has a longstanding reputation of providing relevant, high-quality content along with an exhibit floor that includes representation from both established and new players in the industry.
            </p>
          </section>

          <section className="prospectus-section exhibiting-benefits">
            <h2>Exhibiting Benefits</h2>
            <p>
              Exhibiting at DRJ shows will maximize your exposure and position your organization as an industry leader. The exhibits represent an invaluable opportunity to network and conduct business with business continuity and disaster recovery professionals.
            </p>
            <ul>
              <li>Present your business message to prequalified BC/DR directors and executives in virtually every market.</li>
              <li>Add hundreds of BC/DR professionals to your contact base.</li>
              <li>Announce your latest developments to an information-hungry audience.</li>
            </ul>
          </section>

          <section className="prospectus-section exhibitor-benefits">
            <h2>Take Advantage of Our Exhibitor Benefits</h2>
            <p>Enjoy additional ways to maximize your presence on the show floor and to target a larger audience outside the show.</p>
            <ul>
              <li>Pipe and drape</li>
              <li>Company identification sign</li>
              <li>Aisle carpet nightly vacuuming</li>
              <li>Hall security in the evenings</li>
            </ul>
          </section>

          <section className="prospectus-section staff-benefits">
            <h2>Benefits for Your Staff</h2>
            <ul>
              <li>Complimentary conference program passes</li>
              <li>Additional booth personnel conference passes available for only $775</li>
              <li>Passes providing free admission to the exhibition for customers, prospects, and staff</li>
            </ul>
          </section>

          <section className="prospectus-section marketing-exposure">
            <h2>Marketing/Advertising Exposure</h2>
            <p>
              Gain marketing and advertising exposure with a company profile in the official program guide and access to premier sponsorship opportunities.
            </p>
          </section>

          <section className="prospectus-section pricing">
            <h2>Pricing</h2>
            <p>An 8’x10’ Regular Booth is priced at $2,995. This includes unlimited booth personnel, exhibit area, and a company description in the conference materials.</p>
          </section>

        </main>
      </div>
    </DefaultLayout>
  );
};

export default ExhibitingProspectus2024;
