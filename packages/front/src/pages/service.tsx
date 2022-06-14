import { Layout } from '@/components/Layout/Layout';
import { login } from '@global/slices/user';
import { useState } from 'react';
import { useDispatch } from 'react-redux';



const Page = () => {
  return (
  <div className="service">
    <div className="key">
    <img src="/img/2.png"></img>
    <p>Подбор автомобиля под ключ</p>
    </div>
    <div className="day">
    <p>Выездная комплексная диагностика автомобиля</p>
    <img src="/img/4.png"></img>
    </div>
    <div className="speed">
    <img src="/img/3.png"></img>
    <p>Экспресс подбор</p>
    </div>
    <div className="exp">
    <p>Эксперт на день для проверки комплексной диагностики</p>
    <img src="/img/5.png"></img>
    </div>
    </div>
    );
};

export default Page;