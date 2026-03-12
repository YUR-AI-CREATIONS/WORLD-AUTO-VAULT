import { VerticalConfig } from '../vertical.config';

const worldAutoVault: VerticalConfig = {
  id: 'world-auto-vault',
  name: 'WORLD-AUTO-VAULT',
  tagline: 'Sovereign Vehicle Intelligence & Fleet Command',
  icon: '🚗',
  primaryColor: '#1C1C1C',
  accentColor: '#00BFFF',
  bgGradient: 'linear-gradient(135deg, #0D0D0D 0%, #1C1C2E 50%, #00BFFF 100%)',
  systemInstruction: `You are WORLD-AUTO-VAULT, a sovereign AI system for automotive intelligence. You decode VINs to full vehicle specifications, perform market valuations using live auction and retail data, verify title histories for fraud detection, and manage fleet operations at scale. You combine NHTSA recall databases, insurance loss records, and DMV title chains to deliver bulletproof vehicle intelligence.`,
  complianceStandards: [
    'NHTSA Federal Motor Vehicle Safety Standards (FMVSS)',
    'EPA Emissions Standards (Clean Air Act)',
    'FTC Used Car Rule (Buyers Guide)',
    'State DMV Title & Registration Requirements',
    'Odometer Disclosure Act (49 USC 32703)',
    'DPPA (Driver Privacy Protection Act)',
    'UCC Article 9 (Secured Transactions / Liens)'
  ],
  agents: [
    {
      name: 'VIN_DECODER',
      role: 'Vehicle Identification & Specification Engine',
      systemPrompt: 'You decode 17-character VINs into full vehicle specifications — make, model, year, engine, transmission, trim level, manufacturing plant, and production sequence. Cross-reference NHTSA recall campaigns, safety ratings, and TSBs. Identify cloned VINs by detecting specification mismatches.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'MARKET_VALUATOR',
      role: 'Real-Time Vehicle Valuation Analyst',
      systemPrompt: 'You produce accurate vehicle valuations using auction results, retail listings, wholesale data, and condition adjustments. Factor in mileage, geographic market, seasonal trends, and option-level pricing. Output trade-in, private party, and retail value bands with confidence intervals.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'TITLE_VERIFIER',
      role: 'Title Chain & Fraud Detection Specialist',
      systemPrompt: 'You verify vehicle title chains across state DMV records, detecting salvage brands, flood damage, odometer rollbacks, and title washing across state lines. Flag lien holder discrepancies, VIN plate tampering indicators, and insurance total loss records that conflict with clean title claims.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'FLEET_MANAGER',
      role: 'Fleet Operations & Lifecycle Optimizer',
      systemPrompt: 'You manage vehicle fleets at scale — tracking maintenance schedules, depreciation curves, fuel efficiency metrics, and replacement cycle optimization. Generate TCO analyses, fleet utilization reports, and predictive maintenance alerts based on OBD-II data patterns and manufacturer service intervals.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'NHTSA Vehicle API',
      type: 'api',
      endpoint: 'https://vpic.nhtsa.dot.gov/api',
      description: 'VIN decoding, recall campaigns, safety ratings, complaints, and crash test data'
    },
    {
      name: 'KBB / Market Data',
      type: 'api',
      endpoint: 'https://api.kbb.com/v1',
      description: 'Kelley Blue Book vehicle valuations — trade-in, retail, private party pricing'
    },
    {
      name: 'Carfax Vehicle History',
      type: 'api',
      endpoint: 'https://api.carfax.com/v1',
      description: 'Vehicle history reports — accident records, service history, ownership chain, title brands'
    },
    {
      name: 'DMV Title Records',
      type: 'database',
      description: 'State DMV title chain records, lien filings, registration history, and odometer disclosures'
    }
  ],
  outputFormats: [
    'VIN Decode Reports',
    'Market Valuation Estimates',
    'Title Chain Verification Reports',
    'Fleet Analytics Dashboards',
    'TCO (Total Cost of Ownership) Analysis',
    'Recall & Safety Alert Summaries',
    'Vehicle Condition Assessment Forms'
  ],
  defaultModel: 'ORACLE_PRIME',
  features: {
    videoGen: false,
    tts: true,
    imageGen: true,
    maps: true,
    search: true,
    governance: true,
    stripe: true
  }
};

export default worldAutoVault;
