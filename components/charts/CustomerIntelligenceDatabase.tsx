'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  sNo: number
  customerName: string
  businessOverview: string
  industryVertical: string
  totalAnnualRevenue: string
  customerSizeScale: string
  keyContactPerson: string
  designationRole: string
  emailAddress: string
  phoneWhatsApp: string
  linkedInProfile: string
  websiteUrl: string
  // Proposition 2 - Professional Drivers
  keyBuyingCriteria: string
  keyPainPoints: string
  upcomingTriggers: string
  // Proposition 3 - Purchasing Behaviour Metrics
  budgetOwnership: string
  procurementModel: string
  preferredEngagementType: string
  // Proposition 3 - Solution Requirements
  preferredSolutionType: string
  preferredDeploymentModel: string
  performanceExpectations: string
  // Proposition 3 - CMI Insights
  customerBenchmarkingSummary: string
  additionalComments: string
}

const sampleCustomerData: CustomerData[] = [
  {
    sNo: 1,
    customerName: 'Nigeria LNG Limited (NLNG)',
    businessOverview: 'Operator of Bonny Island LNG facility. Onshore integrated LNG plant with 6 operational trains. Focus on export LNG and gas monetization from Niger Delta fields.',
    industryVertical: 'Upstream-integrated LNG players',
    totalAnnualRevenue: '5,200',
    customerSizeScale: 'Large-scale LNG (>5 MTPA)',
    keyContactPerson: 'Adebayo Ogunlade',
    designationRole: 'VP - Engineering & Operations',
    emailAddress: 'a.ogunlade@nlng.com',
    phoneWhatsApp: '+234 803 456 7890',
    linkedInProfile: 'linkedin.com/in/adebayo-ogunlade',
    websiteUrl: 'www.nlng.com',
    keyBuyingCriteria: 'Liquefaction efficiency, Proven EPC track record, Scalability for Train 7 expansion',
    keyPainPoints: 'Project delays on Train 7, Infrastructure gaps in pipeline network, Regulatory uncertainty around gas pricing',
    upcomingTriggers: 'Train 7 FID approved, Expansion to 30 MTPA capacity, Emission reduction targets by 2030',
    budgetOwnership: 'Corporate investment committee, JV board (NNPC, Shell, TotalEnergies, Eni)',
    procurementModel: 'EPC contracts with consortium-based execution (SCD JV)',
    preferredEngagementType: 'Strategic partnerships with EPC players, Long-term framework agreements',
    preferredSolutionType: 'Large-scale liquefaction trains, Gas pre-treatment systems, Integrated digital monitoring',
    preferredDeploymentModel: 'Onshore centralized LNG plant, Digitally enabled (IoT + analytics)',
    performanceExpectations: 'High uptime >95%, Energy efficiency improvements, Low CO2 intensity per ton LNG',
    customerBenchmarkingSummary: 'Tier 1 - Largest LNG operator in West Africa. Strategic anchor customer with proven expansion pipeline.',
    additionalComments: 'Train 7 is the largest single LNG investment in Africa. Strong government backing through NNPC.',
  },
  {
    sNo: 2,
    customerName: 'Seplat Energy Plc',
    businessOverview: 'Developer of ANOH Gas Processing Plant. Midstream operator focused on domestic gas monetization and small-scale LNG. Operational focus on onshore assets in Niger Delta.',
    industryVertical: 'Midstream LNG operators',
    totalAnnualRevenue: '1,800',
    customerSizeScale: 'Mid-scale (1-5 MTPA)',
    keyContactPerson: 'Chioma Nwachukwu',
    designationRole: 'Director - Gas Business',
    emailAddress: 'c.nwachukwu@seplatenergy.com',
    phoneWhatsApp: '+234 805 234 5678',
    linkedInProfile: 'linkedin.com/in/chioma-nwachukwu',
    websiteUrl: 'www.seplatenergy.com',
    keyBuyingCriteria: 'CAPEX optimization, Technology reliability (MR process), Compliance with environmental standards',
    keyPainPoints: 'High CAPEX and financing constraints, Limited local supply chain for LNG equipment, Skilled workforce shortages',
    upcomingTriggers: 'ANOH Phase 2 gas plant expansion, Domestic LNG distribution network, Gas monetization policy incentives',
    budgetOwnership: 'Project development teams, Corporate investment committee',
    procurementModel: 'EPC contracts, Technology licensing agreements',
    preferredEngagementType: 'Early-stage design involvement (FEED stage), Pilot projects for modular LNG',
    preferredSolutionType: 'Modular LNG plants, Gas pre-treatment systems, Refrigeration & compression systems',
    preferredDeploymentModel: 'Onshore centralized, Modular deployment for remote locations',
    performanceExpectations: 'High reliability in tropical conditions, Low maintenance downtime, Safety compliance',
    customerBenchmarkingSummary: 'Tier 2 - Fast-growing indigenous operator with strong gas monetization strategy.',
    additionalComments: 'Positioned as leading Nigerian independent E&P with growing LNG ambitions.',
  },
  {
    sNo: 3,
    customerName: 'Golar LNG Limited',
    businessOverview: 'FLNG developer and operator. Pioneer of floating LNG conversion (Hilli Episeyo FLNG in Cameroon). Focus on offshore gas monetization via FLNG technology.',
    industryVertical: 'FLNG developers',
    totalAnnualRevenue: '980',
    customerSizeScale: 'Mid-scale (1-5 MTPA)',
    keyContactPerson: 'Erik Borgen',
    designationRole: 'SVP - FLNG Operations',
    emailAddress: 'e.borgen@golarlng.com',
    phoneWhatsApp: '+47 922 34 567',
    linkedInProfile: 'linkedin.com/in/erik-borgen-golar',
    websiteUrl: 'www.golarlng.com',
    keyBuyingCriteria: 'Offshore vs onshore adaptability, Technology reliability for FLNG, CAPEX optimization on conversion projects',
    keyPainPoints: 'Offshore technical challenges (FLNG mooring, subsea), High CAPEX for FLNG conversions, Project delays and cost overruns',
    upcomingTriggers: 'Hilli Episeyo capacity expansion, New FLNG deployment opportunities in West Africa, Emission reduction through gas flaring elimination',
    budgetOwnership: 'Corporate investment committee, JV boards with national oil companies',
    procurementModel: 'Long-term OEM partnerships, Technology licensing, Consortium-based execution',
    preferredEngagementType: 'Strategic partnerships with EPC players, Joint ventures and alliances',
    preferredSolutionType: 'FLNG systems, Liquefaction units, Refrigeration & compression systems',
    preferredDeploymentModel: 'Offshore FLNG systems, Hybrid (onshore + offshore integration)',
    performanceExpectations: 'Operational reliability in harsh offshore environments, High uptime >90%, Low emissions',
    customerBenchmarkingSummary: 'Tier 1 - Pioneer FLNG operator with proven track record in Cameroon. Strong expansion pipeline.',
    additionalComments: 'Hilli Episeyo is the world\'s first FLNG conversion. Key reference for West Africa FLNG projects.',
  },
  {
    sNo: 4,
    customerName: 'Societe Nationale des Petroles du Senegal (Petrosen)',
    businessOverview: 'National oil company of Senegal. Partner in Greater Tortue Ahmeyim (GTA) FLNG project. Focus on first-ever LNG export from Senegal.',
    industryVertical: 'Upstream-integrated LNG players',
    totalAnnualRevenue: '320',
    customerSizeScale: 'Mid-scale (1-5 MTPA)',
    keyContactPerson: 'Moussa Diallo',
    designationRole: 'Director - LNG Projects',
    emailAddress: 'm.diallo@petrosen.sn',
    phoneWhatsApp: '+221 77 456 7890',
    linkedInProfile: 'linkedin.com/in/moussa-diallo-petrosen',
    websiteUrl: 'www.petrosen.sn',
    keyBuyingCriteria: 'Proven EPC track record, Technology reliability (APCI process), Compliance with ESG standards',
    keyPainPoints: 'First-of-kind LNG project complexity, Infrastructure gaps (no existing LNG infrastructure), Skilled workforce shortages in-country',
    upcomingTriggers: 'GTA Phase 1 first gas expected 2024-2025, GTA Phase 2 expansion planning, Domestic gas utilization strategy',
    budgetOwnership: 'JV board (BP, Kosmos Energy, Petrosen), Government investment committee',
    procurementModel: 'EPC contracts (BP as operator), Project financing-linked procurement',
    preferredEngagementType: 'Early-stage FEED involvement, Strategic partnerships, Framework agreements',
    preferredSolutionType: 'FLNG systems, Gas pre-treatment systems, Integrated digital monitoring solutions',
    preferredDeploymentModel: 'Offshore FLNG systems (GTA hub), Digitally enabled plants',
    performanceExpectations: 'High plant uptime >92%, Energy efficiency, Safety compliance to international standards',
    customerBenchmarkingSummary: 'Tier 2 - Emerging LNG player with landmark GTA project. First mover in Senegalese LNG.',
    additionalComments: 'GTA project is a cross-border development with Mauritania. Strategic importance for West African gas hub.',
  },
  {
    sNo: 5,
    customerName: 'Societe Mauritanienne des Hydrocarbures (SMH)',
    businessOverview: 'National oil company of Mauritania. Partner in GTA FLNG project and BirAllah gas field development. Focus on gas monetization and LNG exports.',
    industryVertical: 'Upstream-integrated LNG players',
    totalAnnualRevenue: '180',
    customerSizeScale: 'Mid-scale (1-5 MTPA)',
    keyContactPerson: 'Ahmed Ould Brahim',
    designationRole: 'Head of Gas & LNG Division',
    emailAddress: 'a.brahim@smh.mr',
    phoneWhatsApp: '+222 36 45 67 89',
    linkedInProfile: 'linkedin.com/in/ahmed-brahim-smh',
    websiteUrl: 'www.smh.mr',
    keyBuyingCriteria: 'CAPEX optimization, Scalability for future BirAllah development, Offshore adaptability',
    keyPainPoints: 'Limited in-country LNG expertise, Infrastructure gaps, Financing constraints for mega-projects',
    upcomingTriggers: 'GTA Phase 1 commissioning, BirAllah field development FID, National gas master plan implementation',
    budgetOwnership: 'JV board (BP, Kosmos Energy, SMH), Government energy ministry',
    procurementModel: 'Consortium-based project execution, Technology licensing agreements',
    preferredEngagementType: 'Joint ventures and alliances, Early-stage FEED involvement',
    preferredSolutionType: 'FLNG systems, Large-scale liquefaction trains, Gas pre-treatment systems',
    preferredDeploymentModel: 'Offshore FLNG systems, Hybrid deployment for future phases',
    performanceExpectations: 'Operational reliability in deep offshore, Low maintenance downtime, ESG compliance',
    customerBenchmarkingSummary: 'Tier 2 - Emerging player with massive gas reserves (BirAllah). Long-term growth potential.',
    additionalComments: 'BirAllah could be one of the largest gas fields in Africa. Future expansion beyond GTA is significant.',
  },
  {
    sNo: 6,
    customerName: 'Societe Nationale des Hydrocarbures (SNH) Cameroon',
    businessOverview: 'National oil company of Cameroon. Oversight of Hilli Episeyo FLNG and Kribi LNG terminal development. Focus on gas monetization and export diversification.',
    industryVertical: 'Upstream-integrated LNG players',
    totalAnnualRevenue: '450',
    customerSizeScale: 'Mid-scale (1-5 MTPA)',
    keyContactPerson: 'Jean-Pierre Mbarga',
    designationRole: 'Director - Gas Monetization',
    emailAddress: 'jp.mbarga@snh.cm',
    phoneWhatsApp: '+237 677 890 123',
    linkedInProfile: 'linkedin.com/in/jean-pierre-mbarga',
    websiteUrl: 'www.snh.cm',
    keyBuyingCriteria: 'Technology reliability, CAPEX optimization, Proven FLNG track record',
    keyPainPoints: 'Infrastructure gaps between offshore fields and onshore facilities, Regulatory uncertainty, Limited local EPC capacity',
    upcomingTriggers: 'Hilli Episeyo production ramp-up, Kribi Gas Hub development, New offshore gas field appraisals',
    budgetOwnership: 'Corporate investment committee, JV board with international partners',
    procurementModel: 'Long-term OEM partnerships, EPC contracts',
    preferredEngagementType: 'Strategic partnerships, Long-term framework agreements',
    preferredSolutionType: 'FLNG systems, Liquefaction units, LNG storage tanks',
    preferredDeploymentModel: 'Offshore FLNG, Onshore centralized (Kribi)',
    performanceExpectations: 'High uptime >93%, Low emissions, Operational reliability in Gulf of Guinea conditions',
    customerBenchmarkingSummary: 'Tier 2 - Established LNG host country with operational FLNG asset. Room for expansion.',
    additionalComments: 'Cameroon is home to the first FLNG conversion project globally (Hilli Episeyo by Golar).',
  },
  {
    sNo: 7,
    customerName: 'Ghana National Gas Company (GNGC)',
    businessOverview: 'State-owned gas processing company. Operates Atuabo Gas Processing Plant. Focus on domestic gas processing and future small-scale LNG for power generation.',
    industryVertical: 'Midstream LNG operators',
    totalAnnualRevenue: '620',
    customerSizeScale: 'Small-scale / FLNG',
    keyContactPerson: 'Kwame Asante',
    designationRole: 'Chief Technical Officer',
    emailAddress: 'k.asante@ghanagas.com.gh',
    phoneWhatsApp: '+233 24 567 8901',
    linkedInProfile: 'linkedin.com/in/kwame-asante-gngc',
    websiteUrl: 'www.ghanagas.com.gh',
    keyBuyingCriteria: 'CAPEX optimization for small-scale, Technology reliability, Scalability for future expansion',
    keyPainPoints: 'Financing constraints, Infrastructure gaps for LNG distribution, Limited LNG expertise in-country',
    upcomingTriggers: 'Small-scale LNG feasibility study, Gas-to-power expansion, Jubilee and TEN field gas ramp-up',
    budgetOwnership: 'Engineering & asset management teams, Government energy commission',
    procurementModel: 'EPC contracts, Multi-vendor sourcing for components',
    preferredEngagementType: 'Pilot projects for small-scale LNG, Early-stage FEED involvement',
    preferredSolutionType: 'Modular LNG plants, Gas pre-treatment systems, Refrigeration & compression systems',
    preferredDeploymentModel: 'Modular deployment for remote locations, Onshore centralized',
    performanceExpectations: 'Energy efficiency, Low maintenance downtime, Safety compliance to Ghana EPA standards',
    customerBenchmarkingSummary: 'Tier 3 - Emerging LNG aspirant with strong gas processing base. Small-scale LNG opportunity.',
    additionalComments: 'Ghana is exploring small-scale LNG for domestic power and industrial use. Early-stage market.',
  },
  {
    sNo: 8,
    customerName: 'Shell Nigeria Exploration and Production Company (SNEPCo)',
    businessOverview: 'Operator of Bonga deepwater FPSO and major partner in NLNG. Focus on deepwater gas development and integrated LNG value chain in Nigeria.',
    industryVertical: 'Upstream-integrated LNG players',
    totalAnnualRevenue: '8,500',
    customerSizeScale: 'Large-scale LNG (>5 MTPA)',
    keyContactPerson: 'Oluwaseun Adeyemi',
    designationRole: 'GM - Gas & New Energies',
    emailAddress: 'o.adeyemi@shell.com',
    phoneWhatsApp: '+234 802 345 6789',
    linkedInProfile: 'linkedin.com/in/oluwaseun-adeyemi-shell',
    websiteUrl: 'www.shell.com.ng',
    keyBuyingCriteria: 'Liquefaction efficiency, Proven EPC track record, Compliance with Shell HSSE standards, Emission reduction',
    keyPainPoints: 'Security challenges in Niger Delta, Project delays, Regulatory uncertainty around PIB implementation',
    upcomingTriggers: 'NLNG Train 7 construction, Bonga North development, Gas flare-out compliance deadline, Net-zero targets',
    budgetOwnership: 'Shell corporate investment committee, NLNG JV board',
    procurementModel: 'EPC contracts, Long-term OEM partnerships, Global frame agreements',
    preferredEngagementType: 'Strategic partnerships, Long-term framework agreements, Joint ventures',
    preferredSolutionType: 'Large-scale liquefaction trains, Integrated digital monitoring, Gas pre-treatment systems',
    preferredDeploymentModel: 'Onshore centralized (NLNG), Digitally enabled (IoT + analytics)',
    performanceExpectations: 'High uptime >95%, Best-in-class energy efficiency, Zero flaring target, Low CO2 intensity',
    customerBenchmarkingSummary: 'Tier 1 - Global supermajor with deepest LNG expertise in West Africa. Key decision-maker for NLNG.',
    additionalComments: 'Shell holds 25.6% in NLNG. Critical partner for all major LNG investments in Nigeria.',
  },
  {
    sNo: 9,
    customerName: 'TotalEnergies EP Nigeria',
    businessOverview: 'Major partner in NLNG and operator of Egina FPSO. Developer of Preowei and Ikike deepwater projects. Focus on integrated gas and LNG operations.',
    industryVertical: 'Upstream-integrated LNG players',
    totalAnnualRevenue: '6,200',
    customerSizeScale: 'Large-scale LNG (>5 MTPA)',
    keyContactPerson: 'Emeka Ibe',
    designationRole: 'VP - Gas, Renewables & Power Nigeria',
    emailAddress: 'e.ibe@totalenergies.com',
    phoneWhatsApp: '+234 809 876 5432',
    linkedInProfile: 'linkedin.com/in/emeka-ibe-total',
    websiteUrl: 'www.totalenergies.com.ng',
    keyBuyingCriteria: 'Compliance with ESG standards, Liquefaction efficiency, Scalability, CAPEX optimization',
    keyPainPoints: 'Project delays and cost overruns, Security in operating areas, Gas supply reliability from upstream',
    upcomingTriggers: 'NLNG Train 7, Preowei deepwater gas tie-back, Energy transition investment in LNG as transition fuel',
    budgetOwnership: 'TotalEnergies corporate, NLNG JV board, Project development teams',
    procurementModel: 'EPC contracts, Consortium-based, Global procurement frameworks',
    preferredEngagementType: 'Strategic partnerships with EPC players, Long-term framework agreements',
    preferredSolutionType: 'Large-scale liquefaction trains, Gas pre-treatment, Integrated digital monitoring',
    preferredDeploymentModel: 'Onshore centralized (Bonny Island), Digitally enabled plants',
    performanceExpectations: 'High uptime >94%, Low emissions, Energy efficiency targets, Safety compliance',
    customerBenchmarkingSummary: 'Tier 1 - Global supermajor, 15% NLNG stake. Strong commitment to West Africa LNG.',
    additionalComments: 'TotalEnergies is also operator of GTA project in Senegal/Mauritania through BP farm-in.',
  },
  {
    sNo: 10,
    customerName: 'Eni S.p.A. Nigeria',
    businessOverview: 'Partner in NLNG (10.4% stake) and operator of NAOC JV assets. Focus on gas development from onshore and shallow water fields for LNG feedstock.',
    industryVertical: 'Upstream-integrated LNG players',
    totalAnnualRevenue: '3,400',
    customerSizeScale: 'Large-scale LNG (>5 MTPA)',
    keyContactPerson: 'Giuseppe Ferrante',
    designationRole: 'Country Manager - Nigeria',
    emailAddress: 'g.ferrante@eni.com',
    phoneWhatsApp: '+234 807 654 3210',
    linkedInProfile: 'linkedin.com/in/giuseppe-ferrante-eni',
    websiteUrl: 'www.eni.com',
    keyBuyingCriteria: 'Technology reliability, CAPEX optimization, Proven EPC track record',
    keyPainPoints: 'Gas supply reliability, Security in Niger Delta, Regulatory framework changes',
    upcomingTriggers: 'NLNG Train 7 gas supply agreements, NAOC gas development, Carbon neutrality targets',
    budgetOwnership: 'Eni corporate, NLNG JV board',
    procurementModel: 'EPC contracts, Long-term OEM partnerships',
    preferredEngagementType: 'Long-term framework agreements, Strategic partnerships',
    preferredSolutionType: 'Gas pre-treatment systems, Liquefaction units, Control and monitoring systems',
    preferredDeploymentModel: 'Onshore centralized, Digitally enabled (IoT + analytics)',
    performanceExpectations: 'High reliability, Low emissions, Operational safety compliance',
    customerBenchmarkingSummary: 'Tier 1 - Major NLNG partner with strong upstream gas portfolio in Nigeria.',
    additionalComments: 'Eni is exploring additional gas monetization routes including CNG and small-scale LNG.',
  },
  {
    sNo: 11,
    customerName: 'BP Exploration (Senegal/Mauritania)',
    businessOverview: 'Operator of Greater Tortue Ahmeyim (GTA) cross-border FLNG project. Developer of Yakaar-Teranga gas field. Focus on West Africa deepwater LNG.',
    industryVertical: 'Upstream-integrated LNG players',
    totalAnnualRevenue: '7,800',
    customerSizeScale: 'Large-scale LNG (>5 MTPA)',
    keyContactPerson: 'David Mitchell',
    designationRole: 'VP - Senegal & Mauritania Operations',
    emailAddress: 'd.mitchell@bp.com',
    phoneWhatsApp: '+44 7700 123456',
    linkedInProfile: 'linkedin.com/in/david-mitchell-bp',
    websiteUrl: 'www.bp.com',
    keyBuyingCriteria: 'Offshore adaptability, Technology reliability for deepwater FLNG, Compliance with ESG standards, Scalability',
    keyPainPoints: 'Project delays (GTA Phase 1), Deepwater technical complexity, Cross-border regulatory coordination',
    upcomingTriggers: 'GTA Phase 1 first gas, Yakaar-Teranga development FID, GTA Phase 2 expansion',
    budgetOwnership: 'BP corporate investment committee, GTA JV board (Kosmos, Petrosen, SMH)',
    procurementModel: 'EPC contracts (Technip FMC), Consortium-based execution',
    preferredEngagementType: 'Strategic partnerships, Early-stage FEED involvement, Joint ventures',
    preferredSolutionType: 'FLNG systems, Large-scale liquefaction trains, Integrated digital monitoring',
    preferredDeploymentModel: 'Offshore FLNG (GTA hub), Hybrid for future expansion phases',
    performanceExpectations: 'High uptime >93%, Low CO2 intensity, Operational reliability in deepwater conditions',
    customerBenchmarkingSummary: 'Tier 1 - Global supermajor operating West Africa\'s newest LNG mega-project.',
    additionalComments: 'GTA is expected to produce ~2.3 MTPA Phase 1. Yakaar-Teranga could add >10 MTPA long-term.',
  },
  {
    sNo: 12,
    customerName: 'Kosmos Energy',
    businessOverview: 'Partner in GTA project (Senegal/Mauritania). Deepwater exploration and development company. Focus on gas monetization through FLNG.',
    industryVertical: 'Upstream-integrated LNG players',
    totalAnnualRevenue: '1,600',
    customerSizeScale: 'Mid-scale (1-5 MTPA)',
    keyContactPerson: 'Sarah Thompson',
    designationRole: 'SVP - Development & Production',
    emailAddress: 's.thompson@kosmosenergy.com',
    phoneWhatsApp: '+1 214 555 0199',
    linkedInProfile: 'linkedin.com/in/sarah-thompson-kosmos',
    websiteUrl: 'www.kosmosenergy.com',
    keyBuyingCriteria: 'CAPEX optimization, Technology reliability, Proven deepwater FLNG track record',
    keyPainPoints: 'Financing constraints for mega-projects, Project timeline management, Deepwater infrastructure complexity',
    upcomingTriggers: 'GTA first gas revenues, Yakaar-Teranga appraisal results, West Africa gas hub strategy',
    budgetOwnership: 'Corporate development team, GTA JV board',
    procurementModel: 'Consortium-based (BP-led), Project financing-linked procurement',
    preferredEngagementType: 'Joint ventures and alliances, Strategic partnerships',
    preferredSolutionType: 'FLNG systems, Gas pre-treatment systems',
    preferredDeploymentModel: 'Offshore FLNG systems',
    performanceExpectations: 'Operational reliability, Cost-efficient operations, Safety compliance',
    customerBenchmarkingSummary: 'Tier 2 - Key GTA partner with strong West Africa gas portfolio.',
    additionalComments: 'Kosmos discovered the Jubilee field in Ghana and is a key West Africa deepwater player.',
  },
  {
    sNo: 13,
    customerName: 'UTM Offshore Limited',
    businessOverview: 'First indigenous Nigerian company to receive an FLNG license. Developing Nigeria\'s first independent FLNG project. Focus on stranded gas monetization.',
    industryVertical: 'FLNG developers',
    totalAnnualRevenue: '85',
    customerSizeScale: 'Small-scale / FLNG',
    keyContactPerson: 'Julius Rone',
    designationRole: 'CEO & Founder',
    emailAddress: 'j.rone@utmoffshore.com',
    phoneWhatsApp: '+234 806 789 0123',
    linkedInProfile: 'linkedin.com/in/julius-rone-utm',
    websiteUrl: 'www.utmoffshore.com',
    keyBuyingCriteria: 'CAPEX optimization for small-scale FLNG, Offshore adaptability, Technology reliability',
    keyPainPoints: 'Financing constraints, Limited local FLNG supply chain, Regulatory approvals timeline',
    upcomingTriggers: 'FLNG project FID, Stranded gas monetization opportunity, Nigerian gas flare-out policy',
    budgetOwnership: 'Project development team, Board of directors',
    procurementModel: 'Technology licensing, Multi-vendor sourcing, Project financing-linked',
    preferredEngagementType: 'Pilot projects, Strategic partnerships with technology providers',
    preferredSolutionType: 'FLNG systems, Modular LNG plants, Refrigeration & compression systems',
    preferredDeploymentModel: 'Offshore FLNG, Modular for stranded gas fields',
    performanceExpectations: 'Cost-efficient operations, Reliability in Nigerian offshore conditions, Safety compliance',
    customerBenchmarkingSummary: 'Tier 3 - Pioneer indigenous FLNG developer. High growth potential if financing secured.',
    additionalComments: 'First Nigerian company to be granted FLNG license by DPR. Targeting stranded gas fields.',
  },
  {
    sNo: 14,
    customerName: 'Perenco Cameroon',
    businessOverview: 'Operator of onshore and offshore oil & gas fields in Cameroon. Supplier of gas feedstock for Hilli Episeyo FLNG. Focus on gas development.',
    industryVertical: 'Midstream LNG operators',
    totalAnnualRevenue: '750',
    customerSizeScale: 'Small-scale / FLNG',
    keyContactPerson: 'Marc Dupont',
    designationRole: 'GM - Gas Development Cameroon',
    emailAddress: 'm.dupont@perenco.com',
    phoneWhatsApp: '+237 655 123 456',
    linkedInProfile: 'linkedin.com/in/marc-dupont-perenco',
    websiteUrl: 'www.perenco.com',
    keyBuyingCriteria: 'Technology reliability, CAPEX optimization, Offshore adaptability for gas gathering',
    keyPainPoints: 'Gas supply infrastructure limitations, Offshore logistics in Gulf of Guinea, Workforce availability',
    upcomingTriggers: 'Hilli Episeyo expansion, New gas field tie-ins, Domestic gas market development',
    budgetOwnership: 'Project development teams, Engineering & asset management',
    procurementModel: 'EPC contracts, Long-term OEM partnerships',
    preferredEngagementType: 'Long-term framework agreements, Strategic partnerships',
    preferredSolutionType: 'Gas pre-treatment systems, Refrigeration & compression, Control and monitoring systems',
    preferredDeploymentModel: 'Offshore integration with FLNG, Onshore gas processing',
    performanceExpectations: 'Operational reliability, Low maintenance downtime, Safety compliance',
    customerBenchmarkingSummary: 'Tier 2 - Key gas feedstock supplier for Cameroon FLNG operations.',
    additionalComments: 'Perenco is the largest oil and gas operator in Cameroon. Critical for Hilli Episeyo gas supply.',
  },
  {
    sNo: 15,
    customerName: 'Eni Ghana Exploration and Production',
    businessOverview: 'Operator of offshore OCTP (Sankofa-Gye Nyame) project in Ghana. Focus on gas-to-power and potential small-scale LNG. Deepwater operations.',
    industryVertical: 'Upstream-integrated LNG players',
    totalAnnualRevenue: '1,200',
    customerSizeScale: 'Small-scale / FLNG',
    keyContactPerson: 'Roberto Canavesi',
    designationRole: 'Managing Director - Ghana',
    emailAddress: 'r.canavesi@eni.com',
    phoneWhatsApp: '+233 30 274 5678',
    linkedInProfile: 'linkedin.com/in/roberto-canavesi-eni',
    websiteUrl: 'www.eni.com/ghana',
    keyBuyingCriteria: 'Scalability for future LNG, Technology reliability, Compliance with Ghana environmental standards',
    keyPainPoints: 'Infrastructure gaps for LNG distribution, Regulatory framework for small-scale LNG, Gas demand uncertainty',
    upcomingTriggers: 'Gas-to-power expansion, Small-scale LNG feasibility assessment, OCTP Phase 2 gas increase',
    budgetOwnership: 'Eni corporate, Engineering & asset management teams',
    procurementModel: 'EPC contracts, Technology licensing',
    preferredEngagementType: 'Pilot projects for small-scale LNG, Early-stage FEED involvement',
    preferredSolutionType: 'Modular LNG plants, Gas pre-treatment systems, Integrated digital monitoring',
    preferredDeploymentModel: 'Modular deployment, Hybrid (offshore gas + onshore LNG)',
    performanceExpectations: 'Energy efficiency, Low emissions, Reliability in tropical offshore conditions',
    customerBenchmarkingSummary: 'Tier 2 - Major operator in Ghana with growing gas portfolio. LNG potential if policy supports.',
    additionalComments: 'OCTP delivers gas to Ghana\'s power sector. LNG potential depends on domestic demand growth.',
  },
]

