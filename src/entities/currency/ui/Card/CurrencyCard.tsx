import { CurrencyMetadata } from "@/entities/currency/model";
import { FC } from "react";
import Image from "next/image";
import styles from "./CurrencyCard.module.scss";

type CardProps = {
  data: CurrencyMetadata;
}

export const Card: FC<CardProps> = (props) => {
  const { data } = props;
  console.log(data.logoUrl);

  return (
    <div className={styles.card}>
      <section className={styles.card__flex}>
        <Image src={data.logoUrl} alt={"coin logo"} width={64} height={64} />
        <section>
          <h2>{data.name}</h2>
          <h4>{data.symbol}</h4>
        </section>
      </section>
      <p>{data.description}</p>
      <section className={styles.card__tags}>
        {
          data.tags.map((tag, index) => {
            return <span key={index} className={styles.card__tag}>{tag}</span>;
          })
        }
      </section>
    </div>
  );
};
