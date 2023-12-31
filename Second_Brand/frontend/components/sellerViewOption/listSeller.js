import React from "react";
import ItemList from "../itemList";

function ListSeller({ transactions }) {
  const listsize = Object.keys(transactions).length;
  return (
    <>
      {listsize > 0 ? (
        <div>
          {transactions.map((transaction,key) => (
            <li key={key}>
              <ItemList product={transaction}/>
            </li>
          ))}
        </div>
      ) : (
        <div className="text-center d-flex flex-column justify-items-center py-5 ">
          <img
            className="mx-auto"
            src="empty-seller.svg"
            alt="No Item Available"
            style={{ width: "45%" }}
          />
          <p className="m-0 pt-5">
            Belum ada produk nih, sabar ya rejeki nggak kemana kok
          </p>
        </div>
      )}
    </>
  );
}

export default ListSeller;
