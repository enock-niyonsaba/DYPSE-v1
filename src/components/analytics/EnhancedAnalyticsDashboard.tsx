import React, { useState, useEffect } from 'react';
import { 
  Line, 
  Bar, 
  Pie, 
  Doughnut 
} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
} from 'chart.js';
import { FiUsers, FiTrendingUp, FiBriefcase, FiAward, FiMapPin, FiTarget } from 'react-icons/fi';
import axios from 'axios';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale
);

interface KPIData {
  totalYouth: number;
  employedPercent: number;
  unemployedPercent: number;
  selfEmployedPercent: number;
  topDemandedSkills: Array<{ skill: string; demand: number }>;
  businessesStartedThisMonth: number;
  averageJobReadinessScore: number;
  totalEmployers: number;
  totalJobsPosted: number;
  totalApplications: number;
}

interface SkillGapData {
  skill: string;
  demand: number;
  supply: number;
  gap: number;
  gapPercentage: number;
}

interface EmploymentTrendData {
  month: string;
  employed: number;
  unemployed: number;
  selfEmployed: number;
  total: number;
}

interface JobReadinessPrediction {
  profileId: string;
  firstName: string;
  lastName: string;
  readinessScore: number;
  confidence: number;
  recommendedSkills: string[];
  predictedEmploymentProbability: number;
}

interface SkillDemandForecast {
  skill: string;
  currentDemand: number;
  predictedDemand: number;
  growthRate: number;
  confidence: number;
}

const EnhancedAnalyticsDashboard: React.FC = () => {
  const [kpis, setKpis] = useState<KPIData | null>(null);
  const [skillGaps, setSkillGaps] = useState<SkillGapData[]>([]);
  const [employmentTrends, setEmploymentTrends] = useState<EmploymentTrendData[]>([]);
  const [jobReadinessPredictions, setJobReadinessPredictions] = useState<JobReadinessPrediction[]>([]);
  const [skillDemandForecast, setSkillDemandForecast] = useState<SkillDemandForecast[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  const fetchAnalyticsData = async () => {
    try {
      setLoading(true);
      const [kpisRes, skillGapsRes, trendsRes, predictionsRes, forecastRes] = await Promise.all([
        axios.get('/api/analytics/kpis'),
        axios.get('/api/analytics/skill-gap'),
        axios.get('/api/analytics/employment-trends'),
        axios.get('/api/analytics/job-readiness-predictions?limit=10'),
        axios.get('/api/analytics/skill-demand-forecast')
      ]);

      setKpis(kpisRes.data);
      setSkillGaps(skillGapsRes.data);
      setEmploymentTrends(trendsRes.data);
      setJobReadinessPredictions(predictionsRes.data);
      setSkillDemandForecast(forecastRes.data);
    } catch (err) {
      console.error('Error fetching analytics data:', err);
      setError('Failed to load analytics data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        <p>{error}</p>
        <button 
          onClick={fetchAnalyticsData}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  // Chart configurations
  const employmentTrendData = {
    labels: employmentTrends.map(t => t.month),
    datasets: [
      {
        label: 'Employed',
        data: employmentTrends.map(t => t.employed),
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.3,
      },
      {
        label: 'Unemployed',
        data: employmentTrends.map(t => t.unemployed),
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.3,
      },
      {
        label: 'Self-Employed',
        data: employmentTrends.map(t => t.selfEmployed),
        borderColor: 'rgb(245, 158, 11)',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        tension: 0.3,
      },
    ],
  };

  const skillGapData = {
    labels: skillGaps.slice(0, 8).map(sg => sg.skill),
    datasets: [
      {
        label: 'Demand',
        data: skillGaps.slice(0, 8).map(sg => sg.demand),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
      {
        label: 'Supply',
        data: skillGaps.slice(0, 8).map(sg => sg.supply),
        backgroundColor: 'rgba(239, 68, 68, 0.8)',
        borderColor: 'rgb(239, 68, 68)',
        borderWidth: 1,
      },
    ],
  };

  const employmentStatusData = {
    labels: ['Employed', 'Unemployed', 'Self-Employed'],
    datasets: [
      {
        data: [
          kpis?.employedPercent || 0,
          kpis?.unemployedPercent || 0,
          kpis?.selfEmployedPercent || 0,
        ],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(245, 158, 11, 0.8)',
        ],
        borderColor: [
          'rgb(34, 197, 94)',
          'rgb(239, 68, 68)',
          'rgb(245, 158, 11)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const skillDemandForecastData = {
    labels: skillDemandForecast.slice(0, 6).map(sf => sf.skill),
    datasets: [
      {
        label: 'Current Demand',
        data: skillDemandForecast.slice(0, 6).map(sf => sf.currentDemand),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.3,
      },
      {
        label: 'Predicted Demand',
        data: skillDemandForecast.slice(0, 6).map(sf => sf.predictedDemand),
        borderColor: 'rgb(168, 85, 247)',
        backgroundColor: 'rgba(168, 85, 247, 0.1)',
        tension: 0.3,
        borderDash: [5, 5],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  return (
    <div className="p-6 space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Youth</p>
              <p className="text-2xl font-bold text-gray-900">{kpis?.totalYouth.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FiUsers className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Employment Rate</p>
              <p className="text-2xl font-bold text-green-600">{kpis?.employedPercent}%</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <FiTrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Job Readiness</p>
              <p className="text-2xl font-bold text-purple-600">{kpis?.averageJobReadinessScore}/100</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <FiTarget className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">New Businesses</p>
              <p className="text-2xl font-bold text-orange-600">{kpis?.businessesStartedThisMonth}</p>
              <p className="text-xs text-gray-500">This month</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <FiAward className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Employment Trends */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Employment Trends (6 Months)</h3>
          <div className="h-80">
            <Line data={employmentTrendData} options={chartOptions} />
          </div>
        </div>

        {/* Skill Gap Analysis */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Skill Gap Analysis</h3>
          <div className="h-80">
            <Bar data={skillGapData} options={chartOptions} />
          </div>
        </div>

        {/* Employment Status Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Employment Status Distribution</h3>
          <div className="h-80 flex items-center justify-center">
            <div className="w-64 h-64">
              <Pie data={employmentStatusData} options={pieChartOptions} />
            </div>
          </div>
        </div>

        {/* Skill Demand Forecast */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Skill Demand Forecast</h3>
          <div className="h-80">
            <Line data={skillDemandForecastData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* Job Readiness Predictions */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Top Job Readiness Predictions</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Candidate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Readiness Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Confidence
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employment Probability
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recommended Skills
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {jobReadinessPredictions.map((prediction, index) => (
                <tr key={prediction.profileId}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {prediction.firstName} {prediction.lastName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${prediction.readinessScore}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-900">{prediction.readinessScore}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{Math.round(prediction.confidence * 100)}%</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">
                      {Math.round(prediction.predictedEmploymentProbability * 100)}%
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {prediction.recommendedSkills.slice(0, 3).map((skill, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {skill}
                        </span>
                      ))}
                      {prediction.recommendedSkills.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{prediction.recommendedSkills.length - 3} more
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAnalyticsDashboard; 