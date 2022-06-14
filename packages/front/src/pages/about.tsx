import { Layout } from '@/components/Layout/Layout';
import { login } from '@global/slices/user';
import { useState } from 'react';
import { useDispatch } from 'react-redux';



const Page = () => {
  return (
    <div className="aba">
    <canvas id="myChart"></canvas>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.8.0/chart.js"></script>
        <div className="map">
            <h1>Мы находимся здесь!</h1>
            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5a0f680004737da1c1293e9744fcb57404f7ad1920ddc452efd31f49f09a1918&amp;width=1280&amp;height=720&amp;lang=ru_RU&amp;scroll=true"></script>
            <a href="tel:+79153212001">+7 (915) 321-20-01</a>
        </div>
    </div>
    );
};

export default Page;