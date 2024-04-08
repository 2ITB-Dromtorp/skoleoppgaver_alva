import axios from "axios";
import { useState, useEffect } from "react";
import './../css/home.css';
import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

function Home() {
    const data = [
        { name: 'A', x: 12, y: 23 },
        { name: 'B', x: 22, y: 12 },
        { name: 'C', x: 13, y: 15 },
        { name: 'D', x: 44, y: 35 },
        { name: 'E', x: 35, y: 45 },
        { name: 'F', x: 62, y: 25 },
        { name: 'G', x: 37, y: 17 },
        { name: 'H', x: 28, y: 32 },
        { name: 'I', x: 19, y: 43 },
        { name: 'J', x: 22, y: 12 },
        { name: 'K', x: 13, y: 15 },
        { name: 'L', x: 44, y: 35 },
        { name: 'M', x: 35, y: 45 },
        { name: 'N', x: 62, y: 25 },
        { name: 'O', x: 37, y: 17 },
        { name: 'P', x: 28, y: 32 },
        { name: 'Q', x: 19, y: 43 },
        { name: 'R', x: 22, y: 12 },
        { name: 'S', x: 13, y: 15 },
        { name: 'T', x: 44, y: 35 },
        { name: 'U', x: 12, y: 23 },
        { name: 'V', x: 22, y: 12 },
        { name: 'W', x: 13, y: 15 },
        { name: 'X', x: 44, y: 35 },
        { name: 'Y', x: 35, y: 45 },
        { name: 'Z', x: 62, y: 25 },
        { name: 'Æ', x: 37, y: 17 },
        { name: 'Ø', x: 28, y: 32 },
        { name: 'Å', x: 19, y: 43 },
        { name: 'A', x: 22, y: 12 },
        { name: 'B', x: 13, y: 15 },
        { name: 'C', x: 44, y: 35 },
        { name: 'D', x: 35, y: 45 },
        { name: 'E', x: 62, y: 25 },
        { name: 'F', x: 37, y: 17 },
        { name: 'G', x: 28, y: 32 },
        { name: 'H', x: 19, y: 43 },
        { name: 'I', x: 22, y: 12 },
        { name: 'J', x: 13, y: 15 },
        { name: 'K', x: 44, y: 35 }
    ];

    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];

      const data02 = [
        { label: 'Yoshi', value: 126 },
        { label: 'Rosalina', value: 103 },
        { label: 'Link', value: 93 },
        { label: 'ShyGuy', value: 88 },
        { label: 'PrincessPeach', value: 74 },
        { label: 'DryBones', value: 70 },
        { label: 'Waluigi', value: 64 },
        { label: 'KingBoo', value: 62 },
        { label: 'Luigi', value: 56 },
        { label: 'Daisy', value: 47 },
        { label: 'Toad', value: 44 },
        { label: 'Bowser', value: 42 },
        { label: 'Inkling', value: 37 },
        { label: 'PinkGoldPeach', value: 24 },
        { label: 'Isabelle', value: 21 },
        { label: 'CatPeach', value: 19 },
        { label: 'Villager', value: 19 },
        { label: 'BowserJR', value: 17 },
        { label: 'Toadette', value: 15 },
        { label: 'BabyPeach', value: 14 },
        { label: 'Roy', value: 14 },
        { label: 'Mii', value: 13 },
        { label: 'KoopaTroopa', value: 13 },
        { label: 'DryBowser', value: 13 },
        { label: 'Iggy', value: 11 },
        { label: 'Wario', value: 10 },
        { label: 'DonkeyKong', value: 10 },
        { label: 'Lemmy', value: 9 },
        { label: 'TanookiMario', value: 8 },
        { label: 'BabyDaisy', value: 6 },
        { label: 'BabyLuigi', value: 6 },
        { label: 'BabyRosalina', value: 6 },
        { label: 'Pauline', value: 6 },
        { label: 'FunkyKong', value: 5 },
        { label: 'Ludwig', value: 5 },
        { label: 'BabyMario', value: 4 },
        { label: 'Mario', value: 4 },
        { label: 'MetalMario', value: 4 },
        { label: 'Birdo', value: 3 },
        { label: 'Wiggler', value: 3 },
        { label: 'Lakitu', value: 2 },
        { label: 'PeteyPiranha', value: 2 },
        { label: 'Wendy', value: 2 },
        { label: 'DiddyKong', value: 1 },
        { label: 'Kamek', value: 1 },
        { label: 'Larry', value: 1 },
        { label: 'Morton', value: 1 },
        { label: 'Peachette', value: 1 },
      ];

    return (
        <div className="aaaaaaa">
            <div className='PieChart'>
            <PieChart
                series={[
                    {
                    innerRadius: 0,
                    outerRadius: 100,
                    data: data01,
                    },
                    {
                    innerRadius: 120,
                    outerRadius: 140,
                    data: data02,
                    },
                ]}
                width={400}
                height={300}
                slotProps={{
                    legend: { hidden: true },
                }}
            />
            </div>
            <div className="bar-chart">
                <BarChart width={1200} height={500} data={data} >
                    <CartesianGrid />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="x" stackId="a" fill="#8884d8" />
                    <Bar dataKey="y" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    )
}

export default Home;