import React from 'react';
import '../layout/all.css'; // Assurez-vous de lier votre fichier CSS ici
import DefaultLayout from '../layout/DefaultLayout.jsx';
const Events = () => {
  return (
    <DefaultLayout>
    <div className="agenda-container">
      <h2 className="agenda-title">Proposed Agenda</h2>
      <div className="agenda-item">
        <p>
        <h3 className="day-subtitle">Day 1: Building Awareness</h3>
          <br />
          Morning Session: Opening Ceremony
          <ul>
            <li>8:30 AM - 9:00 AM: Registration and Networking</li>
            <li>9:00 AM - 9:30 AM: Welcome Address and Conference Overview</li>
            <li>9:30 AM - 10:30 AM: Keynote Speaker - "The Importance of Business Continuity in Today's Global Environment"</li>
            <li>10:30 AM - 11:00 AM: Coffee Break and Networking</li>
          </ul>
          <br />
          Midday Session: Understanding Business Continuity
          <ul>
            <li>11:00 AM - 12:30 PM: Panel Discussion - "Global Trends in Business Continuity"</li>
            <li>12:30 PM - 1:30 PM: Lunch Break</li>
          </ul>
          <br />
          Afternoon Session: Regional Perspectives
          <ul>
            <li>1:30 PM - 2:30 PM: Case Studies - Successful Business Continuity Implementations in Africa</li>
            <li>2:30 PM - 3:30 PM: Workshop - "Building a Business Continuity Culture in Your Organization"</li>
            <li>3:30 PM - 4:00 PM: Networking Break</li>
            <li>4:00 PM - 5:00 PM: Interactive Session - "Challenges and Opportunities for Business Continuity in Africa"</li>
          </ul>
          <br />
          Simultaneous Workshops:
          <ul>
            <li>Workshop 1: Operational Resilience and Business Continuity (3:30 PM - 5:00 PM)</li>
            <li>Workshop 2: Legal and Regulatory Framework (3:30 PM - 5:00 PM)</li>
          </ul>
        </p>
      </div>
      {/* Ajoutez les autres jours et sessions de la même manière */}
      {/* Exemple pour le Day 2 */}
      <div className="agenda-item">
        <p>
        <h3 className="day-subtitle">Day 2: Practical Strategies</h3>
        <br />
          Morning Session: Tools and Techniques
          <ul>
            <li>9:00 AM - 10:00 AM: Keynote Speaker - "Effective Business Continuity Planning: Tools and Techniques"</li>
            <li>10:00 AM - 11:00 AM: Panel Discussion - "Practical Approaches to Business Continuity"</li>
            <li>11:00 AM - 11:30 AM: Coffee Break and Networking</li>
          </ul>
          <br />
          Midday Session: Workshops and Training
          <ul>
            <li>11:30 AM - 1:00 PM: Workshops - "Risk Assessment and Mitigation Strategies"</li>
            <li>1:00 PM - 2:00 PM: Lunch Break</li>
          </ul>
          <br />
          Afternoon Session: International Best Practices
          <ul>
            <li>2:00 PM - 3:30 PM: Panel Discussion - "Learning from Global Success Stories"</li>
            <li>3:30 PM - 4:00 PM: Networking Break</li>
            <li>4:00 PM - 5:30 PM: Interactive Workshop - "Business Continuity Simulation Exercise"</li>
          </ul>
          <br />
          Simultaneous Workshops:
          <ul>
            <li>Workshop 3: Cyberresilience and Business Continuity (3:30 PM - 5:00 PM)</li>
            <li>Workshop 4: Automatisation of the Business Continuity Process (3:30 PM - 5:00 PM)</li>
          </ul>
        </p>
      </div>
      {/* Ajoutez les autres jours et sessions de la même manière */}
      {/* Exemple pour le Day 3 */}<h3 className="day-subtitle">Day 3: Implementation and Future Directions</h3>
      <div className="agenda-item">
        
        <p>
        
       
          <br />
          Morning Session: Implementing Business Continuity
          <ul>
            <li>9:00 AM - 10:00 AM: Keynote Speaker - "Overcoming Challenges: Practical Steps to Implement Business Continuity in Africa"</li>
            <li>10:00 AM - 11:00 AM: Panel Discussion - "Roadmap to Implementation: Insights from Industry Leaders"</li>
            <li>11:00 AM - 11:30 AM: Coffee Break and Networking</li>
          </ul>
          <br />
          Special Session: Resilience of Industrial Control Systems (ICS)
          <ul>
            <li>11:30 AM - 1:00 PM: Presentation and Panel Discussion - "Ensuring Resilience in Industrial Control Systems: Challenges and Best Practices"</li>
          </ul>
          <br />
          Midday Session: Roundtable Discussions
          <ul>
            <li>1:00 PM - 2:00 PM: Roundtable Discussions - "Addressing Specific Challenges in Different Industries"</li>
            <li>2:00 PM - 3:30 PM: Lunch Break</li>
          </ul>
          <br />
          Afternoon Session: Closing Ceremony and Future Directions
          <ul>
            <li>3:30 PM - 4:00 PM: Closing Keynote - "Charting the Future: Making Business Continuity a Standard Practice in Africa"</li>
            <li>4:00 PM - 5:00 PM: Conference Wrap-up and Acknowledgments</li>
            <li>5:00 PM - 6:00 PM: Networking and Farewell</li>
          </ul>
        </p>
      </div>
      {/* Ajoutez les autres jours et sessions de la même manière */}
    </div>
    </DefaultLayout>);
};

export default Events;
