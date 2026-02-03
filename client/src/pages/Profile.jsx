import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "..//firebase";
import {
  updateUserFailure,
  updateUserSuccess,
  updateUserStart,
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  signOut,
} from "../redux/user/userSlice";

const Profile = () => {
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagepercent] = useState(0);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSucess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagepercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL }),
        );
      },
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  const handleSignout = async () => {
    try {
      await fetch("api/auth/sign-out");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f7ff] p-6">
      <div className="max-w-lg mx-auto bg-white/60 backdrop-blur-md p-8 rounded-[2.5rem] shadow-xl shadow-blue-100 border border-white">
        <h1 className="text-3xl font-light text-center mb-8 text-blue-900">
          Your Sanctuary
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <div className="relative self-center group">
            <img
              src={formData.profilePicture || currentUser.profilePicture}
              alt="profile"
              className="h-28 w-28 rounded-full object-cover border-4 border-white shadow-md cursor-pointer group-hover:opacity-80 transition-all"
              onClick={() => fileRef.current.click()}
            />
            <div className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-white text-xs shadow-lg pointer-events-none">
              ✎
            </div>
          </div>

          <p className="text-sm self-center font-medium">
            {imageError ? (
              <span className="text-rose-400 italic text-center block">
                Something went wrong. (Keep file under 2MB)
              </span>
            ) : imagePercent > 0 && imagePercent < 100 ? (
              <span className="text-blue-500">{`Uploading: ${imagePercent}%`}</span>
            ) : imagePercent === 100 ? (
              <span className="text-emerald-500">
                Identity updated successfully
              </span>
            ) : null}
          </p>

          <div className="space-y-3">
            <input
              defaultValue={currentUser.username}
              type="text"
              id="username"
              placeholder="Username"
              className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
              onChange={handleChange}
            />
            <input
              defaultValue={currentUser.email}
              type="email"
              id="email"
              placeholder="Email"
              className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              placeholder="New Password (Keep it secure)"
              className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
              onChange={handleChange}
            />
          </div>

          <button
            disabled={loading}
            className="bg-blue-600 text-white rounded-2xl p-4 font-medium hover:bg-blue-700 disabled:bg-blue-300 transition-all shadow-lg shadow-blue-200 uppercase tracking-widest text-sm"
          >
            {loading ? "Processing..." : "Save Changes"}
          </button>
        </form>

        <div className="flex justify-between mt-10 px-2">
          <span
            onClick={handleDeleteAccount}
            className="text-rose-400 text-sm font-medium cursor-pointer hover:text-rose-600 transition-colors"
          >
            Leave Community (Delete)
          </span>
          <span
            onClick={handleSignout}
            className="text-blue-400 text-sm font-medium cursor-pointer hover:text-blue-600 transition-colors"
          >
            Rest Now (Sign Out)
          </span>
        </div>

        {error && (
          <p className="text-rose-400 text-center text-sm mt-6 italic font-medium">
            We encountered a small wave (Error). Please try again.
          </p>
        )}
        {updateSucess && (
          <p className="text-emerald-500 text-center text-sm mt-6 font-medium">
            Your sanctuary settings have been updated.
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
