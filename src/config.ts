import type { SiteConfig } from './types'

/* =====================================================================
   SITE CONTENT — single source of truth.
   Replace every [PLACEHOLDER] with verified company information.
   Do not publish with placeholder contact details, invented licence
   numbers, unverified certifications or fabricated claims.
   ===================================================================== */

export const site: SiteConfig = {
  company: {
    name: 'AL AMARDI',
    fullName: 'Rukn Al Amardi Technical Service',
    descriptor: 'MEP Contracting & Facilities Maintenance',
    contactPerson: 'Noushad K — Sales Engineer',
    phoneDisplay: '+971 50 705 3498',
    phoneHref: '+971507053498',
    email: 'alamarditech@gmail.com',
    address: 'Office No L13, Burjuman Centre, Bur Dubai, Dubai, UAE',
    serviceArea: 'Dubai, UAE',
    workingHours: '[CONFIRMED WORKING HOURS]',
  },

  // WhatsApp click-to-chat number — international format, no '+' or spaces.
  whatsappNumber: '971507053498',
  whatsappMessage:
    'Hello, I would like to enquire about your MEP and property maintenance services in Dubai. My required service is: {service}. Please contact me with further details.',

  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ],

  serviceStrip: [
    'MEP Maintenance',
    'HVAC',
    'Electrical',
    'Plumbing',
    'ELV & CCTV',
    'Civil & Finishing Works',
  ],

  services: [
    {
      index: '01',
      icon: 'Snowflake',
      title: 'Mechanical Maintenance & HVAC',
      summary:
        'Chilled water systems, DX and split AC, ventilation, pumps and mechanical equipment — preventive and corrective care.',
      groups: [
        {
          heading: 'Air Conditioning and HVAC',
          items: [
            'Chilled water systems',
            'Chillers, chilled water pumps, valves and associated equipment',
            'FCU and AHU maintenance, inspection and flushing',
            'DX air conditioning systems and package units',
            'Split, ducted split and other applicable AC systems',
            'Compressor and condenser maintenance',
            'Refrigerant leak detection and refrigerant servicing',
            'Ventilation and indoor air quality systems',
            'Exhaust fans and fresh air systems',
            'Air duct cleaning and filter replacement',
            'Variable frequency drives (VFDs)',
            'Thermostats, temperature sensors and actuators',
            'Building Management System (BMS) interfaces and HVAC controls',
            'Preventive AC maintenance and corrective repairs',
            'AC installation, replacement and commissioning',
          ],
        },
        {
          heading: 'Mechanical Pumps and Equipment',
          items: [
            'Booster pumps and transfer pumps',
            'Irrigation pumps and drainage pumps',
            'Mechanical seals, impellers and bearing maintenance',
            'Pump alignment and vibration checks',
            'Pressure vessels and associated controls',
            'Float switches, timers and pump controllers',
            'Mechanical equipment inspection and troubleshooting',
          ],
        },
      ],
    },
    {
      index: '02',
      icon: 'Zap',
      title: 'Electrical Maintenance',
      summary:
        'Power distribution, protection devices, lighting and small power — inspection, testing and repair by qualified personnel.',
      groups: [
        {
          heading: 'Power Distribution and Protection',
          items: [
            'Main Distribution Boards (MDB)',
            'Sub-Main Distribution Boards (SMDB)',
            'Final Distribution Boards (DB)',
            'Electrical panel inspection and maintenance',
            'Busbar inspection and connection checks',
            'Circuit breakers, including MCB and MCCB',
            'ELCB/RCD testing and troubleshooting',
            'Electrical fault detection and repairs',
            'Electrical load and power distribution checks',
            'Thermal imaging and thermographic inspections, where available',
            'Earthing and grounding systems',
            'Lightning protection inspection and testing',
            'Electrical continuity and ground resistance testing',
          ],
        },
        {
          heading: 'Lighting and Small Power',
          items: [
            'Interior and exterior lighting',
            'LED lights, drivers and lighting fixtures',
            'Emergency lighting and battery backup units',
            'Switches, sockets and power outlets',
            'Electrical isolators and industrial sockets',
            'Lighting control systems',
            'Electrical wiring, cabling and containment',
            'Minor electrical installations and replacements',
            'Electrical preventive maintenance',
          ],
        },
        {
          heading: 'General Electrical Services',
          items: [
            'Electrical troubleshooting and fault finding',
            'Power supply and circuit repairs',
            'Distribution board upgrades and replacements',
            'Electrical equipment installation',
            'Electrical inspection and maintenance documentation',
          ],
        },
      ],
      note: 'All electrical work is performed by appropriately qualified personnel and complies with applicable regulations and approved procedures.',
    },
    {
      index: '03',
      icon: 'Droplets',
      title: 'Plumbing, Water Supply & Drainage',
      summary:
        'Domestic water supply, hot water systems, drainage and sanitary works — leak detection, repairs and replacements.',
      groups: [
        {
          heading: 'Domestic Water Supply',
          items: [
            'Water supply pipework and fittings',
            'PPR, PEX, GI and other suitable piping systems',
            'Water leakage detection and pipe repairs',
            'Pipe replacement and plumbing modifications',
            'Pressure regulators and Pressure Reducing Valves (PRVs)',
            'Float valves and water level controls',
            'Water heaters and hot water systems',
            'Water tanks and associated accessories',
            'Water filtration units',
            'Water pumps and pressure systems',
            'Bathroom and kitchen plumbing',
          ],
        },
        {
          heading: 'Drainage and Sanitary Systems',
          items: [
            'Wastewater and drainage pipes',
            'Vent pipes and drainage connections',
            'Drain blockage removal and unblocking',
            'Drain flushing and flow testing',
            'Floor traps and cleanout points',
            'Toilets, washbasins, mixers and taps',
            'Flush valves and sanitary fixtures',
            'Bathroom and kitchen plumbing repairs',
            'Leak repairs and sanitary replacements',
          ],
        },
      ],
    },
    {
      index: '04',
      icon: 'Flame',
      title: 'Fire Protection & Life Safety Systems',
      summary:
        'Fire pumps, sprinklers, hose reels and fire alarm systems — inspection, testing and maintenance, subject to approvals.',
      groups: [
        {
          heading: 'Fire Fighting and Fire Alarm',
          items: [
            'Fire pump maintenance, subject to applicable approvals',
            'Duty, standby, electric, diesel and jockey fire pumps',
            'Fire sprinkler system inspection and maintenance',
            'Hose reels and landing valves',
            'Firefighting pipework and valves',
            'Fire pump controllers and related equipment',
            'Fire system pressure checks and testing',
            'Fire alarm control panels',
            'Smoke detectors, heat detectors and manual call points',
            'Fire alarm sounders and notification devices',
            'Fire alarm loop testing and troubleshooting',
            'Emergency and life-safety system maintenance',
          ],
        },
      ],
      note: 'Regulated fire and life-safety services are offered only where the required approvals, qualified personnel and authorisations are in place.',
    },
    {
      index: '05',
      icon: 'Cctv',
      title: 'ELV, Security & Smart Building Systems',
      summary:
        'CCTV, access control, intercom, structured cabling, networking and building automation systems.',
      groups: [
        {
          heading: 'CCTV and Security',
          items: [
            'CCTV camera installation and maintenance',
            'IP cameras and analogue camera systems',
            'Network Video Recorders (NVR) and Digital Video Recorders (DVR)',
            'CCTV cabling and connectivity troubleshooting',
            'Camera replacement and repositioning',
            'Security system fault finding',
          ],
        },
        {
          heading: 'Access Control and Intercom',
          items: [
            'Video intercom systems',
            'Audio intercom systems',
            'Door access control systems',
            'Card readers and biometric readers, where supported',
            'Electronic door locks and door controllers',
            'Door interlocks and gate barriers',
            'Visitor entry systems',
          ],
        },
        {
          heading: 'Networking and Structured Cabling',
          items: [
            'LAN and Ethernet cabling',
            'Structured cabling installation',
            'Network racks and patch panels',
            'Data outlets and network points',
            'Network cable termination and testing',
            'Wi-Fi access point installation',
            'Network cabinet organisation',
            'Fibre optic cabling, where offered',
            'Basic network connectivity troubleshooting',
          ],
        },
        {
          heading: 'Automation and Building Controls',
          items: [
            'Building Management Systems (BMS)',
            'KNX and smart building controls',
            'Sensors, actuators, relays and I/O modules',
            'Automation control panels and interfaces',
            'Smart lighting and control systems',
            'Integration and troubleshooting of supported systems',
          ],
        },
      ],
    },
    {
      index: '06',
      icon: 'HardHat',
      title: 'Civil Works & General Building Maintenance',
      summary:
        'Minor civil repairs, plastering, masonry, crack repairs and surface preparation for building finishes.',
      groups: [
        {
          heading: 'Civil and Structural-Related Maintenance',
          items: [
            'Minor civil repairs',
            'Concrete surface repairs',
            'Plastering and rendering',
            'Masonry and blockwork repairs',
            'Crack inspection and non-structural crack repairs',
            'Wall repairs and surface preparation',
            'Screeding and levelling',
            'Tile removal and replacement',
            'Minor building alterations',
            'Repair of damaged building finishes',
          ],
        },
      ],
      note: 'Structural modifications, major structural repairs and specialist works are undertaken only with the required engineering assessment and approvals.',
    },
    {
      index: '07',
      icon: 'PaintRoller',
      title: 'Painting & Decorative Finishes',
      summary:
        'Interior and exterior painting, surface preparation, protective coatings and repainting after repair works.',
      groups: [
        {
          heading: 'Painting Works',
          items: [
            'Interior painting',
            'Exterior painting',
            'Wall and ceiling repainting',
            'Surface preparation and sanding',
            'Putty application and surface levelling',
            'Primer and paint application',
            'Touch-up painting',
            'Decorative finishes',
            'Protective coatings, where applicable',
            'Painting after repair and renovation work',
            'Commercial and residential repainting',
          ],
        },
      ],
    },
    {
      index: '08',
      icon: 'LayoutGrid',
      title: 'Flooring & Tiling Works',
      summary:
        'Ceramic, porcelain, marble, vinyl and laminate flooring — installation, repair and refurbishment.',
      groups: [
        {
          heading: 'Flooring and Tiling',
          items: [
            'Ceramic and porcelain tile installation',
            'Floor tile replacement and repairs',
            'Wall tiling and bathroom tiling',
            'Marble and granite flooring, where offered',
            'Vinyl and LVT flooring',
            'Laminate and other suitable flooring systems',
            'Floor screeding and levelling',
            'Grout replacement and regrouting',
            'Skirting installation and repairs',
            'Floor surface preparation',
            'Damaged flooring replacement',
            'Commercial and residential flooring refurbishment',
          ],
        },
      ],
    },
    {
      index: '09',
      icon: 'Umbrella',
      title: 'Roofing & Waterproofing',
      summary:
        'Roof inspection, leak detection, membrane repairs, terrace waterproofing and drainage maintenance.',
      groups: [
        {
          heading: 'Roofing and Waterproofing Works',
          items: [
            'Roof inspection and maintenance',
            'Roof leakage detection and repairs',
            'Waterproofing membrane repairs',
            'Terrace and balcony waterproofing',
            'Roof slab waterproofing, where suitable',
            'Sealant replacement and joint sealing',
            'Flashing and roof drainage maintenance',
            'Rainwater outlet and gutter maintenance',
            'Protective coatings for applicable roof surfaces',
            'Waterproofing repairs in wet areas',
            'Roof surface and associated drainage repairs',
          ],
        },
      ],
    },
    {
      index: '10',
      icon: 'DoorOpen',
      title: 'Doors, Ceilings, Partitions & Carpentry',
      summary:
        'Doors and hardware, gypsum and suspended ceilings, drywall partitions, joinery and minor carpentry.',
      groups: [
        {
          heading: 'Carpentry and Ceiling Works',
          items: [
            'Door installation and repairs',
            'Door hinges, handles, locks and hardware',
            'Cabinet and joinery repairs',
            'Gypsum board ceiling installation and repairs',
            'Suspended ceiling maintenance',
            'Ceiling tile replacement',
            'Drywall and partition installation',
            'Partition repairs and modifications',
            'Access panel installation',
            'Minor carpentry and finishing works',
            'Skirting, trim and fixture replacement',
          ],
        },
      ],
    },
    {
      index: '11',
      icon: 'Hammer',
      title: 'Renovation, Fit-Out & Refurbishment',
      summary:
        'Residential renovation, office refurbishment, retail fit-outs and MEP modifications for fit-out projects.',
      groups: [
        {
          heading: 'Renovation and Fit-Out Works',
          items: [
            'Residential property renovation',
            'Commercial office refurbishment',
            'Retail shop and showroom fit-outs',
            'Bathroom and kitchen upgrades',
            'Interior modification and finishing',
            'MEP modifications for fit-out projects',
            'Partition and ceiling works',
            'Flooring and painting packages',
            'Lighting and electrical modifications',
            'Plumbing alterations',
            'Final snagging and rectification',
            'Reinstatement and handover support',
          ],
        },
      ],
      note: 'Fit-out, renovation and modification works are subject to applicable building permissions and landlord, developer or authority approvals.',
    },
    {
      index: '12',
      icon: 'Wrench',
      title: 'General Facilities & Property Maintenance',
      summary:
        'Planned preventive maintenance, reactive repairs, inspections and multi-trade coordination for whole properties.',
      groups: [
        {
          heading: 'Planned and Reactive Maintenance',
          items: [
            'Planned preventive maintenance (PPM)',
            'Corrective and reactive maintenance',
            'Routine property inspections',
            'General handyman and repair services',
            'Minor plumbing and electrical repairs',
            'AC servicing and filter changes',
            'Common-area maintenance',
            'Residential villa and apartment maintenance',
            'Office and commercial property maintenance',
            'Retail and hospitality property maintenance',
            'Maintenance of common building equipment',
            'Snagging, defect rectification and maintenance reports',
            'Scheduled maintenance contracts, where offered',
            'Multi-trade maintenance coordination',
          ],
        },
      ],
    },
  ],

  industries: [
    {
      icon: 'Home',
      name: 'Residential Villas & Apartments',
      blurb: 'Planned and reactive maintenance that keeps homes safe, comfortable and efficient.',
    },
    {
      icon: 'Building2',
      name: 'Commercial Offices',
      blurb: 'MEP and building services that support business continuity and workplace comfort.',
    },
    {
      icon: 'Store',
      name: 'Retail Shops & Shopping Centres',
      blurb: 'Coordinated maintenance for trading environments, fit-outs and common areas.',
    },
    {
      icon: 'Hotel',
      name: 'Hotels & Hospitality',
      blurb: 'Guest-facing reliability — HVAC, plumbing, electrical and finishing upkeep.',
    },
    {
      icon: 'Warehouse',
      name: 'Warehouses & Industrial Facilities',
      blurb: 'Robust maintenance for plant, power, ventilation and building fabric.',
    },
    {
      icon: 'KeySquare',
      name: 'Property Management Companies',
      blurb: 'A single coordinated technical partner across managed portfolios.',
    },
    {
      icon: 'Users',
      name: 'Residential Communities & Common Areas',
      blurb: 'Shared-area systems, pumps, lighting and amenities kept in service.',
    },
    {
      icon: 'Stethoscope',
      name: 'Clinics & Other Commercial Facilities',
      blurb: 'Careful, compliant maintenance for specialised commercial environments.',
    },
  ],

  benefits: [
    {
      index: '01',
      title: 'Integrated Services',
      text: 'Multiple building maintenance trades coordinated through one service provider.',
    },
    {
      index: '02',
      title: 'Technical Expertise',
      text: 'A focus on systematic troubleshooting, repairs and quality installations.',
    },
    {
      index: '03',
      title: 'Preventive Maintenance',
      text: 'Maintenance planning designed to help reduce unexpected equipment failures.',
    },
    {
      index: '04',
      title: 'Responsive Communication',
      text: 'Clear communication, service coordination and enquiry follow-up.',
    },
    {
      index: '05',
      title: 'Safety and Compliance',
      text: 'Work undertaken according to applicable safety requirements, technical standards and approvals.',
    },
    {
      index: '06',
      title: 'Tailored Solutions',
      text: 'Maintenance arrangements adapted to each property\u2019s needs and scope of work.',
    },
  ],

  process: [
    {
      index: '01',
      title: 'Enquiry',
      text: 'Contact us by phone, WhatsApp or the website form and tell us what you need.',
    },
    {
      index: '02',
      title: 'Assessment',
      text: 'We gather the details, assess the scope and arrange an inspection where required.',
    },
    {
      index: '03',
      title: 'Quotation',
      text: 'You receive a quotation describing the work scope, pricing and applicable terms.',
    },
    {
      index: '04',
      title: 'Execution & Handover',
      text: 'The approved work is carried out, tested where applicable, and handed over to you.',
    },
  ],

  serviceOptions: [
    'HVAC & Mechanical',
    'Electrical',
    'Plumbing & Drainage',
    'Fire Protection & Life Safety',
    'CCTV, ELV & Access Control',
    'Networking & Structured Cabling',
    'Civil Works',
    'Painting',
    'Flooring & Tiling',
    'Roofing & Waterproofing',
    'Carpentry, Ceilings & Partitions',
    'Renovation & Fit-Out',
    'General Property Maintenance',
    'Multiple Services',
    'Other',
  ],

  propertyTypes: [
    'Residential Villa',
    'Apartment',
    'Commercial Office',
    'Retail / Showroom',
    'Hotel / Hospitality',
    'Warehouse / Industrial',
    'Residential Community / Common Areas',
    'Clinic / Healthcare',
    'Other',
  ],

  contactMethods: ['WhatsApp', 'Phone Call', 'Email'],
}
