"use client";

import styles from "./page.module.css";
// import NicolasOfMyra from "./images/nicholas-of-myra.jpg";
// import Image from "next/image";
// import { useState } from "react";

export default function ApostlesPeterAndPaulPage() {            
    return (
        <div className={styles.container}>
            <h1 className={styles.mainHeader}>
                Апостоли Петро і Павло
            </h1>
            <article className={styles.article}>
                <p className={styles.paragraph}>
                    Святий апостол Петро, колишній рибалка, був одним із перших учнів Ісуса Христа. Він став провідником ранньої християнської спільноти та першим єпископом Риму. Петро відомий своєю вірою, але також і своїми сумнівами, що робить його близьким до кожного віруючого.
                </p>
                <p className={styles.paragraph}>
                    Святий апостол Павло, колишній гонитель християн, пережив драматичне навернення на дорозі до Дамаску. Він став одним із найвпливовіших проповідників християнства, здійснивши кілька місіонерських подорожей та написавши багато послань, які стали частиною Нового Завіту. Павло відомий своєю глибокою теологією та пристрастю до проповіді Євангелія.
                </p>
                <p className={styles.paragraph}>
                    Обидва апостоли були мучениками за віру, і їхня спільна пам&apos;ять відзначається 29 червня. 
                </p>
            </article>
        </div>
    );  
}