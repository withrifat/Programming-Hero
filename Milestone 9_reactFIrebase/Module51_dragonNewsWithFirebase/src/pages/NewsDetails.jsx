import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import RightAside from '../components/HomeLayout/RightAside';
import NewsDetailsCard from '../components/HomeLayout/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});

    useEffect(()=>{
        const newsDetails = data.find(singleNews=> singleNews.id == id);
        setNews(newsDetails);
    },[data, id])
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-5 md:15 ">
                <section className='col-span-9'>
                    <h2 className="font-bold text-2xl mb-5">News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3 w-full'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;