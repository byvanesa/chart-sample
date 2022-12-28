import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class App extends Component {
    constructor(Props) {
        super(Props);

        this.state = {
            data: {
                label:["1", "2", "3", "4", "5"],
                datasets: [
                {
                    label: "Temperature",
                    backgroundColor: "rgba(255, 0, 255, 0.75)",
                    data: [30, 35, 40, 41, 37, 37, 35 ]
                },
                {
                    label: "Time",
                    backgroundColor: "rgba(0, 255, 0, 0.75)",
                    data: [9, 10, 11, 12, 1, 2, 3]
                }
            ]
        }
    }
} 
    render() {
        return (
            <div style={{position: "relative", width: 600, height: 550 }}>
                <h3>Chart Smaple</h3>
                <Line
                    options={{
                        responsive: true
                    }}
                    data={this.state.date}
                />
            </div>
        )
    }
}