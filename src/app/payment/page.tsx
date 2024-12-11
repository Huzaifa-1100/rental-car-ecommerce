import { CheckboxDemo } from "@/components/main/checkBox";
import FormHeader from "@/components/main/formHeader";
import Input from "@/components/main/input";
import RadioButton from "@/components/main/radioButton";
import SelectInput from "@/components/main/selectInput";
import Button from "@/components/sub/button";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";

const Page = () => {
  return (
    <div className="wrapper lg:flex bg-bg gap-5 flex-row-reverse  ">


      {/* right hand side */}
      <div className="container  w-full max-h-fit basis-4/12 ">
        <FormHeader
          para="Prices may change depending on the length of the rental and the price of your rental car."
          title="Rental Summary"
        />
        <div className=" ">
          <div className="flex items-center gap-2 ">
            <Image
              src={"/payment/car1.png"}
              alt="Car"
              width={132}
              height={108}
              className=" max-w-[132px]  max-h-[108px]"
            />

            <div className="flex flex-col space-y-4 items-start">
              <h2 className="text-secondary500 jakarta-text text-lg md:text-3xl tracking-tighter ">
                Nissan GT - R
              </h2>
              <div className="flex gap-1 items-center">
                {[1, 2, 3, 4].map((_, i) => (
                  <FaStar key={i} className="text-[#FBAD39] size-2 md:size-4" />
                ))}
                <FaRegStar className="size-2 md:size-4" />
                <p className="text-secondary300 tracking-tighter jakarta-small ">440+ Reviewer</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center border-t mt-5 py-4">
            <p className="para">Subtotal</p>
            <p className="font-semibold text-[16px] leading-6 tracking-tight ">
              $80.00
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="para">Tax</p>
            <p className="font-semibold text-[16px] leading-6 tracking-tight">
              $0
            </p>
          </div>
          <div className="rounded-[10px] flex items-center justify-between bg-bg  p-4 my-5  w-full">
            <div>
              {" "}
              <input className="bg-bg" type="text" placeholder="Apply promo code" />
            </div>
            <button className="text-xs md:text-sm font-bold">Apply Now</button>
          </div>
          <div className="flex justify-between items-end gap-1">
            <div className="space-y-1">
              <h2 className="jakarta-pickup tracking-tighter ">
                Total Rental Price
              </h2>
              <p className="jakarta-small text-secondary300">Overall price and includes rental discount</p>
            </div>
            <p className="jakarta-cardHeading tracking-tighter">
              $80.00
            </p>
          </div>
        </div>
      </div>


            {/* Left Hand side */}
            <div className="basis-8/12 w-full">
        <div className="container ">
          <FormHeader
            para="Please enter your billing info   "
            stepNum={1}
            title="billing info"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            <Input
              label="Name"
              placeholder="Your name"
              isPaymentMethod={false}
            />
            <Input
              label="Phone number"
              placeholder="Phone number"
              isPaymentMethod={false}
            />
            <Input
              label="Address"
              placeholder="Address"
              isPaymentMethod={false}
            />
            <Input
              label="Town/City"
              placeholder="Town or city"
              isPaymentMethod={false}
            />
          </div>
        </div>

        {/* Rental Info */}
        <div className="container">
          <FormHeader
            para="Please select your rental date"
            stepNum={2}
            title="rental info"
          />
          <div>
            {/* Pickup */}
            <div className="my-4">
              <RadioButton option="Pick - Up" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                <SelectInput
                  label="Locations"
                  placeholder="Select a location"
                  options={[
                    "New York",
                    "Los Angeles",
                    "Chicago",
                    "Houston",
                    "Phoenix",
                  ]}
                />
                <SelectInput
                  label="Date"
                  placeholder="Select a date"
                  options={[
                    "2023-01-01",
                    "2023-01-02",
                    "2023-01-03",
                    "2023-01-04",
                    "2023-01-05",
                  ]}
                />
                <SelectInput
                  label="Time"
                  placeholder="Select a time"
                  options={[
                    "9:00 AM",
                    "10:00 AM",
                    "11:00 AM",
                    "12:00 PM",
                    "1:00 PM",
                  ]}
                />
              </div>
            </div>
            {/* drop of */}
            <div className="my-4">
              <RadioButton option="Drop - Off" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                <SelectInput
                  label="Locations"
                  placeholder="Select a location"
                  options={[
                    "New York",
                    "Los Angeles",
                    "Chicago",
                    "Houston",
                    "Phoenix",
                  ]}
                />
                <SelectInput
                  label="Date"
                  placeholder="Select a date"
                  options={[
                    "2023-01-01",
                    "2023-01-02",
                    "2023-01-03",
                    "2023-01-04",
                    "2023-01-05",
                  ]}
                />
                <SelectInput
                  label="Time"
                  placeholder="Select a time"
                  options={[
                    "9:00 AM",
                    "10:00 AM",
                    "11:00 AM",
                    "12:00 PM",
                    "1:00 PM",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="container">
          <FormHeader
            para="Please enter your payment method"
            stepNum={3}
            title="Payment Method"
          />
          <div className="nestedContainer">
            <RadioButton option="Credit Card" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
              <Input
                label="Name"
                placeholder="Your name"
                isPaymentMethod={true}
              />
              <Input
                label="Phone number"
                placeholder="Phone number"
                isPaymentMethod={true}
              />
              <Input
                label="Address"
                placeholder="Address"
                isPaymentMethod={true}
              />
              <Input
                label="Town/City"
                placeholder="Town or city"
                isPaymentMethod={true}
              />
            </div>
          </div>

          {/* Pyapal */}
          <div className="nestedContainer flex justify-between">
            <RadioButton option="PayPal" />
            <Image
              src={"/payment/Paypal.png"}
              alt={"Paypal"}
              height={24}
              width={100}
            />
          </div>

          {/* Bitcoin */}
          <div className="nestedContainer flex justify-between">
            <RadioButton option="Bitcoin" />
            <Image
              src={"/payment/Bitcoin.png"}
              alt={"Bitcoin"}
              height={24}
              width={100}
            />
          </div>
        </div>
        {/* Confirmationl */}
        <div className="container">
          <FormHeader
            title={"Confirmation"}
            para={
              "We are getting to the end. Just few clicks and your rental is ready!"
            }
            stepNum={4}
          />
          <div className="nestedContainer">
            <CheckboxDemo
              label={
                "I agree with sending an Marketing and newsletter emails. No spam, promissed!"
              }
            />
          </div>
          <div className="nestedContainer">
            <CheckboxDemo
              label={
                "I agree with our terms and conditions and privacy policy."
              }
            />
          </div>
          <Button text={"Rent Now"} url={"#"} />

          <div className="py-5">
            <Image src={"/payment/safety.png"} alt={"safety"} width={32} height={32}/>
            <h2 className="jakarta-addButton text-secondary500 my-3">All your data are safe</h2>
            <p className="text-secondary300 jakarta-small font-medium">We are using the most advanced security to provide you the best experience ever.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
