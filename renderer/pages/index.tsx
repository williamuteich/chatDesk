import { useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => {
  useEffect(() => {
    const handleMessage = (_event, args) => alert(args);

    // listen to the 'message' channel
    window.electron.receiveHello(handleMessage);

    return () => {
      window.electron.stopReceivingHello(handleMessage);
    };
  }, []);

  const onSayHiClick = () => {
    window.electron.sayHello();
  };

  return (
    <Layout title="ChatDesk">
      <h1>aqui é um titulo principasl</h1>
      <button onClick={onSayHiClick}>Adicionar algo</button>
      <p>
        <Link href="/about">footer aqui</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
