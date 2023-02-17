import React from 'react'
import Banner1 from '../img/acun.png'
import Banner2 from '../img/hullcity.png'
import Banner3 from '../img/ece-pulas.png'
import Banner4 from '../img/halilbedir.png'
import Banner5 from '../img/afsar-akal.png'

const MainContent = () => {
    return (
        <div className='main-content'>
            <h1 className='mb-0 pb-3'>Basında Biz</h1>
            <h3 className='mb-0 main-content-subtitle mt-3'>Tomya'yla Geçmişten Geleceğe Tüm Haberler</h3>
            <div className='mt-5'>
                <div className='d-flex flex-column news-card'>
                    <h5>Acun Ilıcalı'nın takımı Hull City'e Türk kripto para borsası sponsor oldu</h5>
                    <img src={Banner1} alt="Banner" className='shadow rounded mt-3' />
                    <a href="https://www.ntv.com.tr/ekonomi/acun-ilicalinin-takimi-hull-citye-turk-kripto-para-borsasi-sponsor-oldu,CBhWWEMGu0aWXMIzJp4xNw" target="_blank" className='card-link mt-4'>Haberin Devamı</a>
                </div>
                <div className='d-flex flex-column news-card mt-5'>
                    <h5>Tomya borsası Hull City formasına sponsor oldu</h5>
                    <img src={Banner2} alt="Banner" className='shadow rounded mt-3' />
                    <a href="https://www.donanimhaber.com/tomya-borsasindan-surpriz--150541" target="_blank" className='card-link mt-4'>Haberin Devamı</a>
                </div>
                <div className='d-flex flex-column news-card mt-5'>
                    <h5>Ece Pulaş'a yeni görev</h5>
                    <img src={Banner3} alt="Banner" className='shadow rounded mt-3' />
                    <a href="http://www.gazeteekonomi.com/ekonomi-finans/ece-pulas-a-yeni-gorev-h585590.html" target="_blank" className='card-link mt-4'>Haberin Devamı</a>
                </div>
                <div className='d-flex flex-column news-card mt-5'>
                    <h5>Tomya'nın yeni Genel Müdür Yardımcısı Ece Pulaş oldu</h5>
                    <img src={Banner3} alt="Banner" className='shadow rounded mt-3' />
                    <a href="https://www.dunya.com/sirketler/tomyanin-yeni-genel-mudur-yardimcisi-ece-pulas-oldu-haberi-663211" target="_blank" className='card-link mt-4'>Haberin Devamı</a>
                </div>
                <div className='d-flex flex-column news-card mt-5'>
                    <h5>Kripto borsası TOMYA: "Yatırımcıların platform seçerken dikkatli olması gerekiyor"</h5>
                    <img src={Banner4} alt="Banner" className='shadow rounded mt-3' />
                    <a href="https://www.ntv.com.tr/ekonomi/kripto-borsasi-tomya-yatirimcilarin-platform-secerken-dikkatli-olmasi-gerekiyor,WgLFz9vpd0iqrHIcJ45uIQ" target="_blank" className='card-link mt-4'>Haberin Devamı</a>
                </div>
                <div className='d-flex flex-column news-card mt-5'>
                    <h5>Tomya CEO’su Afşar Akal: Kesintisiz hizmet sunmayı ilke edindik</h5>
                    <img src={Banner5} alt="Banner" className='shadow rounded mt-3' />
                    <a href="https://uzmancoin.com/kripto-para-tomya-afsar-akal/" target="_blank" className='card-link mt-4'>Haberin Devamı</a>
                </div>
            </div>
        </div>
    )
}

export default MainContent;