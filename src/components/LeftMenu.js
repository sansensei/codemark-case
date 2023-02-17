import React from 'react'

const LeftMenu = () => {
    return (
        <>
            <ul className='list-unstyled left-menu'>
                <li>
                    <a href="#">Sıkça Sorulan Sorular</a>
                </li>
                <li>
                    <a href="#">Kripto Hesaplayıcı</a>
                </li>
                <li>
                    <a href="#">Kripto Sözlük</a>
                </li>
                <li>
                    <a href="#" className='active'>Basında Biz</a>
                </li>
                <li>
                    <a href="#">Duyurular</a>
                </li>
                <li>
                    <a href="#">Limitler</a>
                </li>
                <li>
                    <a href="#">Para Yatırma ve Çekme Platformları</a>
                </li>
                <li>
                    <a href="#">Kara Para Aklamayı Önleme Politikası</a>
                </li>
                <li>
                    <a href="#">Müşterini Tanı (KYC) Politikası</a>
                </li>
            </ul>
        </>
    )
}

export default LeftMenu;