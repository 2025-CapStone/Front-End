import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Layout/Header";
import Layout from "./Layout/Layout";
import ClubListPage from "./Club/ClubListPage";
import Login from "./User/Login";
import Signup from "./User/Singup";
import Main from "./Main/Main";
import Section from "./Main/SectionOne";
import ClubDetailPage from "./Club/ClubDetailPage";
import ClubCalendarPage from "./Club/ClubCalendarPage";
import TransactionTable from "./Club/Budget/TrasactionTable";
import BudgetDashBoard from "./Club/Budget/BudgetDashBoard";
import Match from "./Match/Match";
import MatchDashBoard from "./Match/MatchDashBoard";
import MembershipTable from "./Club/Membership/MembershipTable";
import NotificationPage from "./User/Notification/NotificationPage";
import { NotificationProvider } from "./User/Notification/NotificationContext";

import NewClubPage from "./Club/NewClub/NewClubPage";
import NewClubStepOne from "./Club/NewClub/NewClubStepOne";
import NewClubStepTwo from"./Club/NewClub/NewClubStepTwo";
import NewClubStepThree from "./Club/NewClub/NewClubStepThree";
import LandingPage from "./Main/LandingPage";

import AccountSetupPage from "./Club/Budget/AccountSetupPage";
import BudgetReportPage from "./Club/Report/BudgetReportPage";

import MyPage from "./User/MyPage";
import Tourpage from "./tour/TourPage";
const App = () => {
  return (
    <NotificationProvider>  
      <Header /> {/* 항상 보이게 */}
      <Routes>
        {/* 메인/회원가입/로그인 */}
    
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tour" element={<Tourpage/>}/>

        {/* 클럽 리스트는 단독 페이지 */}
        <Route path="/clubs" element={<ClubListPage />} />

        {/* 클럽 추가 페이지 */}
        <Route path="/new/club" element={<NewClubPage/>}/>
        <Route path="/new/club/step1" element={<NewClubStepOne/>}/>
        <Route path="/new/club/step2" element={<NewClubStepTwo/>}/>
        <Route path="/new/club/step3" element={<NewClubStepThree/>}/>

        {/* 알림도 Header만 있는 단독 페이지 */}
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/mypage/:userId" element={<MyPage/>}/>

        {/* 클럽 상세 페이지 이하 모든 경로에는 Layout 적용 (→ 사이드바 포함됨) */}
        <Route path="/clubs/:clubId/*" element={<Layout />}>
          <Route index element={<ClubDetailPage />} />
          <Route path="account_setup" element={ <AccountSetupPage/>} />
          <Route path="budget_dashboard" element={<BudgetDashBoard />} />
          <Route path="calendar" element={<ClubCalendarPage />} />
          <Route path="budget_detail" element={<TransactionTable />} />
          <Route path="event" element={<MatchDashBoard />} />
          <Route path="event/:eventId" element={<Match />} />
          <Route path="membership_detail" element={<MembershipTable />} />
          <Route path="report/budget" element={<BudgetReportPage/>}/>
        </Route>
      </Routes>
    </NotificationProvider>

  );
};


export default App;
