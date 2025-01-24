import CarList from "@/components/main/carList";
import { CheckboxReactHookFormMultiple } from "@/components/sub/sideBar";

const Page = () => {
  return (
    <main className="wrapper flex justify-center">
      {/* Left sidebar */}
      <div className="basis-2/12 lg:block hidden">
        {/* Type */}
        <div className="mt-10">
          <CheckboxReactHookFormMultiple />
        </div>
      </div>

      {/* Right side */}
      <div className="basis-10/12">
        <CarList /> {/* Render the client component */}
      </div>
    </main>
  );
};

export default Page;
