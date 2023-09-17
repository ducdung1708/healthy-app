import React from "react"
import classes from "../assets/css/myRecord/MyExercise.module.css"
import Card from "./card_myRecord/Card"
import Exercise from "./Exercise"
const title_date = { title: "MY EXERCISE", date: "2021.05.22" }
const list_exercise = [
    {
        text: "家事全般（立位・軽い）",
        kcal: "26kcal",
        min: "10 min",
    },
    {
        text: "家事全般（立位・軽い）",
        kcal: "29kcal",
        min: "13 min",
    },
    {
        text: "家事全般（立位・軽い）",
        kcal: "10kcal",
        min: "8 min",
    },
    {
        text: "家事全般（立位・軽い）",
        kcal: "63kcal",
        min: "50 min",
    },
    {
        text: "家事全般（立位・軽い）",
        kcal: "44kcal",
        min: "23 min",
    },
    {
        text: "家事全般（立位・軽い）",
        kcal: "30kcal",
        min: "15 min",
    },
    {
        text: "家事全般（立位・軽い）",
        kcal: "102kcal",
        min: "90 min",
    },
    {
        text: "家事全般（立位・軽い）",
        kcal: "52kcal",
        min: "35 min",
    },
    {
        text: "家事全般（立位・軽い）",
        kcal: "26kcal",
        min: "10 min",
    },
    {
        text: "家事全般（立位・軽い）",
        kcal: "26kcal",
        min: "10 min",
    },
    {
        text: "家事全般（立位・軽い）",
        kcal: "26kcal",
        min: "10 min",
    },
    {
        text: "家事全般（立位・軽い）",
        kcal: "26kcal",
        min: "10 min",
    },
    {
        text: "家事全般（立位・軽い）",
        kcal: "26kcal",
        min: "10 min",
    },
    {
        text: "家事全般（立位・軽い）",
        kcal: "26kcal",
        min: "10 min",
    },
    {
        text: "家事全般（立位・軽い）",
        kcal: "26kcal",
        min: "10 min",
    },
    {
        text: "家事全般（立位・軽い）",
        kcal: "26kcal",
        min: "10 min",
    },
    {
        text: "家事全般（立位・軽い）",
        kcal: "26kcal",
        min: "10 min",
    },
    {
        text: "家事全般（立位・軽い）",
        kcal: "26kcal",
        min: "10 min",
    },
]
const MyExercise = () => {
    return (
        <div id="myExercise">
            <Card items={title_date}>
                {/* danh sách chứa các exercise */}
                <div className={classes.exercise_list}>
                    {/* duyệt dữ liệu trong danh sách list_exercise */}
                    {list_exercise.map((exercise, index) => (
                        // truyền dữ liệu vào component Excercise qua items
                        <Exercise items={exercise} key={index} />
                    ))}
                </div>
            </Card>
        </div>
    )
}
export default MyExercise
