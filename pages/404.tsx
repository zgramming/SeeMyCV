import { HomeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/router";

const Page = () => {
  const { query, replace } = useRouter();
  const { username } = query;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-10 bg-default-primary text-white">
      <div className="text-center text-4xl font-bold">
        Username {`${username}`} tidak ditemukan
      </div>
      <Button
        type="ghost"
        size="large"
        className="text-white hover:text-white"
        icon={<HomeOutlined />}
        onClick={(e) => replace("/")}
      >
        Kembali ke beranda
      </Button>
    </div>
  );
};

export default Page;
