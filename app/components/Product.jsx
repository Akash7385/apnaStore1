import React from "react";
import Image from "next/image";
import Giftboxes from "../../../public/red-gift-box.webp";
import Electronic from "../../../public/electonics.jpg";
import Fashion from "../../../public/fashion.webp";
import Jewellery from "../../../public/jewellery.webp";
function Product() {
  return (
    <>
      <div className="flex   ml-16  gap-12 mt-28   overflow-x-auto">
        <div className="">
          <Image src={Giftboxes} height={100} />

          <p>All Products</p>
        </div>

        <div className="">
          <Image src={Electronic} height={100} />
          <p>Electronics</p>
        </div>

        <div className="">
          <Image src={Fashion} height={100} />
          <p>Fashion</p>
        </div>

        <div>
          <Image src={Jewellery} height={100} />
          <p>Jewelery</p>
        </div>

        <div>
          <Image src={Electronic} height={100} />
          <p>Jewelery</p>
        </div>

        <div>
          <Image src={Jewellery} height={100} />
          <p>Jewelery</p>
        </div>

        <div>
          <Image src={Giftboxes} height={100} />
          <p>Jewelery</p>
        </div>

        <div>
          <Image src={Fashion} height={100} />
          <p>Jewelery</p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Product;
