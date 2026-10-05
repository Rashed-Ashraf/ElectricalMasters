export interface ProductItem {
  id: string;
  category: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  spec: string;
  imageUrl: string;
  features: string[];
  specifications: { label: string; value: string }[];
  benefits?: string[];
  cardTypes?: { title: string; description: string }[];
  applications: string[];
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'lvs',
    category: 'lvs',
    badge: 'LOW VOLTAGE SWITCHGEAR',
    title: 'Low Voltage Switchgear (LVS)',
    subtitle: 'Switching & Protection Solutions for Electrical Distribution Systems',
    description:
      'Advanced low voltage switchgear solutions for safe and reliable power distribution, designed with high short-circuit capacity and compact footprint.',
    overview:
      'The Low Voltage Panels are used after the power transformer for distribution of electrical power to the whole electrical installations. These panels are of different capacity and sizes. Electrical Masters manufacture complete range of low voltage switchgear for industrial and commercial use both Indoor and outdoor type. EPCs manufactured LV Switchgear as per customer requirement.',
    spec: 'Custom Busbar & Breakers (Up to 6300A)',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBVlTtyg4GeLo789zTLszXzpKzZc8KWD9aGa07OyJYIFEDE3R7uQlAh4hdVeG6AXgX6EWfu1C6qOFdxv0hZYYu7-5RlAPaETK5GjPEE6p4aR5EaAgJ3SnX9f96WU0ODcCNFb6Rys7dX-TvbapdwKWUeAKYIw1oPEsrrltsDx-iVXxg-ri7Zvs4H2poXBKZ-j_UGRLvhqlsWnDZzmX0O3CEq1P7bl4fbahH3QH0oTxH_wtW96oX8yuRF',
    features: [
      'Built-in special protection devices like earth fault, under voltage, over voltage and shunt trip.',
      'Suitable arrangement of Copper Bus Bar of appropriate size according to the current rating.',
      'Reliable Electrical and Mechanical interlocking systems.',
      'Suitable for electric power system of 3-phase AC rated frequency 50/60Hz.',
      'Modular design of Panels makes it easy for assembly, erecting and future maintenance.',
      'Fitted with Louvers and Fans for proper thermal ventilation.',
      'Manufactured strictly according to the IEC / BS Standards.',
    ],
    specifications: [
      { label: 'Rated Voltage', value: '400V' },
      { label: 'Rated Current', value: 'Up to 6300 Amps' },
      { label: 'Short Time Withstand Current', value: 'Max 120kA / 1 sec' },
      { label: 'Rated Frequency', value: '50 / 60 Hz (3-Phase AC)' },
      { label: 'Enclosure Type', value: 'Indoor & Outdoor (Custom IP Rating)' },
      { label: 'Standards Compliance', value: 'IEC / BS Standards' },
    ],
    applications: [
      'Industrial Manufacturing Plants',
      'Commercial Shopping Malls & High Rises',
      'Power Distribution Sub-stations',
      'Residential Enterprises & Public Utilities',
    ],
  },
  {
    id: 'pfi',
    category: 'pfi',
    badge: 'POWER FACTOR IMPROVEMENT',
    title: 'Automatic Power Factor Improvement (PFI) Panels',
    subtitle: 'Energy Preservation & Automatic Reactive Power Compensation',
    description:
      'Energy-efficient PFI panels that automatically adjust power factors to optimize electrical systems and reduce utility bills.',
    overview:
      'Our clients benefit from our extensive range of APFC panels that expedite the automatic power factor control panel. These panels are fabricated and designed to ensure the preservation of maximum energy and power. We design and manufacture PFI panels, fully automatic in operation and can achieve desired power factor under fluctuating load conditions.',
    spec: 'Microprocessor Controlled Relays',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCivHbK7JWSs9dczwxbXKQTpHJGZXixkc_4FzJe3S6qqzhfzJqehPOQBib2a8RQVw2GHPYxvzkj2U7_ApAnlkPWyCqESGPbP6l1e44sI7t8LgFDEE3eZtIc_D39bnge-u7Cfb1_PlZ-Sp10b4G1k8fXwqKamM65jvtIwhNc29hs-I-B27H9Y0B29ZRTvZ3dYx4gEBn2ZUvTq0ORHaZKcPTKp0Kocu5udXdOBDFCBbA7K_ityC87Gm9N',
    features: [
      'Modular design, Non-compartmentalized structure.',
      'Minimum busbar joints for better reliability and lower electrical losses.',
      'Special high-temperature resistant cables used throughout.',
      'Incomer MCCB, 3 pole, 35kA rating.',
      'Step protection MCCB and step switching logic.',
      'Capacitor duty contactors equipped with Damping Resistors.',
      'Microprocessor controlled intelligent reactive power relay.',
      'Flexible switching options: Auto and Manual mode.',
      'High-conductivity Electrolytic Copper Busbars.',
      'Varplus Heavy Duty Capacitors installed for longevity.',
    ],
    specifications: [
      { label: 'Incomer MCCB', value: '3 Pole, 35kA' },
      { label: 'Busbar Material', value: 'High-grade Electrolytic Copper' },
      { label: 'Capacitor Type', value: 'Varplus Heavy Duty Capacitors' },
      { label: 'Operation Modes', value: 'Auto / Manual Dual Switching' },
      { label: 'Relay Controller', value: 'Microprocessor Controlled' },
      { label: 'Protection Class', value: 'As per customer requirement' },
    ],
    benefits: [
      'Consistency in Power Factor under fluctuating load conditions.',
      'Maintenance-free design with heavy-duty components.',
      'Complete elimination of power factor low-efficiency utility penalties.',
      'Prevention of leading power factor and grid voltage instability.',
    ],
    applications: [
      'Fluctuating Load Industries',
      'Steel Rolling Mills',
      'Chemical & Petrochemical Processing Facilities',
      'Cement & Sugar Manufacturing Plants',
      'Textile Mills, Hospitals, Hotels & Building Segments',
      'Automobile Industry & Heavy Assembly Lines',
    ],
  },
  {
    id: 'mcc',
    category: 'mcc',
    badge: 'MOTOR CONTROL CENTRE',
    title: 'Motor Control Centre (MCC) Panel',
    subtitle: 'Centralized Motor Control & Comprehensive Motor Protection',
    description:
      'Comprehensive motor control center panels with protection features, monitoring capabilities, and centralized control for industrial applications.',
    overview:
      'Motor Control Centers/Units are designed to fulfill the electrical requirement of different kind of installed machinery like water pumps, blowers, compressors, fan and all other type of motors in industry.',
    spec: 'Drawout & Fixed Tiers (DOL, ASD, VFD)',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDl_D9GNWkupV_p43Dw3210OHnQ7GKJLLdwUsPaMM3-5laGawqQsIjahv2dJL2Y8mirvMXh-oNlaSA4zkJYtVYpqzUHqJAk_FyZUMxOjP-JDct2EmwKBqpjMTB8XYTJGyo3lvkXYe0ThqBlPO8AoVrAJ49xTuNzjRaHv47RLUG0uHKOlz4QbsfAQ46iWp2hUpR-59sGIU7qBez8lFnD_BL5NvXDIET-5ohCepQDJ2REH8KvpNFc0De5',
    features: [
      'Available for single and multi-motor systems.',
      'Direct Online (DOL) Starters.',
      'Auto Star Delta (ASD) Starters.',
      'Variable Frequency Drive (VFD) Starters.',
      'Soft Starters for smooth acceleration.',
      'Local and Remote operation capabilities.',
      'Complete tripping protection against Under/Over Voltage, Phase Failure, Phase Sequence, Dry Running, and Overload.',
      'Ensured High Personnel Safety with internal barriers.',
      'Both Front and Rear Side Accessibility options for maintenance.',
      'We also design MCU, operated through Programmable Logic Control (PLC) as per required automation.',
    ],
    specifications: [
      { label: 'Starter Types Supported', value: 'DOL, Auto Star-Delta (ASD), VFD, Soft Starter' },
      { label: 'Protection Functions', value: 'Over/Under Voltage, Phase Loss/Sequence, Dry Run, Overload' },
      { label: 'Accessibility Options', value: 'Front-only or Front & Rear Access' },
      { label: 'Control System', value: 'Manual, Remote Pushbutton, PLC Integrated' },
      { label: 'Safety Features', value: 'Shroud Interlocks & High Personnel Safety' },
    ],
    applications: [
      'Industrial Water Pumping Stations',
      'Blower & Compressor Control Arrays',
      'Factory Ventilation Fans & Heavy Conveyors',
      'Automated Motor Process Lines',
    ],
  },
  {
    id: 'plc',
    category: 'plc',
    badge: 'PLC SYSTEM PANELS',
    title: 'Programmable Logic Control System Panels (PLC)',
    subtitle: 'Precision Automation, SCADA Software Interfacing & Telemetry',
    description:
      'Programmable logic controller panels engineered for automation, precision process control, and real-time supervisory data monitoring across modern industrial lines.',
    overview:
      'We offer precision made PLC (Programmable Logic Control) panels. These PLC panels are largely used for industrial automation and process automation. They are programmed through SCADA software and logic which is downloaded as per the process requirements. Different variables are controlled according to the logic and different tag numbers are given to different motors, valves, sensors etc. It is provided with a monitor which displays the process and instrument diagram, and also the live status of process parameters. The PLC systems are of different types of micro logic 1200, 1500 and SLC 500.',
    spec: 'SCADA / HMI Integrated',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCImpIjX6xHwa5vbELAbertL3BsWL4bAf1yaYGK4hRa04HhK-Epkev-wLaJVGtXnh9un1hRdaYo78phL8ucEa5g9NrYJhMebz8mKnbovs_O8_04ROBReTUdD_u-HdfjM4td58m_s-btnxHDArds9bmPB5oNn1K0we2_mDw6zmED3ifFe0tLhYcXeUMKgbHWrIhvmRy5wg4wCQSAI4VTrvz0hg7fgokiUHDDdJMw5TXqYLkOFWQIeBux',
    cardTypes: [
      {
        title: 'Digital Input Card',
        description: 'Used for receiving feedback (F/B) from the process such as start/stop state and overload trips.',
      },
      {
        title: 'Digital Output Card',
        description: 'Delivers output control commands to motor start/stop circuits and field actuators.',
      },
      {
        title: 'Analog Input Card',
        description: 'Receives 4-20 mA signals from continuous sensors monitoring flow, pressure, temperature, etc.',
      },
      {
        title: 'Analog Output Card',
        description: 'Transmits 4-20 mA reference signals for controlling motorized valves, actuators, and VFD speed.',
      },
    ],
    features: [
      'Nano & Micro PLCs from 10 I/O to 140 I/O.',
      'Modular PLCs – Scalable from 8/4 to 4096 I/O with Remote Drops.',
      'Special function modules like High Accuracy, Temperature Control, Power Transducer, and PID Control.',
      'Controlled Output Channels with failsafe isolations.',
      'PLCs with Significantly Higher Configurations Available.',
      'Hot Backup Redundant Systems for zero downtime.',
      'Distributed Control Systems (DCS) integration capability.',
    ],
    specifications: [
      { label: 'Supported Controllers', value: 'Micro Logic 1200, 1500, SLC 500 & Custom PLCs' },
      { label: 'I/O Scalability', value: '10 I/O up to 4096 I/O with Remote drops' },
      { label: 'Monitoring Interface', value: 'Integrated SCADA & HMI Touchscreen' },
      { label: 'Redundancy Support', value: 'Hot Backup Redundant Systems' },
      { label: 'Signal Standards', value: 'Digital (24VDC/220VAC) & Analog (4-20mA / 0-10V)' },
    ],
    applications: [
      'Industrial Process & Manufacturing Lines',
      'Chemical Batching & Pharmaceutical Processing',
      'Water Treatment Plant Automation',
      'Power Plant Telemetry & Supervisory Control',
    ],
  },
  {
    id: 'amf',
    category: 'amf',
    badge: 'AMF / ATS PANELS',
    title: 'Auto Main Failure / Auto Transfer Switch (AMF / ATS)',
    subtitle: 'Automatic Generator Transfer & High Capacity Synchronizing Panels',
    description:
      'Automatic Mains Failure (AMF) and Automatic Transfer Switch (ATS) panels designed for seamless, uninterrupted changeover between grid utility and standby power generators.',
    overview:
      'This system consists of an alternator standard control panel with MCM (Micro processor Control unit) and a change over system housed in separate wall mounted or floor standing panel. Automatic transfer switches are used to automatically change over from the main electrical supply to stand-by generators or generate on failure of the main supply. When the main supply is restored, the system automatically changes back and stops the generator. The stand-by generator will eventually be shut down after a short cooling down period. These panels are provided with mechanically or electrically interlocked pole contactors or MCCB. Synchronization Panels are mainly designed and used to meet power system requirements. These panels function both manually and with an automatic synchronizing function for one or more generators or breakers. Our high quality range of DG synchronizing panels is available with capacities that reach 6000 A, and are fabricated using premium quality electrical components.',
    spec: 'Up to 6000A Generator Sync',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDedoK3ll3qjD8HqdXPQksib2te8LSWhKP3-WRxH5ZWQsZL-3QmGZsqJpllm0HNPRdmGu-e8G1-qFK4lv9ghQokAKGEaH38qy17cGyYYuNs3l1wI_nRB0nXnsPyBCIEuRIyfuxag90IwjMoGjjJMSzbeMwSg58heeeMLu5_TBPTtpBcW0MANp9fycHIB_WhYLs5aZjuij3wQV78gKGjbFAxNS5ryvw4aIPtjr29Cc9AS-0heTDs3oND',
    features: [
      'Operated both automatically and manually with seamless transition.',
      'Employs a Breaker closing time delay installed in order to avoid current and voltage surges.',
      'Automated Sensing for Under Voltage, Phase Failure, Phase Sequence.',
      'Instilled with Generator start/stop automated commands.',
      'Real-time indication for Incoming voltage, Engine Running/Faulty Conditions, MCCB On/Trip status.',
      'Engine test run position provided for routine engine testing.',
      'Status signals for remote indications and SCADA telemetry.',
      'Capacity reaches up to 6000 A with automatic load synchronization.',
      'Can be incorporated into main LT Panels or Sub Main Panels.',
    ],
    specifications: [
      { label: 'Max Current Rating', value: 'Up to 6000 Amps' },
      { label: 'Interlocking Mechanisms', value: 'Mechanical & Electrical Interlocking' },
      { label: 'Automated Sensing', value: 'Under Voltage, Phase Failure, Phase Sequence' },
      { label: 'Control Unit', value: 'MCM Microprocessor Control Unit' },
      { label: 'Integration Type', value: 'Standalone, Main LT Panel, or Sub-Main Panel' },
    ],
    applications: [
      'Hospitals & Healthcare Facilities',
      'Telecom Data Towers & Server Hubs',
      'Continuous Industrial Factories',
      'Commercial High Rises & Airports',
    ],
  },
  {
    id: 'db',
    category: 'db',
    badge: 'LIGHTING & POWER DBS',
    title: 'Lighting and Power Distribution Boards (DBs)',
    subtitle: 'Custom-Built Lighting & Sub-Power Distribution Solutions',
    description:
      'Robust distribution boards for lighting and sub-power applications, engineered for maximum personal safety, clean circuit division, and modular breaker expansion.',
    overview:
      'Our range of lighting panels and power distribution panels successfully serve the purpose of distributing power for the lighting system of panels. These power distribution panels are manufactured by our team of diligent professionals who have years of experience, furthermore, these panels are quality tested in accordance to precisely defined parameters before being delivered to our clients. Electrical Master’s Custom-built distribution boards are available in range from 100A to 400A, 415/240/120VAC.',
    spec: '6 Ways to 72 Ways (IP42 - IP65)',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvOBFscQkj5gJlNxOUOz_aErpvoYciQFkvv4546b67BqTwQdgRHsbmjnKfJ2gu_2j7qaKD45eK5SQIubWFBapn0Ka4lcPwVR4tks8PSKUx_EG9i7ZSR3LPHmfzrJ1PB2xn4bQGQ44PYVIuvzytJ9RzbsQvJkDEL6t1p-w1gRKOyEcKKbzW621TuiF3F1e3iTqmevi1UYeGBLYbw9CPNH_sZiur7T2l-VNlIkiG1bqsPOfNC4LHKevB',
    features: [
      'Available from 6 ways to 72 ways configuration.',
      'RCD (Residual-Current Devices) or RCBO (Residual Current Breakers with over current protection) can be instilled for life safety.',
      'Protection Degree options: IP 42, IP 55, IP 65.',
      'Manufactured with flush and surface mounting options.',
      'Finished with high-durability polyester epoxy powder paint RAL 7032 (Other custom colors available on request).',
      'Precision copper busbars with clear phase identification and earth/neutral blocks.',
    ],
    specifications: [
      { label: 'Current Rating Range', value: '100A to 400A' },
      { label: 'Voltage Rating', value: '415V / 240V / 120VAC' },
      { label: 'Way Options', value: '6 Ways up to 72 Ways' },
      { label: 'Protection Rating', value: 'IP 42, IP 55, IP 65' },
      { label: 'Mounting Style', value: 'Flush & Surface Mounting' },
      { label: 'Surface Finish', value: 'Polyester Epoxy Powder Paint RAL 7032' },
    ],
    applications: [
      'Commercial Building Lighting Infrastructure',
      'Industrial Plant Auxiliary Power',
      'Hospital & Educational Building Sub-Distribution',
      'Residential Complexes',
    ],
  },
  {
    id: 'cables',
    category: 'cables',
    badge: 'CABLE SYSTEMS',
    title: 'Cable Tray System & Cable Ladders',
    subtitle: 'Heavy-Duty Industrial Cable Management & Support Infrastructure',
    description:
      'Precision-formed galvanized steel and aluminum cable trays, ladders, and trunking systems built for organized, heavy-load industrial cable routing.',
    overview:
      'Electrical Masters designs and manufactures heavy-duty Cable Trays and Cable Ladders for robust cable management across industrial, commercial, and utility environments. Built for durability, cable protection, and easy installation.',
    spec: 'Hot-Dip Galvanized / GI / Powder Coated',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDR2WtRSQVfm4KiSS6M3O34pQJJgA0fNrT0p7DeoCJwlZKSnSw-g0EtJZDeZUo40lkJj2ZZ20-MCvMyNTlkqofCDs8Rit4OwuGHd4WWSHsiScmZLVCnVpPLSJ8nvu-eZFJp_nVme2TcQudzE3QleNOryRmhezYILoZ8lezHlGrXGOGWlLnDkkhJTh4svPcWu_00LyXNufU3FQV8QPD_hFsG95hWMxnb0ptyKfhTkMmITFuncR2C1Nfo',
    features: [
      'Available in Perforated, Non-Perforated (Solid Bottom), and Ladder type Cable Trays.',
      'Heavy-duty Cable Ladders designed for high-capacity power cable distribution.',
      'Available in Galvanized Iron (GI), Hot-Dip Galvanized post-fabrication, and Stainless Steel.',
      'Finished with polyester epoxy powder coating (RAL 7032) for aesthetic and weatherproofing requirements.',
      'Complete range of modular fittings: 90° Bends, Equal Tees, 4-Way Crosses, Reducers, Coupler Plates.',
      'High load-bearing capacity and maximum ventilation to prevent cable thermal buildup.',
      'Modular design for rapid, flexible on-site installation and maintenance.',
    ],
    specifications: [
      { label: 'Tray Types', value: 'Perforated, Non-Perforated & Ladder Type' },
      { label: 'Material Options', value: 'Galvanized Iron (GI), Hot-Dip Galvanized, SS304/SS316' },
      { label: 'Fittings Available', value: 'Bends, Tees, Crosses, Reducers, Coupler Plates' },
      { label: 'Surface Finish', value: 'Pre-galvanized, Hot-Dip Galvanized, Powder Coated RAL 7032' },
      { label: 'Span Load Rating', value: 'Heavy Duty Industrial Load Capacity' },
    ],
    applications: [
      'Industrial Factories & Power Plants',
      'Cable Tunnels & Electrical Rooms',
      'Overhead Power Distribution Trusses',
      'Telecom & IT Infrastructure Cable Runs',
    ],
  },
];
