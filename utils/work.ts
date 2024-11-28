import { nanoid } from 'nanoid';

export const workExperience = [
  {
    id: nanoid(),
    title: 'Customer Experience Manager',
    company: 'Hamburg Sud Egypt Maritime Agencies',
    date: '3/2022 – 12/2023',
    duration: '1 yr 10 mos',
    details: `<div class="job-summary">
            <p>
              A customer experience manager is a professional who oversees the
              quality and satisfaction of the interactions between a company
              and its customers. Also, responsible for ensuring that the
              company delivers a consistent, positive, and memorable
              experience to its customers across all touch points, such as
              online, phone, email, or in-person. Also, collects and analyzes
              customer feedback, identifies areas of improvement, and
              implements solutions to enhance the customer journey.
            </p>
            <p>Some of Projects I participated in:</p>
            <ul>
              <li>Led the rolling out a lot of new systems in Egypt</li>
              <li>
                Responsible for organizing brand sunset in Country &
                transferring people to the mother company
              </li>
              <li>My team won Global Award "CX Champion" during my time.</li>
              <li>
                Received the highest score in Customer Survey in the Area.
              </li>
            </ul>
          </div>`,
  },
  {
    id: nanoid(),
    title: 'Logistics & Services Manager',
    company: 'Hamburg Sud Egypt Maritime Agencies',
    date: '9/2021 – 3/2022',
    duration: '7 mos',
    details: `<div>
      <ul>
        <li>Responsible for inland transportation & port operation</li>
        <li>Aligning between Booking, Documentation, Sales Depts</li>
      </ul>
    </div>`,
  },
  {
    id: nanoid(),
    title: 'Export Booking Manager',
    company: 'Hamburg Sud Egypt Maritime Agencies',
    date: '1/2019 – 9/2021',
    duration: '2 yrs 9 mos',
    details: `<div>
      <p>
        A Booking manager is responsible for booking team who are entering
        customer bookings into the system. They oversee the accuracy &
        efficiency of their team and are responsible for overall data
        regarding shipments on board of the vessel.
      </p>
      <ul>
        <li>Responsible for Customer Order Management Team</li>
        <li>Aligning with Sales & Documentation, and relevant Depts</li>
      </ul>
    </div>`,
  },
  {
    id: nanoid(),
    title: 'Export Data Control Supervisor',
    company: 'Hamburg Sud Egypt Maritime Agencies',
    date: '1/2009 – 2/2018',
    duration: '10 yrs',
    details: `<div>
      <ul>
        <li>Responsible for Customer Order Management</li>
        <li>Aligning with Sales & Documentation Depts</li>
      </ul>
    </div>`,
  },
];

export type WorkExperience = {
  id: string;
  title: string;
  company: string;
  date: string;
  duration: string;
  details: string;
};