interface PropositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Proposition({ title, isOpen, onToggle, children }: PropositionProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-2 pb-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  )
}

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title }: CustomerIntelligenceDatabaseProps) {
  const [openProposition, setOpenProposition] = useState<number | null>(1)

  const toggleProposition = (num: number) => {
    setOpenProposition(openProposition === num ? null : num)
  }

  // Proposition 1 - Basic: Customer Information + Contact Details
  const renderProposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#E8C4A0] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[60px]">S.No.</th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Customer Name / Company Name</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
              <div>Business Overview</div>
              <div className="font-normal text-[10px] text-gray-600">(Role in LNG value chain, Type of LNG assets, Project stage, Focus areas)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-600">(Upstream-integrated LNG players, Midstream LNG operators, FLNG developers)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Total Annual Revenue (US$ Million)</th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Customer Size / Scale</div>
              <div className="font-normal text-[10px] text-gray-600">(Large-scale LNG {'>'}5 MTPA, Mid-scale 1-5 MTPA, Small-scale / FLNG)</div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Key Contact Person</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Designation / Role</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Email Address</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[140px]">Phone / WhatsApp Number</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">LinkedIn Profile</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Website URL</th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((c, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black text-center">{c.sNo}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.customerSizeScale}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.designationRole}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.emailAddress}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.phoneWhatsApp}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.linkedInProfile}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.websiteUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 2 - Advance: Customer Information + Contact Details + Professional Drivers
  const renderProposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#E8C4A0] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#9370DB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-white">
              Professional Drivers
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[60px]">S.No.</th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">Customer Name / Company Name</th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
              <div>Business Overview</div>
              <div className="font-normal text-[10px] text-gray-600">(Role in LNG value chain, Type of LNG assets, Project stage, Focus areas)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-600">(Upstream-integrated LNG players, Midstream LNG operators, FLNG developers)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Total Annual Revenue (US$ Million)</th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Customer Size / Scale</div>
              <div className="font-normal text-[10px] text-gray-600">(Large-scale LNG {'>'}5 MTPA, Mid-scale 1-5 MTPA, Small-scale / FLNG)</div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Key Contact Person</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Designation / Role</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Email Address</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[140px]">Phone / WhatsApp Number</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">LinkedIn Profile</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Website URL</th>
            <th className="bg-[#DDA0DD] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
              <div>Key Buying Criteria</div>
              <div className="font-normal text-[10px] text-gray-600">(Liquefaction efficiency, EPC track record, Technology reliability, CAPEX optimization, Scalability, Compliance, Offshore/onshore adaptability)</div>
            </th>
            <th className="bg-[#DDA0DD] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
              <div>Key Pain Points</div>
              <div className="font-normal text-[10px] text-gray-600">(High CAPEX, Project delays, Infrastructure gaps, Offshore challenges, Limited local supply chain, Regulatory uncertainty, Workforce shortages)</div>
            </th>
            <th className="bg-[#DDA0DD] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
              <div>Upcoming Triggers and Initiatives</div>
              <div className="font-normal text-[10px] text-gray-600">(New LNG project FIDs, Expansion of LNG trains, FLNG adoption, Gas monetization policies, Energy transition, Digitalization, Emission reduction)</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((c, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black text-center">{c.sNo}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.customerSizeScale}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.designationRole}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.emailAddress}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.phoneWhatsApp}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.linkedInProfile}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.websiteUrl}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.keyBuyingCriteria}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.keyPainPoints}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.upcomingTriggers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 3 - Premium: All columns
  const renderProposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#E8C4A0] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#9370DB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-white">
              Professional Drivers
            </th>
            <th colSpan={3} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Purchasing Behaviour Metrics
            </th>
            <th colSpan={3} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Solution Requirements
            </th>
            <th colSpan={2} className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              CMI Insights
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[60px]">S.No.</th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">Customer Name / Company Name</th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
              <div>Business Overview</div>
              <div className="font-normal text-[10px] text-gray-600">(Role in LNG value chain, Type of LNG assets, Focus areas)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-600">(Upstream-integrated, Midstream, FLNG developers)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Total Annual Revenue (US$ Million)</th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Customer Size / Scale</div>
              <div className="font-normal text-[10px] text-gray-600">(Large-scale {'>'}5 MTPA, Mid-scale 1-5 MTPA, Small-scale / FLNG)</div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Key Contact Person</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Designation / Role</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Email Address</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[140px]">Phone / WhatsApp Number</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">LinkedIn Profile</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Website URL</th>
            <th className="bg-[#DDA0DD] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
              <div>Key Buying Criteria</div>
              <div className="font-normal text-[10px] text-gray-600">(Liquefaction efficiency, EPC track record, Technology reliability, CAPEX optimization, Scalability, Compliance, Offshore/onshore adaptability)</div>
            </th>
            <th className="bg-[#DDA0DD] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
              <div>Key Pain Points</div>
              <div className="font-normal text-[10px] text-gray-600">(High CAPEX, Project delays, Infrastructure gaps, Offshore challenges, Limited supply chain, Regulatory uncertainty, Workforce shortages)</div>
            </th>
            <th className="bg-[#DDA0DD] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
              <div>Upcoming Triggers and Initiatives</div>
              <div className="font-normal text-[10px] text-gray-600">(New FIDs, LNG train expansion, FLNG adoption, Gas monetization, Energy transition, Digitalization, Emission reduction)</div>
            </th>
            <th className="bg-[#DEB887] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Budget Ownership</div>
              <div className="font-normal text-[10px] text-gray-600">(Project development teams, Corporate investment committees, JV boards, Engineering & asset management, Procurement)</div>
            </th>
            <th className="bg-[#DEB887] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Procurement Model</div>
              <div className="font-normal text-[10px] text-gray-600">(EPC contracts, Consortium-based, Technology licensing, Long-term OEM, Multi-vendor sourcing, Project financing-linked)</div>
            </th>
            <th className="bg-[#DEB887] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Preferred Engagement Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Early-stage FEED, Strategic partnerships, Framework agreements, Pilot projects, JVs and alliances)</div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Preferred Solution Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Large-scale liquefaction trains, FLNG systems, Modular LNG plants, Gas pre-treatment, Refrigeration & compression, Digital monitoring)</div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Preferred Deployment Model</div>
              <div className="font-normal text-[10px] text-gray-600">(Onshore centralized, Offshore FLNG, Hybrid, Modular for remote, Digitally enabled IoT + analytics)</div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Performance Expectations</div>
              <div className="font-normal text-[10px] text-gray-600">(High uptime {'>'}90-95%, Energy efficiency, Low emissions, Operational reliability, Low maintenance downtime, Safety compliance)</div>
            </th>
            <th className="bg-[#C1E1C1] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Customer Benchmarking Summary</div>
              <div className="font-normal text-[10px] text-gray-600">(Potential Customers)</div>
            </th>
            <th className="bg-[#C1E1C1] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Additional Comments / Notes By CMI team</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((c, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black text-center">{c.sNo}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.customerSizeScale}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.designationRole}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.emailAddress}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.phoneWhatsApp}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.linkedInProfile}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.websiteUrl}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.keyBuyingCriteria}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.keyPainPoints}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.upcomingTriggers}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.budgetOwnership}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.procurementModel}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.preferredEngagementType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.preferredSolutionType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.preferredDeploymentModel}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.performanceExpectations}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.customerBenchmarkingSummary}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{c.additionalComments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div>
      {title && (
        <h2 className="text-xl font-bold text-black mb-4">{title}</h2>
      )}

      <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-sm font-semibold text-blue-900 mb-1">
          West Africa LNG Production Systems Market - Customer Database
        </h3>
        <p className="text-xs text-blue-700">
          Verified directory and insight on customers. Select a proposition below to view the corresponding data table.
        </p>
      </div>

      <Proposition
        title="Proposition 1 - Basic"
        isOpen={openProposition === 1}
        onToggle={() => toggleProposition(1)}
      >
        {renderProposition1Table()}
      </Proposition>

      <Proposition
        title="Proposition 2 - Advance"
        isOpen={openProposition === 2}
        onToggle={() => toggleProposition(2)}
      >
        {renderProposition2Table()}
      </Proposition>

      <Proposition
        title="Proposition 3 - Premium"
        isOpen={openProposition === 3}
        onToggle={() => toggleProposition(3)}
      >
        {renderProposition3Table()}
      </Proposition>
    </div>
  )
}
