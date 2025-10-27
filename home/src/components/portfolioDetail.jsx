import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from 'aos';
import { useParams } from "react-router-dom";

export default function PortfolioDetail() {
  const { slug } = useParams();
  const [allportfolio, setAllPortfolio] = useState(null);
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    setAllPortfolio([
      // {
      //   _id: "1",
      //   title: "Gadgetbyte Nepal",
      //   slug: "gadgetbyte-nepal",
      //   category: "Web Developemnt",
      //   client_name: "Gadgetbyte",
      //   link: "https://uat.gadgetbyte.com.np/",
      //   desc: `<h2 class="text-2xl font-semibold mb-4">Project Overview</h2>
      //     <p class="text-gray-700 leading-relaxed mb-4">A comprehensive tech news and gadget review platform in Nepal, migrated from WordPress to a modern stack for enhanced performance and scalability.</p>
      //     <p class="text-gray-700 leading-relaxed">Led the migration of the entire application from WordPress to Next.js, significantly improving performance, scalability, and developer experience. Built a custom admin panel using Laravel to streamline content management and reduce data redundancy, enabling better control over the platform. Implemented frontend caching with Next.js, resulting in a 40% faster page load and reduced server load. Contributed to the UI/UX overhaul, delivering a more modern, intuitive, and responsive interface for users across devices.<br><br></p>
      //     <h2 class="text-2xl font-semibold mb-4">Technical Implementation</h2>
      //     <ul class="list-disc pl-5 space-y-2">
      //     <li class="text-gray-700">Migrated the platform from WordPress to Next.js, enhancing performance and scalability.</li>
      //     <li class="text-gray-700">Developed a custom admin panel using Laravel for efficient content management.</li>
      //     <li class="text-gray-700">Implemented frontend caching strategies with Next.js to improve load times.</li>
      //     <li class="text-gray-700">Utilized Tailwind CSS and ShadCN UI for a modern and responsive design.</li>
      //     <li class="text-gray-700">Integrated Framer Motion for smooth animations and transitions.</li>
      //     <li class="text-gray-700">Deployed the application on Alibaba Cloud for reliable hosting and scalability.</li>
      //     <li class="text-gray-700">Employed PostgreSQL for robust and efficient data management.<br>&nbsp;</li>
      //     </ul>
      //     <h2 class="text-2xl font-semibold mb-4">Challenges &amp; Solutions</h2>
      //     <ul class="list-disc pl-5 space-y-2">
      //     <li class="text-gray-700">Ensuring a seamless migration from WordPress to a modern tech stack without data loss.</li>
      //     <li class="text-gray-700">Developing a custom admin panel that meets the specific needs of content creators.</li>
      //     <li class="text-gray-700">Optimizing frontend performance to handle high traffic volumes.</li>
      //     <li class="text-gray-700">Maintaining consistency and coherence across various sections of the platform.</li>
      //     <li class="text-gray-700">Implementing responsive design principles to cater to a diverse user base.</li>
      //     <li class="text-gray-700">Coordinating between frontend and backend teams to ensure smooth integration.</li>
      //     </ul>`,
      //   cover_img: "/images/gbn.png",
      // },
      {
        _id: "2",
        title: "Atal Auto",
        slug: "atal-auto",
        category: "Web Developemnt",
        client_name: "Go Infosys",
        link: "https://www.atalauto.com/",
        desc: `<h3 class="" data-start="155" data-end="179"><strong data-start="159" data-end="179">Project Overview</strong></h3>
            <p class="" data-start="180" data-end="608"><strong data-start="180" data-end="193">Atal Auto</strong> is a dynamic automotive platform in Nepal that allows multiple car dealers and companies to list vehicles for sale. The site also features automobile-related blogs, industry news, detailed vehicle price lists, and a built-in EMI calculator to enhance user decision-making. The platform was built from the ground up to offer a robust, SEO-optimized, and scalable solution tailored for both customers and businesses.</p>
            <p class="" data-start="610" data-end="1045">As the <strong data-start="617" data-end="641">full-stack developer</strong>, I was responsible for implementing the entire system&mdash;from backend architecture to frontend design and performance optimization. I introduced role-based permissions in the admin panel, allowing different levels of access for administrators, companies, and content creators. I also engineered the multi-upload system for vehicle listings and optimized the platform for speed and search engine visibility.<br><br></p>
            <h3 class="" data-start="1052" data-end="1084"><strong data-start="1056" data-end="1084">Technical Implementation</strong></h3>
            <ul data-start="1085" data-end="2027">
            <li class="" data-start="1085" data-end="1170">
            <p class="" data-start="1087" data-end="1170">Developed the entire platform using <strong data-start="1123" data-end="1144">Laravel (backend)</strong>.</p>
            </li>
            <li class="" data-start="1085" data-end="1170">Implemented advance car filter feature.</li>
            <li class="" data-start="1171" data-end="1302">
            <p class="" data-start="1173" data-end="1302">Built a custom <strong data-start="1188" data-end="1220">role-based permission system</strong> to manage access control across different user types (admin, companies, authors).</p>
            </li>
            <li class="" data-start="1303" data-end="1412">
            <p class="" data-start="1305" data-end="1412">Implemented <strong data-start="1317" data-end="1351">multi-car upload functionality</strong>, enabling companies to manage large inventories efficiently.</p>
            </li>
            <li class="" data-start="1413" data-end="1513">
            <p class="" data-start="1415" data-end="1513">Integrated an <strong data-start="1429" data-end="1447">EMI calculator</strong> to provide users with financial clarity during vehicle selection.</p>
            </li>
            <li class="" data-start="1514" data-end="1595">
            <p class="" data-start="1516" data-end="1595">Developed a <strong data-start="1528" data-end="1552">blog and news system</strong> to support dynamic content and SEO growth.</p>
            </li>
            <li class="" data-start="1596" data-end="1708">
            <p class="" data-start="1598" data-end="1708">Applied <strong data-start="1606" data-end="1639">image optimization techniques</strong> (compression, lazy loading) to reduce load time and bandwidth usage.</p>
            </li>
            <li class="" data-start="1709" data-end="1835">
            <p class="" data-start="1711" data-end="1835">Ensured <strong data-start="1719" data-end="1741">SEO best practices</strong>, including dynamic meta tags, schema markup, and clean URLs for higher search engine ranking.</p>
            </li>
            <li class="" data-start="1836" data-end="1935">
            <p class="" data-start="1838" data-end="1935">Utilized <strong data-start="1847" data-end="1874">Laravel Queues and Jobs</strong> for background processing and better performance under load.</p>
            </li>
            <li class="" data-start="1936" data-end="2027">
            <p class="" data-start="1938" data-end="2027">Hosted on a <strong data-start="1950" data-end="1983">scalable cloud infrastructure</strong> to handle traffic spikes and ensure uptime.</p>
            </li>
            </ul>
            <p>&nbsp;</p>
            <h3 class="" data-start="2034" data-end="2064"><strong data-start="2038" data-end="2064">Challenges &amp; Solutions</strong></h3>
            <ul data-start="2065" data-end="2781">
            <li class="" data-start="2065" data-end="2215">
            <p class="" data-start="2067" data-end="2215"><strong data-start="2067" data-end="2106">Managing a multi-vendor environment</strong>: Developed a scalable model to allow multiple companies to register and manage their own inventory securely.</p>
            </li>
            <li class="" data-start="2216" data-end="2364">
            <p class="" data-start="2218" data-end="2364"><strong data-start="2218" data-end="2261">Maintaining high performance under load</strong>: Used image compression, database indexing, and caching strategies to ensure speed and responsiveness.</p>
            </li>
            <li class="" data-start="2365" data-end="2483">
            <p class="" data-start="2367" data-end="2483"><strong data-start="2367" data-end="2393">Ensuring SEO readiness</strong>: Built dynamic metadata systems and optimized all frontend components for SEO compliance.</p>
            </li>
            <li class="" data-start="2484" data-end="2633">
            <p class="" data-start="2486" data-end="2633"><strong data-start="2486" data-end="2521">Streamlining content publishing</strong>: Created a simple and intuitive admin UI for managing blogs, news, and car listings with preview functionality.</p>
            </li>
            <li class="" data-start="2634" data-end="2781">
            <p class="" data-start="2636" data-end="2781"><strong data-start="2636" data-end="2672">Improving cross-device usability</strong>: Designed a fully responsive UI to deliver a seamless experience across desktop, tablet, and mobile devices.</p>
            </li>
            </ul>`,
        cover_img: "/images/atal.png",
      },
      {
        _id: "3",
        title: "Go Nepal",
        slug: "go-nepal",
        category: "Web Developemnt",
        client_name: "Go Nepal Travel Tours and Trek Pvt",
        link: "https://www.gonepal.com.np/",
        desc: `<h3 class="" data-start="165" data-end="191"><strong data-start="169" data-end="189">Project Overview</strong></h3>
              <p class="" data-start="192" data-end="529"><strong data-start="192" data-end="204">Go Nepal</strong> is a feature-rich travel and tour booking platform focused on promoting tourism in Nepal. It allows users to browse and book customizable tour packages, add multiple items to a cart, and read travel blogs and updates. The platform is built for both travelers and admins with a clean interface and robust management features.</p>
              <p class="" data-start="531" data-end="953">As the <strong data-start="538" data-end="562">full-stack developer</strong>, I was responsible for architecting and implementing the full platform. One of the core highlights is the <strong data-start="669" data-end="708">multi-option package booking system</strong>, where users can customize trips based on duration, destination, and category. I also developed a comprehensive <strong data-start="821" data-end="853">role-based permission system</strong> in the admin panel, ensuring proper access control for admins, travel agents, and content managers.<br><br></p>
              <h3 class="" data-start="960" data-end="992"><strong data-start="964" data-end="992">Technical Implementation</strong></h3>
              <ul data-start="993" data-end="1868">
              <li class="" data-start="993" data-end="1064">
              <p class="" data-start="995" data-end="1064">Developed entirely using <strong data-start="1020" data-end="1037">Laravel Blade</strong> for server-side rendering.</p>
              </li>
              <li class="" data-start="1065" data-end="1141">
              <p class="" data-start="1067" data-end="1141">Used <strong data-start="1072" data-end="1085">Bootstrap</strong> and <strong data-start="1090" data-end="1105">vanilla CSS</strong> for responsive and clean UI design.</p>
              </li>
              <li class="" data-start="1142" data-end="1268">
              <p class="" data-start="1144" data-end="1268">Implemented <strong data-start="1156" data-end="1188">multi-option package booking</strong>, allowing users to select duration, category, and destinations before checkout.</p>
              </li>
              <li class="" data-start="1269" data-end="1367">
              <p class="" data-start="1271" data-end="1367">Built a custom <strong data-start="1286" data-end="1301">cart system</strong> tailored to tour bookings rather than standard product purchases.</p>
              </li>
              <li class="" data-start="1368" data-end="1440">
              <p class="" data-start="1370" data-end="1440">Integrated a <strong data-start="1383" data-end="1407">blog and news module</strong> for SEO-friendly travel content.</p>
              </li>
              <li class="" data-start="1441" data-end="1576">
              <p class="" data-start="1443" data-end="1576">Developed a full <strong data-start="1460" data-end="1492">role-based permission system</strong> using Laravel&rsquo;s authorization features to manage admin, editor, and operator roles.</p>
              </li>
              <li class="" data-start="1577" data-end="1678">
              <p class="" data-start="1579" data-end="1678">Applied <strong data-start="1587" data-end="1609">SEO best practices</strong> including dynamic meta tags, structured data, and clean URL routing.</p>
              </li>
              <li class="" data-start="1679" data-end="1774">
              <p class="" data-start="1681" data-end="1774">Optimized <strong data-start="1691" data-end="1706">image sizes</strong> and used <strong data-start="1716" data-end="1732">lazy loading</strong> to reduce load times and bandwidth usage.</p>
              </li>
              <li class="" data-start="1775" data-end="1868">
              <p class="" data-start="1777" data-end="1868">Designed a <strong data-start="1788" data-end="1811">responsive frontend</strong> with mobile-first principles using Bootstrap components.</p>
              </li>
              </ul>
              <p>&nbsp;</p>
              <h3 class="" data-start="1875" data-end="1905"><strong data-start="1879" data-end="1905">Challenges &amp; Solutions</strong></h3>
              <ul data-start="1906" data-end="2646">
              <li class="" data-start="1906" data-end="2055">
              <p class="" data-start="1908" data-end="2055"><strong data-start="1908" data-end="1942">Customizing tour booking logic</strong>: Developed flexible models and controllers to support various combinations of package options and cart handling.</p>
              </li>
              <li class="" data-start="2056" data-end="2200">
              <p class="" data-start="2058" data-end="2200"><strong data-start="2058" data-end="2107">Ensuring performance with Blade and Bootstrap</strong>: Applied caching, minimized asset loading, and image optimization to ensure fast load times.</p>
              </li>
              <li class="" data-start="2201" data-end="2345">
              <p class="" data-start="2203" data-end="2345"><strong data-start="2203" data-end="2239">Managing multiple roles securely</strong>: Used Laravel's policies and middleware to define fine-grained access control throughout the admin panel.</p>
              </li>
              <li class="" data-start="2346" data-end="2496">
              <p class="" data-start="2348" data-end="2496"><strong data-start="2348" data-end="2396">Maintaining SEO with a server-rendered stack</strong>: Carefully structured routes, metadata, and content layout to improve visibility on search engines.</p>
              </li>
              <li class="" data-start="2497" data-end="2646">
              <p class="" data-start="2499" data-end="2646"><strong data-start="2499" data-end="2538">Balancing design with functionality</strong>: Delivered a user-friendly interface that works across devices while handling complex logic under the hood.</p>
              </li>
              </ul>`,
        cover_img: "/images/gonepal.png",
      },
      {
        _id: "4",
        title: "Taleju Adventure",
        slug: "taleju-adventure",
        category: "Web Developemnt",
        client_name: "Taleju Adventure",
        link: "https://talejuadventure.com/",
        desc: `<h3 class="text-xl font-semibold mb-2">Project Overview</h3>
        <p class="mb-4">Taleju Adventure is a comprehensive tours and travel platform offering curated travel experiences across Nepal. The platform enables users to explore, book, and customize a wide range of adventure tours, cultural trips, trekking packages, and sightseeing journeys tailored to different interests and budgets.</p>
        <h3 class="text-xl font-semibold mb-2">Key Features</h3>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li>Dynamic tour listings with detailed itineraries, images, and pricing.</li>
          <li>Online booking system allowing users to reserve and pay for packages securely.</li>
          <li>Customizable travel options including group size, duration, and add-on activities.</li>
          <li>Integrated inquiry and support system for personalized travel planning.</li>
          <li>Mobile-friendly, responsive design for seamless browsing on any device.</li>
          <li>SEO-optimized content and blog module to attract and inform travelers.</li>
        </ul>
        <h3 class="text-xl font-semibold mb-2">Technical Implementation</h3>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li>Developed with Laravel (backend) and Blade templating for robust server-side rendering.</li>
          <li>Admin panel for managing tours, bookings, customer inquiries, and content updates.</li>
          <li>Role-based access control for admins, operators, and content editors.</li>
          <li>Integrated payment gateway for secure online transactions.</li>
          <li>Optimized for fast load times and high performance, even with rich media content.</li>
        </ul>
        <h3 class="text-xl font-semibold mb-2">Challenges &amp; Solutions</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Managing diverse tour options:</strong> Built flexible data models to accommodate various package types, durations, and customizations.</li>
          <li><strong>Ensuring booking reliability:</strong> Implemented real-time availability checks and automated confirmation workflows.</li>
          <li><strong>Delivering a user-friendly experience:</strong> Focused on intuitive navigation, clear calls-to-action, and responsive layouts for all devices.</li>
          <li><strong>Maintaining SEO and discoverability:</strong> Structured content and metadata for optimal search engine ranking and visibility.</li>
        </ul>`,
        cover_img: "/images/taleju-adv.png",
      },
      {
        _id: "5",
        title: "Kailash Trek",
        slug: "kailash-trek",
        category: "Web Developemnt",
        client_name: "Kailash Trek",
        link: "https://kailashtreks.com/",
        desc: `<h3 class="text-xl font-semibold mb-2">Project Overview</h3>
        <p class="mb-4">Kailash Treks is a specialized tours and travel platform focused on providing spiritual and adventure journeys to Mount Kailash and other sacred destinations. The platform serves pilgrims, trekkers, and explorers by offering curated itineraries, cross-border travel arrangements, and seamless booking experiences.</p>
        
        <h3 class="text-xl font-semibold mb-2">Key Features</h3>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li>Exclusive Kailash Mansarovar Yatra packages with visa, permit, and full logistical support.</li>
          <li>Multi-country itineraries covering Nepal, Tibet, and significant pilgrimage sites.</li>
          <li>Online booking system with options for individual or group travel customization.</li>
          <li>Detailed package descriptions including itineraries, maps, gallery, and FAQs.</li>
          <li>Responsive and mobile-friendly design for smooth access across all devices.</li>
          <li>Inquiry and contact system to assist users with personalized planning support.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-2">Technical Implementation</h3>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li>Built using Laravel (backend) and Blade (frontend) with server-side rendering.</li>
          <li>Feature-rich admin panel for managing tour packages, bookings, inquiries, and SEO content.</li>
          <li>Role-based access system for admin, travel consultants, and content editors.</li>
          <li>Integrated payment system for secure tour deposits and full bookings.</li>
          <li>Performance-optimized with image lazy loading and SEO-structured metadata.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-2">Challenges &amp; Solutions</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Managing cross-border tour logistics:</strong> Developed flexible models to handle permits, country-wise itinerary variations, and travel documents.</li>
          <li><strong>Ensuring booking reliability:</strong> Implemented availability checks, booking validation, and auto-confirmation workflows.</li>
          <li><strong>Serving diverse user needs:</strong> Focused on multi-language readiness, cultural clarity, and scalable package structures.</li>
          <li><strong>Maintaining SEO & discoverability:</strong> Integrated blog module and schema markup for better ranking on search engines.</li>
        </ul>`,
        cover_img: "/images/kailash.png",
      },
      {
        _id: "6",
        title: "Max Logistics",
        slug: "max-logistic",
        category: "Web Developemnt",
        client_name: "Maxlogistics",
        link: "https://maxlogisticsnepal.com/",
        desc: `<p class="" data-start="159" data-end="628"><strong data-start="159" data-end="175">Max Logistic</strong> is a logistics and product tracking platform designed to manage shipment workflows efficiently. The core functionality revolves around job creation, tracking, and documentation. The system allows the admin to create detailed job records for each shipment or task, and automatically generates professional <strong data-start="481" data-end="498">PDF documents</strong> containing all related information. This ensures streamlined tracking, better accountability, and organized logistics operations.</p>
        <p class="" data-start="630" data-end="1016">As the <strong data-start="637" data-end="661">full-stack developer</strong>, I led the development of both the backend logic and frontend structure. I focused heavily on building a rich and intuitive <strong data-start="786" data-end="801">admin panel</strong> with powerful features for job management, dynamic forms, relationship handling, and detailed reporting. The project simplifies internal logistics processes and offers a scalable base for future operational growth.</p>
        <p class="" data-start="630" data-end="1016">&nbsp;</p>
        <h3 class="" data-start="1023" data-end="1055"><strong data-start="1027" data-end="1055">Technical Implementation</strong></h3>
        <ul data-start="1056" data-end="1950">
        <li class="" data-start="1056" data-end="1134">
        <p class="" data-start="1058" data-end="1134">Built using <strong data-start="1070" data-end="1081">Laravel</strong> with <strong data-start="1087" data-end="1096">Blade</strong> templating for server-side rendering.</p>
        </li>
        <li class="" data-start="1135" data-end="1261">
        <p class="" data-start="1137" data-end="1261">Developed a comprehensive <strong data-start="1163" data-end="1188">job management system</strong>, allowing admins to create jobs tied to products, billing, and tracking.</p>
        </li>
        <li class="" data-start="1262" data-end="1406">
        <p class="" data-start="1264" data-end="1406">Implemented automatic <strong data-start="1286" data-end="1304">PDF generation</strong> for each job, including details like sender/receiver info, product list, logistics data, and remarks.</p>
        </li>
        <li class="" data-start="1407" data-end="1525">
        <p class="" data-start="1409" data-end="1525">Created dynamic forms and relationship bindings between <strong data-start="1465" data-end="1502">Jobs, Products, Billing, Tracking</strong>, and related entities.</p>
        </li>
        <li class="" data-start="1526" data-end="1636">
        <p class="" data-start="1528" data-end="1636">Designed a clean, admin-focused UI with <strong data-start="1568" data-end="1581">Bootstrap</strong> and <strong data-start="1586" data-end="1600">custom CSS</strong> for ease of use and responsiveness.</p>
        </li>
        <li class="" data-start="1637" data-end="1734">
        <p class="" data-start="1639" data-end="1734">Integrated <strong data-start="1650" data-end="1697">data validations and step-by-step workflows</strong> for accurate job entry and tracking.</p>
        </li>
        <li class="" data-start="1735" data-end="1844">
        <p class="" data-start="1737" data-end="1844">Used <strong data-start="1742" data-end="1762">Laravel Livewire</strong> for enhanced interactivity and real-time form updates within the admin dashboard.</p>
        </li>
        <li class="" data-start="1845" data-end="1950">
        <p class="" data-start="1847" data-end="1950">Ensured <strong data-start="1855" data-end="1900">print-ready, well-formatted PDF templates</strong> for shipment documentation and logistics records.</p>
        </li>
        </ul>
        <p>&nbsp;</p>
        <h3 class="" data-start="1957" data-end="1987"><strong data-start="1961" data-end="1987">Challenges &amp; Solutions</strong></h3>
        <ul data-start="1988" data-end="2652">
        <li class="" data-start="1988" data-end="2128">
        <p class="" data-start="1990" data-end="2128"><strong data-start="1990" data-end="2029">Managing complex data relationships</strong>: Designed relational models and dynamic form components to manage interconnected data efficiently.</p>
        </li>
        <li class="" data-start="2129" data-end="2258">
        <p class="" data-start="2131" data-end="2258"><strong data-start="2131" data-end="2166">Generating accurate, clean PDFs</strong>: Used DomPDF with custom templates to generate printable job documents with real-time data.</p>
        </li>
        <li class="" data-start="2259" data-end="2387">
        <p class="" data-start="2261" data-end="2387"><strong data-start="2261" data-end="2296">Handling data-heavy job entries</strong>: Optimized form workflows with Livewire to improve responsiveness and data entry accuracy.</p>
        </li>
        <li class="" data-start="2388" data-end="2534">
        <p class="" data-start="2390" data-end="2534"><strong data-start="2390" data-end="2423">Creating an admin-friendly UI</strong>: Focused on intuitive UX, form clarity, and layout structure for non-technical users managing logistics tasks.</p>
        </li>
        <li class="" data-start="2535" data-end="2652">
        <p class="" data-start="2537" data-end="2652"><strong data-start="2537" data-end="2567">Maintaining data integrity</strong>: Applied robust validation and constraints across all form steps and related models.</p>
        </li>
        </ul>`,
        cover_img: "/images/max.png",
      },
      {
        _id: "7",
        title: "Bagmati Car Center",
        slug: "bagmati-car-center",
        category: "Web Developemnt",
        client_name: "Bagmati Auto Mobiles",
        link: "https://bagmaticarcenter.com.np/",
        desc: `<h2 class="text-2xl font-semibold mb-4">Project Overview</h2>
          <p class="text-gray-700 leading-relaxed mb-4">A comprehensive tech news and gadget review platform in Nepal, migrated from WordPress to a modern stack for enhanced performance and scalability.</p>
          <p class="text-gray-700 leading-relaxed">Led the migration of the entire application from WordPress to Next.js, significantly improving performance, scalability, and developer experience. Built a custom admin panel using Laravel to streamline content management and reduce data redundancy, enabling better control over the platform. Implemented frontend caching with Next.js, resulting in a 40% faster page load and reduced server load. Contributed to the UI/UX overhaul, delivering a more modern, intuitive, and responsive interface for users across devices.<br><br></p>
          <h2 class="text-2xl font-semibold mb-4">Technical Implementation</h2>
          <ul class="list-disc pl-5 space-y-2">
          <li class="text-gray-700">Migrated the platform from WordPress to Next.js, enhancing performance and scalability.</li>
          <li class="text-gray-700">Developed a custom admin panel using Laravel for efficient content management.</li>
          <li class="text-gray-700">Implemented frontend caching strategies with Next.js to improve load times.</li>
          <li class="text-gray-700">Utilized Tailwind CSS and ShadCN UI for a modern and responsive design.</li>
          <li class="text-gray-700">Integrated Framer Motion for smooth animations and transitions.</li>
          <li class="text-gray-700">Deployed the application on Alibaba Cloud for reliable hosting and scalability.</li>
          <li class="text-gray-700">Employed PostgreSQL for robust and efficient data management.<br>&nbsp;</li>
          </ul>
          <h2 class="text-2xl font-semibold mb-4">Challenges &amp; Solutions</h2>
          <ul class="list-disc pl-5 space-y-2">
          <li class="text-gray-700">Ensuring a seamless migration from WordPress to a modern tech stack without data loss.</li>
          <li class="text-gray-700">Developing a custom admin panel that meets the specific needs of content creators.</li>
          <li class="text-gray-700">Optimizing frontend performance to handle high traffic volumes.</li>
          <li class="text-gray-700">Maintaining consistency and coherence across various sections of the platform.</li>
          <li class="text-gray-700">Implementing responsive design principles to cater to a diverse user base.</li>
          <li class="text-gray-700">Coordinating between frontend and backend teams to ensure smooth integration.</li>
          </ul>`,
        cover_img: "/images/bagmati.png",
      },
      {
        _id: "8",
        title: "Racing Automobiles",
        slug: "racing-automobiles",
        category: "Web Developemnt",
        client_name: "Racing Auto",
        link: "https://www.racingautomobiles.com.np/",
        desc: `<p class="" data-start="138" data-end="520"><strong data-start="138" data-end="160">Racing Auto Mobile</strong> is a platform dedicated to the buying and selling of <strong data-start="214" data-end="238">second-hand vehicles</strong> in Nepal. The website enables users to browse available cars, view detailed specifications, and connect with sellers easily. It also includes an admin panel for managing vehicle listings, content, and user roles, making the platform efficient for both end-users and administrators.</p>
        <p class="" data-start="522" data-end="778">As the <strong data-start="529" data-end="553">full-stack developer</strong>, I built the complete system&mdash;handling everything from backend logic to frontend presentation. The platform is optimized for performance, SEO, and scalability, ensuring that users can discover and navigate listings with ease.</p>
        <p class="" data-start="522" data-end="778">&nbsp;</p>
        <h3 class="" data-start="785" data-end="817"><strong data-start="789" data-end="817">Technical Implementation</strong></h3>
        <ul data-start="818" data-end="1615">
        <li class="" data-start="818" data-end="891">
        <p class="" data-start="820" data-end="891">Developed using <strong data-start="836" data-end="847">Laravel</strong> with <strong data-start="853" data-end="873">Blade templating</strong> for the frontend.</p>
        </li>
        <li class="" data-start="892" data-end="973">
        <p class="" data-start="894" data-end="973">Used <strong data-start="899" data-end="912">Bootstrap</strong> and <strong data-start="917" data-end="932">vanilla CSS</strong> for a responsive and mobile-friendly UI.</p>
        </li>
        <li class="" data-start="974" data-end="1087">
        <p class="" data-start="976" data-end="1087">Created a <strong data-start="986" data-end="1012">vehicle listing system</strong> with features like price, mileage, condition, images, and contact details.</p>
        </li>
        <li class="" data-start="1088" data-end="1199">
        <p class="" data-start="1090" data-end="1199">Built a custom <strong data-start="1105" data-end="1120">admin panel</strong> with role-based access control for managing listings, users, and site content.</p>
        </li>
        <li class="" data-start="1200" data-end="1275">
        <p class="" data-start="1202" data-end="1275">Integrated <strong data-start="1213" data-end="1246">image upload and optimization</strong> to ensure faster page loads.</p>
        </li>
        <li class="" data-start="1276" data-end="1403">
        <p class="" data-start="1278" data-end="1403">Implemented <strong data-start="1290" data-end="1312">SEO best practices</strong>, including dynamic metadata and structured URLs for improved visibility on search engines.</p>
        </li>
        <li class="" data-start="1404" data-end="1532">
        <p class="" data-start="1406" data-end="1532">Added <strong data-start="1412" data-end="1447">search and filter functionality</strong> to help users find vehicles based on criteria such as brand, model, price, and year.</p>
        </li>
        <li class="" data-start="1533" data-end="1615">
        <p class="" data-start="1535" data-end="1615">Deployed on a stable hosting platform with caching and performance enhancements.</p>
        </li>
        </ul>
        <hr class="" data-start="1617" data-end="1620">
        <h3 class="" data-start="1622" data-end="1652"><strong data-start="1626" data-end="1652">Challenges &amp; Solutions</strong></h3>
        <ul data-start="1653" data-end="2267">
        <li class="" data-start="1653" data-end="1788">
        <p class="" data-start="1655" data-end="1788"><strong data-start="1655" data-end="1705">Creating a clean and intuitive vehicle catalog</strong>: Focused on UX design and layout structure to present vehicle information clearly.</p>
        </li>
        <li class="" data-start="1789" data-end="1903">
        <p class="" data-start="1791" data-end="1903"><strong data-start="1791" data-end="1826">Handling role-based permissions</strong>: Built a secure permission system to manage admin, dealer, and viewer roles.</p>
        </li>
        <li class="" data-start="1904" data-end="2026">
        <p class="" data-start="1906" data-end="2026"><strong data-start="1906" data-end="1938">Optimizing image-heavy pages</strong>: Applied compression, lazy loading, and efficient storage methods for faster rendering.</p>
        </li>
        <li class="" data-start="2027" data-end="2149">
        <p class="" data-start="2029" data-end="2149"><strong data-start="2029" data-end="2058">Ensuring mobile usability</strong>: Used Bootstrap grid and responsive design techniques for smooth cross-device performance.</p>
        </li>
        <li class="" data-start="2150" data-end="2267">
        <p class="" data-start="2152" data-end="2267"><strong data-start="2152" data-end="2179">Driving organic traffic</strong>: Implemented SEO strategies to boost search engine rankings and attract relevant users.</p>
        </li>
        </ul>`,
        cover_img: "/images/racing.png",
      },
      {
        _id: "9",
        title: "Western Motors",
        slug: "western-motors",
        category: "Web Developemnt",
        client_name: "Western Motors",
        link: "https://westernmotors.com.np/",
        desc: `<h3 class="" data-start="130" data-end="156"><strong data-start="134" data-end="154">Project Overview</strong></h3>
              <p class="" data-start="157" data-end="602"><strong data-start="157" data-end="175">Western Motors</strong> is a modern web platform for buying and selling <strong data-start="224" data-end="244">second-hand cars</strong> in Nepal. Designed for performance, usability, and flexibility, the platform allows users to browse verified vehicle listings, view detailed specifications, and connect with sellers. The system includes a powerful admin panel for managing listings, users, and content, and is built using a <strong data-start="535" data-end="554">Laravel + React</strong> stack for a seamless user and admin experience.</p>
              <p class="" data-start="604" data-end="887">As the <strong data-start="611" data-end="635">full-stack developer</strong>, I was responsible for the complete system&mdash;from API development to frontend integration. I implemented robust <strong data-start="746" data-end="775">role-based access control</strong>, vehicle listing workflows, and performance optimizations, ensuring the platform is scalable and user-friendly.</p>
              <hr class="" data-start="889" data-end="892">
              <h3 class="" data-start="894" data-end="926"><strong data-start="898" data-end="926">Technical Implementation</strong></h3>
              <ul data-start="927" data-end="1765">
              <li class="" data-start="927" data-end="1019">
              <p class="" data-start="929" data-end="1019"><strong data-start="929" data-end="940">Backend</strong> built with <strong data-start="952" data-end="963">Laravel</strong> and <strong data-start="968" data-end="984">RESTful APIs</strong> for modular, scalable development.</p>
              </li>
              <li class="" data-start="1020" data-end="1120">
              <p class="" data-start="1022" data-end="1120"><strong data-start="1022" data-end="1034">Frontend</strong> developed using <strong data-start="1051" data-end="1060">React</strong>, offering a dynamic, fast, and interactive user experience.</p>
              </li>
              <li class="" data-start="1121" data-end="1233">
              <p class="" data-start="1123" data-end="1233">Created a flexible <strong data-start="1142" data-end="1168">vehicle listing system</strong> with filters for brand, model, year, price, condition, and more.</p>
              </li>
              <li class="" data-start="1234" data-end="1346">
              <p class="" data-start="1236" data-end="1346">Developed a custom <strong data-start="1255" data-end="1270">admin panel</strong> for managing vehicles, users, and content, with <strong data-start="1319" data-end="1345">role-based permissions</strong>.</p>
              </li>
              <li class="" data-start="1347" data-end="1446">
              <p class="" data-start="1349" data-end="1446">Integrated <strong data-start="1360" data-end="1399">image optimization and lazy loading</strong> to improve performance on listing-heavy pages.</p>
              </li>
              <li class="" data-start="1447" data-end="1555">
              <p class="" data-start="1449" data-end="1555">Applied <strong data-start="1457" data-end="1475">SEO strategies</strong> for the public-facing side, including meta tags, clean URLs, and schema markup.</p>
              </li>
              <li class="" data-start="1556" data-end="1659">
              <p class="" data-start="1558" data-end="1659">Used <strong data-start="1563" data-end="1579">React Router</strong> for smooth client-side navigation and <strong data-start="1618" data-end="1627">Axios</strong> for seamless API communication.</p>
              </li>
              <li class="" data-start="1660" data-end="1765">
              <p class="" data-start="1662" data-end="1765">Ensured <strong data-start="1670" data-end="1691">responsive design</strong> for both the frontend and admin panel to support mobile and tablet users.</p>
              </li>
              </ul>
              <hr class="" data-start="1767" data-end="1770">
              <h3 class="" data-start="1772" data-end="1802"><strong data-start="1776" data-end="1802">Challenges &amp; Solutions</strong></h3>
              <ul data-start="1803" data-end="2499">
              <li class="" data-start="1803" data-end="1959">
              <p class="" data-start="1805" data-end="1959"><strong data-start="1805" data-end="1848">Integrating Laravel with React smoothly</strong>: Established a clean API structure and handled authentication via tokens to keep both ends connected securely.</p>
              </li>
              <li class="" data-start="1960" data-end="2088">
              <p class="" data-start="1962" data-end="2088"><strong data-start="1962" data-end="2010">Managing performance for listing-heavy pages</strong>: Implemented image compression, caching, and pagination to reduce load times.</p>
              </li>
              <li class="" data-start="2089" data-end="2222">
              <p class="" data-start="2091" data-end="2222"><strong data-start="2091" data-end="2130">Building a secure role-based system</strong>: Used Laravel's authorization features to manage dealer, admin, and guest access precisely.</p>
              </li>
              <li class="" data-start="2223" data-end="2367">
              <p class="" data-start="2225" data-end="2367"><strong data-start="2225" data-end="2261">Ensuring SEO despite using React</strong>: Handled metadata and routing carefully, and optimized server responses to remain search engine friendly.</p>
              </li>
              <li class="" data-start="2368" data-end="2499">
              <p class="" data-start="2370" data-end="2499"><strong data-start="2370" data-end="2407">Providing a clean user experience</strong>: Focused on frontend usability and UX best practices for both browsing and admin workflows.</p>
              </li>
              </ul>`,
        cover_img: "/images/western.png",
      },
      {
        _id: "10",
        title: "NABA",
        slug: "naba",
        category: "Web Developemnt",
        client_name: "Nepal Automotive Byawasayi Association",
        link: "https://nabassociation.org.np/",
        desc: `<h3 class="" data-start="140" data-end="166"><strong data-start="144" data-end="164">Project Overview</strong></h3>
            <p class="" data-start="167" data-end="546"><strong data-start="167" data-end="216">NABA (Nepal Automotive Byawasayi Association)</strong> is the official organization representing <strong data-start="259" data-end="289">Nepal&rsquo;s automobile dealers</strong>. The platform serves as an information hub for members, featuring updates, notices, dealer listings, events, and automotive news. It helps unify Nepal's vehicle dealers under one digital roof, enhancing communication and representation across the industry.</p>
            <p class="" data-start="548" data-end="854">As a <strong data-start="553" data-end="577">full-stack developer</strong>, I developed and implemented core features of the platform including the <strong data-start="651" data-end="679">dealer management system</strong>, <strong data-start="681" data-end="701">news/blog module</strong>, and the <strong data-start="711" data-end="726">admin panel</strong> with role-based permissions. The goal was to provide a clean and accessible interface for both public users and NABA officials.</p>
            <hr class="" data-start="856" data-end="859">
            <h3 class="" data-start="861" data-end="893"><strong data-start="865" data-end="893">Technical Implementation</strong></h3>
            <ul data-start="894" data-end="1552">
            <li class="" data-start="894" data-end="963">
            <p class="" data-start="896" data-end="963">Built using <strong data-start="908" data-end="919">Laravel</strong> with <strong data-start="925" data-end="945">Blade templating</strong> for the frontend.</p>
            </li>
            <li class="" data-start="964" data-end="1094">
            <p class="" data-start="966" data-end="1094">Developed a <strong data-start="978" data-end="1020">dealer registration and listing system</strong>, allowing NABA to maintain an updated directory of automotive businesses.</p>
            </li>
            <li class="" data-start="1095" data-end="1214">
            <p class="" data-start="1097" data-end="1214">Implemented a <strong data-start="1111" data-end="1143">news and notice board module</strong> for publishing official announcements, events, and automotive updates.</p>
            </li>
            <li class="" data-start="1215" data-end="1293">
            <p class="" data-start="1217" data-end="1293">Built a <strong data-start="1225" data-end="1251">role-based admin panel</strong> for managing users, dealers, and content.</p>
            </li>
            <li class="" data-start="1294" data-end="1371">
            <p class="" data-start="1296" data-end="1371">Designed a <strong data-start="1307" data-end="1335">mobile-responsive layout</strong> using <strong data-start="1342" data-end="1355">Bootstrap</strong> and custom CSS.</p>
            </li>
            <li class="" data-start="1372" data-end="1467">
            <p class="" data-start="1374" data-end="1467">Ensured <strong data-start="1382" data-end="1404">SEO best practices</strong> with structured URLs, meta tags, and proper content hierarchy.</p>
            </li>
            <li class="" data-start="1468" data-end="1552">
            <p class="" data-start="1470" data-end="1552">Added dynamic content management tools to simplify content publishing and updates.</p>
            </li>
            </ul>
            <hr class="" data-start="1554" data-end="1557">
            <h3 class="" data-start="1559" data-end="1589"><strong data-start="1563" data-end="1589">Challenges &amp; Solutions</strong></h3>
            <ul data-start="1590" data-end="2026">
            <li class="" data-start="1590" data-end="1738">
            <p class="" data-start="1592" data-end="1738"><strong data-start="1592" data-end="1644">Representing a wide range of dealers effectively</strong>: Created a flexible dealer profile system that accommodates varying business sizes and types.</p>
            </li>
            <li class="" data-start="1739" data-end="1875">
            <p class="" data-start="1741" data-end="1875"><strong data-start="1741" data-end="1784">Managing administrative access securely</strong>: Implemented a robust role and permission system using Laravel&rsquo;s gate and policy features.</p>
            </li>
            <li class="" data-start="1876" data-end="2026">
            <p class="" data-start="1878" data-end="2026"><strong data-start="1878" data-end="1928">Making public content accessible and organized</strong>: Designed clear navigation and content structure for easy browsing of news, dealers, and updates.</p>
            </li>
            </ul>`,
        cover_img: "/images/naba.png",
      },
      {
        _id: "11",
        title: "Bishwa Guru",
        slug: "bishwa-guru",
        category: "Web Developemnt",
        client_name: "विश्वगुरु अनलाइन ज्योतिषीय वेब सफ्टवेयर",
        link: "https://www.app.bishwaguru.com/",
        desc: `<h3 class="" data-start="129" data-end="155"><strong data-start="133" data-end="153">Project Overview</strong></h3>
              <p class="" data-start="156" data-end="579"><strong data-start="156" data-end="170">Bishwaguru</strong> is a comprehensive <strong data-start="190" data-end="212">astrology platform</strong> designed to generate detailed astrological reports such as <strong data-start="272" data-end="297">Kundali (natal chart)</strong>, <strong data-start="299" data-end="316">Janam Patrika</strong>, <strong data-start="318" data-end="359">Bibaha Milan (marriage compatibility)</strong>, and <strong data-start="365" data-end="380">Lo-Chu grid</strong>, all based on user-provided data like name, date of birth, time, place, and mobile number. The app aims to digitize traditional Vedic astrology and make personalized predictions accessible to users.</p>
              <p class="" data-start="581" data-end="806">As a <strong data-start="586" data-end="610">full-stack developer</strong>, I contributed to implementing the core astrology logic and user flows, ensuring accurate generation of astrological charts and reports through dynamic data handling and algorithmic calculations.</p>
              <hr class="" data-start="808" data-end="811">
              <h3 class="" data-start="813" data-end="845"><strong data-start="817" data-end="845">Technical Implementation</strong></h3>
              <ul data-start="846" data-end="1566">
              <li class="" data-start="846" data-end="958">
              <p class="" data-start="848" data-end="958">Built using <strong data-start="860" data-end="871">Laravel</strong> for the backend with <strong data-start="893" data-end="902">Blade</strong> templating and custom logic for astrology calculations.</p>
              </li>
              <li class="" data-start="959" data-end="1220">
              <p class="" data-start="961" data-end="991">Developed modules to generate:</p>
              <ul data-start="994" data-end="1220">
              <li class="" data-start="994" data-end="1063">
              <p class="" data-start="996" data-end="1063"><strong data-start="996" data-end="1023">Kundali / Janam Patrika</strong> based on name, DOB, time, and location.</p>
              </li>
              <li class="" data-start="1066" data-end="1144">
              <p class="" data-start="1068" data-end="1144"><strong data-start="1068" data-end="1084">Bibaha Milan</strong> compatibility reports using traditional astrological rules.</p>
              </li>
              <li class="" data-start="1147" data-end="1220">
              <p class="" data-start="1149" data-end="1220"><strong data-start="1149" data-end="1164">Lo-Chu Grid</strong> numerology-based analysis using name and birth details.</p>
              </li>
              </ul>
              </li>
              <li class="" data-start="1221" data-end="1297">
              <p class="" data-start="1223" data-end="1297">Implemented user input forms with validation for accurate data collection.</p>
              </li>
              <li class="" data-start="1298" data-end="1389">
              <p class="" data-start="1300" data-end="1389">Used pre-calculated planetary data and astrology formulas to ensure traditional accuracy.</p>
              </li>
              <li class="" data-start="1390" data-end="1463">
              <p class="" data-start="1392" data-end="1463">Integrated <strong data-start="1403" data-end="1421">PDF generation</strong> to allow users to download their reports.</p>
              </li>
              <li class="" data-start="1464" data-end="1566">
              <p class="" data-start="1466" data-end="1566">Built a clean and intuitive UI for input and result display, using <strong data-start="1533" data-end="1546">Bootstrap</strong> for responsiveness.</p>
              </li>
              </ul>
              <hr class="" data-start="1568" data-end="1571">
              <h3 class="" data-start="1573" data-end="1603"><strong data-start="1577" data-end="1603">Challenges &amp; Solutions</strong></h3>
              <ul data-start="1604" data-end="2135">
              <li class="" data-start="1604" data-end="1743">
              <p class="" data-start="1606" data-end="1743"><strong data-start="1606" data-end="1652">Handling complex astrological calculations</strong>: Implemented precise algorithms to calculate planetary positions and compatibility scores.</p>
              </li>
              <li class="" data-start="1744" data-end="1875">
              <p class="" data-start="1746" data-end="1875"><strong data-start="1746" data-end="1797">Ensuring high accuracy with traditional systems</strong>: Cross-referenced outputs with verified astrology references for consistency.</p>
              </li>
              <li class="" data-start="1876" data-end="2015">
              <p class="" data-start="1878" data-end="2015"><strong data-start="1878" data-end="1928">Designing user-friendly forms for complex data</strong>: Simplified the UX for inputting birth data while maintaining validation and accuracy.</p>
              </li>
              <li class="" data-start="2016" data-end="2135">
              <p class="" data-start="2018" data-end="2135"><strong data-start="2018" data-end="2045">Managing localized data</strong>: Supported Nepali date systems and time zones where needed for traditional compatibility.</p>
              </li>
              </ul>`,
        cover_img: "/images/bishwa.png",
      },
      {
        _id: "13",
        title: "Variant Consulting Group",
        slug: "variant-consulting-group",
        category: "Web Developemnt",
        client_name: "Variant Consulting Group Pvt. Ltd",
        link: "https://variantconsult.com.np/",
        desc: `<h3><strong>Project Overview</strong></h3> <p><strong>Variant Consulting Group</strong> is a professional consulting platform based in Nepal, specializing in taxation, accounting, and business advisory services. The platform allows users to book consultations, explore tax-related blogs, view offered services, and access the portfolio of the consulting group. It is designed to cater to both clients and admin staff with a clean interface and efficient management features.</p> <p>As the <strong>full-stack developer</strong>, I was responsible for building the complete platform. Key highlights include a <strong>consultation booking system</strong> that allows clients to select service type, preferred time slots, and consultant, as well as a <strong>service and portfolio management system</strong> for admins to efficiently manage offerings and showcase client success stories.</p> <h3><strong>Technical Implementation</strong></h3> <ul> <li>Developed the platform using <strong>Laravel Blade</strong> for server-side rendering and maintainable backend logic.</li> <li>Implemented a responsive and user-friendly UI using <strong>Bootstrap</strong> and <strong>vanilla CSS</strong>.</li> <li>Built a <strong>consultation booking system</strong> with multiple options, allowing users to select service, date, and consultant availability.</li> <li>Created a dynamic <strong>portfolio and services module</strong> to display projects, client feedback, and offered services efficiently.</li> <li>Integrated a <strong>blog module</strong> for publishing tax-related content, improving SEO visibility and client engagement.</li> <li>Developed a <strong>role-based permission system</strong> for admins, accountants, and content managers using Laravel authorization features.</li> <li>Applied <strong>SEO best practices</strong> with structured data, meta tags, and clean URLs to improve search engine ranking.</li> <li>Optimized <strong>images and assets</strong> with lazy loading to enhance performance and reduce bandwidth usage.</li> <li>Designed a <strong>mobile-first responsive frontend</strong> using Bootstrap, ensuring smooth access across devices.</li> </ul> <h3><strong>Challenges &amp; Solutions</strong></h3> <ul> <li><strong>Flexible consultation booking logic</strong>: Developed scalable models and controllers to handle multiple booking options, time slots, and consultant availability efficiently.</li> <li><strong>Maintaining performance with Blade and Bootstrap</strong>: Used caching, asset minimization, and image optimization to ensure fast load times.</li> <li><strong>Managing roles securely</strong>: Applied Laravel policies and middleware to enforce fine-grained access control for admins, accountants, and content managers.</li> <li><strong>Balancing SEO and server-side rendering</strong>: Structured content, routes, and metadata to maximize search engine visibility.</li> <li><strong>Combining design with functionality</strong>: Delivered a professional and easy-to-use interface that handles complex booking and content management seamlessly.</li> </ul>`,
        cover_img: "/images/variant.png",
      },
     
    ]);
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  },[]);

  useEffect(() => {
    if (allportfolio && slug) {
      const found = allportfolio.find((item) => item.slug === slug);
      setPortfolio(found || null);
    }
  }, [allportfolio, slug]);

  if (!portfolio) return <div>Loading or not found...</div>;

  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title dark-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">{portfolio?.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="current">{portfolio?.title}</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* End Page Title */}

      {/* Portfolio Details Section */}
      <section
        id="portfolio-details"
        className="portfolio-details section py-5"
      >
        <div className="container" data-aos="fade-up">
          {portfolio && (
            <div className="row">
              {/* Featured Image */}
              <div
                className="col-12 mb-4"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div
                  className="portfolio-featured-image position-relative overflow-hidden rounded shadow-sm"
                  style={{ maxHeight: "500px" }}
                >
                  {portfolio.cover_img ? (
                    <img
                      src={portfolio?.cover_img}
                      alt={portfolio?.title}
                      className="img-fluid w-100 object-fit-contain"
                      style={{ maxHeight: "500px", objectFit: "cover" }}
                    />
                  ) : (
                    <div
                      className="bg-light d-flex justify-content-center align-items-center"
                      style={{ height: "400px" }}
                    >
                      <p className="text-muted">No image available</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Information and Description */}
              <div
                className="col-md-4 mb-4 mb-md-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">Project Information</h4>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Title</strong>
                        <span>{portfolio?.title}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Category</strong>
                        <span>{portfolio?.category}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Client</strong>
                        <span>{portfolio?.client_name}</span>
                      </li>
                      <li className="list-group-item">
                        <strong>Project URL</strong>
                        <div className="mt-2">
                          <a
                            href={portfolio?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline-primary w-100"
                          >
                            Visit Project
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-8" data-aos="fade-up" data-aos-delay="300">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">Project Description</h4>
                  </div>
                  <div className="card-body">
                    <div dangerouslySetInnerHTML={{ __html: portfolio?.desc }} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      {/* End Portfolio Details Section */}
    </main>
  );
}
