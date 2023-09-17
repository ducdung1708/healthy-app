import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import MyPage from "./pages/MyPage"
import MyRecord from "./pages/MyRecord"
import MyColumn from "./pages/MyColumn"
import ComingSoon from "./pages/ComingSoon"

function App() {
    return (
        <div className="App">
            {/* header */}
            <Header />
            {/* danh sách các trang và dùng router để định tuyến */}
            <Routes>
                {/* trang chủ */}
                <Route path="/" element={<MyPage />} />
                {/* my record */}
                <Route path="/myrecord" element={<MyRecord />} />
                {/* my column */}
                <Route path="/mycolumn" element={<MyColumn />} />
                {/* comingsoon */}
                <Route path="/comingsoon" element={<ComingSoon />} />
            </Routes>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default App
