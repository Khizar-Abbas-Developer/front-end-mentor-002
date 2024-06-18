import Image from "next/image";
import QueryForm from "./(components)/QueryForm/QueryForm";

export default function Home() {
  return (
    <>

      <div className="bg-[#E0F1E7] flex justify-center items-center h-[100vh]">
        <QueryForm />
      </div>
    </>
  )
}
