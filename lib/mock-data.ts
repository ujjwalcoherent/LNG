import type { ComparisonData } from './types'

/**
 * Creates mock/empty data structure for the dashboard
 * This allows the UI to work without real data files
 */
export function createMockData(): ComparisonData {
  const currentYear = new Date().getFullYear()
  const startYear = currentYear - 5
  const baseYear = currentYear
  const forecastYear = currentYear + 5

  return {
    metadata: {
      market_name: 'Sample Market',
      market_type: 'Sample',
      industry: 'General',
      years: Array.from({ length: forecastYear - startYear + 1 }, (_, i) => startYear + i),
      start_year: startYear,
      base_year: baseYear,
      forecast_year: forecastYear,
      historical_years: [startYear, startYear + 1, startYear + 2, startYear + 3, baseYear - 1],
      forecast_years: Array.from({ length: forecastYear - baseYear + 1 }, (_, i) => baseYear + i),
      currency: 'USD',
      value_unit: 'Million',
      volume_unit: 'Units',
      has_value: true,
      has_volume: true
    },
    dimensions: {
      geographies: {
        global: [],
        regions: ['West Africa'],
        countries: {
          'West Africa': ['Nigeria', 'Senegal', 'Mauritania', 'Cameroon', 'Ghana', 'Rest of West Africa']
        },
        all_geographies: ['West Africa', 'Nigeria', 'Senegal', 'Mauritania', 'Cameroon', 'Ghana', 'Rest of West Africa']
      },
      segments: {
        'By Type of LNG Production System': {
          type: 'flat',
          items: ['Onshore LNG Production Systems', 'Floating (FLNG) Production Systems', 'Small Scale LNG Production Systems', 'Others (Modular LNG Plants, Micro LNG Plants and Etc.)'],
          hierarchy: {}
        },
        'By Liquefaction Technology': {
          type: 'flat',
          items: ['APCI Liquefaction Technology', 'Cascade Liquefaction Technology', 'Mixed Refrigerant Liquefaction Technology', 'Others (Dual Mixed Refrigerant Technology, Nitrogen Expansion Technology, Optimized Cascade Process and Etc.)'],
          hierarchy: {}
        },
        'By Component': {
          type: 'flat',
          items: ['Liquefaction Units', 'Gas Pre treatment Systems', 'Refrigeration and Compression Systems', 'Others (Heat Exchangers, Cryogenic Pumps, LNG Storage Tanks, Control and Monitoring Systems and Etc.)'],
          hierarchy: {}
        },
        'By Capacity': {
          type: 'flat',
          items: ['Small-Scale LNG Plants (Less than 1 MTPA)', 'Mid-Scale LNG Plants (1-5 MTPA)', 'Large-Scale LNG Plants (Greater than 5 MTPA)'],
          hierarchy: {}
        },
        'By End Use Application': {
          type: 'flat',
          items: ['LNG Export Terminals', 'Peak Shaving Facilities', 'Fuel Supply for Transportation', 'Others (Industrial Fuel Supply, Remote Power Generation, Marine Bunkering and Etc.)'],
          hierarchy: {}
        }
      }
    },
    data: {
      value: {
        geography_segment_matrix: []
      },
      volume: {
        geography_segment_matrix: []
      }
    }
  }
}

