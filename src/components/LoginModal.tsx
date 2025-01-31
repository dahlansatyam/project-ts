import React, { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ArrowLeftIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Button, Form, Input } from "./forms";
import { useForm } from "react-hook-form";
import OtpInput from "react-otp-input";
import { getFetcher, postFetcher } from "@/service";
import { toast, ToastContainer } from "react-toastify";
import { PhoneAuthProvider, RecaptchaVerifier, getAuth, onAuthStateChanged, signInWithCredential, signInWithPhoneNumber } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { useAuth } from "./contexts/AuthProvider";
import { FaArrowRight } from "react-icons/fa";
import { ImCross } from "react-icons/im";

type Props = {
  isOpen?: boolean;
  setIsOpen: any;
  setIsLogged: any;
};

function LoginModal({ isOpen, setIsOpen, setIsLogged }: Props) {
  const [step, setStep] = useState(1);
  const [error, setError] = useState<any>();
  const [mobileNumber, setMobileNumber] = useState<any>();
  const [otpValue, setOtpValue] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerficationCode] = useState('');
  const [recaptcha, setrecaptcha] = useState('');
  const [verificationId, setVerficationId] = useState('');
  const [token, setToken] = useState('');
  const [signed, setSigned] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const { setuserIsLogged } = useAuth();
  const closeModal = () => {
    setIsOpen(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const firebaseConfig = {

    apiKey: "AIzaSyCB1gF8RPB2MkMMSq1FBeOw61VOHdoqp7Y",
  
    authDomain: "astrotalk-3ed3b.firebaseapp.com",
  
    projectId: "astrotalk-3ed3b",
  
    storageBucket: "astrotalk-3ed3b.appspot.com",
  
    messagingSenderId: "871346163694",
  
    appId: "1:871346163694:web:4bc8bfa2e316529fd508ff",
  
    measurementId: "G-JZ1Z6JRJ06"
  
  };
  
  
  firebase.initializeApp(firebaseConfig);


  const onSubmit1 = async (data: any) => {
    const body = JSON.stringify({ mobileNumber: data.mobileNumber });
    const phone = "+91" + data.mobileNumber;

    setPhoneNumber(phone);
    const recaptchaVerfier = new RecaptchaVerifier(getAuth(), 'send-code-button', { size: 'invisible' });

    onAuthStateChanged(getAuth(), (userCred) => {
      userCred?.getIdToken().then((token) => {
        window.localStorage.setItem('auth', 'true');

        setToken(token);
      }

      );

    });

    signInWithPhoneNumber(getAuth(), phone, recaptchaVerfier)
      .then((verificationId) => {
        console.log('confirmation : ' + JSON.stringify(verificationId));

        setVerficationId(verificationId.verificationId);
        setMobileNumber(data.mobileNumber);
        setStep(2);
      })
      .catch((error) => {

        console.error(error);
      });

    if (step == 1) {
      setStep(3);
    }

    /* const result = await postFetcher("/otp/generate-otp", body);
     if (result.msg === "Otp has been sent successfully on your mobile number") {
       setMobileNumber(data.mobileNumber);
       setStep(2);
     } else {
       setError(result.msg);
     } */
  };


  const onSubmit2 = async (data: any) => {
    console.log("ddaya", data);
    const body = JSON.stringify({
      name: data.firstName + " " + data.lastName,
      mobileNumber: mobileNumber,
    });
    const result = await postFetcher("/auth/profile-update", body, "PUT");
    if (result?.msg === "updated successfully") {
      closeModal();
      toast.success("Updated successfully");
    } else {
    }
  };

  const handleSubmitOtp = async () => {

    var credential = PhoneAuthProvider.credential(verificationId, otpValue);
    const result = await signInWithCredential(getAuth(), credential).then(
      () => {
        setSigned(true);

      }
    ).catch(
      (error) => {
        console.log("serror" + error);
        toast.error("Otp Not Matched");
      }
    );


  }
  const handleChange = (otp: any) => {

    setOtpValue(otp);
    setVerficationCode(otp);
  };



  // const result = await postFetcher("/verify-otp", body);
  // if (result.msg === "Otp verified successfully") {


  //  else if (
  //   response.msg === "login successfully" &&
  //   !response.existingUser
  // ) {
  //   setStep(3);
  // } else {
  //   setError("Please try after sometime");
  // }
  // }
  /*  } catch (err) {
      console.log(err);
    }
    */

  useEffect(() => {
    if (signed) {
      const body = JSON.stringify({
        token: token,
        mobileNumber: mobileNumber,
      });
      setStep(4);
      console.log("signed ", signed);
      console.log("tokensend", token);
      const login = async () => {
        console.log("authsignin");
        const response = await postFetcher("/auth/sign-in", body);

        if (response?.message === "Loggedin") {
          console.log("res " + JSON.stringify(response));
          closeModal();
          toast.success("Login successfully");
          setIsLogged(true);
          setSigned(false);
          setuserIsLogged(true);
          if (response?.user) {
            localStorage.setItem("walletbalance", response?.user.walletbalance);
          }


        } else {
          toast.error(response.message);
        }
      }
      login();
    }

  }, [signed, token, mobileNumber, closeModal, setIsLogged, setSigned]);

  return (
    <>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#7d7d7d] opacity-[50%] blur-2xl" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {step === 1 ? (
                  <Dialog.Panel className="w-full max-w-sm transform space-y-6 overflow-hidden rounded-2xl bg-[#FFF] text-left align-middle shadow-xl transition-all lg:max-w-lg">
                    <Dialog.Title
                      as="h3"
                      className="text-dark bg-primary relative bg-[#DC6563] py-4 text-lg font-medium leading-6"
                    >
                      <p className="text-center text-white">
                        Continue with Phone
                      </p>
                      <div className="absolute right-4 top-5">
                        <ImCross
                          onClick={closeModal}
                          className="w-6 cursor-pointer font-bold text-white hover:text-gray-100"
                        />
                      </div>
                    </Dialog.Title>
                    <div className="p-4 lg:px-12 lg:pb-12">
                      <p className="mx-auto text-center text-[18px]">
                        You will receive a 6 digit
                        <br />
                        code for verification
                      </p>
                      <Form onSubmit={handleSubmit(onSubmit1)}>
                        <div className="mt-5">
                          <Input
                            type="string"
                            id="mobileNumber"
                            placeholder="Enter Phone Number"
                            name="mobileNumber"
                            required={true}
                            maxLength={10}
                            minLength={10}
                            label="Enter your phone number"
                            register={register}
                          />
                        </div>
                        <div className="space-y-2">
                        {" "}
                        <Button
                              id="send-code-button"
                              className="mx-auto w-full rounded-lg bg-gradient-to-b from-[#FF7646] to-[#FF0600] py-2 text-lg font-bold text-white"
                              btnText="GET OTP "
                            />
                          
                          <p className="text-center text-[13px] text-gray-500">
                            By Signing up, you agree to our{" "}
                            <span className="cursor-pointer text-blue-600 underline hover:text-blue-800">
                              Terms of Use
                            </span>{" "}
                            and{" "}
                            <span className="cursor-pointer text-blue-600 underline hover:text-blue-800">
                              Privacy Policy
                            </span>
                          </p>
                        </div>
                      </Form>
                    </div>
                  </Dialog.Panel>
                ) : step === 2 ? (
                  <Dialog.Panel className="w-full max-w-sm transform space-y-6 overflow-hidden rounded-2xl bg-[#FFF7E5] text-left align-middle shadow-xl transition-all lg:max-w-lg">
                    <Dialog.Title
                      as="h3"
                      className="text-dark bg-primary relative bg-[#DC6563] py-2 text-lg font-medium leading-6"
                    >
                      <p className="text-center text-white">Verify Phone</p>
                      <div className="absolute left-4 top-2">
                        <ArrowLeftIcon
                          onClick={() => setStep(1)}
                          className="w-6 cursor-pointer font-bold text-white hover:text-gray-100"
                        />
                      </div>
                    </Dialog.Title>
                    <div className="space-y-6 p-4 lg:px-12 lg:pb-12">
                      <p className="mx-auto text-center text-[18px]">
                        Enter OTP sent to +91-{mobileNumber}
                      </p>

                      <div className="flex w-full justify-center">
                        <OtpInput
                          value={otpValue}
                          onChange={handleChange}
                          renderInput={(props) => <input {...props} />}
                          inputStyle="mr-3 rounded-md border border-gray-500 bg-transparent text-gray-700 text-2xl p-1 w-full text-center"
                          // inputStyle="border-none outline-none"
                          numInputs={6}
                        />
                      </div>
                      <div className="space-y-2">
                        {" "}
                        <Button
                          id="login"
                          onClick={handleSubmitOtp}
                          className="text-dark mx-auto w-full rounded-lg bg-gradient-to-b from-[#fb7038] to-[#df625b] py-2 text-lg font-bold"
                          btnText="Login"
                        />
                      </div>
                    </div>
                  </Dialog.Panel>
                ) : step === 3 ?
                  (
                    <Dialog.Panel className="w-full max-w-sm transform space-y-6 overflow-hidden rounded-2xl bg-[#FFF7E5] text-left align-middle shadow-xl transition-all lg:max-w-lg">
                      <Dialog.Title
                        as="h3"
                        className="text-dark bg-primary relative bg-[#DC6563] py-2 text-lg font-medium leading-6"
                      >
                        <p className="text-center text-white">
                          Sending Otp to your phone
                        </p>
                        <div className="absolute right-4 top-2">
                          <XMarkIcon
                            onClick={closeModal}
                            className="w-6 cursor-pointer font-bold text-white hover:text-gray-100"
                          />
                        </div>
                      </Dialog.Title>
                      <div className="p-4 lg:px-12 lg:pb-12">
                        <p className="mx-auto text-center text-[18px]">
                          Sending Otp to your phone...
                          <br />
                          Wait...
                        </p>
                        <Form>
                          <div className="mt-5 invisible">
                            <Input
                              type="string"
                              id="mobileNumber"
                              placeholder="Enter Phone Number"
                              name="mobileNumber"
                              required={true}
                              maxLength={10}
                              minLength={10}
                              label="Enter your phone number"
                              register={register}
                            />
                          </div>
                          <div className="space-y-2">
                            {" "}
                            <Button
                              id="send-code-button"
                              type="button"
                              onClick={handleSubmit(onSubmit1)}
                              className="text-dark mx-auto w-full rounded-lg bg-gradient-to-b from-[#fb7038] to-[#df625b] py-2 text-lg font-bold invisible"
                              btnText="GET OTP -->"
                            />
                            <p className="text-center text-[13px] text-gray-500">
                              By Signing up, you agree to our{" "}
                              <span className="cursor-pointer text-blue-600 underline hover:text-blue-800">
                                Terms of Use
                              </span>{" "}
                              and{" "}
                              <span className="cursor-pointer text-blue-600 underline hover:text-blue-800">
                                Privacy Policy
                              </span>
                            </p>
                          </div>
                        </Form>
                      </div>
                    </Dialog.Panel>
                  ) : step === 4 ?
                    (
                      <Dialog.Panel className="w-full max-w-sm transform space-y-6 overflow-hidden rounded-2xl bg-[#FFF7E5] text-left align-middle shadow-xl transition-all lg:max-w-lg">
                        <Dialog.Title
                          as="h3"
                          className="text-dark bg-primary relative bg-[#DC6563] py-2 text-lg font-medium leading-6"
                        >
                          <p className="text-center text-white">Verifying OTP</p>
                          <p className="text-center text-white">Wait ...</p>
                          <div className="absolute left-4 top-2">

                          </div>
                        </Dialog.Title>
                        <div className="space-y-6 p-4 lg:px-12 lg:pb-12">
                          <p className="mx-auto text-center text-[18px]">

                          </p>

                          <div className="flex w-full justify-center">

                          </div>
                          <div className="space-y-2">
                            {" "}

                          </div>
                        </div>

                      </Dialog.Panel>
                    ) :
                    (
                      <Dialog.Panel className="w-full max-w-sm transform space-y-6 overflow-hidden rounded-2xl bg-[#FFF7E5] text-left align-middle shadow-xl transition-all lg:max-w-lg">
                        <Dialog.Title
                          as="h3"
                          className="text-dark bg-primary relative bg-[#DC6563] py-2 text-lg font-medium leading-6"
                        >
                          <p className="text-center text-white">Enter Your Name</p>
                          <div className="absolute left-4 top-2">
                            <ArrowLeftIcon
                              onClick={() => setStep(2)}
                              className="w-6 cursor-pointer font-bold text-white hover:text-gray-100"
                            />
                          </div>
                        </Dialog.Title>
                        <div className="p-4 lg:px-12 lg:pb-12">
                          <Form onSubmit={handleSubmit(onSubmit2)}>
                            <div className="">
                              <Input
                                type="string"
                                id="firstName"
                                placeholder=""
                                name="firstName"
                                label="First Name"
                                register={register}
                              />
                            </div>
                            <div className="">
                              <Input
                                type="string"
                                id="lastName"
                                placeholder=""
                                name="lastName"
                                label="Last Name"
                                register={register}
                              />
                            </div>
                            <div className="space-y-2">
                              {" "}
                              <Button
                                type="submit"
                                className="text-dark mx-auto w-full rounded-lg bg-gradient-to-b from-[#fb7038] to-[#df625b] py-2 text-lg font-bold"
                                btnText="Submit"
                              />
                              <p className="text-center text-[13px] text-gray-500">
                                By Signing up, you agree to our{" "}
                                <span className="cursor-pointer text-blue-600 underline hover:text-blue-800">
                                  Terms of Use
                                </span>{" "}
                                and{" "}
                                <span className="cursor-pointer text-blue-600 underline hover:text-blue-800">
                                  Privacy Policy
                                </span>
                              </p>
                            </div>
                          </Form>
                        </div>
                      </Dialog.Panel>
                    )}
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default LoginModal;
