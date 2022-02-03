import styles from "./Statistics.module.css"

const Statistics = ({good, neutral, bad, total, positivePercentage}) => { 
  
  return (
    
    <ul className={styles.statistics}>
      <li>Good: <span>{good}</span></li>
      <li>Neutral: <span>{neutral}</span></li>
      <li>Bad: <span>{bad}</span></li>
      <li>Total: <span>{total}</span></li>
      <li>Positive feedbacks: <span>{positivePercentage}</span>%</li>
    </ul>
    
  );
  
}

export default Statistics;