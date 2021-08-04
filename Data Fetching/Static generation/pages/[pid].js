import fs from "fs/promises";
import path from "path";
import { Fragment } from "react";

function ProductDetailPage(props) {
  const { loadedProducts } = props;

  return (
    <Fragment>
      <h1>{loadedProducts.title}</h1>
      <p>{loadedProducts.description}</p>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const products = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProducts: products,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "p1" } },
      { params: { pid: "p2" } },
      { params: { pid: "p3" } },
    ],
    fallback: false, // can be true or blocking ,true for generating only a selected page} or
    // "blocking" for generating page non statically
  };
  //In real world we wont pass the path like this so i will show how it will be passed in another file
}

export default ProductDetailPage;
