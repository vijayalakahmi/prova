import './StatItem.scss';

function StatItem({ value, label }) {
  return (
    <div className="stat-item">
      <span className="stat-item__value">{value}</span>
      <span className="stat-item__label">{label}</span>
    </div>
  );
}

export default StatItem;
