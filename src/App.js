import "./App.css";
import { Route, Routes } from "react-router-dom";
import TripPlanner from "./page/TripPlanner/TripPlanner";
import ContactUs from "./page/ContactUs";
import Header from "./NavbarComponent/Header";
import HomePage from "./page/HomePage";
import AddLocation from "./LocationComponent/AddLocation";
import AddFacility from "./FacilityComponent/AddFacility";
import AddHotelForm from "./HotelComponent/AddHotelForm";
import UserRegister from "./UserComponent/UserRegister";
import Hotel from "./HotelComponent/Hotel";
import AddHotelFacilities from "./FacilityComponent/AddHotelFacilities";
import AddHotelReview from "./HotelReviewComponent/AddHotelReview";
import UserLoginForm from "./UserComponent/UserLoginForm";
import ViewAllBooking from "./BookingComponent/ViewAllBooking";
import ViewMyBooking from "./BookingComponent/ViewMyBooking";
import ViewMyHotelBookings from "./BookingComponent/ViewMyHotelBookings";
import VerifyBooking from "./BookingComponent/VerifyBooking";
import Landing from './page/landing/landing';
import Payment from "./Payment/Payment";
import ListEmployeeComponent from "./page/AdminDashboard/ListEmployeeComponent";
import ViewEmployeeComponent from "./page/AdminDashboard/ViewEmployeeComponent";
import CreateEmployeeComponent from "./page/AdminDashboard/CreateEmployeeComponent";
import OTP from "./UserComponent/OTP";
import CurrencyConverter from "./Payment/CurrencyConverter"
import Test from "./Payment/test";
import AnotherComponent from "./Payment/AnotherComponent";
import { useState } from "react";
import ForgetPassword from "../src/page/ForgetPassword/ForgetPassword";




function App() {
  const [totalAmount, setTotalAmount] = useState(0);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admindashb" element={<ListEmployeeComponent />} />
        <Route path="/admindashb/add-employee" element={<CreateEmployeeComponent />} />
        <Route path="/admindashb/view-employee/:id" element={<ViewEmployeeComponent />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/pay" element={<Payment total={totalAmount} />} />
        <Route path="/OTP" element={<OTP />} />
  
       

        <Route path="/currencyC" element={<CurrencyConverter />} />
        <Route path="/forgetP" element={<ForgetPassword />} />

        <Route path="/home/all/hotel/location" element={<HomePage />} />
        <Route
          path="/home/hotel/location/:locationId/:locationName"
          element={<HomePage />}
        />
        <Route path="contact" element={<ContactUs />} />
        <Route path="TripPlanner" element={<TripPlanner />} />
        <Route path="admin/add-location" element={<AddLocation />} />
        <Route path="admin/add-facility" element={<AddFacility />} />
        <Route path="admin/hotel/register" element={<AddHotelForm />} />
        <Route path="user/hotel/register" element={<UserRegister />} />
        <Route path="user/customer/register" element={<UserRegister />} />
        <Route path="user/admin/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route
          path="/home/hotel/location/:locationId/:locationName"
          element={<HomePage />}
        />
        <Route
          path="hotel/:hotelId/add/facility"
          element={<AddHotelFacilities />}
        />
        <Route
          path="hotel/:hotelId/location/:locationId/add/review"
          element={<AddHotelReview />}
        />
        <Route
          path="/hotel/:hotelId/location/:locationId"
          element={<Hotel setTotal={setTotalAmount} />}
        />
        <Route path="user/admin/booking/all" element={<ViewAllBooking />} />
        <Route path="user/hotel/bookings" element={<ViewMyBooking />} />
        <Route
          path="user/hotel/bookings/all"
          element={<ViewMyHotelBookings />}
        />
        <Route
          path="/hotel/verify/booking/:bookingId"
          element={<VerifyBooking />}
        />
        <Route path="/test" element={<Test />} />
        <Route path="/another" element={<AnotherComponent />} />
      </Routes>
    </div>
  );
}

export default App;
