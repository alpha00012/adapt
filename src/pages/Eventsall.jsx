import React from 'react';
import '../layout/all.css'; // Assurez-vous de lier votre fichier CSS ici
import DefaultLayout from '../layout/DefaultLayout.jsx';

const Events = () => {
  return (
    <DefaultLayout>
      <div className="agenda-container">
        <h2 className="agenda-title">Conference Agenda</h2>
        
        <div>
  {/* Day 1: Awareness */}
  <div className="agenda-item">
    <h3 className="day-subtitle">Day 1: Awareness</h3>
    <ul>
      <li>8:30 AM - 9:00 AM: Registration and Networking</li>
      <li>9:00 AM - 9:30 AM: Welcome Address and Conference Overview</li>
      <li>9:30 AM - 10:30 AM: Keynote - Business Continuity and Enterprise Sustainability</li>
      <li>10:30 AM - 11:00 AM: Coffee Break and Networking</li>
      <li>11:00 AM - 11:30 AM: Keynote - The Business Continuity Institute</li>
      <li>11:30 AM - 12:30 PM: Panel Discussion - "Global Trends in Business Continuity"</li>
      <li>12:30 PM - 2:00 PM: Lunch Break</li>
      <li>2:00 PM - 2:45 PM: Panel discussion - "Promoting a Culture of Continuity: Opportunities and Challenges"</li>
      <li>2:45 PM - 3:30 PM: COVID-19: Catalyst for Successful Initiatives</li>
      <li>3:30 PM - 4:00 PM: Coffee Break and Networking</li>
      <li>4:00-6:00 PM: Simultaneous Workshops
        <ul>
          <li>The great talk: Women and resilience 1</li>
          <li>Workshop 1: Integrating Business Continuity - Key to Success of ESG Projects in Enterprises</li>
          <li>Workshop 2: Legal and Regulatory Framework: Current State and Perspectives</li>
          <li>Workshop 3: Challenges and Opportunities for Business Continuity in Africa</li>
          <li>Workshop 4: Knowledge, Action, Prevention: University as a Catalyst for Business Continuity and Resilience</li>
          <li>Workshop 5: Challenges and Continuity Strategies: Public Sector</li>
          <li>Workshop 6: Challenges and Continuity Strategies: Services Sector</li>
        </ul>
      </li>
    </ul>
  </div>

  {/* Day 2: Practical Strategies */}
  <div className="agenda-item">
    <h3 className="day-subtitle">Day 2: Practical Strategies</h3>
    <ul>
      <li>8:30 AM - 9:15 AM: Keynote - Effective Business Continuity Planning: Tools and Techniques: GPG7.0</li>
      <li>9:15 AM - 10:30 AM: Panel Discussion - Successful Business Continuity Project Execution</li>
      <li>10:30 AM - 11:00 AM: Coffee Break and Networking</li>
      <li>11:00 AM - 11:45 AM: Keynote - Cybersecurity and Resilience: Challenges for Africa</li>
      <li>11:45 AM - 12:30 PM: Keynote - Continuity Challenges for SMEs</li>
      <li>12:30 PM - 2:00 PM: Lunch Break</li>
      <li>2:00 PM - 2:45 PM: Panel discussion - AI in Service of Continuity</li>
      <li>2:45 PM - 3:30 PM: Panel discussion - Continuity Research: Enlightening Future Decisions</li>
      <li>3:30 PM - 4:00 PM: Networking Break</li>
      <li>4:00-6:00 PM: Simultaneous Workshops
        <ul>
          <li>The great talk: Women and resilience 2</li>
          <li>Workshop 1: Business Continuity Simulation Exercise</li>
          <li>Workshop 2: Business Continuity Approach for Startups</li>
          <li>Workshop 3: Challenges and Continuity Strategies: Healthcare Sector</li>
          <li>Workshop 4: Challenges and Continuity Strategies: Next-Generation Technology Parks</li>
          <li>Workshop 5: Challenges and Continuity Strategies: Industry Sector</li>
          <li>Workshop 6: Challenges and Continuity Strategies: Agri-food Industry Sector</li>
        </ul>
      </li>
      <li>7:00 PM – 11:00 PM: Networking Dinner</li>
    </ul>
  </div>

  {/* Day 3: Implementation and Future Directions */}
  <div className="agenda-item">
    <h3 className="day-subtitle">Day 3: Implementation and Future Directions</h3>
    <ul>
      <li>8:30 AM - 9:15 AM: Keynote - Strengthening Resilience from Inside Out</li>
      <li>9:15 AM - 9:45 AM: Keynote - Resilience Strategies for Industrial Enterprises in a 4.0 World</li>
      <li>9:45 AM - 10:30 AM: Panel Discussion - Implementation Roadmap: Insights from Industry Leaders</li>
      <li>10:30 AM - 11:00 AM: Coffee Break and Networking</li>
      <li>11:00 AM - 11:45 AM: Keynote - Resilience of Critical Infrastructure</li>
      <li>11:45 AM - 12:30 PM: Panel Discussion - Ensuring Resilience in Industrial Control Systems: Challenges and Best Practices</li>
      <li>12:30 PM - 2:00 PM: Lunch Break</li>
      <li>2:00 PM - 3:00 PM: Panel discussion - Future Perspective: Making Business Continuity a Standard in Africa</li>
      <li>3:00 PM - 4:00 PM: Conference Wrap-up and Acknowledgments</li>
    </ul>
  </div>
</div>

  </div>
</DefaultLayout>
);
};

export default Events;
