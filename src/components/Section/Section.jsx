import styles from "./Section.module.css"

const Section = ({title, children}) => ( 
  <section>
    <p className={styles.title}>{title}</p>
    {children}
  </section>
)

export default Section;