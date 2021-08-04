import fs from "fs/promises"; //fs is one of core Nodejs module which is available in nextjs
import path from "path"; //also nodejs module is use to help us in finding path
import Link from "next/link";

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  //getStaticProps will seperate client side code and fs import since we can't use fs in client side
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json"); //cwd is current working directory
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 10, // will regenerate every 10 sec (can pass any time in sec you want it to re fetch the data)
    // notFound: true, will give an 404 error instead of this page
  };
}

export default HomePage;
