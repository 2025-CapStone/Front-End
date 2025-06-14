import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styled from 'styled-components';
import { FiInbox } from 'react-icons/fi';
import { COLOR_PALETTE } from '../../../Constants/Default';

ChartJS.register(ArcElement, Tooltip, Legend);
const NoDataBox = styled.div`
  width: 100%;
  height: 250px;
  background: #f9fafb;
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #9ca3af;
  font-size: 0.95rem;
`;

const IncomeChart = ({ incomeData }) => {
  const labels = incomeData.map(item => item.transactionDetail);
  const dataValues = incomeData.map(item => item.totalAmount);
  const colorOffset = 0;
  const chartData = {
    labels,
    datasets: [
      {
        label: '입금 금액',
        data: dataValues,
        backgroundColor: labels.map((_, i) => COLOR_PALETTE[(i + colorOffset) % COLOR_PALETTE.length]),
        hoverOffset: 4,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    animation: {
      duration: 2000,
      easing: 'easeOutQuart',
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '이 달의 수입',
        font: {
          size: 15,
        },
        padding: {
          top: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed || 0;
            return `${label}: ${value.toLocaleString()} 원`;
          },
        },
      },
    },
  };
  
  
  return (
    <div style={{ width: '250px', height: '250px', margin: 'auto' }}>
        
      {incomeData.length > 0 ? (
        <Doughnut data={chartData} options={chartOptions} />
      ) : (
        <NoDataBox>
        <FiInbox size={40} style={{ marginBottom: '0.5rem' }} />
        아직 거래 내역이 없어요.
      </NoDataBox>
      )}
    </div>
  );
};

export default IncomeChart;
