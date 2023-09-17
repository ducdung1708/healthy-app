import "./Footer.css"
import React from 'react';
const menuOptions = [
    "会員登録",
    "運営会社",
    "利用規約",
    "個人情報の取扱について",
    "特定商取引法に基づく表記",
    "お問い合わせ",
]
const Footer = () => {
    return (
        <footer >
            {menuOptions.map((text, index) => (
                <span key={index}>{text}</span>
            ))}
        </footer>
    )
}
export default Footer
