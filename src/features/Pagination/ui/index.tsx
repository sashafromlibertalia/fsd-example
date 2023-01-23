import React, { FC } from "react";
import styles from "./Pagination.module.scss";
import clsx from "clsx";

type PaginationProps = {
  activePage?: number;
  total: number;
  onChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = (props) => {
  const { activePage = 1, total, onChange } = props;
  const pagesList = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      {
        pagesList.map((page) => {
          return (
            <button key={page} onClick={() => onChange(page)}
              className={clsx(styles.pagination__page, activePage === page && styles.pagination__page_active)}>
              {page}
            </button>);
        })
      }
    </div>
  );
};
