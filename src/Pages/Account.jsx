import { Box, Text, Flex, Image, Button, Spacer } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom/dist";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import profilePic from "../assets/profilePic.png";
import { BsFillPersonFill } from "react-icons/bs";
import { HiGift } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { updateUser } from "../slices/User";
import { RxUpdate } from "react-icons/rx";
import { MdModeEdit } from "react-icons/md";

function Account() {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { loading, message, error, user, isAuthectiacted } = useSelector(
    (state) => {
      console.log(state.User);
      return state.User;
    }
  );
  const { name, email, phone, address } = user;
  const [profile, setProfile] = useState({
    name,
    email,
    address,
    phone,
  });

  console.log(profile, "profile");
  console.log(name, "profile");

  useEffect(() => {
    if (!isAuthectiacted) {
      Navigate("/login");
    }
  }, [Navigate, isAuthectiacted]);

  const HandleUpdateBio = (e) => {
    e.preventDefault();
    setIsSent(true);
    const temp = dispatch(updateUser(profile));
    console.log(temp, "temp");
  };

  useEffect(() => {
    if (
      profile.name != name ||
      profile.address != address ||
      profile.phone != phone ||
      profile.email != email
    ) {
      setIsUpdate(true);
      return;
    }
    setIsUpdate(false);
  }, [profile.name, profile.address, profile.phone, profile.email]);
  const detectChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className=" flex mt-[2%] mx-[10%]   flex-row    ">
        <div className="flex flex-col text-left drop-shadow-xl h-full  gap-5 shadow-lg w-fit p-5 rounded-md ">
          <div className="flex flex-col  ">
            <span className="relative">
              <img
                src={user?.avatar?.url}
                alt={user?.name}
                className="w-64 h-64 mix-blend-overlay object-cover rounded-full"
              />
              <MdModeEdit className="absolute top-2 right-2 border shadow-md rounded-full text-primary p-2 backdrop-blur-0 text-2xl focus: cursor-pointer" />
            </span>
            <span className="text-center font-semibold text-2xl font-sans mt-2">
              {profile.name}
            </span>
          </div>

          <span
            onClick={() => setActiveTab(1)}
            className={
              activeTab == 1
                ? " bg-[#3b82f6] text-white p-2 rounded-md drop-shadow-sm cursor-pointer ml-6"
                : "cursor-pointer ml-6"
            }
          >
            {" "}
            <BsFillPersonFill
              className={
                activeTab == 1
                  ? " bg-white text-primary p-2 border border-indigo-200 mr-2 shadow-md inline  rounded-full"
                  : "p-2 border border-indigo-200  rounded-full bg-primary text-white inline mr-2 shadow-md"
              }
              fontSize="1.6rem"
            />
            My info
          </span>
          <span
            onClick={() => setActiveTab(2)}
            className={
              activeTab == 2
                ? " bg-[#3b82f6] text-white p-2 rounded-md drop-shadow-sm cursor-pointer ml-6"
                : "cursor-pointer ml-6"
            }
          >
            <HiGift
              className={
                activeTab == 2
                  ? " bg-white text-primary p-2 border border-indigo-200 mr-2 shadow-md inline  rounded-full"
                  : "p-2 border border-indigo-200  rounded-full bg-primary text-white inline mr-2 shadow-md"
              }
              fontSize="1.6rem"
            />
            Order
          </span>
          <span
            onClick={() => setActiveTab(3)}
            className={
              activeTab == 3
                ? " bg-[#3b82f6] text-white p-2 rounded-md drop-shadow-sm cursor-pointer ml-6"
                : "cursor-pointer ml-6"
            }
          >
            <RiLockPasswordFill
              className={
                activeTab == 3
                  ? " bg-white text-primary p-2 border border-indigo-200 mr-2 shadow-md inline  rounded-full"
                  : "p-2 border border-indigo-200  rounded-full bg-primary text-white inline mr-2 shadow-md"
              }
              fontSize="1.6rem"
            />
            change password
          </span>
          <Link
            to="/update_store"
            onClick={() => setActiveTab(4)}
            className={
              activeTab == 4
                ? " bg-[#3b82f6] text-white p-2 rounded-md drop-shadow-sm cursor-pointer ml-6"
                : "cursor-pointer ml-6"
            }
          >
            <RxUpdate
              className={
                activeTab == 4
                  ? " bg-white text-primary p-2 border border-indigo-200 mr-2 shadow-md inline  rounded-full"
                  : "p-2 border border-indigo-200  rounded-full bg-primary text-white inline mr-2 shadow-md"
              }
              fontSize="1.6rem"
            />
            Update Store
          </Link>
        </div>
        <form
          onSubmit={HandleUpdateBio}
          className={`${
            activeTab == 1 ? "flex" : "hidden"
          }   flex-col p-5 flex-wrap h-full mx-20 w-[60%] gap-10 border rounded-md shadow-md border-indigo-100`}
        >
          <span className="basis-1 text-left font-bold text-4xl">My Bio</span>
          <div className="flex flex-row justify-between ">
            <span className="border-indigo-200 w-[48%] text-left ">
              <h3 className="font-medium text-lg font-sans ">Name</h3>
              <input
                className="border border-indigo-300 p-1  w-full rounded-sm"
                type="text"
                value={profile.name}
                name="name"
                onChange={detectChange}
              />
            </span>
            <span className=" w-[48%] border-indigo-200 text-left">
              <h3 className="font-medium text-lg font-sans ">Email</h3>
              <input
                type="text"
                className="border border-indigo-300 p-1  w-full rounded-sm"
                name="email"
                value={profile.email}
                onChange={detectChange}

              />
            </span>
          </div>

          <div className="flex flex-row justify-between">
            <span className="w-[48%]  border-indigo-200 text-left">
              <h3 className="font-medium text-lg font-sans ">Phone number</h3>
              <input
                type="text"
                className="border border-indigo-300 p-1  w-full rounded-sm"
                name="phone"
                value={profile.phone}
                onChange={detectChange}

              />
            </span>
            <span className="w-[48%]  border-indigo-200 text-left">
              <h3 className="font-medium text-lg font-sans ">
                Alternate number
              </h3>
              <input
                type="text"
                className="border border-indigo-300 p-1  w-full rounded-sm"
                name="phone"
                value={profile.phone}
                onChange={detectChange}

              />
            </span>
          </div>
          <span className="  border-indigo-200 text-left">
            <h3 className="font-medium text-lg font-sans ">Address</h3>

            <textarea
              type="text"
              className="border border-indigo-300 p-1 h-40  w-full rounded-sm"
              name="address"
              value={profile.address}
                onChange={detectChange}

            />
          </span>
          <div className=" h-10">
            {isUpdate && (
              <div className="text-left">
                <button
                  type="submit"
                  className="mr-10 px-6 py-2 bg-primary text-white rounded-md "
                >
                  {isSent ? "Updating..." : "Update"}
                </button>
                <button
                  onClick={() => {
                    setIsUpdate(false);
                    setProfile({ name, email, phone, address });
                  }}
                  className="px-6 py-2 bg-white text-gray-400 outline rounded-md "
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </form>
        <form
          className={`${
            activeTab == 2 ? "flex" : "hidden"
          } h-[70vh] flex-col p-5 flex-wrap mx-20 w-[60%] gap-10 border border-indigo-100`}
        >
          <span className="basis-1 text-left font-bold text-4xl">Order</span>

          {/* complete at the end */}
        </form>
        <form
          className={`${
            activeTab == 3 ? "flex" : "hidden"
          } h-[70vh] flex-col p-5 flex-wrap mx-20 w-[60%] gap-10 border border-indigo-100`}
        >
          <span className="basis-1 text-left font-bold text-4xl">
            Change Password
          </span>

          <span className="w-[40%]  border-indigo-200 text-left">
            <h3 className="font-medium text-lg font-sans ">Old Password</h3>
            <input
              type="password"
              className="border border-indigo-300 p-1  w-full rounded-sm"
              name="phone"
              value={profile.phone}
            />
          </span>
          <span className="w-[40%]  border-indigo-200 text-left">
            <h3 className="font-medium text-lg font-sans ">New Password</h3>
            <input
              type="password"
              className="border border-indigo-300 p-1  w-full rounded-sm"
              name="phone"
              value={profile.phone}
            />
          </span>
          <span className="w-[40%]  border-indigo-200 text-left">
            <h3 className="font-medium text-lg font-sans ">Conform Password</h3>
            <input
              type="password"
              className="border border-indigo-300 p-1  w-full rounded-sm"
              name="phone"
              value={profile.phone}
            />
          </span>
        </form>
      </div>
    </>
  );
}

export default Account;
