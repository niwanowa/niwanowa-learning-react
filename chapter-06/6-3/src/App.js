import React, { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";

export default function App() {
    const [colors, setColors] = useState(colorData);
    return (
        <>
            <AddColorForm onNewColor={(title, color) => {
                const newColors = [
                    ...colors,
                    {
                        id: Math.random().toString(16).slice(2),
                        rating: 0,
                        title,
                        color
                    }
                ];
                setColors(newColors);
            }}
            />
            <ColorList
                colors={colors}
                onRemoveColor={id => {
                    const newColors = colors.filter(color => color.id !== id);
                    setColors(newColors)
                }}
                onRateColor={(id, rating) => {
                    const newColors = colors.map(color => color.id === id ? { ...color, rating } : color);
                    setColors(newColors)
                }} />
        </>
    );
}