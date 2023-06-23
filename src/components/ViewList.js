import styles from "./ViewList.module.css";

function ViewList({ list, totalDiscount, sum }) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Discount (%)</th>
            <th>Discount ($)</th>
            <th>Total ($)</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.count}</td>
              <td>{item.discount}</td>
              <td>{item.discountPrice.toFixed(2)}</td>
              <td>{item.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.containerTotal}>
        <div className={styles.total}>
          Total Saving: $ {totalDiscount.toFixed(2)}
        </div>
        <div className={styles.total}>Total Price: $ {sum.toFixed(2)} </div>
      </div>
    </div>
  );
}

export default ViewList;
