import React from 'react';

export default function ListItem({ data }) {
    const { categories = [], name, description, subscriptions = [] } = data;
    return (
        <li>
            <div className="app-item">
                <div className="box-info">
                    <div className="box-info--content">
                        <div className="description">
                            <h1>{name}</h1>
                            <p>{description}</p>
                        </div>
                        <div className="tags">
                            {
                                Array.isArray(categories) ?
                                    categories.map((item, idx) => {
                                        return (
                                            <React.Fragment key={idx}>
                                                <span>{item}</span> {categories.length - 1 > idx ? " / " : ""}
                                            </React.Fragment>
                                        )
                                    })
                                : ""
                            }
                        </div>
                    </div>
                    <div className="box-info--footer">
                        <ul>
                            {
                                Array.isArray(subscriptions) ?
                                    subscriptions.map(({name, price}, idx) => {
                                        return (
                                            <li key={idx}>
                                                <span>{name}</span>
                                                {
                                                    price ? <h3>{price}<sup>€</sup></h3> : <h3>Free<sup></sup></h3>
                                                }
                                            </li>
                                        )
                                    })
                                : ""
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    )
};