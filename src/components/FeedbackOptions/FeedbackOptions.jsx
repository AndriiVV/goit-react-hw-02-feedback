import styles from "./FeedbackOptions.module.css"

const FeedbackOptions = ({ options, onLeaveFeedback }) => { 
  return (
    <>
      {Object.keys(options).map(key => (
        <button
          onClick={onLeaveFeedback}
          type="button"
          className={styles.button}
          key={key}
          value={key}
        >{key}</button>
      ))}
    </>
  );  
}

export default FeedbackOptions;
