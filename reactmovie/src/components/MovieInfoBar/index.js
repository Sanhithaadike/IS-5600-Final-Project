import React from "react";
//helper
import {calcTime, convertMoney} from "../../helpers"
import { Wrapper,Content } from "./MovieInfoBar.style";

const MovieInfoBar = ({time,budget,revenue}) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time:{calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget:{convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue:{convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
)
export default MovieInfoBar;