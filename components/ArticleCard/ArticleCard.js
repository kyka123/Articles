import styles from './ArticleCard.module.css'

import Image from 'next/image'


const ArticleCard = ({image="", title="",...props}) => (
    <div className={styles.wrapper} {...props}>
    <img src={`/assets/${image}`} className={styles.image}/>
    {/* <Image
        src={image}
        alt="Picture of the author"
        layout="fill"
        className={styles.image}
        /> */}
    <h3 className={styles.title}>{title}</h3>
    </div>
)

export default ArticleCard;